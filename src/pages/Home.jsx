import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import PartnersSection from '../components/sections/PartnersSection';
import AboutSection from '../components/sections/AboutSection';
import ThesisSection from '../components/sections/ThesisSection';

const Home = () => {
  return (
    <main className="pt-16 md:pt-20">
      <HeroSection />
      <PartnersSection />
      <AboutSection />
      <ThesisSection />
    </main>
  );
};

export default Home;
