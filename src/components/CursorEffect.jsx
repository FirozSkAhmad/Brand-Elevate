import React, { useEffect } from 'react';
// import { useCursor } from '../context/CursorContext';
// import './CursorEffect.css';

import Cursor from 'custom-cursor';

new Cursor({
    count: 2,
    targets: ['a'],
})

const CursorEffect = () => {
    // const { isCursorHovered, setCursorHovered } = useCursor();

    useEffect(() => {

        const initializeCursor = () => {
            const links = document.querySelectorAll('a');
            const cursor = document.querySelector('[data-cursor="1"]');
            // cursor.classList.remove('cursor-hover--a');
            links.forEach(link => {
                link.addEventListener('mouseenter', () => {
                    cursor.classList.add('cursor-hover--a');
                });

                link.addEventListener('mouseleave', () => {
                    cursor.classList.remove('cursor-hover--a');
                });
            });
        };

        initializeCursor();

        // Clean up event listeners when the component unmounts
        return () => {
            const links = document.querySelectorAll('a');

            links.forEach(link => {
                link.removeEventListener('mouseenter', () => { });
                link.removeEventListener('mouseleave', () => { });
            });
        };
    }, []);

    return (
        <>
        </>
    );
};

export default CursorEffect;
