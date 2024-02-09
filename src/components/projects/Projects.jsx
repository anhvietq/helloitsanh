import React from 'react'
import './projects.css'
import METAINTRO1 from '../../assets/Projects/MWallet1.png'
import METAINTRO2 from '../../assets/Projects/MWallet2.png'
import METAINTRO3 from '../../assets/Projects/MWallet3.png'
import METAINTRO4 from '../../assets/Projects/MWallet4.png'
import POKEDEX from '../../assets/Projects/Pokedex.png'
import POKEDEX2 from '../../assets/Projects/Pokedex2.png'
import POKEDEX4 from '../../assets/Projects/Pokedex4.png'
import POKEDEX5 from '../../assets/Projects/Pokedex5.png'
import METAINTRO11 from '../../assets/Projects/MNewsletter1.png'
import METAINTRO22 from '../../assets/Projects/MNewsletter2.png'
import METAINTRO33 from '../../assets/Projects/MNewsletter3.png'
import METAINTRO44 from '../../assets/Projects/MNewsletter4.png'
import SPACELAB from '../../assets/Projects/SpaceLab.png'
import SPACELAB2 from '../../assets/Projects/SpaceLab2.png'
import { GiStarShuriken} from 'react-icons/gi';




const Projects = () => {
  return (
    <section id='projects'>
      <div className='section_title'>
        <h2> Projects </h2>
        </div>
        <div className='container project__container'>
          {/* Project 1 */}
          <h4 className='project_title'> 
          Metaintro Resume Wallet 
          </h4>
          <div className='metaintro'>
        <img src={METAINTRO1} alt ='metaintro' />
        <img src={METAINTRO2} alt ='metaintro' />
        <img src={METAINTRO3} alt ='metaintro' />
        <img src={METAINTRO4} alt ='metaintro' />
        </div>
      <div className='project_description'>
      <li>
        <GiStarShuriken className='icons'/>
        Developed a Web3 Chrome extension for instant job applications, seamlessly connecting customizable digital
wallets and securely storing user documents and information.
      </li>
      <li>
        <GiStarShuriken className='icons'/>
        Collaborated with a UX/UI designer to integrate designs and functionality into the extension, while also
implementing a badge system that matches acquired skill badges to relevant job listings.
      </li>
      <li>
        <GiStarShuriken className='icons'/>
        Utilized: React.js, CSS
      </li>
      </div>
    
      {/* Project 2 */}
      <h4 className='project_title'> 
      Metaintro Onboarding 
      </h4>
      <div className='metaintro'>
        <img src={METAINTRO11} alt ='metaintro' />
        <img src={METAINTRO22} alt ='metaintro' />
        <img src={METAINTRO33} alt ='metaintro' />
        <img src={METAINTRO44} alt ='metaintro' />
        </div>
      <div className='project_description'>
      <li>
        <GiStarShuriken className='icons'/>
        Redesigned Metaintro Newsletter Onboarding experience.
      </li>
      <li>
        <GiStarShuriken className='icons'/>
        Utilized: Figma, MaterialUI
      </li>
      </div>
      
      {/* Project 3 */}
      <h4 className='project_title'> Spacelab Landing Page </h4>
      <div className='spacelab'>
        <img src={SPACELAB} alt ='spacelab' />
        <img src={SPACELAB2} alt ='spacelab' />
        </div>
      <div className='project_description'>
      <li>
        <GiStarShuriken className='icons'/>
        Built Spacelab Landing Page to increase subscription rates.
      </li>
      <li>
        <GiStarShuriken className='icons'/>
        Utilized: React.js, SCSS
      </li>
      </div>

       {/* Project 4 */}
       <h4 className='project_title'> The PokeDex </h4>
       <div className='pokedex'>
        <img src={POKEDEX} alt ='pokedex' />
        <img src={POKEDEX2} alt ='pokedex' />
        <img src={POKEDEX4} alt ='pokedex' />
        <img src={POKEDEX5} alt ='pokedex' />
      </div>
      <div className='project_description'>
      <li>
        <GiStarShuriken className='icons'/>
      The Pokédex is a digital encyclopedia that stores and records information about known Pokemon species.
      </li>
      <li>
        <GiStarShuriken className='icons'/>
        Utilized PokéAPI alongside with other APIs to lay out basic information about Pokemon generations. Each
        generation has its own section with its starter Pokemons for easier access and app navigation.
      </li>
      <li>
        <GiStarShuriken className='icons'/>
        Utilized: ExpoGo, React Native and JavaScript.
      </li>
      </div>
      

      </div>
    </section>
  )
}

export default Projects