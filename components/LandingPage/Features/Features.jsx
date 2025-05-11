'use client'
import {
  BadgeCheck,
  Bell,
  Package,
  Wrench,
  Blocks,
  Percent,
} from 'lucide-react';
import { motion } from 'framer-motion'; // Importing framer-motion for animations

const features = [
  {
    icon: BadgeCheck,
    title: 'Certifications',
    description: 'Each of our plan will provide you and your team with certifications.',
  },
  {
    icon: Bell,
    title: 'Notifications',
    description: 'Send out notifications to all your customers to keep them engaged.',
  },
  {
    icon: Package,
    title: 'Bundles',
    description: 'High-quality bundles of awesome tools to help you out.',
  },
  {
    icon: Wrench,
    title: 'Developer Tools',
    description: 'Developer tools to help grow your application and keep it up-to-date.',
  },
  {
    icon: Blocks,
    title: 'Building Blocks',
    description: 'The right kind of building blocks to take your company to the next level.',
  },
  {
    icon: Percent,
    title: 'Coupons',
    description: 'Coupons system to provide special offers and discounts for your app.',
  },
];

export default function Features() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Features</h2>
        <p className="text-gray-600 mb-10">Check out our list of awesome features below.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition"
              initial={{ opacity: 0, scale: 0.95 }} // Initial state
              whileInView={{ opacity: 1, scale: 1 }} // Final state when in view
              viewport={{ once: false }} // Trigger once when it enters the viewport
              transition={{ duration: 0.9, ease: 'easeInOut' }} // Duration and easing for animation
            >
              <div className="mb-4 flex justify-center">
                <div className="bg-blue-500 p-3 rounded-full">
                  <Icon size={32} className="text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
              <p className="text-gray-600 mt-2">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}