import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";


const PreNav = () => {
    const [click, setClick] = useState(false);
  return (
    <div className='container mx-auto'>
        <section>
            <div className='bg-black py-2 md:flex  text-sm'>
              <div className='mx-auto'>
              <div className='md:flex gap-3'>
                    <div className='text-slate-300 md:px-0 px-3'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%</div>
                    <div className='text-white underline font-semibold'>ShopNow</div>
               </div>
              </div>

              <div className='flex justify-end md:px-0 px-3 gap-2 items-center text-slate-100 md:pr-24'>
                    <div>English</div>
                    <div onClick={() => setClick(!click)}><IoIosArrowDown className='font-bold' /></div>
              </div>

               {
                click ? <>
                <div className='relative'><span className='absolute md:top-[30px] md:right-[105px] right-[25px] bg-gray-700 px-3 py-1 rounded-md text-slate-100'>Bangla</span></div>
                </> : <></>
               }
            </div>
        </section>
    </div>
  )
}

export default PreNav