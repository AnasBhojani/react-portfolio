import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { MdEmail } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import { FaConnectdevelop,FaStarAndCrescent } from "react-icons/fa";
import { GiLaptop } from "react-icons/gi";
import { RiMindMap } from "react-icons/ri";
import { FcGlobe } from "react-icons/fc";
import { FaBoltLightning } from "react-icons/fa6";
import { FaReact,FaCodeBranch,FaInstagram,FaLinkedin,FaGithub } from "react-icons/fa";
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
const containerref=useRef(null);
const boxref=useRef(null);
const textref=useRef(null);
const schoolref=useRef(null);
const collegeref=useRef(null);
const uniref=useRef(null)


useLayoutEffect(() => {
 
  const ctx=gsap.context(()=>{
   
    gsap.fromTo(
      containerref.current,
      {y: -100, opacity:0},
      {y:0, opacity:1, duration:2, ease:"power2.out",delay:0.5}
    )
    gsap.fromTo(
      boxref.current,
      {x: -100, opacity:0},
      {x:0, opacity:1, duration:2, ease:"power2.out",delay:0.5} ,"-=1"
    )
    gsap.fromTo(

      textref.current,
      {y: 60, opacity:0},
      {
          y: 0,
          opacity: 1,
          duration: 3,
          delay:1,
          ease: "power2.out",
           // important so it won't render at end on init
          scrollTrigger: {
            trigger: textref.current,
            start: "top 85%",   // element top reaches 85% down viewport
            end: "top 25%",     // short range so it animates as it enters
            scrub: true,
                     // smooth scrub; use false for a simple play
            }
          }
      
,"-=1"
    )
    gsap.fromTo(
      schoolref.current,
      {x:-100,opacity:0},
      {x:0,opacity:1,ease:"power2.inOut",duration:2,delay:0.5,
        scrollTrigger:{
           trigger: schoolref.current,
            start: "top 85%",   // element top reaches 85% down viewport
            end: "top 25%",
            scrub:true
        }

      },"-=0.01"
    )

    gsap.fromTo(
collegeref.current,
      {x:100,opacity:0},
      {x:0,opacity:1,ease:"power2.inOut",duration:2,delay:1,
        scrollTrigger:{
           trigger: collegeref.current,
            start: "top 85%",   // element top reaches 85% down viewport
            end: "top 25%",
            scrub:true
        }
      },"-=0.01"

    )

    gsap.fromTo(
uniref.current,
      {y:50,opacity:0},
      {y:0,opacity:1,ease:"power2.inOut",duration:2,delay:1,
        scrollTrigger:{
           trigger: uniref.current,
            start: "top 85%",   // element top reaches 85% down viewport
            end: "top 25%",
            scrub:true
            
           
           
        }
      },"-=0.01"

    )

  })
  return () => ctx.revert();
 
}, [])


  return (
    
  <div className=' flex flex-col justify-center'  >
<div className='flex lg:justify-around sm:justify-between gap-4 items-center mt-6 px-6 py-3   ' ref={containerref}>

<div className='text-center text-4xl font-bold text-white dark:text-gray-200 '>
  <h1 className='font-medium text-5xl sm:text-2xl lg:text-5xl '>Anas Bhojani.</h1>
</div>

<div className='flex gap-7 items-center '>

<span className=' lg:text-xl lg:px-4 lg:py-4 drop-shadow-[0_0_10px_white]  sm:px-4 sm:py-3 sm:text-xs items-center gap-3  rounded-3xl bg-black  text-white transition-all duration-300 hover:bg-white hover:text-black hover: border-2 hover: border-white'>
  <h2 className='sm:text-center'>Email : anasbhojani2005@gmail.com
    <MdEmail className='inline-block ml-2 sm:text-lg lg:text-2xl'/>
  </h2>
</span>


<span className='flex items-center lg:text-xl drop-shadow-[0_0_10px_silver] lg:px-4 lg:py-4 sm:px-2 sm:py-2 sm:text-xs  rounded-3xl bg-white  text-black transition-all duration-300 hover:bg-black hover:text-white hover: border-2 hover: border-gray-600 '>
  <h2 className='sm:text-center'>Get In Touch
    <GoArrowUpRight className='inline-block ml-2 text-2xl'/>
  </h2>
</span>

</div>

</div>

<div className='mt-15 p-4 relative w-[90%]' ref={boxref}>
  
<h2 className='text-5xl font-medium drop-shadow-[0_0_10px_white]  text-gray-500/70 text-center'>Heyyy,</h2>

<h1 style={{
      background: 'linear-gradient(90deg, #9CA3AF 40%, #FFFFFF 60%)', // left half gray, right half white
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    }} className='lg:text-9xl mt-7 drop-shadow-[0_0_5px_silver] text-center relative z-1000  font-medium sm:text-6xl'>I'am Anas Bhojani</h1>

<div className='flex flex-col gap-3 justify-center items-center mt-5 text-center  w-[70%] m-auto text-gray-300 text-2xl'>
  <h2 className='sm:text-sm lg:text-2xl'>I engineer robust systems that don't just function, but drive business growth.</h2>
  <h2 className='sm:text-sm lg:text-2xl'>From pixel to database, I own the stack.</h2>
</div>



<div className='absolute  lg:top-23 lg:left-10 sm:-top-4 sm:left-1.5   z-1000  border-white' ref={boxref}>

  <div className="relative inline-block">
    {/* blurred border + backdrop */}
    <span className="absolute  inset-0 rounded-3xl border-2 border-white/10 backdrop-blur-md filter blur-sm pointer-events-none "></span>

    {/* sharp content on top */}
    <span className='relative px-5 py-4 z-1000 rounded-3xl sm:text-sm bg-white/3 text-white'>
      I am Fun I get the job done
    </span>
  </div>
</div>




<div className='absolute lg:right-20 lg:top-95 sm:top-70  border-gray-600'>
  <div className="relative inline-block">
    {/* blurred border + backdrop */}
    <span className="absolute inset-0 rounded-3xl border-2 border-gray-500/30 backdrop-blur-md filter blur-sm pointer-events-none"></span>

    {/* sharp content on top */}
    <span className='relative sm:text-sm px-5 flex items-center gap-3 py-4 rounded-3xl bg-gray-600/10 text-white'>
      I build things for the web <RiMindMap className='text-pink-600'/>
    </span>
  </div>
</div>

<div className='absolute lg:top-90 lg:left-20 sm:-right-3 sm:top-70  border-gray-600 shadow-2xl  '>
  <div className="relative inline-block">
    {/* blurred border + backdrop */}
    <span className="absolute inset-0 rounded-3xl border-2 border-gray-500/30 backdrop-blur-md filter blur-sm pointer-events-none"></span>

    {/* sharp content on top */}
    <span className='sm:text-sm relative flex items-center gap-3 shadow-2xl  px-5 py-4 rounded-3xl bg-gray-600/10 text-white'>
    Based In Karachi, Pakistan <FaStarAndCrescent className='text-green-600'/>
    </span>
  </div>
</div>

<div className='absolute lg:left-240 lg:top-10 sm:top-90 sm:left-50  border-gray-600 '>
  <div className="relative inline-block">
    {/* blurred border + backdrop */}
    <span className="absolute inset-0 rounded-3xl border-2 border-gray-500/30 backdrop-blur-md filter blur-sm pointer-events-none"></span>

    {/* sharp content on top */}
    <span className='relative sm:text-sm px-5 flex gap-4 items-center py-4 rounded-3xl bg-gray-600/30 text-white'>
      Full Stack Developer <GiLaptop className='text-white'/>
    </span>
  </div>
</div>


<div className='absolute lg:top-110 lg:left-130 sm:-top-7 sm:-right-4  border-gray-600 shadow-2xl  '>
  <div className="relative inline-block">
    {/* blurred border + backdrop */}
    <span className="absolute inset-0 rounded-3xl border-2 border-gray-500/30 backdrop-blur-md filter blur-sm pointer-events-none"></span>

    {/* sharp content on top */}
    <span className='relative  px-5 sm:text-sm flex items-center gap-4 shadow-2xl py-4 rounded-3xl bg-gray-600/20 text-white'>
       Open To Work Worldwide <FcGlobe className=' text-xl sm:text-2xl'/>
    </span>
  </div>
</div>

</div>


<div className='mt-70 flex justify-center gap-25 p-7 mb-20 ' ref={textref} >
  
<div className='max-w-[40%] flex flex-col gap-8'>
<h1 className='lg:text-6xl font-medium drop-shadow-[0_0_8px_silver] sm:text-3xl '>Full-Stack Engineer | MERN & Next.js</h1>
<p style={{
      background: 'linear-gradient(90deg, #9CA3AF 40%, #FFFFFF 60%)', // left half gray, right half white
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    }} className='text-shadow-2xs lg:text-lg line-height-2 sm:text-sm'>Based in Karachi, I engineer high-impact web applications. My expertise lies in the MERN stack, amplified by Next.js to deliver robust backends and lightning-fast, SEO-friendly user interfaces.</p>
</div>

<div className='max-w-[60%] relative '> 
  
    <img src="/anasprofile.png" alt="" className='w-80 -mt-12  rounded-t-full rounded-b-full'  />
  
  
  <div>
    <FaBoltLightning className='lg:text-6xl font-medium shadow-2xl  drop-shadow-[0_0_10px_rgba(255,215,0,0.7)] text-yellow-400 absolute sm:text-4xl sm:left-50 sm:-top-10 lg:top-0 lg:left-70'/>
  </div>

  <div>
    <FaReact className='lg:text-6xl drop-shadow-[0_0_12px_rgba(0,150,255,0.8)] font-medium text-sky-600  absolute sm:top-50 sm:text-4xl lg:top-80 lg:right-70'/>
  </div>

  <div>
    <FaCodeBranch className='lg:text-6xl drop-shadow-[0_0_12px_rgba(255,0,0,0.8)] font-medium text-red-600  absolute lg:right-76 lg:top-0 sm:text-4xl sm:-top-10'/>
  </div>

</div>

</div>


<div className='mt-10'>
  <h1 className='lg:text-7xl sm:text-5xl text-center font-medium drop-shadow-[0_0_8px_silver] '>Academic Journey</h1>

<div className="relative mt-8">
          
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform sm:hidden lg:block  -translate-x-1/2 h-120 w-1 border-dotted bg-white"></div>
          
          {/* Timeline Items */}
          <div className="space-y-16">

            {/* School */}
            <div className="relative flex flex-col md:flex-row items-center">
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 transform sm:top-15 lg:top-0 -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10  "></div>
              
              {/* Content Card */}
              <div className="ml-12 md:ml-0 md:w-5/12 md:pr-8">
                <div style={{
                  background:"linear-gradient(140deg, gray 10%, black 60%)"
                }} ref={schoolref} className=" absolute  left-40 lg:w-110 sm:w-100 rounded-2xl shadow-md p-6 drop-shadow-[0_0_3px_silver]">
                  <h3 className="text-xl font-bold text-white">
                    Matriculation :
                  </h3>
                  <p className="lg:text-lg text-blue-600 font-semibold mt-2">
                    Mama Baby Care School
                  </p>
                  <span className="text-white lg:text-sm mt-2 block">
                    Batch-2022
                  </span>
                </div>
              </div>
            </div>

            {/* College */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="absolute left-5 top-45 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-lg z-10 "></div>
              
              <div className="ml-12 md:w-5/12 md:pl-8 md:ml-auto relative">
                <div  style={{
      background: 'linear-gradient(140deg, gray 10%, black 60%)', // left half gray, right half white
      
    }} ref={collegeref} className="rounded-2xl absolute sm:top-30 sm:-left-48 lg:top-20 lg:-left-9 sm:w-90   text-white lg:w-95 shadow-md p-6 drop-shadow-[0_0_3px_silver]">
                  <h3 className="text-xl font-extrabold text-white">
                    College :
                  </h3>
                  <p className="lg:text-lg text-green-600 font-semibold mt-2">
                    Bahria College Karachi
                  </p>
                  <span className="text-white lg:text-sm mt-2 block">
                    2022 - 2024
                  </span>
                </div>
              </div>
            </div>

            {/* University */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="absolute left-4 lg:top-85 sm:top-70 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full border-4 border-white shadow-lg z-10 "></div>
              
              <div className="ml-12 md:ml-0 md:w-5/12 md:pr-8 relative">
                <div ref={uniref} style={{
      background: 'linear-gradient(140deg, gray 10%, black 60%)', // left half gray, right half white
      
    }} className=" rounded-2xl absolute sm:top-55 lg:top-40 lg:left-23 sm:-right-48  lg:w-120 sm:w-100 ml-8 shadow-md p-6 drop-shadow-[0_0_3px_silver]">
                  <h3 className="lg:text-xl font-bold text-white">
                    Bachelors Of Science Software Engineering
                  </h3>
                  <p className="lg:text-lg text-yellow-400 font-semibold mt-2">
                    Sir Syed University Of Engineering & Technology
                  </p>
                  <span className="text-white text-sm mt-2 block">
                    2024 - 2028
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      <div className='mt-110 relative '>
<h1 className='text-6xl text-center drop-shadow-[0_0_8px_silver] '>Portfolio & Projects</h1>
<div className='h-14 w-13 border-2 absolute lg:top-0 lg:left-95 sm:top-0 sm:left-10 border-silver '>
<div className='relative'>
<div className='w-2 h-2 absolute -top-1 left-11 rounded-full bg-yellow-300 drop-shadow-[0_0_20px_silver] '></div>
<div className='w-2 h-2 rounded-full absolute -top-1 -left-1 bg-yellow-300 drop-shadow-[0_0_20px_silver] '></div>
<div className='w-2 h-2 rounded-full absolute top-12 left-12 bg-yellow-300 drop-shadow-[0_0_20px_silver] '></div>
<div className='w-2 h-2 rounded-full absolute top-12 -left-1 bg-yellow-300 drop-shadow-[0_0_20px_silver] '></div>
</div>
</div>

<div className='mt-10 p-3 flex justify-center flex-col gap-5 max-w-[60%] m-auto'>
  

<h1 className='text-3xl font-medium'><span className='text-3xl text-gray-500'>1-</span> E-Commerce Project (React + Context API)</h1>
<h2 className='text-4xl text-yellow-300 font-medium'>Features :</h2>
<p className='font-light text-gray-300 sm:text-sm lg:text-center lg:text-lg mb-5'>Architect a dynamic product ecosystem with intelligent categorization and dedicated PDPs. Leverage persistent cart orchestration for robust state management and real-time quantity updates, surfaced through a live summary metric.</p>




  <div 
   className='h-70 w-120 relative rounded-2xl  m-auto drop-shadow-[0_0_5px_silver]'>
    <div className='absolute inset-0 bg-black/40 rounded-2xl'>
  <video className='rounded-2xl w-full h-full drop-shadow-[0_0_5px_silver]' src="/ecommerce2.mp4" controls autoPlay
  muted
  loop
  playsInline></video>
    </div>

  </div>
  <div className='flex justify-around w-[50%] m-auto gap-10'>
<button className='px-4 py-3  rounded-3xl bg-white text-black flex items-center gap-4 hover:bg-black hover:text-white transition-all ease-in-out duration-300'>Live Demo <FaCodeBranch/></button>
<button className='px-4 py-3 rounded-3xl bg-white text-black flex items-center gap-4 hover:bg-black hover:text-white transition-all ease-in-out duration-300'>Source Code <FaBoltLightning/></button>
  </div>
</div>

<div className='mt-10 p-3 flex justify-center flex-col gap-5 max-w-[55%] m-auto'>
  

<h1 className='text-3xl font-medium'><span className='text-3xl text-gray-500'>2-</span> Quiz App</h1>
<h2 className='text-4xl text-yellow-300 font-medium'>Features :</h2>
<p className='font-light text-gray-300 sm:text-sm lg:text-center lg:text-lg'>A fluid quiz experience where every second counts. Move seamlessly through questions, get instant feedback, and see your progress live. Your final score awaits the timer's end.</p>




  <div 
   className='h-70 w-120 relative rounded-2xl  m-auto drop-shadow-[0_0_5px_silver]'>
    <div className='absolute inset-0 bg-black/40 rounded-2xl'>
  <video className='rounded-2xl w-full h-full drop-shadow-[0_0_5px_silver]' src="/quiz.mp4" controls autoPlay
  muted
  loop
  playsInline></video>
    </div>

  </div>
  <div className='flex w-[50%] m-auto justify-around gap-10'>
<button className='px-4 py-3 rounded-3xl  bg-white text-black flex items-center gap-4 hover:bg-black hover:text-white transition-all ease-in-out duration-300'>Live Demo <FaCodeBranch/></button>
<button className='px-4 py-3 rounded-3xl bg-white text-black flex items-center gap-4 hover:bg-black hover:text-white transition-all ease-in-out duration-300'>Source Code <FaBoltLightning/></button>
  </div>
</div>


</div>


<div className='mt-10 follow p-6 flex justify-center gap-20 mb-20'>
<h1 className='flex items-center gap-5 px-5 py-3 rounded-3xl bg-white text-black font-medium italic '>Follow Up On <GoArrowUpRight className='font-medium text-3xl'/></h1>

<div className='flex justify-center items-center gap-5'>
<a href="https://github.com/AnasBhojani"><FaGithub className='text-3xl transition-all duration-300'/></a>
<a href="https://www.instagram.com/anas_bhojani/"><FaInstagram className='text-3xl transition-all duration-300 hover:text-red-500'/></a>
<a href="https://www.linkedin.com/in/anas-bhojani-3ba74332b/"><FaLinkedin className='text-3xl transition-all duration-300 hover:text-blue-500'/></a>
</div>

</div>






      </div>

     
  
 






  )
}

export default Home