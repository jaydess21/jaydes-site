import React from 'react';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#ff99cc] text-black-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className=' w-full flex justify-center items-center flex-col mb-7'>
              <p className='text-4xl font-bold inline border-b-4 border-pink-500 text-center '>Skills</p>
              <p className='py-4 text-2xl'>I enjoy diving into and learning new things. Here's a list of technologies I've worked with</p>
          </div> 
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#E75480] hover:scale-110 duration-500'>
                  <p className='my-4 font-bold'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#E75480] hover:scale-110 duration-500'>
                  <p className='my-4 font-bold'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#E75480] hover:scale-110 duration-500'>
                  <p className='my-4 font-bold'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#E75480] hover:scale-110 duration-500'>
                  <p className='my-4 font-bold'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#E75480] hover:scale-110 duration-500'>
                  <p className='my-4 font-bold'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#E75480] hover:scale-110 duration-500'>
                  <p className='my-4 font-bold'>NODE JS</p>
              </div>
              <div className='shadow-md shadow-[#E75480] hover:scale-110 duration-500'>
                  <p className='my-4 font-bold ' >MONGO DB</p>
              </div>
              <div className='shadow-md shadow-[#E75480] hover:scale-110 duration-500'>
                  <p className='my-4 font-bold'>AWS</p>
              </div>
              <div className='shadow-md shadow-[#E75480] hover:scale-110 duration-500'>
                  <p className='my-4 font-bold'>Django</p>
              </div>
              <div className='shadow-md shadow-[#E75480] hover:scale-110 duration-500'>
                  <p className='my-4 font-bold'>Sass</p>
              </div>
              <div className='shadow-md shadow-[#E75480] hover:scale-110 duration-500'>
                  <p className='my-4 font-bold'>Mongodb</p>
              </div>
              <div className='shadow-md shadow-[#E75480] hover:scale-110 duration-500'>
                  <p className='my-4 font-bold'>GraphQl</p>
              </div>
          </div>
      </div>
    </div>
  );
};
export default Skills;