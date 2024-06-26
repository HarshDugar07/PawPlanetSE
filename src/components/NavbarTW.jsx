import React, { useState, useEffect } from 'react'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import def from '../assets/default.jpeg'
import logo from "../assets/logo.png"
import { useLocation } from 'react-router-dom'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const NavbarTW = () => {

  const handleMenuItemClick = (item) => {
    setActiveMenuItem(item);
  };

  const location = useLocation();
  const [activeMenuItem, setActiveMenuItem] = useState('Home');

  useEffect(() => {
    const pathname = location.pathname;
    const menuItem = pathname === '/' ? 'Home' : pathname.substring(1);
    setActiveMenuItem(menuItem);
  }, [location.pathname]);

  return (
    <div>
      <Disclosure as="nav" className="bg-white shadow">
         {({ open }) => (
         <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
               <div className="relative flex justify-between h-16">
               <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                     <span className="sr-only">Open main menu</span>
                     {open ? (
                     <XIcon className="block h-6 w-6" aria-hidden="true" />
                     ) : (
                     <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                     )}
                  </Disclosure.Button>
               </div>
               <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  
               <div className='flex items-center'>
                  <img className="block lg:hidden h-16 w-auto" src={logo} alt="Workflow" />
                  <img className="hidden lg:block h-16 w-auto" src={logo} alt="Workflow" />
                  <div className="ml-2 text-lg font-semibold text-gray-800">Pawpals</div>
                  </div>

                 
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                     {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                     <a
                     href="/"
                     onClick={() => handleMenuItemClick('Home')}
                     className={classNames(
                       activeMenuItem === 'Home' ? 'border-indigo-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                       'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                     )}
                     >
                     Home
                     </a>
                     <a
                     href="/services"
                     onClick={() => handleMenuItemClick('Services')}
                     className={classNames(
                       activeMenuItem === 'Services' ? 'border-indigo-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                       'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                     )}
                     >
                     Services
                     </a>
                     <a
                     href="/adoption"
                     onClick={() => handleMenuItemClick('Adoption')}
                     className={classNames(
                       activeMenuItem === 'Adoption' ? 'border-indigo-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                       'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                     )}
                     >
                     Adoption
                     </a>
                     <a
                     href="/"
                     onClick={() => handleMenuItemClick('Vet')}
                     className={classNames(
                       activeMenuItem === 'Vet' ? 'border-indigo-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                       'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                     )}
                     >
                     Vet
                     </a>
                     <a
                     href="/about"
                     onClick={() => handleMenuItemClick('About')}
                     className={classNames(
                       activeMenuItem === 'About' ? 'border-indigo-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                       'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                     )}
                     >
                     About
                     </a>
                  </div>
               </div>
               <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                     type="button"
                     className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                     <span className="sr-only">View notifications</span>
                     <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-3 relative">
                     <div>
                     <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span className="sr-only">Open user menu</span>
                        <img
                           className="h-8 w-8 rounded-full"
                           src={def}
                           alt=""
                        />
                     </Menu.Button>
                     </div>
                     <Transition
                     as={Fragment}
                     enter="transition ease-out duration-200"
                     enterFrom="transform opacity-0 scale-95"
                     enterTo="transform opacity-100 scale-100"
                     leave="transition ease-in duration-75"
                     leaveFrom="transform opacity-100 scale-100"
                     leaveTo="transform opacity-0 scale-95"
                     >
                     <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                           {({ active }) => (
                           <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                           >
                              Your Profile
                           </a>
                           )}
                        </Menu.Item>
                        <Menu.Item>
                           {({ active }) => (
                           <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                           >
                              Settings
                           </a>
                           )}
                        </Menu.Item>
                        <Menu.Item>
                           {({ active }) => (
                           <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                           >
                              Sign out
                           </a>
                           )}
                        </Menu.Item>
                     </Menu.Items>
                     </Transition>
                  </Menu>
               </div>
               </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
               <div className="pt-2 pb-4 space-y-1">
               {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
               <Disclosure.Button
                  as="a"
                  href="#"
                  className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
               >
                  Dashboard
               </Disclosure.Button>
               <Disclosure.Button
                  as="a"
                  href="#"
                  className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
               >
                  Team
               </Disclosure.Button>
               <Disclosure.Button
                  as="a"
                  href="#"
                  className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
               >
                  Projects
               </Disclosure.Button>
               <Disclosure.Button
                  as="a"
                  href="#"
                  className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
               >
                  Calendar
               </Disclosure.Button>
               </div>
            </Disclosure.Panel>
         </>
         )}
      </Disclosure>

    </div>
  )
}

export default NavbarTW








// import React from 'react'
// import { Fragment } from 'react'
// import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
// import def from '../assets/default.jpeg'
// import logo from "../assets/logo.png"

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// const NavbarTW = () => {
//   return (
//     <div>
      
//       <Disclosure as="nav" className="bg-white shadow">
//          {({ open }) => (
//          <>
//             <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
//                <div className="relative flex justify-between h-16">
//                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//                   {/* Mobile menu button */}
//                   <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
//                      <span className="sr-only">Open main menu</span>
//                      {open ? (
//                      <XIcon className="block h-6 w-6" aria-hidden="true" />
//                      ) : (
//                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
//                      )}
//                   </Disclosure.Button>
//                </div>
//                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
//                   <div className="flex-shrink-0 flex items-center">
//                      <img
//                      className="block lg:hidden h-8 w-auto"
//                      src={logo}
//                      alt="Workflow"
//                      />
//                      <img
//                      className="hidden lg:block h-8 w-auto"
//                      src={logo} alt="Workflow"
//                      />
//                   </div>
//                   <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
//                      {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
//                      <a
//                      href="/"
//                      className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
//                      >
//                      Home
//                      </a>
//                      <a
//                      href="/services"
//                      className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
//                      >
//                      Services
//                      </a>
//                      <a
//                      href="/adoption"
//                      className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
//                      >
//                      Adoption
//                      </a>
//                      <a
//                      href="/"
//                      className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
//                      >
//                      Vet
//                      </a>
//                      <a
//                      href="/about"
//                      className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
//                      >
//                      About
//                      </a>
//                   </div>
//                </div>
//                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//                   <button
//                      type="button"
//                      className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                   >
//                      <span className="sr-only">View notifications</span>
//                      <BellIcon className="h-6 w-6" aria-hidden="true" />
//                   </button>

//                   {/* Profile dropdown */}
//                   <Menu as="div" className="ml-3 relative">
//                      <div>
//                      <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
//                         <span className="sr-only">Open user menu</span>
//                         <img
//                            className="h-8 w-8 rounded-full"
//                            src={def}
//                            alt=""
//                         />
//                      </Menu.Button>
//                      </div>
//                      <Transition
//                      as={Fragment}
//                      enter="transition ease-out duration-200"
//                      enterFrom="transform opacity-0 scale-95"
//                      enterTo="transform opacity-100 scale-100"
//                      leave="transition ease-in duration-75"
//                      leaveFrom="transform opacity-100 scale-100"
//                      leaveTo="transform opacity-0 scale-95"
//                      >
//                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
//                         <Menu.Item>
//                            {({ active }) => (
//                            <a
//                               href="#"
//                               className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
//                            >
//                               Your Profile
//                            </a>
//                            )}
//                         </Menu.Item>
//                         <Menu.Item>
//                            {({ active }) => (
//                            <a
//                               href="#"
//                               className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
//                            >
//                               Settings
//                            </a>
//                            )}
//                         </Menu.Item>
//                         <Menu.Item>
//                            {({ active }) => (
//                            <a
//                               href="#"
//                               className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
//                            >
//                               Sign out
//                            </a>
//                            )}
//                         </Menu.Item>
//                      </Menu.Items>
//                      </Transition>
//                   </Menu>
//                </div>
//                </div>
//             </div>

//             <Disclosure.Panel className="sm:hidden">
//                <div className="pt-2 pb-4 space-y-1">
//                {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
//                <Disclosure.Button
//                   as="a"
//                   href="#"
//                   className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
//                >
//                   Dashboard
//                </Disclosure.Button>
//                <Disclosure.Button
//                   as="a"
//                   href="#"
//                   className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
//                >
//                   Team
//                </Disclosure.Button>
//                <Disclosure.Button
//                   as="a"
//                   href="#"
//                   className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
//                >
//                   Projects
//                </Disclosure.Button>
//                <Disclosure.Button
//                   as="a"
//                   href="#"
//                   className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
//                >
//                   Calendar
//                </Disclosure.Button>
//                </div>
//             </Disclosure.Panel>
//          </>
//          )}
//       </Disclosure>

//     </div>
//   )
// }

// export default NavbarTW