import React from 'react'
import frame1 from './img/frame1.svg'
import frame2 from './img/frame2.svg'
import frame3 from './img/frame3.svg'

const NewArrivl = () => {
  return (
    <div>
        <section>
            <div className='md:mx-14 mx-3 lg:my-24 md:my-14 my-7'>
               <div className='flex items-center gap-2'>
                    <span className='md:w-4 md:h-8 w-2 h-4 rounded-md bg-amber-800'></span>
                    <div className='text-amber-800 font-bold'>Featured</div>
                </div>

                <div className='md:text-3xl text-xl font-bold text-start'>New Arrival</div>

                <div className='flex justify-center'>
                <div className='lg:grid grid-cols-2 gap-4 justify-center md:my-14 my-7'>
                  <img src={frame1} alt="" />
                  <img src={frame2} alt="" />
                </div>
                </div>

                <div className='flex justify-center'><img src={frame3} alt="" /></div>

            </div>
        </section>
    </div>
  )
}

export default NewArrivl