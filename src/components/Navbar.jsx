import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
    const Links = [
        {
            name: 'About',
            link: '/'
        },
        {
            name: 'Service',
            link: '/'
        },
        {
            name: 'Projects',
            link: '/'
        }
    ];

    const [open, setOpen] = useState(false);
    return (
        <nav className='w-full m-0 pr-6 sm:pr-0 py-0 z-100'>
            <div className='md:flex font-poppins'>
                <div className='flex lg:justify-center md:w-1/2 items-center justify-between '>
                    <Link to={'/'}>
                        <div className='lg:w-full w-3/4'><img src={logo} alt="" /></div>
                    </Link>
                    <div onClick={() => setOpen(!open)} className='text-3xl md:hidden'>
                        <ion-icon name={open ? 'close' : 'menu-outline'}></ion-icon>
                    </div>
                </div>
                <div className={`md:flex lg:w-1/2 w-full md:z-auto z-10 transition-all duration-300 ease-in justify-between items-center lg:py-0 py-6 lg:px-36 px-6 absolute md:static bg-red-500 ${open ? 'left-0' : 'left-[-100%]'}`}>
                    {
                        Links.map((link) => (
                            <div key={link.name} className='lg:my-0 my-6'>
                                <a href={link.link} className={'text-white hover:text-yellow-200 lg:text-xl'}>{link.name}</a>
                            </div>
                        ))
                    }
                    <NavLink to={'/'} className='text-white lg:text-xl'>
                        <button className='bg-gray-900 text-white hover:text-yellow-200 px-7 py-4 font-semibold'>Contact Us</button>
                    </NavLink>
                </div>
            </div>
        </nav>

    )
}

export default Navbar