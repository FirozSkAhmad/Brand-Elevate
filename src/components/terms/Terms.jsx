import React,{useEffect} from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Terms = () => {
    useEffect(() => {
        const initializeCursor = () => {
          const links = document.querySelectorAll('a');
          const cursor = document.querySelector('[data-cursor="1"]');
    
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
            <Header></Header>
            <div>Terms</div>
            <Footer></Footer>
        </>
    )
}

export default Terms