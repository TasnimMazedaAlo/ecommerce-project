import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import pro1 from './img/pro1.svg'
import pro2 from './img/pro2.svg'
import pro3 from './img/pro3.svg'
import pro4 from './img/pro4.svg'

const BestSelling = () => {
  return (
    <div>
        <section>
            <div className='md:mx-10 mx-3 lg:my-24 md:my-14 my-7'>
               <div className='flex items-center gap-2'>
                    <span className='md:w-4 md:h-8 w-2 h-4 rounded-md bg-amber-800'></span>
                    <div className='text-amber-800 font-bold'>This Month</div>
                </div>

                <div className='flex justify-between'>
                    <div className='md:text-3xl text-xl font-bold text-start'>Best Selling Products</div>
                    <div className='hidden md:block'><button className='px-5 py-2 rounded-xl bg-amber-800 hover:bg-amber-900 duration-700 text-slate-100'>View All</button></div>
                </div>





                <div className='flex justify-center'>
                    <div className='grid lg:grid-cols-4 grid-cols-2 gap-4 my-10'>


                    <div>
                  <div className='bg-slate-100 py-4 px-3 rounded  md:w-[270px] md:h-[240px] w-[150px] h-[170px]'>
                   <div className='flex justify-between'>
                        <button className='px-2 rounded-md bg-amber-700 text-slate-100 font-semibold md:text-base text-xs'>-25%</button>
                        <span className='px-2 py-2 rounded-full bg-white'><FaRegHeart  /></span>
                    </div>

                    <div className='hidden md:block'>
                    <div className='flex justify-center'><img src={pro4} alt="" /></div>
                    </div>
                   <div className='md:hidden block'>
                   <div className='flex justify-center'><img className='w-[100px] h-[100px]' src={pro4} alt="" /></div>
                   </div>
                   </div>
                  


                   <div className='font-semibold text-start py-2'>The north coat</div>
                   <div className='flex gap-3 items-center'>
                    <span className='text-[#DB4444] font-bold text-xl'>$260</span>
                    <span className='line-through'>$360</span>
                   </div>

                   <div className='flex items-center'><IoIosStar className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <span className='pl-2'> (65) </span></div>
                  </div>



                  <div>
                  <div className='bg-slate-100 py-4 px-3 rounded  md:w-[270px] md:h-[240px] w-[150px] h-[170px]'>
                   <div className='flex justify-between'>
                        <button className='px-2 rounded-md bg-amber-700 text-slate-100 font-semibold md:text-base text-xs'>-25%</button>
                        <span className='px-2 py-2 rounded-full bg-white'><FaRegHeart  /></span>
                    </div>

                    <div className='hidden md:block'>
                    <div className='flex justify-center'><img src={pro3} alt="" /></div>
                    </div>
                   <div className='md:hidden block'>
                   <div className='flex justify-center'><img className='w-[100px] h-[100px]' src={pro3} alt="" /></div>
                   </div>
                   </div>
                  


                   <div className='font-semibold text-start py-2'>Gucci duffle bag</div>
                   <div className='flex gap-3 items-center'>
                    <span className='text-[#DB4444] font-bold text-xl'>$960</span>
                    <span className='line-through'>$1160</span>
                   </div>

                   <div className='flex items-center'><IoIosStar className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <span className='pl-2'> (65) </span></div>
                  </div>




                  <div>
                  <div className='bg-slate-100 py-4 px-3 rounded  md:w-[270px] md:h-[240px] w-[150px] h-[170px]'>
                   <div className='flex justify-between'>
                        <button className='px-2 rounded-md bg-amber-700 text-slate-100 font-semibold md:text-base text-xs'>-25%</button>
                        <span className='px-2 py-2 rounded-full bg-white'><FaRegHeart  /></span>
                    </div>

                    <div className='hidden md:block'>
                    <div className='flex justify-center'><img src={pro2} alt="" /></div>
                    </div>
                   <div className='md:hidden block'>
                   <div className='flex justify-center'><img className='w-[100px] h-[100px]' src={pro2} alt="" /></div>
                   </div>
                   </div>
                  


                   <div className='font-semibold text-start py-2'>RGB liquid CPU Cooler</div>
                   <div className='flex gap-3 items-center'>
                    <span className='text-[#DB4444] font-bold text-xl'>$160</span>
                    <span className='line-through'>$170</span>
                   </div>

                   <div className='flex items-center'><IoIosStar className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <span className='pl-2'> (75) </span></div>
                  </div>



                  <div>
                  <div className='bg-slate-100 py-4 px-3 rounded  md:w-[270px] md:h-[240px] w-[150px] h-[170px]'>
                   <div className='flex justify-between'>
                        <button className='px-2 rounded-md bg-amber-700 text-slate-100 font-semibold md:text-base text-xs'>-15%</button>
                        <span className='px-2 py-2 rounded-full bg-white'><FaRegHeart  /></span>
                    </div>

                    <div className='hidden md:block'>
                    <div className='flex justify-center'><img src={pro1} alt="" /></div>
                    </div>
                   <div className='md:hidden block'>
                   <div className='flex justify-center'><img className='w-[100px] h-[100px]' src={pro1} alt="" /></div>
                   </div>
                   </div>
                  


                   <div className='font-semibold text-start py-2'>Small BookSelf</div>
                   <div className='flex gap-3 items-center'>
                    <span className='text-[#DB4444] font-bold text-xl'>$260</span>
                    <span className='line-through'>$370</span>
                   </div>

                   <div className='flex items-center'><IoIosStar className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <span className='pl-2'> (75) </span></div>
                  </div>

                    </div>
                </div>

                <div className='md:hidden block'><button className='px-5 py-2 rounded-xl bg-amber-800 hover:bg-amber-900 duration-700 text-slate-100'>View All</button></div>

            </div>
        </section>
    </div>
  )
}

export default BestSelling