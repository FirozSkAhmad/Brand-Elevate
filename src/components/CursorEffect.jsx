import React, { useEffect } from 'react';
import { useCursor } from '../context/CursorContext';
// import './CursorEffect.css';

import Cursor from 'custom-cursor';

new Cursor({
    count: 1,
    targets: ['a'],

})

const CursorEffect = () => {
    const { isCursorHovered, setCursorHovered } = useCursor();

    useEffect(() => {
        const initializeCursor = () => {
            const links = document.querySelectorAll('a');
            const cursor = document.querySelector('[data-cursor="1"]');

            links.forEach(link => {
                link.addEventListener('mouseenter', () => {
                    setCursorHovered(true);
                });

                link.addEventListener('mouseleave', () => {
                    setCursorHovered(false);
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
    }, [setCursorHovered]);

    return (

        <>

            {isCursorHovered && (
                // <div className="cursor-hover--a" data-cursor="1">
                    
                // </div>
                <></>
            )}
        </>
    );
};

export default CursorEffect;
