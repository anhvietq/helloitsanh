import React from 'react'
import Resume from '../../assets/Anh_Pham_Resume.pdf'



const CTA = () => {
  return (
    <div className='cta'>
      <a href={Resume} download className='btn'>
        Download Resume
      </a>
      <a href="mailto:anhvietq@buffalo.edu" className='btn btn-primary'>
        Contact Me
      </a>
    </div>
  );
}

export default CTA;
