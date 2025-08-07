import React from 'react'
import LeaderImg from '../../assets/photo1.png'

const LeaderMessage = () => {
    return (
        <section class="py-16 bg-gray-50">
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='text-center mb-12'>
                    <h2 className='text-3xl font-bold text-gray-900 mb-4'>
                        Message from Leadership
                    </h2>
                </div>
                <div data-slot="card" className='bg-card text-card-foreground flex flex-col gap-6 rounded-xl border max-w-6xl max-auto'>
                    <div data-slot="card-content" className='[&:last-child]:pb-6 p-8'>
                        <div className='flex flex-col md:flex-row gap-8 items-start'>
                            <img src={LeaderImg} alt="Dushyant Chautala" className='w-48 h-48 rounded-lg object-cover max-auto md:mx-0' />
                            <div className='flex-1'>
                                <blockquote className='text-lg text-gray-700 mb-4 italic'>"INLD has always been the party of farmers and rural communities. As we continue our journey, our commitment to Haryana's development remains unwavering. We will ensure that the voice of every farmer, every worker, and every family in Haryana is heard and respected in the corridors of power."
                                </blockquote>
                                <div className='border-l-4 border-green-600 pl-4'>
                                    <p className='font-semibold text-gray-900'>
                                        Dushyant Chautala
                                    </p>
                                    <p className='text-gray-600'>
                                        Deputy Chief Minister, Haryana
                                    </p>
                                    <p className='text-gray-600'>
                                        JJP President
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>







        </section>
      

    )
}

export default LeaderMessage
