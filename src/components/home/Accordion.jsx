import React, { useState } from 'react';
import "./accordion.css";
// const paragraph = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet natus sint provident vel ab reprehenderit cum soluta, suscipit facere nisi sed earum repellendus fuga debitis, nam molestiae minima voluptates possimus.';

import { FaAngleRight } from "react-icons/fa6";
const data = [
    {
        img: "assets/images/web-d.png",
        title: 'Web & Mobile Design',
        paragraph: 'Crafting Digital Experiences, Unleashing Innovation – Where Web and Mobile Design Converge.'
    },
    {
        img: "assets/images/brand-i.png",
        title: 'Brand Identity',
        paragraph: 'Crafting Digital Experiences, Unleashing Innovation – Where Web and Mobile Design Converge.'
    },
    {
        img: "assets/images/app-d.png",
        title: 'App Development',
        paragraph: 'Innovate. Code. Transform: Your Ideas, Our Apps.'
    },
    {
        img: "assets/images/media.png",
        title: 'Media',
        paragraph: 'Elevating Perspectives, Amplifying Voices – Your Story, Our Canvas.'
    },
    {
        img: "assets/images/digital-m.png",
        title: 'Digital Marketing',
        paragraph: 'Elevate Your Brand, Ignite Your Reach – Mastering Success in the Digital Realm.'
    }
];

const AccordionItem = ({ img, title, paragraph }) => {
    const [opened, setOpened] = useState(false);

    return (
        <div
            className={`accordion-item ${opened ? 'accordion-item--opened' : ''}`}
            onClick={() => setOpened(!opened)}
        >
            <div className='accordion-item__line'>
                <div className='acc_Ttl-cnt'>
                    <div className='acc_img'>
                        <img src={img}></img>
                    </div>
                    <div className='acc_ttl'>
                        <h3 className='accordion-item__title'>
                            {title}
                        </h3>
                    </div>
                </div>
                <div className='acc_icn'>
                    {/* <FaAngleRight className='accordion-item__icon'></FaAngleRight> */}
                    
                </div>


                {/* <span className='accordion-item__icon' /> */}
            </div>
            <div className='accordion-item__inner'>
                <div className='accordion-item__content'>
                    <p className='accordion-item__paragraph'>
                        {paragraph}
                    </p>
                </div>
            </div>
        </div>
    );
};

const Accordion = () => {
    return (
        <div className='acc__Wrapper'>
            <ul className='accordion-list'>
                {data.map((item, key) => (
                    <li className='accordion-list__item' key={key}>
                        <AccordionItem {...item} />
                    </li>
                ))}
            </ul>
        </div>
    );
};



export default Accordion;
