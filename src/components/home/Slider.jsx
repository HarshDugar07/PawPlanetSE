import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import rev1 from '../../assets/ress(1)/a.png';
import rev2 from '../../assets/ress(1)/b.png';
import rev3 from '../../assets/ress(1)/c.avif';
import rev4 from '../../assets/ress(1)/d.avif'; 
import rev5 from '../../assets/ress(1)/e.avif';  
import rev6 from '../../assets/ress(1)/f.png';
import ReactStars from 'react-stars';  
import { render } from 'react-dom';

const Slider = () => {
  useEffect(() => {
    const swiper = new Swiper('.swiper', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      },
      keyboard: {
        enabled: true,
      },
      mousewheel: {
        thresholdDelta: 70,
      },
      spaceBetween: 30,
      loop: false,
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });

    swiper.slideTo(1, false, false);

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <main>

      <h1 className='text-[3rem] font-light text-center mb-[2.5rem]'
      >Hear From Our Customers</h1>

      <div className="swiper">
        <div className="swiper-wrapper">

          <div className="swiper-slide relative h-[40rem]  bg-richblack-5">
            <div className="swiper-slide-img ">
              <img src={rev6} alt="" className='w-full rounded-md'/>
            
            </div>
            <div className="swiper-slide-content">
              <div>
               
              <p className='mt-[1.5rem] mb-[2.5rem] px-5'>Impressed with the vet services! I was able to quickly find a vet, book an appointment, and even fill out forms beforehand through the app. The vet was knowledgeable and gave great care to my pet. Will continue to use this app for all .</p>
               

               <ReactStars
                  count={5}
                  value={5}
                  edit={false}
                  size={50}
                  color2={'#ffd700'} 
                  className='ml-[70px] absolute bottom-0'
               />

              </div>
            </div>
          </div>


          <div className="swiper-slide bg-richblack-5" >
             <div className="swiper-slide-img ">
               <img src={rev4} alt="" className='w-full rounded-md'/>
         
            </div>
            <div className="swiper-slide-content">
              <div>
                <p className='mt-[1.5rem] mb-[2.5rem] px-5'>Fantastic experience! The app made scheduling my pet's grooming a breeze. The groomers were professional and caring, and my furry friend looked amazing afterward. Definitely my go-to for pet care needs!</p>


                <ReactStars
                  count={5}
                  value={5}
                  edit={false}
                  size={50}
                  color2={'#ffd700'} 
                  className='ml-[70px]'
               />
              </div>
            </div>
          </div>


          <div className="swiper-slide  bg-richblack-5">
            <div className="swiper-slide-img">
               <img src={rev3} alt="" className='w-full rounded-md'/>
         
            </div>
            <div className="swiper-slide-content">
              <div>
                <p className='mt-[1.5rem] mb-[2.5rem] px-5'>Convenient and reliable! I used the app to book a pet sitting service while I was away, and I couldn't be happier. The updates and photos they sent reassured me that my pet was in good hands. Highly recommend!</p>
               

                <ReactStars
                  count={5}
                  value={5}
                  edit={false}
                  size={50}
                  color2={'#ffd700'} 
                  className='ml-[70px]'
               />
              </div>
            </div>
          </div>


          <div className="swiper-slide  bg-richblack-5 ">
            <div className="swiper-slide-img">
               <img src={rev5 } alt="" className='w-full rounded-md'/>
     
            </div>
            <div className="swiper-slide-content">
              <div>
                <p className='mt-[1.5rem] mb-[2.5rem] px-5'>Impressed with the vet services! I was able to quickly find a vet, book an appointment, and even fill out forms beforehand through the app. The vet was knowledgeable and gave great care to my pet. Will continue to use this app for all .</p>


                <ReactStars
                  count={5}
                  value={5}
                  edit={false}
                  size={50}
                  color2={'#ffd700'} 
                  className='ml-[70px]'
               />
              </div>
            </div>
          </div>

          
          <div className="swiper-slide  bg-richblack-5">
            <div className="swiper-slide-img">
              <img src={rev2} alt="" className='w-full rounded-md'/>
    
            </div>
            <div className="swiper-slide-content">
              <div>
              <p className='mt-[1.5rem] mb-[2.5rem] px-5'>Impressed with the vet services! I was able to quickly find a vet, book an appointment, and even fill out forms beforehand through the app. The vet was knowledgeable and gave great care to my pet. Will continue to use this app for all .</p>
               
                <ReactStars
                  count={5}
                  value={5}
                  edit={false}
                  size={50}
                  color2={'#ffd700'} 
                  className='ml-[70px]'
               />
              </div>
            </div>
          </div>


          <div className="swiper-slide  bg-richblack-5">
            <div className="swiper-slide-img">
               <img src={rev1} alt="" className='w-full  rounded-md'/>
     
            </div>
            <div className="swiper-slide-content">
              <div>
                <p className='mt-[1.5rem] mb-[2.5rem] px-5'>Fantastic experience! The app made scheduling my pet's grooming a breeze. The groomers were professional and caring, and my furry friend looked amazing afterward. Definitely my go-to for pet care needs!</p>

                <ReactStars
                  count={5}
                  value={5}
                  edit={false}
                  size={50}
                  color2={'#ffd700'} 
                  className='ml-[70px]'
               />
              </div>
            </div>
          </div>  
          
        </div>
      </div>
    </main>
  );
}

export default Slider;
