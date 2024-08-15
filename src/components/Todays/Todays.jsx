import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import product4 from './img/product4.svg'
import product1 from './img/product1.svg'
import product2 from './img/producy2.svg'
import product3 from './img/product3.svg'
import { FaRegHeart } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

const Todays = () => {
  return (
    <div className='container mx-auto'>
        <section>
            <div className='md:mx-10 mx-3 lg:my-24 md:my-14 my-7'>
                <div className='flex items-center gap-2'>
                    <span className='md:w-4 md:h-8 w-2 h-4 rounded-md bg-amber-800'></span>
                    <div className='text-amber-800 font-bold'>Today's</div>
                </div>

                <div className='md:flex justify-between items-center'>
                    <div className='md:text-3xl text-xl font-bold text-start'>Flash Sales</div>

                    <div className='grid grid-cols-4 md:mx-0 mx-7 md:my-0 my-3'>
                        <div className='flex items-center md:gap-3 gap-2'>
                            <div>
                                <div className='font-semibold text-xs'>Days</div>
                                <div className='md:text-2xl font-bold'>03</div>
                            </div>
                            <div className='text-amber-800 font-bold'>:</div>
                        </div>

                        <div className='flex items-center md:gap-3 gap-2'>
                            <div>
                                <div className='font-semibold text-xs'>Hours</div>
                                <div className='md:text-2xl font-bold'>23</div>
                            </div>
                            <div className='text-amber-800 font-bold'>:</div>
                        </div>

                        <div className='flex items-center md:gap-3 gap-2'>
                            <div>
                                <div className='font-semibold text-xs'>Minutes</div>
                                <div className='md:text-2xl font-bold'>19</div>
                            </div>
                            <div className='text-amber-800 font-bold'>:</div>
                        </div>

                        <div className='flex items-center md:gap-3 gap-2'>
                            <div>
                                <div className='font-semibold text-xs'>Seconds</div>
                                <div className='md:text-2xl font-bold'>26</div>
                            </div>
                            <div className='text-amber-800 font-bold'>:</div>
                        </div>
                        
                    </div>



                    <div className='hidden md:block'>
                        <button className='px-4 py-4 rounded-full bg-slate-200'><FaArrowLeft /></button>
                        <button className='px-4 py-4 rounded-full bg-slate-200 ml-2'><FaArrowRight /></button>
                    </div>
                </div>



            <div className='flex justify-center'>
                <div className='grid lg:grid-cols-4 grid-cols-2 gap-4 my-10 md:ml-0 ml-5'>
                  <div>
                  <div className='bg-slate-100 py-4 px-3 rounded  md:w-[270px] md:h-[240px] w-[150px] h-[170px]'>
                   <div className='flex justify-between'>
                        <button className='px-2 rounded-md bg-amber-700 text-slate-100 font-semibold md:text-base text-xs'>-25%</button>
                        <span className='px-2 py-2 rounded-full bg-white'><FaRegHeart  /></span>
                    </div>

                    <div className='hidden md:block'>
                    <div className='flex justify-center'><img src={product4} alt="" /></div>
                    </div>
                   <div className='md:hidden block'>
                   <div className='flex justify-center'><img className='w-[100px] h-[100px]' src={product4} alt="" /></div>
                   </div>
                   </div>
                  


                   <div className='font-semibold text-start py-2'>HAVIT HV-G92 Gamepad</div>
                   <div className='flex gap-3 items-center'>
                    <span className='text-[#DB4444] font-bold text-xl'>$120</span>
                    <span className='line-through'>$160</span>
                   </div>

                   <div className='flex items-center'><IoIosStar className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <span className='pl-2'> (60) </span></div>
                  </div>



                  <div>
                  <div className='bg-slate-100 py-4 px-3 rounded  md:w-[270px] md:h-[240px]  w-[150px] h-[170px]'>
                   <div className='flex justify-between'>
                        <button className='px-2 rounded-md bg-amber-700 text-slate-100 font-semibold  md:text-base text-xs'>-40%</button>
                        <span className='px-2 py-2 rounded-full bg-white'><FaRegHeart  /></span>
                    </div>

                    <div className='hidden md:block'>
                    <div className='flex justify-center'><img src={product1} alt="" /></div>
                    </div>
                    <div className='md:hidden block'>
                   <div className='flex justify-center'><img className='w-[100px] h-[100px]' src={product1} alt="" /></div>
                   </div>
                   </div>


                   <div className='font-semibold text-start py-2'>S-Series Comfort Chair </div>
                   <div className='flex gap-3 items-center'>
                    <span className='text-[#DB4444] font-bold text-xl'>$135</span>
                    <span className='line-through'>$400</span>
                   </div>

                   <div className='flex items-center'><IoIosStar className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <span className='pl-2'> (84) </span></div>
                  </div>



                  <div>
                  <div className='bg-slate-100 py-4 px-3 rounded md:w-[270px] md:h-[240px] w-[150px] h-[170px]'>
                   <div className='flex justify-between'>
                        <button className='px-2 rounded-md bg-amber-700 text-slate-100 font-semibold  md:text-base text-xs'>-30%</button>
                        <span className='px-2 py-2 rounded-full bg-white'><FaRegHeart  /></span>
                    </div>

                    <div className='hidden md:block'>
                    <div className='flex justify-center'><img src={product3} alt="" /></div>
                    </div>
                   <div className='md:hidden block'>
                   <div className='flex justify-center'><img className='w-[100px] h-[100px]' src={product3} alt="" /></div>
                   </div>
                   </div>


                   <div className='font-semibold text-start py-2'>AK-900 Wired Keyboard </div>
                   <div className='flex gap-3 items-center'>
                    <span className='text-[#DB4444] font-bold text-xl'>$960</span>
                    <span className='line-through'>$1160</span>
                   </div>

                   <div className='flex items-center'><IoIosStar className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <span className='pl-2'> (78) </span></div>
                  </div>



                  <div>
                  <div className='bg-slate-100 py-4 px-3 rounded md:w-[270px] md:h-[240px] w-[150px] h-[170px]'>
                   <div className='flex justify-between'>
                        <button className='px-2 rounded-md bg-amber-700 text-slate-100 font-semibold  md:text-base text-xs'>-30%</button>
                        <span className='px-2 py-2 rounded-full bg-white'><FaRegHeart  /></span>
                    </div>

                    <div className='flex justify-center'><img src={product2} alt="" /></div>
                   </div>


                   <div className='font-semibold text-start py-2'>IPS LCD Gaming Monito </div>
                   <div className='flex gap-3 items-center'>
                    <span className='text-[#DB4444] font-bold text-xl'>$370</span>
                    <span className='line-through'>$400</span>
                   </div>

                   <div className='flex items-center'><IoIosStar className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <IoIosStar  className='text-[#FFAD33]' /> <span className='pl-2'> (99) </span></div>
                  </div>



                </div>
                </div>

                <div>
                    <button className='px-5 py-2 rounded-xl bg-amber-800 hover:bg-amber-900 duration-700 text-slate-100'>View All Products</button>
                </div>

            </div>
        </section>
    </div>
  )
}

export default Todays