import React from 'react'

const ConnectUs = () => {
  return (
    <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-bold text-gray-900'>Connect With Us</h2>
            <div className='grid md:grid-cols-3 gap-8'>
                <div className='flex flex-col gap-6 rounded-xl border text-center p-6'>
                    <div className='bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                        <span className='text-blue-600 text-2xl'>f</span>
                    </div>
                    <h3 className='font-semibold mb-2'>Facebook</h3>
                    <p className='text-gray-600 text-sm'>
                        Follow @INLDOfficial for latest updates and community discussions
                    </p>
                </div>
                <div className='flex flex-col gap-6 rounded-xl border text-center p-6'>
                    <div className='bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                        <span className='text-blue-600 text-2xl'>𝕏</span>
                    </div>
                    <h3 className='font-semibold mb-2'>Twitter</h3>
                    <p className='text-gray-600 text-sm'>
                        Real-time updates and political insights from @INLDHaryana
                    </p>
                </div>
                <div className='flex flex-col gap-6 rounded-xl border text-center p-6'>
                    <div className='bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
                        <span className='text-red-600 text-2xl'>▶</span>
                    </div>
                    <h3 className='font-semibold mb-2'>YouTube</h3>
                    <p className='text-gray-600 text-sm'>
                        Watch speeches, rallies, and documentaries about our work
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ConnectUs
