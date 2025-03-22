
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Chatbot from '@/components/Chatbot';
import LegalTemplates from '@/components/LegalTemplates';
import Community from '@/components/Community';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scroll to section when clicking on navigation links
    const handleHashLinkClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.hash && link.hash.startsWith('#')) {
        event.preventDefault();
        
        const sectionId = link.hash;
        const section = document.querySelector(sectionId);
        
        if (section) {
          window.scrollTo({
            top: section.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
          
          // Update URL without scrolling
          history.pushState(null, '', sectionId);
        }
      }
    };

    document.addEventListener('click', handleHashLinkClick);
    
    return () => {
      document.removeEventListener('click', handleHashLinkClick);
    };
  }, []);
  
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <main>
        <Hero />
        <Features />
        <Chatbot />
        <LegalTemplates />
        <Community />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
