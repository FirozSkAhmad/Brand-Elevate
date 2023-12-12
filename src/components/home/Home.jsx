import React from 'react';
import Header from '../Header/Header';
import Hero from './Hero';
import Services from './Services';
import RecentWork from './RecentWork';
import OurTeam from './OurTeam';
import Idea from '../Idea/Idea';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Services></Services>
      <RecentWork></RecentWork>
      <OurTeam></OurTeam>
      <Idea></Idea>
      <Footer></Footer>
    </>
  )
}

export default Home;