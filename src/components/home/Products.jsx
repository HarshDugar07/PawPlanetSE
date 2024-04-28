import React from 'react'
import prod1 from "../../assets/ress/1.webp"
import prod2 from "../../assets/ress/2.webp"
import prod3 from "../../assets/ress/3.webp"
import prod4 from "../../assets/ress/4.webp"
import prod5 from "../../assets/ress/5.webp"
import prod6 from "../../assets/ress/6.webp"
import ReactStars from 'react-stars'
import { render } from 'react-dom'

const products = [
   {
     id: 1,
     name: 'Fusion',
     category: 'UI Kit',
     href: '#',
     price: '$49',
     imageSrc: prod1,
     imageAlt:
       'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
   },{
      id: 1,
      name: 'Fusion',
      category: 'UI Kit',
      href: '#',
      price: '$49',
      imageSrc: prod2,
      imageAlt:
        'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
    },{
      id: 1,
      name: 'Fusion',
      category: 'UI Kit',
      href: '#',
      price: '$49',
      imageSrc: prod3,
      imageAlt:
        'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
    },{
      id: 1,
      name: 'Fusion',
      category: 'UI Kit',
      href: '#',
      price: '$49',
      imageSrc: prod3,
      imageAlt:
        'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
    },{
      id: 1,
      name: 'Fusion',
      category: 'UI Kit',
      href: '#',
      price: '$49',
      imageSrc: prod5,
      imageAlt:
        'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
    },{
      id: 1,
      name: 'Fusion',
      category: 'UI Kit',
      href: '#',
      price: '$49',
      imageSrc: prod6,
      imageAlt:
        'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
    },
   // More products...
 ]

const Products = () => {
   return (
      <div className="bg-white">
         <h1 className='text-[3rem] text-center mb-[-2rem]'
         >Have You Explored ?</h1>

        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          
          <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3">
            {products.map((product) => (
              <div key={product.id} className="relative group w-[19rem]">
                <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-white">
                  <img src={product.imageSrc} alt={product.imageAlt} className="object-center object-cover" />
                  <div className="flex items-end opacity-0 p-4 group-hover:opacity-100" aria-hidden="true">
                    <div className="w-full bg-white bg-opacity-75 backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-gray-900 text-center">
                      View Product
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    )
}

export default Products