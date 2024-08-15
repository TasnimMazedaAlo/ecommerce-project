import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import pro1 from './img/pro1.svg'
import pro2 from './img/pro2.svg'
import pro3 from './img/pro3.svg'
import pro4 from './img/pro4.svg'
import pro5 from './img/pro5.svg'
import pro6 from './img/pro6.svg'
import pro7 from './img/pro7.svg'
import pro8 from './img/pro88.png'
import { IoIosStar } from "react-icons/io";

const Explore = () => {
  return (
    <div>
        <section>
            <div className='md:mx-10 mx-3 lg:my-24 md:my-14 my-7'>
                <div className='flex items-center gap-2'>
                <span className='md:w-4 md:h-8 w-2 h-4 rounded-md bg-amber-800'></span>
                <div className='text-amber-800 font-bold'>Our Products</div>
                </div>


                <div  className='md:flex justify-between items-center'>
                    <div className='md:text-3xl text-xl font-bold text-start'>Explore Our Products</div>

                    
                    <div className='hidden md:block'>
                        <button className='px-4 py-4 rounded-full bg-slate-200'><FaArrowLeft /></button>
                        <button className='px-4 py-4 rounded-full bg-slate-200 ml-2'><FaArrowRight /></button>
                    </div>
                </div>




                <div className='flex justify-center'>
                    <div className='grid lg:grid-cols-4 grid-cols-2 gap-4 my-10'>


                    <div>
                  <div className='bg-slate-100 py-4 px-3 rounded  md:w-[270px] md:h-[240px] w-[150px] h-[170px]'>
                   

                    <div className='hidden md:block'>
                    <div className='flex justify-center'><img src={pro1} alt="" /></div>
                    </div>
                   <div className='md:hidden block'>
                   <div className='flex justify-center'><img className='w-[100px] h-[100px]' src={pro1} alt="" /></div>
                   </div>
                   </div>
                  


                   <div className='font-semibold text-start py-2'>Breed Dry Dog Food</div>
                   <div className='flex gap-3 items-center'>
                    <span className='text-[#DB4444] font-bold text-xl'>$100</span>
                    <span className='line-through'>$160</span>
                   </div>

                   <div className='flex items-center'><IoIosStar className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <span className='pl-2'> (40) </span></div>
                  </div>



                  <div>
                  <div className='bg-slate-100 py-4 px-3 rounded  md:w-[270px] md:h-[240px] w-[150px] h-[170px]'>
                   

                    <div className='hidden md:block'>
                    <div className='flex justify-center'><img src={pro2} alt="" /></div>
                    </div>
                   <div className='md:hidden block'>
                   <div className='flex justify-center'><img className='w-[100px] h-[100px]' src={pro2} alt="" /></div>
                   </div>
                   </div>
                  


                   <div className='font-semibold text-start py-2'>GP11 Shooter USB Gamepad</div>
                   <div className='flex gap-3 items-center'>
                    <span className='text-[#DB4444] font-bold text-xl'>$350</span>
                    <span className='line-through'>$460</span>
                   </div>

                   <div className='flex items-center'><IoIosStar className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <span className='pl-2'> (80) </span></div>
                  </div>



                  <div>
                  <div className='bg-slate-100 py-4 px-3 rounded  md:w-[270px] md:h-[240px] w-[150px] h-[170px]'>
                   

                    <div className='hidden md:block'>
                    <div className='flex justify-center'><img src={pro3} alt="" /></div>
                    </div>
                   <div className='md:hidden block'>
                   <div className='flex justify-center'><img className='w-[100px] h-[100px]' src={pro3} alt="" /></div>
                   </div>
                   </div>
                  


                   <div className='font-semibold text-start py-2'>Jr. Zoom Soccer Cleats</div>
                   <div className='flex gap-3 items-center'>
                    <span className='text-[#DB4444] font-bold text-xl'>$9350</span>
                    <span className='line-through'>$1460</span>
                   </div>

                   <div className='flex items-center'><IoIosStar className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <span className='pl-2'> (80) </span></div>
                  </div>



                  <div>
                  <div className='bg-slate-100 py-4 px-3 rounded  md:w-[270px] md:h-[240px] w-[150px] h-[170px]'>
                   

                    <div className='hidden md:block'>
                    <div className='flex justify-center'><img src={pro4} alt="" /></div>
                    </div>
                   <div className='md:hidden block'>
                   <div className='flex justify-center'><img className='w-[100px] h-[100px]' src={pro4} alt="" /></div>
                   </div>
                   </div>
                  


                   <div className='font-semibold text-start py-2'>Kids Electric Car</div>
                   <div className='flex gap-3 items-center'>
                    <span className='text-[#DB4444] font-bold text-xl'>$350</span>
                    <span className='line-through'>$460</span>
                   </div>

                   <div className='flex items-center'><IoIosStar className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <span className='pl-2'> (80) </span></div>
                  </div>


                  <div>
                  <div className='bg-slate-100 py-4 px-3 rounded  md:w-[270px] md:h-[240px] w-[150px] h-[170px]'>
                   

                    <div className='hidden md:block'>
                    <div className='flex justify-center'><img src={pro5} alt="" /></div>
                    </div>
                   <div className='md:hidden block'>
                   <div className='flex justify-center'><img className='w-[100px] h-[100px]' src={pro5} alt="" /></div>
                   </div>
                   </div>
                  


                   <div className='font-semibold text-start py-2'>ASUS FHD Gaming Laptop</div>
                   <div className='flex gap-3 items-center'>
                    <span className='text-[#DB4444] font-bold text-xl'>$750</span>
                    <span className='line-through'>$860</span>
                   </div>

                   <div className='flex items-center'><IoIosStar className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <span className='pl-2'> (80) </span></div>
                  </div>


                  <div>
                  <div className='bg-slate-100 py-4 px-3 rounded  md:w-[270px] md:h-[240px] w-[150px] h-[170px]'>
                   

                    <div className='hidden md:block'>
                    <div className='flex justify-center'><img src={pro6} alt="" /></div>
                    </div>
                   <div className='md:hidden block'>
                   <div className='flex justify-center'><img className='w-[100px] h-[100px]' src={pro6} alt="" /></div>
                   </div>
                   </div>
                  


                   <div className='font-semibold text-start py-2'>CANON EOS DSLR Camera</div>
                   <div className='flex gap-3 items-center'>
                    <span className='text-[#DB4444] font-bold text-xl'>$350</span>
                    <span className='line-through'>$460</span>
                   </div>

                   <div className='flex items-center'><IoIosStar className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <span className='pl-2'> (80) </span></div>
                  </div>



                  <div>
                  <div className='bg-slate-100 py-4 px-3 rounded  md:w-[270px] md:h-[240px] w-[150px] h-[170px]'>
                   

                    <div className='hidden md:block'>
                    <div className='flex justify-center'><img src={pro7} alt="" /></div>
                    </div>
                   <div className='md:hidden block'>
                   <div className='flex justify-center'><img className='w-[100px] h-[100px]' src={pro7} alt="" /></div>
                   </div>
                   </div>
                  


                   <div className='font-semibold text-start py-2'>Breed Dry Dog Food</div>
                   <div className='flex gap-3 items-center'>
                    <span className='text-[#DB4444] font-bold text-xl'>$150</span>
                    <span className='line-through'>$260</span>
                   </div>

                   <div className='flex items-center'><IoIosStar className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <span className='pl-2'> (80) </span></div>
                  </div>


                  <div>
                  <div className='bg-slate-100 py-4 px-3 rounded  md:w-[270px] md:h-[240px] w-[150px] h-[170px]'>
                   

                    <div className='hidden md:block'>
                    <div className='flex justify-center'><img src={pro8} alt="" /></div>
                    </div>
                   <div className='md:hidden block'>
                   <div className='flex justify-center'><img className='w-[100px] h-[100px]' src={pro8} alt="" /></div>
                   </div>
                   </div>
                  


                   <div className='font-semibold text-start py-2'>Mixiu Lip Scru Cream – 11.5 G</div>
                   <div className='flex gap-3 items-center'>
                    <span className='text-[#DB4444] font-bold text-xl'>$99</span>
                    <span className='line-through'>$260</span>
                   </div>

                   <div className='flex items-center'><IoIosStar className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <span className='pl-2'> (80) </span></div>
                  </div>







                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Explore