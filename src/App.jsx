import React, {useEffect} from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";


import Cursor from 'custom-cursor';

new Cursor({
  count: 2,
  targets: ['a'],

})

function App() {

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
      <Header />
      <Hero />
    </>
  );
}

export default App;
