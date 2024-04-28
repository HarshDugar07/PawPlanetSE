/* This example requires Tailwind CSS v2.0+ */
import React from 'react';

export default function Footer() {

const navigation = {
   solutions: [
     { name: 'Marketing', href: '#' },
     { name: 'Analytics', href: '#' },
     { name: 'Commerce', href: '#' },
     { name: 'Insights', href: '#' },
   ],
   support: [
     { name: 'Pricing', href: '#' },
     { name: 'Documentation', href: '#' },
     { name: 'Guides', href: '#' },
     { name: 'API Status', href: '#' },
   ],
   company: [
     { name: 'About', href: '#' },
     { name: 'Blog', href: '#' },
     { name: 'Jobs', href: '#' },
     { name: 'Press', href: '#' },
     { name: 'Partners', href: '#' },
   ],
   legal: [
     { name: 'Claim', href: '#' },
     { name: 'Privacy', href: '#' },
     { name: 'Terms', href: '#' },
   ],
   social: [
     {
       name: 'Facebook',
       href: '#',
       icon: (props) => (
         <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
           {/* Facebook icon SVG */}
         </svg>
       ),
     },
     // Include other social icons here
   ],
 };

   return (
     <footer className="bg-[#807182]" aria-labelledby="footer-heading">
       <h2 id="footer-heading" className="sr-only">
         Footer
       </h2>
       <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
         <div className="xl:grid xl:grid-cols-3 xl:gap-8">  
           <div className="space-y-8 xl:col-span-1">
             <img
               className="h-10"
               src="https://tailwindui.com/img/logos/workflow-mark-gray-300.svg"
               alt="Company name"
             />
             <p className="text-white text-base">
               Making the world a better place through constructing elegant hierarchies.
             </p>
             <div className="flex space-x-6">
               {navigation.social.map((item) => (
                 <a key={item.name} href={item.href} className="text-white hover:text-white">
                   <span className="sr-only">{item.name}</span>
                   <item.icon className="h-6 w-6" aria-hidden="true" />
                 </a>
               ))}
             </div>
           </div>
           <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
             <div className="md:grid md:grid-cols-2 md:gap-8">
               <div>
                 <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Solutions</h3>
                 <ul role="list" className="mt-4 space-y-4">
                   {navigation.solutions.map((item) => (
                     <li key={item.name}>
                       <a href={item.href} className="text-base text-white hover:text-gray-500">
                         {item.name}
                       </a>
                     </li>
                   ))}
                 </ul>
               </div>
               <div className="mt-12 md:mt-0">
                 <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Support</h3>
                 <ul role="list" className="mt-4 space-y-4">
                   {navigation.support.map((item) => (
                     <li key={item.name}>
                       <a href={item.href} className="text-base text-white hover:text-gray-500">
                         {item.name}
                       </a>
                     </li>
                   ))}
                 </ul>
               </div>
             </div>
             <div className="md:grid md:grid-cols-2 md:gap-8">
               <div>
                 <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Company</h3>
                 <ul role="list" className="mt-4 space-y-4">
                   {navigation.company.map((item) => (
                     <li key={item.name}>
                       <a href={item.href} className="text-base text-white hover:text-gray-500">
                         {item.name}
                       </a>
                     </li>
                   ))}
                 </ul>
               </div>
               <div className="mt-12 md:mt-0">
                 <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Legal</h3>
                 <ul role="list" className="mt-4 space-y-4">
                   {navigation.legal.map((item) => (
                     <li key={item.name}>
                       <a href={item.href} className="text-base text-white hover:text-gray-500">
                         {item.name}
                       </a>
                     </li>
                   ))}
                 </ul>
               </div>
             </div>
           </div>
         </div>
         <div className="mt-12 border-t border-gray-200 pt-8">
           <p className="text-base text-white xl:text-center">&copy; 2020 Workflow, Inc. All rights reserved.</p>
         </div>
       </div>
     </footer>
   )
}