// components/Hero.jsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Partners from '@/components/LandingPage/Partners/Partners';

const Hero = () => {
  return (
    <section className="text-center px-4 pt-20 bg-white overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4"
      >
        <span className="mb-2 block">Start Crafting Your</span>
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-indigo-600 block"
        >
          Next Great Idea
        </motion.span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-4 text-gray-500 max-w-xl mx-auto"
      >
        Simplifying the creation of landing pages, blog pages, application pages and so much more!
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-8 flex flex-col justify-center items-center gap-4"
      >
        <div className="relative">
          <span className="absolute -top-2 -right-4 text-xs text-white bg-emerald-500 px-2 py-0.5 rounded-full">
            only $15/mon
          </span>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-indigo-700 transition cursor-pointer">
            Purchase Now
          </button>
        </div>
        <button className="text-indigo-600 text-sm hover:underline">Learn More</button>
      </motion.div>

      {/* Partners Section with fade in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
      >
        <Partners />
      </motion.div>
    </section>
  );
};

export default Hero;


// // components/Hero.jsx
// import React from 'react'
// import Partners from '@/components/LandingPage/Partners/Partners'

// const Hero = () => {
//   return (
//     <section className="text-center px-4 pt-20 bg-white">
//       <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
//         <span className="mb-2 block">Start Crafting Your</span>
//         <span className="text-indigo-600 block">Next Great Idea</span>
//       </h1>
//       <p className="mt-4 text-gray-500 max-w-xl mx-auto">
//         Simplifying the creation of landing pages, blog pages, application pages and so much more!
//       </p>

//       <div className="mt-8 flex flex-col justify-center items-center gap-4">
//         <div className="relative">
//           <span className="absolute -top-2 -right-4 text-xs text-white bg-emerald-500 px-2 py-0.5 rounded-full">
//             only $15/mon
//           </span>
//           <button className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-indigo-700 transition cursor-pointer">
//             Purchase Now
//           </button>
//         </div>
//         <button className="text-indigo-600 text-sm hover:underline">Learn More</button>
//       </div>

//       {/* Partners Section */}
//       <Partners />
//     </section>
//   )
// }

// export default Hero
