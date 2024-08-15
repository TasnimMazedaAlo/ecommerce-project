import React from 'react'
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
        <section>
            <div className='flex justify-center'>
                <div className='grid lg:grid-cols-5 md:grid-cols-3 text-start bg-black text-slate-100 md:py-10 md:pl-16 w-full px-5 py-5'>
                    <div>
                        <div className='md:text-3xl font-semibold'>Exclusive</div>
                        <div className='text-xl pt-5 md:text-base text-xs'>Subscribe</div>
                        <div>Get 10% off your first order</div>
                        <div className='flex items-center gap-2'>
                            <input className='bg-black border border-white my-5 rounded-md' type="text" placeholder='Enter Your Email' />
                            <IoMdArrowDroprightCircle className='text-3xl' />
                        </div>
                    </div>

                    <div className='flex justify-center'>
                       <div className='md:text-base text-xs'>
                       <div className='text-xl'>Support</div>
                        <div className='pt-5'>111 Bijoy sarani, Dhaka, ,<br /> DH 1515, Bangladesh.</div>
                        <div>exclusive@gmail.com</div>
                        <div>+88015-88888-9999</div>
                       </div>
                    </div>

                    <div>
                       <div className='flex justify-center'>
                       <div className='md:text-base text-xs'>
                       <div className='text-xl'>Account</div>
                        <div className='pt-5'>My Accoun</div>
                        <div>Login / Register</div>
                        <div>Cart</div>
                        <div>Wishlist</div>
                        <div>Shop</div>
                       </div>
                       </div>
                    </div>


                   <div className='lg:block hidden'>
                   <div  className='flex justify-center'>
                        <div>
                        <div className='text-xl'>Quick Link</div>
                        <div className='pt-5'>Privacy Policy</div>
                        <div>Terms Of Use</div>
                        <div>FAQ</div>
                        <div>Contact</div>
                        </div>
                    </div>

                   </div>

                    <div className='lg:block hidden'>
                    <div className='text-xl text-center'>Download</div>
                       <div className='flex justify-center pt-5'>
                       
                      <div>
                      <div><FaFacebookF className='text-3xl' /></div>
                        <div className='py-3'><FaTwitter className='text-3xl' /></div>
                        <div><FaInstagramSquare className='text-3xl' /></div>
                      </div>
                       </div>
                    </div>

                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer