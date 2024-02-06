import React from 'react'
import './nav.css'
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { IoBriefcaseOutline } from "react-icons/io5";
import { TbMessageChatbot } from "react-icons/tb";
import { useState } from 'react';


const Nav = () => {
  const [activeNav, setactiveNav] = useState('# ')
  return (
    <nav>
      <a href='#' onClick={() => setactiveNav('#')}
                      className= {activeNav ===  '#' ? 'active' : ''}> <AiOutlineHome/> </a>
      <a href='#about' onClick={() => setactiveNav('#about')}
                      className= {activeNav ===  '#about' ? 'active' : ''} > <AiOutlineUser/> </a>
      <a href='#experience' onClick={() => setactiveNav('#experience')}
                      className= {activeNav ===  '#experience' ? 'active' : ''}> <IoBriefcaseOutline/> </a>
      <a href='#projects' onClick={() => setactiveNav('#projects')}
                      className= {activeNav ===  '#projects' ? 'active' : ''}> <BiBook/> </a>
    </nav>
  )
}

export default Nav