import React from 'react'
import profile from '../../assets/profile.png'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate();
  const resumeLink = "/Resume.pdf"; 
  return (
    <div className='flex items-center flex-col gap-6'>
       <img src={profile} className='mt-[25px] w-50 rounded-full h-60' alt="" />
       <h1 className='text-center w-[70%] text-[70px] font-semibold'> <span className='bg-gradient-to-r from-custom-orange to-custom-purple text-transparent bg-clip-text'>I'm Samanth Kumar,</span>  an Entry-Level Frontend Developer based in Mangalore, India.</h1>
       <p className='w-[50%] text-center text-2xl leading-[40px]'>I am an MCA graduate from SJEC,Mangalore. Aspiring to excel in frontend development and further enhance my skills in creating dynamic and user-friendly web applications.</p>
       <div className=' flex items-center gap-6 text-2xl font-bold mb-5'>
        <div className='py-6 px-9 rounded-full border-solid hover:border-2 hover:border-white bg-gradient-to-r from-custom-orange to-custom-purple cursor-pointer' onClick={() => navigate('/contact')}> Connect With Me</div>
        <a
  href={resumeLink} 
  download="Samanth_Kumar_Resume.pdf" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="py-6 px-20 rounded-full border-2 border-solid cursor-pointer hover:border-purple-500"
>
  My Resume
</a>
       </div>
    </div>
  )
}

export default Hero