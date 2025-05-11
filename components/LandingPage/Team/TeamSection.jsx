'use client'
import { Github, Twitter } from 'lucide-react';
import { motion } from 'framer-motion'; // Importing framer-motion

const team = [
  {
    name: 'Freddy Smith',
    role: 'CEO and Founder',
    image: '/images/img_1.png',
    circleColor: 'bg-green-200',
    cardColor: 'bg-blue-50',
  },
  {
    name: 'Carl Jones',
    role: 'CTO and Co-Founder',
    image: '/images/img_1.png',
    circleColor: 'bg-mint-200',
    cardColor: 'bg-gray-100',
  },
  {
    name: 'Susan Peterson',
    role: 'Marketing Directory',
    image: '/images/img_1.png',
    circleColor: 'bg-orange-200',
    cardColor: 'bg-pink-100',
  },
  {
    name: 'Tommy Barnes',
    role: 'Designer',
    image: '/images/img_1.png',
    circleColor: 'bg-cyan-200',
    cardColor: 'bg-blue-100',
  },
  {
    name: 'Ron Jenson',
    role: 'Senior Developer',
    image: '/images/img_1.png',
    circleColor: 'bg-teal-200',
    cardColor: 'bg-green-100',
  },
  {
    name: 'Pete Tompkins',
    role: 'Web Developer',
    image: '/images/img_1.png',
    circleColor: 'bg-orange-300',
    cardColor: 'bg-pink-100',
  },
  {
    name: 'Kelly Richards',
    role: 'Sales Manager',
    image: '/images/img_1.png',
    circleColor: 'bg-green-200',
    cardColor: 'bg-yellow-100',
  },
  {
    name: 'Alexis Jordan',
    role: 'Affiliate Manager',
    image: '/images/img_1.png',
    circleColor: 'bg-yellow-200',
    cardColor: 'bg-blue-100',
  },
];

export default function TeamSection() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Top-right decorative blob */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-left mb-12 relative">
          <div
            className="hidden md:flex absolute top-0 md:right-[-2%] lg:right-[-12%] w-[400px] lg:w-[450px] h-[120px] bg-blue-50/50 z-0"
            style={{ borderRadius: '15% 10% 0% 16% / 50% 0% 10% 46%' }}
          ></div>

          <p className="text-sm font-semibold text-blue-500 uppercase">Our Team</p>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">
            An incredible team of <br /> amazing individuals
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-10">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className={`relative p-6 pt-10 rounded-tr-[60px] text-center`}
              initial={{ opacity: 0, scale: 0.9 }} // Initial state
              whileInView={{ opacity: 1, scale: 1 }} // Trigger when in view
              viewport={{ once: false, amount: 0.2 }} // Trigger when 20% of the item is in the viewport
              transition={{
                duration: 0.6,
                ease: 'easeOut',
                delay: index * 0.1, // Adding a small staggered delay for each item
              }} 
            >
              <div className="relative w-40 h-40 mx-auto mb-4">
                {/* Blob Shape Background */}
                <div
                  className={`absolute inset-0 z-0 ${member.cardColor}`}
                  style={{
                    borderRadius: '43% 10% 49% 51% / 50% 0% 43% 48%',
                  }}
                ></div>

                {/* Inner Circle with Padding from Blob */}
                <div className="absolute inset-4 rounded-full z-10 flex items-center justify-center bg-white shadow-md">
                  <div
                    className={`w-full h-full rounded-full ${member.circleColor} flex items-center justify-center`}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="rounded-full object-cover w-48 h-32"
                    />
                  </div>
                </div>
              </div>

              {/* Name & Role */}
              <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
              <p className="text-sm text-blue-600 font-medium">{member.role}</p>

              {/* Social Icons */}
              <div className="mt-2 flex justify-center space-x-3">
                <a href="#" className="text-gray-500 hover:text-blue-500">
                  <Twitter size={18} />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-800">
                  <Github size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 'use client'
// import { Github, Twitter } from 'lucide-react';


