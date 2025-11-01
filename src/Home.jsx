import React, { useEffect, useLayoutEffect, useRef ,useState} from 'react'
import { MdEmail } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import { FaConnectdevelop,FaStarAndCrescent } from "react-icons/fa";
import { GiLaptop } from "react-icons/gi";
import { RiMindMap } from "react-icons/ri";
import { FcGlobe } from "react-icons/fc";
import { FaBoltLightning } from "react-icons/fa6";
import { FaReact,FaCodeBranch,FaInstagram,FaLinkedin,FaGithub } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
const containerref=useRef(null);
const boxref=useRef(null);
const textref=useRef(null);
const schoolref=useRef(null);
const collegeref=useRef(null);
const uniref=useRef(null);
const quizapp=useRef(null);
const ecommerceapp=useRef(null)





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
      {y:40,opacity:0},
      {y:0,opacity:1,ease:"power2.inOut",duration:2,delay:0.5,
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
      {y:40,opacity:0},
      {y:0,opacity:1,ease:"power2.inOut",duration:2,delay:1,
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

    gsap.fromTo(
quizapp.current,
      {y:50,opacity:0},
      {y:0,opacity:1,ease:"power2.inOut",duration:2,delay:1,
        scrollTrigger:{
           trigger: quizapp.current,
            start: "top 85%",   // element top reaches 85% down viewport
            end: "top 25%",
            scrub:true
            
           
           
        }
      }

    )
    gsap.fromTo(
ecommerceapp.current,
      {y:50,opacity:0},
      {y:0,opacity:1,ease:"power2.inOut",duration:2,delay:1,
        scrollTrigger:{
           trigger: ecommerceapp.current,
            start: "top 85%",   // element top reaches 85% down viewport
            end: "top 25%",
            scrub:true   
           
        }
      }

    )

  })
  return () => ctx.revert();
 
}, [])


  return (
    
  <div className='flex flex-col justify-center max-sm:w-[90%] m-auto'  >
<div className='flex lg:justify-around sm:justify-between gap-4 max-sm:gap-0 px-2 items-center mt-6  py-2 max-sm:justify-center    ' ref={containerref}>

<div className='text-center text-4xl font-bold text-white dark:text-gray-200 '>
  <h1 className='font-medium text-5xl sm:text-2xl lg:text-5xl max-sm:text-xl '>Anas Bhojani.</h1>
</div>

<div className='flex gap-7 items-center max-sm:gap-2 '>

<span className='max-sm:p-1 max-sm:text-xs max-sm:text-center lg:text-xl lg:px-4 lg:py-4 drop-shadow-[0_0_10px_white]  sm:py-3 sm:px-2 sm:text-sm items-center gap-3  rounded-3xl bg-black  text-white transition-all duration-300 hover:bg-white hover:text-black hover: border-2 hover: border-white'>
  <h2 className='sm:text-center'>Email : anasbhojani2005@gmail.com
    <MdEmail className='inline-block ml-2 sm:text-lg lg:text-2xl'/>
  </h2>
</span>


<span className='flex max-sm:py-2 max-sm:px-3  max-sm:text-xs max-sm:text-center items-center lg:text-xl drop-shadow-[0_0_10px_silver] lg:px-4 lg:py-4 sm:px-2 sm:py-2 sm:text-xs  rounded-3xl bg-white  text-black transition-all duration-300 hover:bg-black hover:text-white hover: border-2 hover: border-gray-600 '>
  <h2 className='sm:text-center max-sm:text-center'>Open To Work
    <GoArrowUpRight className='inline-block ml-2 text-2xl'/>
  </h2>
</span>

</div>

</div>

<div className='mt-15 p-4 relative max-w-[99%] m-auto' ref={boxref}>
  
<h2 className='text-5xl mt-1 max-sm:mt-13 font-medium drop-shadow-[0_0_10px_white]  text-gray-500/70 text-center max-sm:text-3xl'>Heyyy,</h2>

<h1 style={{
      background: 'linear-gradient(90deg, #9CA3AF 40%, #FFFFFF 60%)', // left half gray, right half white
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    }} className='lg:text-9xl mt-7 drop-shadow-[0_0_5px_silver] text-center relative z-1000  font-medium sm:text-6xl max-sm:text-7xl '>I'am Anas Bhojani</h1>

<div className='flex flex-col gap-3 justify-center items-center mt-3 text-center   w-[70%] m-auto text-gray-300 text-2xl max-sm:w-[60%]'>
  <h2 className='sm:text-sm lg:text-2xl max-sm:text-xs font-extralight'>I engineer robust systems that don't just function, but drive business growth.</h2>
  <h2 className='sm:text-sm lg:text-2xl max-sm:text-xs font-extralight'>From pixel to database, I own the stack.</h2>
</div>



<div className='absolute max-sm:top-8 max-sm:text-xs  max-sm:right-0   lg:top-16 font-medium lg:left-10 sm:-top-4 sm:left-1.5 drop-shadow-[0_0_10px_silver]   z-1000  border-white' ref={boxref}>

  <div className="relative inline-block">
    {/* blurred border + backdrop */}
    <span className="absolute  inset-0 rounded-3xl p-2 border-2 border-white/10 backdrop-blur-md filter blur-sm pointer-events-none "></span>

    {/* sharp content on top */}
    <span className='relative lg:drop-shadow-[0_0_20px_silver] max-sm:p-3 max-sm:text-xs lg:text-lg px-5 py-4 z-1000 rounded-3xl sm:text-sm bg-white/14 text-white'>
      I am Fun I get the job done
    </span>
  </div>
</div>




<div className='absolute max-sm:right-0 max-sm:drop-shadow-[0_0_5px_silver] max-sm:top-118 lg:right-15 lg:top-95 sm:top-70  border-gray-600'>
  <div className="relative inline-block">
    {/* blurred border + backdrop */}
    <span className="absolute inset-0 rounded-3xl border-2 border-gray-500/30 backdrop-blur-md filter blur-sm pointer-events-none"></span>

    {/* sharp content on top */}
    <span className='relative  lg:text-lg lg:drop-shadow-[0_0_10px_silver]  max-sm:p-3 max-sm:text-xs sm:text-sm px-5 flex items-center gap-3 py-4 rounded-3xl bg-gray-600/10 text-white'>
      I build things for the web <RiMindMap className='text-pink-600'/>
    </span>
  </div>
</div>

<div className='absolute max-sm:top-122 max-sm:left-7  max-sm:translate-20.5   max-sm:drop-shadow-[0_0_20px_silver] lg:top-90 lg:left-20 sm:-right-3 sm:top-70  border-gray-600 shadow-2xl  '>
  <div className="relative inline-block">
    {/* blurred border + backdrop */}
    <span className="absolute inset-0 rounded-3xl border-2 border-gray-500/30 backdrop-blur-md filter blur-sm pointer-events-none"></span>

    {/* sharp content on top */}
    <span className='sm:text-sm max-sm:p-3 lg:text-lg  lg:drop-shadow-[0_0_10px_silver]  max-sm:text-xs relative flex items-center gap-3 shadow-2xl  px-5 py-4 rounded-3xl bg-gray-600/10 text-white'>
    Based In Karachi, Pakistan <FaStarAndCrescent className='text-green-600'/>
    </span>
  </div>
</div>

<div className='absolute lg:left-240 lg:top-10 sm:top-90 sm:left-50 max-sm:-left-3  max-sm:drop-shadow-[0_0_5px_silver] max-sm:-top-9  border-gray-600 '>
  <div className="relative inline-block">
    {/* blurred border + backdrop */}
    <span className="absolute inset-0 rounded-3xl border-2 border-gray-500/30 backdrop-blur-md filter blur-sm pointer-events-none"></span>

    {/* sharp content on top */}
    <span className='relative max-sm:p-3 font-medium   lg:drop-shadow-[0_0_10px_silver]  max-sm:text-xs sm:text-sm px-5 flex gap-4 items-center py-4 rounded-3xl bg-gray-600/30 text-white'>
      Frontend Developer <GiLaptop className='text-white'/>
    </span>
  </div>
</div>


<div className='absolute max-sm:top-130 max-sm:-left-2 lg:top-110 lg:left-107 sm:-top-7 sm:-right-4  max-sm:drop-shadow-[0_0_5px_silver]  border-gray-600 shadow-2xl  '>
  <div className="relative inline-block">
    {/* blurred border + backdrop */}
    <span className="absolute inset-0 rounded-3xl border-2 border-gray-500/30 backdrop-blur-md filter blur-sm pointer-events-none"></span>

    {/* sharp content on top */}
    <span className='relative max-sm:p-2  lg:drop-shadow-[0_0_10px_silver] lg:text-lg max-sm:text-xs  px-5 sm:text-sm flex items-center gap-4 shadow-2xl py-4 rounded-3xl bg-gray-600/20 text-white'>
       Open To Work Worldwide <FcGlobe className=' text-xl sm:text-2xl'/>
    </span>
  </div>
</div>

</div>


<div className='mt-85 max-sm:mt-50  flex justify-center items-center gap-25 p-7 mb-20 max-sm:gap-20' ref={textref} >
  
<div className='max-w-[40%] flex flex-col gap-8'>
<h1 className='lg:text-6xl font-medium drop-shadow-[0_0_8px_silver] sm:text-xl max-sm:text-2xl '>Software Engineer | Frontend Developer</h1>
<p style={{
      background: 'linear-gradient(90deg, #9CA3AF 40%, #FFFFFF 60%)', // left half gray, right half white
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    }} className='text-shadow-2xs lg:text-lg line-height-2 sm:text-sm max-sm:text-xs max-sm:font-extralight'>Based in Karachi, I specialize in creating elegant, responsive, and animated web experiences. With React, Tailwind CSS, JavaScript, and GSAP, I build fast, modern interfaces that captivate users and elevate brands.</p>
</div>

<div className='max-w-[60%] relative max-sm:flex max-sm:flex-col max-sm:items-center '> 
  
    <img src="/anasprofile.png" alt="" className='w-90 -mt-12 max-sm:h-82 max-sm:w-140   rounded-t-full rounded-b-full'  />
  
  
  <div>
    <FaBoltLightning className='max-sm:text-4xl lg:text-6xl font-medium shadow-2xl  drop-shadow-[0_0_10px_rgba(255,215,0,0.7)] text-yellow-400 absolute sm:text-4xl sm:left-50 sm:-top-10 lg:top-0 lg:left-70 max-sm:-top-10 z-1000 max-sm:left-15'/>
  </div>

  <div>
    <FaReact className='max-sm:text-4xl lg:text-6xl drop-shadow-[0_0_12px_rgba(0,150,255,0.8)] font-medium text-sky-600  absolute sm:top-50 sm:text-4xl lg:top-80 lg:right-70 max-sm:-top-10 max-sm:-left-7 z-10000'/>
  </div>

  <div>
    <FaCodeBranch className='max-sm:text-4xl lg:text-6xl drop-shadow-[0_0_12px_rgba(255,0,0,0.8)] font-medium text-red-600  absolute lg:right-76 lg:top-0 sm:text-4xl sm:-top-10 max-sm:top-45 max-sm:-left-8'/>
  </div>

</div>

</div>


<div className='mt-10 '>
  <h1 className='lg:text-7xl sm:text-5xl items-center lg:text-center lg:w-[50%] lg:m-auto  font-medium drop-shadow-[0_0_20px_silver] max-sm:text-4xl flex'>Academic Journey <LuGraduationCap className='text-amber-300 max-sm:text-9xl lg:text-9xl'/> </h1>
 

<div className="relative mt-8">
          
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform sm:hidden lg:block max-sm:hidden  -translate-x-1/2 h-120 w-1 border-dotted bg-white"></div>
          
          {/* Timeline Items */}
          <div className="space-y-16">

            {/* School */}
            <div className="relative flex flex-col md:flex-row items-center">
              {/* Timeline Dot */}
              <div className="absolute max-sm:left-4 max-sm:top-15 drop-shadow-[0_0_10px_blue] left-4 md:left-1/2 transform sm:top-15 lg:top-0 -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10  "></div>
              
              {/* Content Card */}
              <div className="ml-12 md:ml-0 md:w-5/12 md:pr-8">
                <div style={{
                  background:"linear-gradient(140deg, gray 10%, black 60%)"
                }} ref={schoolref} className=" absolute max-sm:left-18  lg:left-40 lg:w-110 sm:w-100 max-sm:w-50 max-sm:text-sm rounded-2xl shadow-md p-6 drop-shadow-[0_0_3px_silver]">
                  <h3 className="text-xl font-bold text-white">
                    Matriculation :
                  </h3>
                  <p className="lg:text-lg text-blue-600 font-semibold mt-2 max-sm:text-xs">
                    Mama Baby Care School
                  </p>
                  <span className="text-white lg:text-sm mt-2 block max-sm:text-xs">
                    Batch-2022
                  </span>
                </div>
              </div>
            </div>

            {/* College */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="absolute max-sm:left-4 max-sm:top-42 left-5 top-45 drop-shadow-[0_0_10px_green]  md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-lg z-10 "></div>
              
              <div className="ml-12 md:w-5/12 md:pl-8 md:ml-auto relative">
                <div  style={{
      background: 'linear-gradient(140deg, gray 10%, black 60%)', // left half gray, right half white
      
    }} ref={collegeref} className="rounded-2xl max-sm:w-50 max-sm:text-sm max-sm:top-25 max-sm:-right-25 absolute sm:top-30 sm:-left-48 lg:top-20 lg:-left-9 sm:w-90   text-white lg:w-95 shadow-md p-6 drop-shadow-[0_0_3px_silver]">
                  <h3 className="text-xl font-extrabold text-white">
                    College :
                  </h3>
                  <p className="lg:text-lg text-green-600 font-semibold mt-2 max-sm:text-xs">
                    Bahria College Karachi
                  </p>
                  <span className="text-white lg:text-sm mt-2 block max-sm:text-xs">
                    2022 - 2024
                  </span>
                </div>
              </div>
            </div>

            {/* University */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="absolute max-sm:left-4 max-sm:top-70 max-sm:drop-shadow-[0_0_10px_yellow]  left-4 lg:top-85 sm:top-70 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full border-4 border-white shadow-lg z-10 "></div>
              
              <div className="ml-12 md:ml-0 md:w-5/12 md:pr-8 relative">
                <div ref={uniref} style={{
      background: 'linear-gradient(140deg, gray 10%, black 60%)', // left half gray, right half white
      
    }} className=" rounded-2xl absolute max-sm:text-sm max-sm:w-50 max-sm:top-50 max-sm:-left-30 sm:top-55 lg:top-40 lg:left-23 sm:-right-48  lg:w-120 sm:w-100 ml-8 shadow-md p-6 drop-shadow-[0_0_3px_silver]">
                  <h3 className="lg:text-xl font-bold text-white max-sm:text-xs">
                    Bachelors Of Science Software Engineering
                  </h3>
                  <p className="lg:text-lg text-yellow-400 font-semibold mt-2 max-sm:text-xs">
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
<h1 className='text-6xl text-center drop-shadow-[0_0_8px_silver] max-sm:text-5xl '>Portfolio & Projects</h1>
<div className='h-14 w-13 max-sm:left-12 max-sm:-top-1 max-sm:drop-shadow-[0_0_10px_yellow] border-2 absolute lg:top-0 lg:left-95 sm:top-0 sm:left-10 border-silver '>
<div className='relative'>
<div className='w-2 h-2 absolute -top-1 left-11 rounded-full bg-yellow-300 drop-shadow-[0_0_20px_silver] '></div>
<div className='w-2 h-2 rounded-full absolute -top-1 -left-1 bg-yellow-300 drop-shadow-[0_0_20px_silver] '></div>
<div className='w-2 h-2 rounded-full absolute top-12 left-12 bg-yellow-300 drop-shadow-[0_0_20px_silver] '></div>
<div className='w-2 h-2 rounded-full absolute top-12 -left-1 bg-yellow-300 drop-shadow-[0_0_20px_silver] '></div>
</div>
</div>

<div className='mt-10 p-3 flex justify-center flex-col gap-5 lg:max-w-[60%] max-sm:max-w-[99%] m-auto'ref={ecommerceapp} >
  

<h1 className='text-3xl font-medium max-sm:text-xl'><span className='text-3xl text-gray-500 max-sm:text-xl '>1-</span> E-Commerce Project (React + Context API)</h1>
<h2 className='text-4xl text-yellow-300 font-medium max-sm:text-xl'>Features :</h2>
<p className='font-light text-gray-300 sm:text-sm lg:text-center lg:text-lg mb-5 max-sm:text-xs'>Architect a dynamic product ecosystem with intelligent categorization and dedicated PDPs. Leverage persistent cart orchestration for robust state management and real-time quantity updates, surfaced through a live summary metric.</p>




  <div 
   className='h-70 w-120 max-sm:w-60  relative   m-auto drop-shadow-[0_0_1px_silver]'>
    <div className='absolute inset-0 rounded-4xl bg-black/40'>
  <video className='rounded-4xl w-full  p-2 h-full drop-shadow-[0_0_5px_silver]' src="/ecommerce2.mp4" controls autoPlay
  muted
  loop
  playsInline></video>
    </div>

  </div>
  <div className='flex justify-center w-[70%] m-auto gap-10'>
<button className='px-4 py-3 max-sm:p-2 max-sm:text-sm max-sm:rounded-2xl  rounded-3xl bg-white text-black flex items-center gap-4 hover:bg-black hover:text-white transition-all ease-in-out duration-300'>Live Demo <FaCodeBranch/></button>
<button className='px-4 py-3 max-sm:p-2 max-sm:text-sm max-sm:rounded-2xl rounded-3xl bg-white text-black flex items-center gap-4 hover:bg-black hover:text-white transition-all ease-in-out duration-300'>Source Code <FaBoltLightning/></button>
  </div> 
</div>

<div className='mt-10 p-3 flex justify-center flex-col gap-5 lg:max-w-[55%] max-sm:max-w-[99%] m-auto' ref={quizapp}>
  

<h1 className='text-3xl font-medium max-sm:text-2xl'><span className='text-2xl text-gray-500'>2-</span> Quiz App</h1>
<h2 className='text-4xl text-yellow-300 font-medium max-sm:text-xl '>Features :</h2>
<p className='font-light text-gray-300 sm:text-sm lg:text-center lg:text-lg max-sm:text-xs'>A fluid quiz experience where every second counts. Move seamlessly through questions, get instant feedback, and see your progress live. Your final score awaits the timer's end.</p>




  <div 
   className='h-70 w-120 max-sm:w-60 relative rounded-2xl  m-auto drop-shadow-[0_0_1px_silver]'>
    <div className='absolute inset-0 bg-black/40 rounded-4xl'>
  <video className='rounded-4xl w-full h-full p-2 drop-shadow-[0_0_5px_silver]' src="/quiz.mp4" controls autoPlay
  muted
  loop
  playsInline></video>
    </div>

  </div>
 <div className='flex justify-center w-[70%] m-auto gap-10'>
<button className='px-4 py-3 max-sm:p-2 max-sm:text-sm max-sm:rounded-2xl  rounded-3xl bg-white text-black flex items-center gap-4 hover:bg-black hover:text-white transition-all ease-in-out duration-300'>Live Demo <FaCodeBranch/></button>
<button className='px-4 py-3 max-sm:p-2 max-sm:text-sm max-sm:rounded-2xl rounded-3xl bg-white text-black flex items-center gap-4 hover:bg-black hover:text-white transition-all ease-in-out duration-300'>Source Code <FaBoltLightning/></button>
  </div>
</div>


</div>


<div className='mt-10 follow p-6 flex justify-center gap-20 mb-20'>
<h1 className='flex items-center max-sm:text-xs text-center max-sm:p-2 gap-5 px-5 py-3 rounded-3xl bg-white text-black font-medium italic '>Follow Up On <GoArrowUpRight className='font-medium text-3xl'/></h1>

<div className='flex justify-center items-center gap-5 max-sm:gap-2'>
<a href="https://github.com/AnasBhojani"><FaGithub className='text-3xl max-sm:text-2xl transition-all duration-300'/></a>
<a href="https://www.instagram.com/anas_bhojani/"><FaInstagram className='text-3xl max-sm:text-2xl transition-all duration-300 hover:text-red-500'/></a>
<a href="https://www.linkedin.com/in/anas-bhojani-3ba74332b/"><FaLinkedin className='text-3xl max-sm:text-2xl transition-all duration-300 hover:text-blue-500'/></a>
</div>

</div>





      </div>

     
  
 






  )
}

export default Home