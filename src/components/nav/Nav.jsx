import React, { useEffect, useState } from 'react';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { IoBriefcaseOutline } from 'react-icons/io5';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      const experienceSection = document.getElementById('experience');
      const projectsSection = document.getElementById('projects');

      const scrollPosition = window.scrollY;

      if (scrollPosition < aboutSection.offsetTop - 50) {
        setActiveNav('#');
      } else if (
        scrollPosition >= aboutSection.offsetTop - 50 &&
        scrollPosition < experienceSection.offsetTop - 50
      ) {
        setActiveNav('#about');
      } else if (
        scrollPosition >= experienceSection.offsetTop - 50 &&
        scrollPosition < projectsSection.offsetTop - 50
      ) {
        setActiveNav('#experience');
      } else {
        setActiveNav('#projects');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav>
      <a href="#" className={activeNav === '#' ? 'active' : ''}>
        <AiOutlineHome />
      </a>
      <a href="#about" className={activeNav === '#about' ? 'active' : ''}>
        <AiOutlineUser />
      </a>
      <a href="#experience" className={activeNav === '#experience' ? 'active' : ''}>
        <IoBriefcaseOutline />
      </a>
      <a href="#projects" className={activeNav === '#projects' ? 'active' : ''}>
        <BiBook />
      </a>
    </nav>
  );
};

export default Nav;
