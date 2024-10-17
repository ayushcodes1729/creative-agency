import React from 'react'
import HeroImg from '../assets/hero-medium.jpg'
import DesignBg from '../assets/designbg.jpg'
import Branding from '../assets/branding.jpg'
import { Link } from 'react-router-dom'

function HomePage() {

    const approach = [
        {
            id: '01',
            name: 'Brand Strategy',
            content: 'Brand strategy is critical for long-term success. Outshining competitors and capturing the target audience are key.'
        },
        {
            id: '02',
            name: 'Brand Design',
            content: 'Keeping the brand design unique and meaningful helps in communicating the brand’s timeless value effectively.'
        },
        {
            id: '03',
            name: 'Web Design',
            content: 'A beautifully crafted website is the best tool for brand awareness, and ultimately results in increased revenues.'
        }
    ]
    const secHClass = 'lg:text-6xl xl:text-7xl leading-tight text-4xl text-white  font-bold';

    return (
        <div className='font-poppins'>
            {/* Hero Section */}
            <main className='lg:bg-hero w-full h-screen bg-no-repeat bg-center bg-cover'>
                <aside className='flex flex-col lg:w-[70%] h-full lg:px-36 lg:py-44 bg-gradient-to-r from-[#ffff] to-[#ffffff05]'>
                    <figure className='lg:hidden w-full'>
                        <img src={HeroImg} alt="" />
                    </figure>
                    <section className='px-7 sm:px-0 py-8 sm:py-0 flex flex-col gap-12'>
                        <h1 className='lg:text-7xl xl:text-9xl text-5xl  font-bold'>
                            Branding & website design agency
                        </h1>
                        <p className='lg:pr-44 leading-8 text-xl lg:text-2xl font-poppins'>We Specialize in visual storytelling by creating cohesive brand and website design solutions for small businesses, giving lasting impressions to audiences in a digital world.
                        </p>
                        <button className='flex justify-center items-center py-6 px-10 text-white bg-red-500 hover:bg-white hover:text-gray-900 transition-all duration-700 rounded-sm w-fit text-2xl  font-bold'>Learn More</button>
                    </section>
                </aside>
            </main>
            {/* Design Section */}
            <main className='w-full h-screen flex relative'>
                <p className='absolute font-poppins font-bold xl:text-[20rem] top-14 right-[45%] z-40 text-red-500'>~</p>
                <aside className='w-1/2 relative'>
                    <div>
                        <img className='w-full ' src={DesignBg} alt="design-background" srcset="" />
                    </div>
                    <div className='absolute left-56 top-[150%] px-14 font-bold tracking-widest z-50'>
                        <h1 className='font-poppins text-6xl leading-tight'>
                            Our approach for creating a winning brand
                        </h1>
                    </div>
                </aside>
                <main className='w-1/2 relative'>
                    <div className='bg-gray-900 flex flex-col h-screen px-36 gap-16 justify-center'>
                        <h1 className={secHClass}>
                            <span className='text-red-500'>Design </span>
                            is strategic
                        </h1>
                        <p className='text-white text-xl lg:text-2xl leading-normal tracking-wide font-poppins'>"A well-crafted design strategy consistently produces desired outcomes and brand awareness. We are firm believers that success lies in creative collaboration with our clients."</p>
                        <Link className='text-red-500 text-xl lg:text-2xl leading-normal tracking-wide font-poppins underline hover:text-white transiti duration-300' to='/'>Contact Us</Link>
                    </div>
                    <div className="design-list bg-red-500 px-60 font-poppins absolute flex flex-col w-[60dvw] z-40 right-0 h-screen gap-16 py-40">
                        {
                            approach.map((app) => (
                                <div key={app.id} className="relative px-16 py-8">
                                    <span className="absolute top-0 left-0 text-8xl font-bold text-white opacity-20">{app.id}</span>
                                    <div className="flex flex-col gap-6 z-10">
                                        <h3 className="text-2xl font-bold text-white">{app.name}</h3>
                                        <p className="text-white text-lg">
                                            {app.content}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </main>
            </main>
            {/* Brand naming */}
            <main className='flex brand-naming mt-[100vh] relative'>
                <p className='absolute font-poppins font-bold xl:text-[20rem] top-14 right-[45%] z-40 text-white' style={{ transform: 'rotateY(180deg)' }}>~</p>
                <aside className='w-1/2 h-[60vh] flex flex-col justify-center pl-40  items-center bg-gray-900 z-30'>
                    <h1 className={`${secHClass} flex`}>Brand naming & guidlines</h1>
                </aside>
                <aside className=' absolute right-0'>
                    <img className='w-[60vw] h-[80vh]' src={Branding} alt="" />
                </aside>
            </main>
            <main className='mt-[20vh] px-36 py-16 relative'>
            <p className='absolute font-poppins font-bold xl:text-[20rem] top-0 left-[-6%] z-40 text-red-500'>~</p>
                <article className='flex justify-between py-20'>
                    <div className='w-1/2'>
                        <h1 className={`text-black ${secHClass}`}>Let's build something great together.</h1>
                    </div>
                    <div className='flex items-center lg:text-2xl'>
                    <button className='bg-red-500 text-white hover:text-yellow-200 px-10 py-8 font-semibold'>Contact Us</button>
                    </div>
                </article>
            </main>
        </div>
    )
}

export default HomePage