// const team = [
//     {
//       name: 'Freddy Smith',
//       role: 'CEO and Founder',
//       image: '/images/img_1.png',
//       circleColor: 'bg-green-200',
//       cardColor: 'bg-blue-50',
//     },
//     {
//       name: 'Carl Jones',
//       role: 'CTO and Co-Founder',
//       image: '/images/img_1.png',
//       circleColor: 'bg-mint-200',
//       cardColor: 'bg-gray-100',
//     },
//     {
//       name: 'Susan Peterson',
//       role: 'Marketing Directory',
//       image: '/images/img_1.png',
//       circleColor: 'bg-orange-200',
//       cardColor: 'bg-pink-100',
//     },
//     {
//       name: 'Tommy Barnes',
//       role: 'Designer',
//       image: '/images/img_1.png',
//       circleColor: 'bg-cyan-200',
//       cardColor: 'bg-blue-100',
//     },
//     {
//       name: 'Ron Jenson',
//       role: 'Senior Developer',
//       image: '/images/img_1.png',
//       circleColor: 'bg-teal-200',
//       cardColor: 'bg-green-100',
//     },
//     {
//       name: 'Pete Tompkins',
//       role: 'Web Developer',
//       image: '/images/img_1.png',
//       circleColor: 'bg-orange-300',
//       cardColor: 'bg-pink-100',
//     },
//     {
//       name: 'Kelly Richards',
//       role: 'Sales Manager',
//       image: '/images/img_1.png',
//       circleColor: 'bg-green-200',
//       cardColor: 'bg-yellow-100',
//     },
//     {
//       name: 'Alexis Jordan',
//       role: 'Affiliate Manager',
//       image: '/images/img_1.png',
//       circleColor: 'bg-yellow-200',
//       cardColor: 'bg-blue-100',
//     },
//   ];
  

// export default function TeamSection() {
//   return (
//     <section className="relative py-20 bg-white overflow-hidden">
//       {/* Top-right decorative blob */}

//       <div className="relative z-10 max-w-7xl mx-auto px-4">
//         <div className="text-left mb-12 relative">
//         {/* <div className="absolute top-0 right-0 w-48 h-48 bg-blue-100 rounded-bl-full z-0"></div> */}
//         <div 
//             className="hidden md:flex absolute top-0 md:right-[-2%] lg:right-[-12%] w-[400px] lg:w-[450px] h-[120px] bg-blue-50/50 z-0"
//             style={{ borderRadius: '15% 10% 0% 16% / 50% 0% 10% 46%' }}
//         ></div>

//           <p className="text-sm font-semibold text-blue-500 uppercase">Our Team</p>
//           <h2 className="text-3xl font-bold text-gray-900 mt-2">
//             An incredible team of <br /> amazing individuals
//           </h2>
//         </div>

//         <div className="grid grid-cols-2 gap-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-10">
//           {team.map((member, index) => (
//             <div
//               key={index}
//               className={`relative p-6 pt-10 rounded-tr-[60px] text-center`}
//             >
              
//               <div className="relative w-40 h-40 mx-auto mb-4">
//             {/* Blob Shape Background */}
//             <div
//                 className={`absolute inset-0 z-0 ${member.cardColor}`}
//                 style={{
//                 borderRadius: '43% 10% 49% 51% / 50% 0% 43% 48%',
//                 }}
//             ></div>

//             {/* Inner Circle with Padding from Blob */}
//             <div className="absolute inset-4 rounded-full z-10 flex items-center justify-center bg-white shadow-md">
//                 {/* Optional colored circle inside the white */}
//                 <div className={`w-full h-full rounded-full ${member.circleColor} flex items-center justify-center`}>
//                 {/* Profile Image */}
//                 <img
//                     src={member.image}
//                     alt={member.name}
//                     className="rounded-full object-cover w-48 h-32"
//                 />
//                 </div>
//             </div>
//             </div>

//               {/* Name & Role */}
//               <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
//               <p className="text-sm text-blue-600 font-medium">{member.role}</p>

//               {/* Social Icons */}
//               <div className="mt-2 flex justify-center space-x-3">
//                 <a href="#" className="text-gray-500 hover:text-blue-500">
//                   <Twitter size={18} />
//                 </a>
//                 <a href="#" className="text-gray-500 hover:text-gray-800">
//                   <Github size={18} />
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
