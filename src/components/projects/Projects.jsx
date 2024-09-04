import React, { useState } from 'react';
import './projects.css';
import { GiStarShuriken } from 'react-icons/gi';
import { BsGithub } from "react-icons/bs";
import { FaLink } from "react-icons/fa";



// Import project images
import MWallet1 from '../../assets/Projects/Metaintro/MWallet1.png';
import MWallet2 from '../../assets/Projects/Metaintro/MWallet2.png';
import MWallet3 from '../../assets/Projects/Metaintro/MWallet3.png';
import MWallet4 from '../../assets/Projects/Metaintro/MWallet4.png';
import MNewsletter1 from '../../assets/Projects/Metaintro/MNewsletter1.png';
import MNewsletter2 from '../../assets/Projects/Metaintro/MNewsletter2.png';
import MNewsletter3 from '../../assets/Projects/Metaintro/MNewsletter3.png';
import MNewsletter4 from '../../assets/Projects/Metaintro/MNewsletter4.png';
import MYoutube from '../../assets/Projects/Metaintro/MYoutube.png';
import Pokedex1 from '../../assets/Projects/Pokedex/Pokedex.png';
import Pokedex2 from '../../assets/Projects/Pokedex/Pokedex2.png';
import Pokedex4 from '../../assets/Projects/Pokedex/Pokedex4.png';
import Pokedex5 from '../../assets/Projects/Pokedex/Pokedex5.png';
import SpaceLab1 from '../../assets/Projects/SpaceLab/SpaceLab.png';
import SpaceLab2 from '../../assets/Projects/SpaceLab/SpaceLab2.png';
import Sprintfolio1 from '../../assets/Projects/Sprintfolio/Sprintfolio1.png';
import Sprintfolio2 from '../../assets/Projects/Sprintfolio/Sprintfolio2.png';
import Sprintfolio3 from '../../assets/Projects/Sprintfolio/Sprintfolio3.png';


const Projects = () => {
  const [currentTab, setCurrentTab] = useState('developing');

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  // Array of developing projects
  const developingProjects = [
    {
      id: 1,
      title: 'Sprintfolio Case Study Website',
      descriptions: [
        'Re-develop the front-end for Sprintfolio, aiding UX/UI Designers with their case studies using their own AI mentor, Lio.',
        'Collaborated with back-end developers, and UX/UI designers to build out and design new front-end functionality.'
      ],
      techStack: 'Utilized: React.js, CSS',
      projectLink: 'https://newcareer.sprintfolio.com',
      images: [Sprintfolio1, Sprintfolio2, Sprintfolio3]
    },
    {
      id: 2,
      title: 'Chrome Extension Resume Pocket',
      descriptions: [
        'Developed a Web3 Chrome extension for instant job applications, seamlessly connecting customizable and securely storing user documents and information.',
        'Collaborated with a UX/UI designer to integrate designs and functionality into the extension, while also implementing a badge system that matches acquired skill badges to relevant job listings.'
      ],
      techStack: 'Utilized: React.js, CSS',
      projectLink: 'https://github.com/anhvietq/resumewallet.m',
      images: [MWallet1, MWallet2, MWallet3, MWallet4]
    },
    {
      id: 3,
      title: 'Spacelab Landing Page',
      descriptions: ['Built Spacelab Landing Page to increase subscription rates.'],
      techStack: 'Utilized: React.js, SCSS',
      projectLink: 'https://github.com/spacelabdev/spacelab-react',
      images: [SpaceLab1, SpaceLab2]
    },
    {
      id: 4,
      title: 'The Pokédex',
      descriptions: [
        'The Pokédex is a digital encyclopedia that stores and records information about known Pokemon species.',
        'Utilized PokéAPI alongside with other APIs to lay out basic information about Pokemon generations. Each generation has its own section with its starter Pokemons for easier access and app navigation.'
      ],
      techStack: 'Utilized: ExpoGo, React Native and JavaScript.',
      projectLink: 'https://github.com/anhvietq/Pokedex',
      images: [Pokedex1, Pokedex2, Pokedex4, Pokedex5]
    }
  ];

  // Array of designing projects
  const designingProjects = [
    {
      id: 1,
      title: 'Metaintro Newsletter Onboarding',
      descriptions: ['Redesigned Metaintro Newsletter Onboarding experience.'],
      techStack: 'Utilized: Figma, MaterialUI',
      projectLink: 'https://www.metaintro.net/',
      images: [MNewsletter1, MNewsletter2, MNewsletter3, MNewsletter4]
    },
    {
      id: 2,
      title: 'Metaintro Youtube Thumbnails',
      descriptions: ['Redesigned Metaintro Youtube Thumbnails.'],
      techStack: 'Utilized: Figma, Canva',
      projectLink: 'https://www.youtube.com/@metaintro',
      images: [MYoutube]
    }
  ];

  return (
    <section id='projects'>
      <div className='section_title'>
        <h2> Projects </h2>
      </div>
      <div className='project_type'>
        <a
          className={`btn ${currentTab === 'developing' ? 'active' : ''}`}
          onClick={() => handleTabChange('developing')}
        >
          Developing
        </a>
        <a
          className={`btn ${currentTab === 'designing' ? 'active' : ''}`}
          onClick={() => handleTabChange('designing')}
        >
          Designing
        </a>
      </div>
      <div className='container project__container'>
        {/* Developing Projects */}
        {currentTab === 'developing' && developingProjects.map(project => (
          <div key={project.id}>
            <h4 className='project_title'>{project.title}</h4>
            <div className={`project_images ${project.id === 1 || project.id === 3 ? 'website' : ''}`}>
              {project.images.map((image, index) => (
                <img key={index} src={image} alt={`Project ${project.id} Image ${index + 1}`} />
              ))}
            </div>
            <div className='project_description'>
              {project.descriptions.map((desc, index) => (
                <p key={index}>
                  <GiStarShuriken className='icons' />
                  {desc}
                </p>
              ))}
              <p>
                <GiStarShuriken className='icons' />
                {project.techStack}
              </p>
              <span className='project_link'>
                {project.id === 1 ? (
                  <a className='btn' href={project.projectLink} target='_blank' rel='noopener noreferrer'>
                    <FaLink className='icons' /> Link
                  </a>
                ) : (
                  <a className='btn' href={project.projectLink} target='_blank' rel='noopener noreferrer'>
                    <BsGithub className='icons' /> Github
                  </a>
                )}
              </span>
            </div>
          </div>
        ))}

        {/* Designing Projects */}
        {currentTab === 'designing' && designingProjects.map(project => (
          <div key={project.id} className='project_card'>
            <h4 className='project_title'>{project.title}</h4>
            <div className={`project_images ${project.id === 2 ? 'bigger_images' : ''}`}>
              {project.images.map((image, index) => (
                <img key={index} src={image} alt={`Project ${project.id} Image ${index + 1}`} />
              ))}
            </div>
            <div className='project_description'>
              {project.descriptions.map((desc, index) => (
                <p key={index}>
                  <GiStarShuriken className='icons' />
                  {desc}
                </p>
              ))}
              <p>
                <GiStarShuriken className='icons' />
                {project.techStack}
              </p>
            </div>
            <span className='project_link'>
              <a className='btn' href={project.projectLink} target='_blank' rel='noopener noreferrer'>
                <FaLink className='icons' /> Link
              </a>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
