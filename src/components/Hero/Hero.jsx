import React from 'react'
import { Carousel } from "flowbite-react";
import pic1 from './img/pic1.webp'
import pic2 from './img/pic2.webp'
import pic3 from './img/pic3.webp'
import pic4 from './img/pic4.webp'
import pic5 from './img/pic5.webp'

const Hero = () => {
  return (
    <div className='container mx-auto'>
        <section>
            <div className='md:mx-5 md:flex '>
               <div className='hidden md:block'>
               <div className='text-start font-semibold w-[180px] '>
                    <div className='py-5 '>
                    <div className='pt-5'>Woman’s Fashion</div>
                    <div className='lg:py-5 md:py-2'>Men’s Fashion</div>
                    <div>Electronics</div>
                    <div  className='lg:py-5 md:py-2'>Home & Lifestyle</div>
                    <div>Medicine</div>
                    <div  className='lg:py-5 md:py-2'>Sports & Outdoor</div>
                    <div>Baby’s & Toys</div>
                    <div  className='lg:py-5 md:py-2'>Groceries & Pets</div>
                    <div>Health & Beauty</div>
                    </div>
                </div>
               </div>


            <div className='w-full py-5 md:pl-5 md:border-l'>
                <div className="h-[200px] sm:h-[300px] xl:h-[500px] 2xl:h-[600px]">
                    <Carousel pauseOnHover>
                        <img src={pic3} alt="..." />
                        <img src={pic2} alt="..." />
                        <img src={pic1} alt="..." />
                        <img src={pic4} alt="..." />
                        <img src={pic5} alt="..." />
                    </Carousel>
                </div>
            </div>


            </div>

            
            <div className='md:hidden block'>
                <div className='text-xs'>
               <span> Woman’s Fashion ||</span>
               <span className='px-2'>Men’s Fashion ||</span>
               <span>Electronics ||</span>
               <span  className='px-2'>Home & Lifestyle ||</span>
               <span>Medicine ||</span>
               <span  className='px-2'>Sports & Outdoor ||</span>
               <span>Baby’s & Toys ||</span>
               <span  className='px-2'>Groceries & Pets ||</span>
               <span>Health & Beauty ||</span>
                </div>
               </div>
           



        </section>
    </div>
  )
}

export default Hero