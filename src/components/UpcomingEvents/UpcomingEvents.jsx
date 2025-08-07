import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { PiCalendarBlankBold } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";

const UpcomingEvents = () => {
    return (
        <section className='py-16 bg-gray-50'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

                {/* Heading */}
                <div className='flex justify-between items-center mb-12'>
                    <h2 className='text-3xl font-bold text-gray-900'>Upcoming Events</h2>
                    <button className='flex items-center gap-2 border border-gray-300 bg-white text-gray-800 hover:bg-gray-100 rounded-md px-4 py-2 text-sm font-medium'>
                        View All Events <FaArrowRight />
                    </button>
                </div>

                {/* Cards Grid */}
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>

                    {/* Card 1 */}
                    <div className='bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md p-6 flex flex-col gap-3 cursor-pointer'>
                        <div className='flex items-center gap-4'>
                            <div className='bg-green-100 p-3 rounded-lg'>
                                <PiCalendarBlankBold className='text-green-700 text-xl font-bold' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <h3 className='font-semibold text-lg'>Kisan Sammelan - Hisar</h3>
                                <div className='flex items-center gap-4 text-gray-600 text-sm'>
                                    <span>2025-02-05</span>
                                    <div className='flex items-center gap-1'>
                                        <IoLocationOutline />
                                        <span>Hisar</span>
                                    </div>
                                </div>
                                <span className='inline-block text-xs text-black bg-white px-3 py-1 rounded-full border border-gray-200 w-fit whitespace-nowrap'>
                                    Farmer's Meet
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className='bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md p-6 flex flex-col gap-3 cursor-pointer'>
                        <div className='flex items-center gap-4'>
                            <div className='bg-green-100 p-3 rounded-lg'>
                                <PiCalendarBlankBold className='text-green-700 text-xl font-bold' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <h3 className='font-semibold text-lg'>Youth Convention - Rohtak</h3>
                                <div className='flex items-center gap-4 text-gray-600 text-sm'>
                                    <span>2025-02-10</span>
                                    <div className='flex items-center gap-1'>
                                        <IoLocationOutline />
                                        <span>Rohtak</span>
                                    </div>
                                </div>
                                <span className='inline-block text-xs text-black bg-white px-3 py-1 rounded-full border border-gray-200 w-fit whitespace-nowrap'>
                                    Youth Event
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default UpcomingEvents;