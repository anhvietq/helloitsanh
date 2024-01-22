import React from 'react'
import Resume from '../../assets/Anh_Pham_Resume.pdf'
import { HiDownload } from "react-icons/hi";
import { MdOutlineMail } from "react-icons/md";

const CTA = () => {
  return (
    <div className='cta'>
 <a href= {Resume} download className='btn'>
        Download Resume 
 </a>
 <a href="#contact" className='btn btn-primary'> 
 Contact Me </a>
 </div>
  )
}

export default CTA 