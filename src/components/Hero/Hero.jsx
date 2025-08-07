import React from 'react'
import wheat from '../../assets/wheat.jpg'
import { GoPeople } from "react-icons/go";
import { CiHeart } from "react-icons/ci";

const Hero = () => {
    return (
        <section className='bg-green-600 text-white py-25'>
            {/*hero content*/}
            <div className='max-w-[1400px] mx-auto px-10 flex-items-center container mx-auto flex flex-col md:flex-row items-center justify-between px-6 items-center'>
                <div className='md:w-1/2 space-y-6'>
                    <h1 className='text-4xl md:text-5xl font-bold leading-tight'>Haryana Ki Awaaz,<br /> Desh Ki Shakti</h1>

                    <p className='text-lg text-white'>
                        Indian National Lok Dal has been the voice of Haryana for over 25 years. From farmers' fields to Delhi's corridors of power, we stand for rural development, agricultural prosperity, and regional pride.
                    </p>
                    <div className="flex flex-row items-center justify-start mt-6 gap-2">
                        <button className="bg-white text-green-600 px-6 py-2 rounded-full font-semibold flex items-center gap-2">
                            <GoPeople />
                            Join Our Movement
                        </button>
                        <button className="bg-white text-green-600 px-6 py-2 rounded-full font-semibold flex items-center gap-2">
                            <CiHeart />
                            Support INLD
                        </button>
                    </div>
                </div>

            </div>
            {/*hero image*/}
            <div className='max-w-[1400px] mx-auto px-10 flex-items-center hidden md:block absolute top-[100px] right-0 z-0'>
                <img src={wheat} alt="Hero Image" className='w-[400px] h-auto rounded-xl mt-10 mr-10' />
            </div>
        </section>
    )
}

export default Hero
