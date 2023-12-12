import React, { useEffect, useRef } from 'react';
import SplitType from 'split-type'
import Lenis from '@studio-freight/lenis';
import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const TextReveal = ({ text }) => {
    useEffect(() => {
        const splitTypes = document.querySelectorAll('.reveal-type');

        splitTypes.forEach((char, i) => {
            const bg = char.dataset.bgColor;
            const fg = char.dataset.fgColor;

            const text = new SplitType(char, { types: 'chars' });

            gsap.fromTo(
                text.chars,
                {
                    color: bg,
                },
                {
                    color: fg,
                    duration: 0.3,
                    stagger: 0.02,
                    scrollTrigger: {
                        trigger: char,
                        start: 'top 80%',
                        end: 'top 20%',
                        scrub: true,
                        markers: false,
                        toggleActions: 'play play reverse reverse',
                    },
                }
            );
        });
        const lenis = new Lenis();

        lenis.on('scroll', (e) => {
            // console.log(e);
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    return (
        <p
            // ref={splitTypesRef}
            className="reveal-type" data-bg-color="#A0A0A0" data-fg-color="#fff"
        >
            {text}
        </p>
    )
}

export default TextReveal