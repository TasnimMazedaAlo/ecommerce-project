import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import all from './img/all.svg'

const Catagories = () => {
  return (
    <div>
        <section>
            <div className='md:mx-10 mx-3 lg:my-24 md:my-14 my-7'>
                <div className='flex items-center gap-2'>
                        <span className='md:w-4 md:h-8 w-2 h-4 rounded-md bg-amber-800'></span>
                        <div className='text-amber-800 font-bold'> Categories</div>
                </div>

                <div  className='md:flex justify-between items-center'>
                   <div className='md:text-3xl text-xl font-bold text-start'>Browse By Category</div>
                   <div className='hidden md:block'>
                        <button className='px-4 py-4 rounded-full bg-slate-200'><FaArrowLeft /></button>
                        <button className='px-4 py-4 rounded-full bg-slate-200 ml-2'><FaArrowRight /></button>
                    </div>
                </div>

                <div><img className='mt-7' src={all} alt="" /></div>

            </div>
        </section>
    </div>
  )
}

export default Catagories