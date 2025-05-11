
import React from "react";

const BoostProductivityData = [
  { id: 1, text: "Maximize productivity and growth" },
  { id: 2, text: "Speed past your competition" },
  { id: 3, text: "Learn the top techniques" },
];

const AutomatedTasksData = [
  { id: 1, text: "Automated task management workflow" },
  { id: 2, text: "Detailed analytics for your data" },
  { id: 3, text: "Some awesome integrations" },
];

export default function EfficiencyHighlights() {
  return (
    <section className="w-full lg:w-[90%] m-auto px-4 py-12 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">

        {/* First Row */}
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4">
          {/* Image Section */}
          <div className="w-1/2 flex justify-center">
            <img
              src="/images/astro.png"
              alt="Boost productivity illustration"
              className="object-contain"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 flex justify-center items-center text-center md:text-left">
            <div>
              <h3 className="text-2xl font-bold">Boost Productivity</h3>
              <p className="text-gray-600 my-4">
                Build an atmosphere that creates productivity in your organization and your company culture.
              </p>
              <ul className="list-none text-gray-800 space-y-1">
                {BoostProductivityData.map((item) => (
                  <li key={item.id} className="flex items-center">
                    <span className="w-4 h-4 rounded-full bg-yellow-400 mr-2"></span>
                    <span className="text-sm text-gray-500">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between max-w-6xl mx-auto px-4">
          {/* Image Section */}
          <div className="w-1/2 flex justify-center">
            <img
              src="/images/astro.png"
              alt="Automated tasks illustration"
              className="object-contain"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 flex justify-center items-center text-center md:text-left">
            <div>
              <h3 className="text-2xl font-bold">Automated Tasks</h3>
              <p className="text-gray-600 my-4">
                Save time and money with our revolutionary services. We are leaders in the industry.
              </p>
              <ul className="list-none text-gray-800 space-y-1">
                {AutomatedTasksData.map((item) => (
                  <li key={item.id} className="flex items-center">
                    <span className="w-4 h-4 rounded-full bg-yellow-400 mr-2"></span>
                    <span className="text-sm text-gray-500">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

// import React from "react";
// const BoostProductivityData = [
//     {
//       id: 1,
//       text: "Maximize productivity and growth",
//     },
//     {
//       id: 2,
//       text: "Speed past your competition",
//     },
//     {
//       id: 3,
//       text: "Learn the top techniques",
//     },
//   ];

// const AutomatedTasksData = [
//     {
//       id: 1,
//       text: "Automated task management workflow",
//     },
//     {
//       id: 2,
//       text: "Detailed analytics for your data",
//     },
//     {
//       id: 3,
//       text: "Some awesome integrations",
//     },
//   ];

// export default function EfficiencyHighlights() {
//   return (
//     <section className="w-full lg:w-[90%] m-auto px-4 py-12 bg-white">
//       <div className="max-w-6xl mx-auto flex flex-col gap-12">
      

//         <div className="flex items-center justify-between max-w-6xl mx-auto px-4">
//             {/* Image Section */}
//             <div className="w-1/2 flex justify-center">
//                 <img src="/images/astro.png" alt="Boost Productivity" className="w-80 h-80 object-contain" />
//             </div>

//             {/* Text Section */}
//             <div className="w-1/2 flex justify-center items-center text-center md:text-left">
//                 <div>
//                 <h3 className="text-2xl font-bold mb-2">Boost Productivity</h3>
//                 <p className="text-gray-600 mb-2">
//                     Build an atmosphere that creates productivity in your organization and your company culture.
//                 </p>
//                 <ul className="list-none text-gray-800 space-y-1">
//                 {BoostProductivityData.map((item) => (
//                     <li key={item.id} className="flex items-center">
//                         <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 mr-2"></span>
//                         <span className="text-sm text-gray-500">{item.text}</span>
//                     </li>
//                     ))}
//                 </ul>
//                 </div>
//             </div>
//         </div>

//         {/* Second Row */}
//         <div className="flex md:flex-row-reverse items-center justify-between max-w-6xl mx-auto px-4">
//             {/* Image Section */}
//             <div className="w-1/2 flex justify-center">
//                 <img src="/images/astro.png" alt="Boost Productivity" className="w-80 h-80 object-contain" />
//             </div>

//             {/* Text Section */}
//             <div className="w-1/2 flex justify-center items-center text-center md:text-left">
//                 <div>
//                 <h3 className="text-2xl font-bold mb-2">Automated Tasks</h3>
//                 <p className="text-gray-600 mb-2">
//                     Save time and money with our revolutionary services. We are leaders in the industry.
//                 </p>
//                 <ul className="list-none text-gray-800 space-y-1">
//                 {AutomatedTasksData.map((item) => (
//                     <li key={item.id} className="flex items-center">
//                         <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 mr-2"></span>
//                         <span className="text-sm text-gray-500">{item.text}</span>
//                     </li>
//                     ))}
//                 </ul>
//                 </div>
//             </div>
//         </div>
//       </div>
//     </section>
//   );
// }
