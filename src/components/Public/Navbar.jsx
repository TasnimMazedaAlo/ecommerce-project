import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";


const Navbar = () => {

    const [click, setClick] = useState(false);

  return (
    <div className='container mx-auto'>
        <section>
            <div className='hidden lg:block'>
                <div className='flex justify-between items-center px-10 py-5 border-b '>
                    <div className='text-3xl font-bold'>Exclusive</div>

                    <div className='font-semibold'>
                        <Link className='px-3 py-2 rounded-md hover:bg-amber-700 hover:text-slate-100 duration-700' to={"/HomePage"}> Home </Link>
                        <Link className='px-3 py-2 rounded-md hover:bg-amber-700  hover:text-slate-100 duration-700' to={"/About"}> About </Link>
                        <Link className='px-3 py-2 rounded-md hover:bg-amber-700  hover:text-slate-100 duration-700' to={"/Contact"}> Contact </Link>
                        <Link className='px-3 py-2 rounded-md hover:bg-amber-700  hover:text-slate-100 duration-700' to={"/SignUp"}> Sign Up </Link>
                    </div>

                    <div className='flex items-center gap-4'>
                        <button type='text' className='flex items-center gap-3 border border-slate-100 px-5 py-2 rounded-xl bg-slate-200'><span className='text-slate-700'>What are you looking for?</span><CiSearch /></button>
                        <FaRegHeart />
                        <FaCartShopping />
                    </div>
                </div>
            </div>


            <div className='lg:hidden block'>
                <div className='flex justify-between items-center py-3 md:mx-7 mx-3'>
                    <div className='md:text-3xl text-xl font-bold'>Exclusive</div>
                    <div onClick={() => setClick(!click)}>{ click ? <><FaTimes /></> : <><GiHamburgerMenu /></>}</div>
                </div>

            {
                click ? <>
                <div className='my-4'>
                    <div className='font-semibold md:w-[400px] w-[250px] bg-gray-700 bg-opacity-30 rounded-md  py-10'>
                        <div  className='mb-10 '><Link to={"/HomePage"}></Link> Home </div>
                        <div><Link to={"/About"}></Link> About </div>
                        <div  className='my-10'><Link  to={"/Contact"}></Link> Contact </div>
                        <div><Link to={"/SignUp"}></Link> Sign Up </div>
                       
                    </div>
                </div>
                </> : <></>
            }
            </div>
        </section>
       

    </div>
  )
}

export default Navbar