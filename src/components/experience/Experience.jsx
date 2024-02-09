import React from 'react';
import './experience.css';
import { GiStarShuriken} from 'react-icons/gi';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Experience = () => {
  const carouselItems = [
    {
      id: 1,
      jobTitle: 'Front-end Developer @',
      company: 'SpaceLab',
      companyURL:'https://spacelab.space',
      jobDuration: 'April 2023 - Present',
      description: [
        'Built responsive landing pages and implementing changes to website while collaborating with cross-functional team of UX/UI designers.',
        'Coordinated with multiple pairs/pods to meet UI test coverage, exceeding client expectations by finishing deliverables on time.'
      ],
      imageURL: require ("../../assets/Companies/SpaceLab.png")
    },
    {
      id: 2,
      jobTitle: 'UX/UI Designer @',
      company: 'Metaintro',
      companyURL:'https://www.metaintro.com/',
      jobDuration: 'Aug 2023 - Nov 2023',
      description: [
        'Redesigned newsletter onboarding for mobile and desktop, boosting subscriber retention from 18% to 45%. Led design efforts using PostHog analytics to enhance user engagement.',
        'Optimized newsletter subscription emails to align with the enhanced onboarding flow, for improved communication and increased interaction.',
        'Revamped YouTube channel, social media banners, and thumbnails, creating seasonal logos for a more cohesive and inviting online presence.'
      ],
      imageURL: require ("../../assets/Companies/Metaintro.png"),
    },
    {
      id: 3,
      jobTitle: 'Front-end Developer @',
      company: 'TechFleet',
      companyURL: 'https://techfleet.org',
      jobDuration: 'May 2023 - Oct 2023',
      description: [
        'Working closely with team consisting of UX/UI designers, developers, to create a responsive website for healthcare providers and its patients.',
        'Implementing UI designs, conducting UI validation, and collaborating with backend developers to seamlessly integrate codes, ensuring a user-friendly, functional website.'
      ],
      imageURL: require ("../../assets/Companies/Techfleet.png")
    },
    {
      id: 4,
      jobTitle: 'App Developer @',
      company: 'Resilience',
      companyURL: 'http://www.mylearningtools.org',
      jobDuration: 'June 2022 - Dec 2022',
      description: [
        'Participated in different aspects of IOS development life cycle and ensured all deliverables were met within the set timeframe by following company custom scrum management tool.',
        'Identified and fixed build errors, while cleaning up the onboarding process of the app for future developers. Test deliverables with variety of users such as K12 students and teachers.'
      ],
      imageURL: require ("../../assets/Companies/Resilience.png")
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id='experience'>
      <div className='section_title'>
      <h2> Experiences </h2>
      </div>
      <div className='container experience__container'>
        <Slider {...settings}>
          {carouselItems.map(item => (
            <div key={item.id} className='job_list'>
              <div className={`job_logo ${item.id === 1 ? 'bigger' : ''}`}>
                 <img src={item.imageURL} alt={`experience-${item.id}`} />
              </div>
              <h4>
                  {item.jobTitle}{' '}
                  <a href={item.companyURL} target='_blank' rel='noopener noreferrer'>
                    {item.company}
                  </a>
                </h4>
                <div className='job_duration'> {item.jobDuration} </div>
                <ul className='job_description'>
                  {item.description.map((desc, index) => (
                    <li key={index}>
                      <GiStarShuriken className='icons' />
                      {desc}
                    </li>
                  ))}
                </ul>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Experience;