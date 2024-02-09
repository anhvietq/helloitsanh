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
        <h5 className='text-light'>Front-end Developer and UX/UI Designer </h5>
        <p> I am a self-taught Frontend Developer with Chemical Engineering background from Vietnam.
          I have always been intrigued by all things techie and their complexities.
          Currently actively participating in projects, where I collaborate with different teams, including UX/UI designers, to bring their creations to life.
        </p>
        <CTA />
        <HeaderSocials />
        <a href='#contact' className='scroll__down '> Scroll Down </a>
      </div>
    </header>
  );
};

export default Header;
