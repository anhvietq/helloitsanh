import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h2> Hello, </h2>
        <h2>It's Anh </h2>
        <h5 className='text-light'> Front-end Developer and UX/UI Designer </h5>
        <p> I am a self-taught Frontend Developer with Chemical Engineering background from Vietnam. 
            I have always been intrigued by all things techie and their complexities. 
            Currently actively participating in projects, where I collaborate with different teams, including UX/UI designers, to bring their creations to life.
        </p>
      <CTA/>
      <HeaderSocials/>
        <a href='#contact' className='scroll__down '> Scroll Down </a>
      </div>
    </header>
  )
}

export default Header