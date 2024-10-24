import React, { useState, useEffect } from 'react';
import './header.css';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  const [greeting, setGreeting] = useState('');
  const greetings = ['Xin Chào', 'Hello'];
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (charIndex < greetings[greetingIndex].length) {
        setGreeting((prev) => prev + greetings[greetingIndex].charAt(charIndex));
        setCharIndex((prev) => prev + 1);
        setShowCursor(true);
      } else {
        clearInterval(typingEffect);
        setTimeout(() => {
          setGreeting('');
          setCharIndex(0);
          setGreetingIndex((prev) => (prev === 0 ? 1 : 0));
          setShowCursor(false);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingEffect);
  }, [charIndex, greetingIndex]);

  return (
    <header>
      <div className='container header__container'>
        <h2>
          {greeting}
          {showCursor && <span className="cursor">|</span>},
        </h2>
        <h2>It's Anh </h2>
        <h5 className='text-light'> Frontend Developer and UX/UI Designer </h5>
        <p> As a self-taught Frontend Developer with a strong foundation in UX/UI design, 
          I bring a unique blend of technical expertise and creative insight to every project. 
          My journey from a Chemical Engineering background to the dynamic world of web development 
          has fueled my passion for crafting seamless, user-centric digital experiences. 
          Collaborating with diverse teams, I strive to merge aesthetic design with robust functionality, 
          turning visionary concepts into engaging realities.
        </p>
        <CTA />
        <HeaderSocials />
        <a href='#contact' className='scroll__down '> Scroll Down </a>
      </div>
    </header>
  );
};

export default Header;
