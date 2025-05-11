
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const featuredPosts = [
  {
    title: 'Refreshing Designs',
    category: 'Resources',
    color: 'bg-purple-600',
    image: '/images/orange.png', // Replace with actual images
    description: 'Quench satisfying designs to help you stir up emotion and tell a story.',
  },
  {
    title: 'Healthier Lifestyle',
    category: 'Lifestyle',
    color: 'bg-blue-400',
    image: '/images/orange.png',
    description: 'Living a healthier lifestyle will help with your productivity and your mind-set.',
  },
  {
    title: 'Gaming Evolution',
    category: 'Entertainment',
    color: 'bg-yellow-400',
    image: '/images/orange.png',
    description: 'Learn about the evolution of gaming and how it started a revolution.',
  },
];

const posts = [
  {
    title: 'Best Workstations of the Year',
    category: 'Inspiration',
    color: 'bg-blue-600',
    image: '/images/workplace.jpg',
    description: 'Check out these inspiring workstations to get ideas on how to level-up your workstation.',
  },
  {
    title: 'Eating for Productivity',
    category: 'Food',
    color: 'bg-red-500',
    image: '/images/workplace.jpg',
    description: 'Learn how to be more disciplined in your diet and how you can maximize productivity.',
  },
  {
    title: 'A Design Mind-set',
    category: 'Resources',
    color: 'bg-indigo-600',
    image: '/images/workplace.jpg',
    description: 'Learn how to improve your eye for design.',
  },
];

export default function BlogShowcaseSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900">The Project Blog</h2>
          <p className="text-gray-600">Designs and layouts to help you with your app.</p>
        </div>

        {/* Featured posts */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, staggerChildren: 0.5 }}
        >
          {featuredPosts.map((post, index) => (
            <motion.div
              key={index}
              className={`${post.color} rounded-xl p-6 text-white flex flex-col justify-between`}
              initial={{ opacity: 0, scale: 0.9 }} // Initial state
              whileInView={{ opacity: 1, scale: 1 }} // Trigger when in view
              viewport={{ once: false, amount: 0.2 }} // Trigger when 20% of the item is in the viewport
              transition={{
                duration: 0.6,
                ease: 'easeOut',
                delay: index * 0.1, // Adding a small staggered delay for each item
              }} 
            >
              <div className="mt-6">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={500}
                  height={300}
                  className="rounded-lg object-cover"
                />
              </div>
              <div>
                <span className="uppercase text-xs font-semibold bg-white/80 px-2 py-1 rounded-full text-indigo-800">
                  {post.category}
                </span>
                <h3 className="text-2xl font-bold mt-4">{post.title}</h3>
                <p className="mt-2 text-sm">{post.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Regular posts */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, staggerChildren: 0.3 }}
        >
          {posts.map((post, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }} // Initial state
              whileInView={{ opacity: 1, scale: 1 }} // Trigger when in view
              viewport={{ once: false, amount: 0.2 }} // Trigger when 20% of the item is in the viewport
              transition={{
                duration: 0.6,
                ease: 'easeOut',
                delay: index * 0.1, // Adding a small staggered delay for each item
              }} 
            >
              <Image
                src={post.image}
                alt={post.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="pt-4 px-4 pb-1">
                <span
                  className={`inline-block ${post.color} text-white text-xs font-semibold px-2 py-1 rounded`}
                >
                  {post.category}
                </span>
                <h4 className="mt-2 font-bold text-gray-900">{post.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{post.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// // components/BlogShowcase.tsx
// import Image from 'next/image';

// const featuredPosts = [
//   {
//     title: 'Refreshing Designs',
//     category: 'Resources',
//     color: 'bg-purple-600',
//     image: '/images/orange.png', // Replace with actual images
//     description: 'Quench satisfying designs to help you stir up emotion and tell a story.',
//   },
//   {
//     title: 'Healthier Lifestyle',
//     category: 'Lifestyle',
//     color: 'bg-blue-400',
//     image: '/images/orange.png',
//     description: 'Living a healthier lifestyle will help with your productivity and your mind-set.',
//   },
//   {
//     title: 'Gaming Evolution',
//     category: 'Entertainment',
//     color: 'bg-yellow-400',
//     image: '/images/orange.png',
//     description: 'Learn about the evolution of gaming and how it started a revolution.',
//   },
// ];

// const posts = [
//   {
//     title: 'Best Workstations of the Year',
//     category: 'Inspiration',
//     color: 'bg-blue-600',
//     image: '/images/workplace.jpg',
//     description: 'Check out these inspiring workstations to get ideas on how to level-up your workstation.',
//   },
//   {
//     title: 'Eating for Productivity',
//     category: 'Food',
//     color: 'bg-red-500',
//     image: '/images/workplace.jpg',
//     description: 'Learn how to be more disciplined in your diet and how you can maximize productivity.',
//   },
//   {
//     title: 'A Design Mind-set',
//     category: 'Resources',
//     color: 'bg-indigo-600',
//     image: '/images/workplace.jpg',
//     description: 'Learn how to improve your eye for design.',
//   },
// ];

// export default function BlogShowcaseSection() {
//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="mb-10">
//           <h2 className="text-3xl font-bold text-gray-900">The Project Blog</h2>
//           <p className="text-gray-600">Designs and layouts to help you with your app.</p>
//         </div>

//         {/* Featured posts */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
//           {featuredPosts.map((post, index) => (
//             <div
//               key={index}
//               className={`${post.color} rounded-xl p-6 text-white flex flex-col justify-between`}
//             >
              
//               <div className="mt-6">
//                 <Image
//                   src={post.image}
//                   alt={post.title}
//                   width={500}
//                   height={300}
//                   className="rounded-lg object-cover"
//                 />
//               </div>
//               <div>
//                 <span className="uppercase text-xs font-semibold bg-white/80 px-2 py-1 rounded-full text-indigo-800">
//                   {post.category}
//                 </span>
//                 <h3 className="text-2xl font-bold mt-4">{post.title}</h3>
//                 <p className="mt-2 text-sm">{post.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Regular posts */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {posts.map((post, index) => (
//             <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
//               <Image
//                 src={post.image}
//                 alt={post.title}
//                 width={500}
//                 height={300}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="pt-4 px-4 pb-1">
//                 <span
//                   className={`inline-block ${post.color} text-white text-xs font-semibold px-2 py-1 rounded`}
//                 >
//                   {post.category}
//                 </span>
//                 <h4 className="mt-2 font-bold text-gray-900">{post.title}</h4>
//                 <p className="text-sm text-gray-600 mt-1">{post.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
