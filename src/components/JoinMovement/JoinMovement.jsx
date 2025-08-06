import React from 'react'
import { GoPeople } from "react-icons/go";
import { MdContactPhone } from "react-icons/md";

const JoinMovement = () => {
    return (
        <section className='py-16 bg-green-600 text-white'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
                <h2 className='text-3xl font-bold mb-4'>
                    Be Part of Haryana's Progress
                </h2>
                <p className='text-xl mb-8 text-green-100 max-w-3xl mx-auto'>
                    Join thousands of citizens who believe in our vision of a prosperous Haryana. Your voice matters, your support counts.
                </p>

                {/* Vertical buttons with same width */}
                <div className='flex flex-col gap-4 items-center'>
                    <button className="w-full sm:w-[400px] bg-white text-green-600 px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 text-lg">
                        <GoPeople />
                        Become a Member
                    </button>
                    <button className="w-full sm:w-[400px] bg-white text-green-600 px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 text-lg">
                        <MdContactPhone />
                        Contact Us
                    </button>
                </div>
            </div>
        </section>
    )
}

export default JoinMovement
