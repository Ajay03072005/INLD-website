import React from 'react'

const OurAchievement = () => {
  return (
    <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold text-gray-900'>Our Achievements</h2>
            <div className='grid md:grid-cols-3 gap-8'>
                <div className='flex flex-col gap-6 rounded-xl border text-center p-6'>
                    <div className='bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                        <span className='text-green-600 text-2xl'>25+</span>
                    </div>
                    <h3 className='font-semibold mb-2'>Years of Service</h3>
                    <p className='text-gray-600 text-sm'>
                        Serving Haryana since 1999 with dedication and commitment
                    </p>
                </div>
                <div className='flex flex-col gap-6 rounded-xl border text-center p-6'>
                    <div className='bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                        <span className='text-blue-600 text-2xl'>2</span>
                    </div>
                    <h3 className='font-semibold mb-2'>Government Terms</h3>
                    <p className='text-gray-600 text-sm'>
                        Led Haryana government and currently part of coalition
                    </p>
                </div>
                <div className='flex flex-col gap-6 rounded-xl border text-center p-6'>
                    <div className='bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                        <span className='text-yellow-600 text-2xl'>🏆</span>
                    </div>
                    <h3 className='font-semibold mb-2'>Farmer Champion</h3>
                    <p className='text-gray-600 text-sm'>
                        Consistently fighting for farmers' rights and agricultural reforms
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurAchievement
