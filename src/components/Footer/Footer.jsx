import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid md:grid-cols-4 gap-8'>
                <div className='md:col-span-2'>
                    <div className='flex items-center mb-4'>
                        <div className='w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-3'>
                            <span className='text-white font-bold text-lg'>INLD</span>
                        </div>
                        <div>
                            <h3 className='text-xl font-bold'>
                                Indian National Lok Dal
                            </h3>
                            <p className='text-gray-400 text-sm'>
                                Serving the Nation
                            </p>
                        </div>
                    </div>
                    <p className='text-gray-400 max-w-mb mb-4'>
                        Committed to building a prosperous, inclusive, and sustainable India where every citizen has equal opportunities to grow and contribute.
                    </p>
                </div>
                <div>
                <h4 className='font-semibold mb-4'>Quick Links</h4>
                <ul className='space-y-2 text-sm'>
                    <li>
                        <button className='text-gray-400 hover:text-white transition-colors'>About INLD</button>
                    </li>
                    <li>
                        <button className='text-gray-400 hover:text-white transition-colors'>Our Manifesto</button>
                    </li>
                    <li>
                        <button className='text-gray-400 hover:text-white transition-colors'>Leadership</button>
                    </li>
                    <li>
                        <button className='text-gray-400 hover:text-white transition-colors'>News & Events</button>
                    </li>
                </ul>
                </div>
                <div>
                    <h4 className='font-semibold mb-4'>Contact</h4>
                    <ul className='space-y-2 text-sm text-gray-400'>
                        <li>123 Janpath, New Delhi</li>
                        <li>Phone: +91-11-2345-6789</li>
                        <li>Email: info@inld.org.in</li>
                        <li className='flex items-center gap-2 mt-4'>
                            <span>Follow us:</span>
                            <div className='flex gap-2'>
                                <span className='w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-xs cursor-pointer'>f</span>
                                <span className='w-8 h-8 bg-sky-500 rounded flex items-center justify-center text-black text-xs cursor-pointer'>t</span>
                                <span className='w-8 h-8 bg-red-600 rounded flex items-center justify-center text-black text-xs cursor-pointer'>▶</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm'>
                <p>© 2025 Indian National Lok Dal. All rights reserved.</p>
                <p className='mt-2'>
                    <button className='hover:text-white transition-colors mr-4'>Privacy Policy</button>
                    <button className='hover:text-white transition-colors mr-4'>Terms of Service</button>
                    <button className='hover:text-white transition-colors mr-4'>Disclaimer</button>
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
