import React from 'react'
import { Link } from 'react-router-dom'
import { GrLocation } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { LuClock } from "react-icons/lu";
import { LuFacebook } from "react-icons/lu";
import { FiTwitter } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";

const Contact = () => {
    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            {/* Page Heading */}
            <div className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Contact INLD</h2>
                <p className="text-gray-600 mt-2">
                    Get in touch with us for any queries, suggestions, or to join our movement
                </p>
            </div>

            {/* Form Container */}
            <div className="bg-gray-100 p-8 rounded-xl shadow-md border border-gray-300">
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Send Us a Message</h3>

                <form className="space-y-6">
                    {/* Name */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Name<span className="text-red-500">*</span></label>
                        <input type="text" placeholder="Your full name" className="w-full px-4 py-2 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600" />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Email<span className="text-red-500">*</span></label>
                        <input type="email" placeholder="your.email@example.com" className="w-full px-4 py-2 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600" />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
                        <input type="text" placeholder="+91 9876543210" className="w-full px-4 py-2 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600" />
                    </div>

                    {/* District Dropdown */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">District</label>
                        <select className="w-full px-4 py-2 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600">
                            <option>Select your district</option>
                            <option>Hisar</option>
                            <option>Rohtak</option>
                            <option>Sirsa</option>
                            <option>Karnal</option>
                            <option>Ambala</option>
                            <option>Gurugram</option>
                            <option>Other</option>
                        </select>
                    </div>

                    {/* Subject Dropdown */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Subject</label>
                        <select className="w-full px-4 py-2 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600">
                            <option>Select your subject</option>
                            <option>General Inquiry</option>
                            <option>Party Membership</option>
                            <option>Volunteer Opportunity</option>
                            <option>Media Relations</option>
                            <option>Public Grievance</option>
                            <option>Policy Suggestion</option>
                        </select>
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Message</label>
                        <textarea rows="4" placeholder="Write your message here..." className="w-full px-4 py-2 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600" />
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button type="submit" className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800 transition-all">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
            <div className='space-y-6'>
                <div className='flex flex-col gap-6 mt-14 rounded-xl border border-gray-200'>
                    <div className='grid auto-rows-min items-start gap-1.5 px-6 pt-6 pb-6'>
                        <h4 className='flex items-center gap-2'><GrLocation className='text-green-600' />INLD Head Office</h4>
                    </div>
                    <div className='px-6 pb-6 space-y-3'>
                        <div className='flex items-start gap-3'><GrLocation className='text-gray-400 mt-1' />
                            <p className='text-gray-900'>Near Bal Bhawan, Sector 14, Chandigarh - 160014</p>
                        </div>
                        <div className='flex items-center gap-3'><IoCallOutline className='text-gray-400' />
                            <p className='text-gray-600'>+91-172-270-3456</p>
                        </div>
                        <div className='flex items-center gap-3'><CiMail className='text-gray-400' />
                            <p className='text-gray-600'>info@inld.org.in</p>
                        </div>
                        <div className='flex items-center gap-3'><LuClock className='tetx-gray-400' />
                            <p className='text-gray-600'>Mon-Sat: 9:00 AM - 6:00 PM</p>
                        </div>
                    </div>
                </div>
                {/*start card 2*/}
                <div className='flex flex-col gap-6 rounded-xl border border-gray-200'>
                    <div className='grid auto-rows-min items-start gap-1.5 px-6 pt-6 pb-6'>
                        <h4 className='flex items-center gap-2'><GrLocation className='text-green-600' />Haryana State Office</h4>
                    </div>
                    <div className='px-6 pb-6 space-y-3'>
                        <div className='flex items-start gap-3'><GrLocation className='text-gray-400 mt-1' />
                            <p className='text-gray-900'>Plot No. 123, Sector 7, Panchkula, Haryana - 134109</p>
                        </div>
                        <div className='flex items-center gap-3'><IoCallOutline className='text-gray-400' />
                            <p className='text-gray-600'>+91-172-255-1234</p>
                        </div>
                        <div className='flex items-center gap-3'><CiMail className='text-gray-400' />
                            <p className='text-gray-600'>haryana@inld.org.in</p>
                        </div>
                        <div className='flex items-center gap-3'><LuClock className='tetx-gray-400' />
                            <p className='text-gray-600'>Mon-Sat: 9:00 AM - 6:00 PM</p>
                        </div>
                    </div>
                </div>
                {/*start card 3*/}
                <div className='flex flex-col gap-6 rounded-xl border border-gray-200'>
                    <div className='grid auto-rows-min items-start gap-1.5 px-6 pt-6 pb-6'>
                        <h4 className='flex items-center gap-2'><GrLocation className='text-green-600' />Delhi Liaison Office</h4>
                    </div>
                    <div className='px-6 pb-6 space-y-3'>
                        <div className='flex items-start gap-3'><GrLocation className='text-gray-400 mt-1' />
                            <p className='text-gray-900'>1, Ashoka Road, New Delhi - 110001</p>
                        </div>
                        <div className='flex items-center gap-3'><IoCallOutline className='text-gray-400' />
                            <p className='text-gray-600'>+91-11-2338-4567</p>
                        </div>
                        <div className='flex items-center gap-3'><CiMail className='text-gray-400' />
                            <p className='text-gray-600'>delhi@inld.org.in</p>
                        </div>
                        <div className='flex items-center gap-3'><LuClock className='tetx-gray-400' />
                            <p className='text-gray-600'>Mon-Fri: 10:00 AM - 5:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>
            {/*new section */}
            <div className='flex flex-col mt-6 gap-6 rounded-xl border border-gray-200'>
                <div className='px-6 pt-6 '>
                    <h4 className='text-lg'>Follow Us on Social Media</h4>
                </div>
                <div className='px-6 pb-6 '>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                        <button className='justify-center whitespace-nowrap rounded-md border border-gray-200 px-4 py-4 text-sm font-medium transition-all flex flex-col items-center gap-2 h-24 hover:bg-gray-300 '><LuFacebook className='text-blue-600 ' />
                            <span className='text-xs'>Facebook</span>
                        </button>
                        <button className='justify-center whitespace-nowrap rounded-md border border-gray-200 px-4 py-4 text-sm font-medium transition-all flex flex-col items-center gap-2 h-24 hover:bg-gray-300 '><FiTwitter className='text-blue-600 ' />
                            <span className='text-xs'>Twitter</span>
                        </button>
                        <button className='justify-center whitespace-nowrap rounded-md border border-gray-200 px-4 py-4 text-sm font-medium transition-all flex flex-col items-center gap-2 h-24 hover:bg-gray-300 '><FiYoutube className='text-red-600 ' />
                            <span className='text-xs'>Youtube</span>
                        </button>
                    </div>
                    <div className='mt-4 text-center'>
                        <p className='text-sm text-gray-600'>@INLDOfficial | @INLDHaryana | INLD Official Channel</p>
                    </div>
                </div>
            </div>
            {/*next section */}
            <div className='flex flex-col mt-6 gap-6 rounded-xl border border-gray-200 bg-blue-50'>
                <div className='px-6 pt-6 text-center'>
                    <h3 className='font-semibold text-blue-700 mb-2'>Public Grievance Cell</h3>
                    <p className='text-blue-700 font-semibold monotext-xl'>1800-180-INLD</p>
                    <p className='mt-2 text-blue-600 text-sm'>Toll-free helpline for public grievances</p>
                    <p className='text-xs text-blue-500 mt-1 mb-4'>Mon-Fri: 9:00 AM - 6:00 PM</p>
                </div>
            </div>
            {/*next section*/}
            <div className='flex flex-col gap-6 rounded-xl border border-gray-200 mt-12'>
                <div className='px-6 pt-6'>
                    <h4 className='text-lg'>District Offices in Haryana</h4>
                </div>
                <div className='px-6 pb-6'>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        <div className='border border-gray-200 rounded-lg p-4'>
                            <h4 className='font-semibold text-gray-900 mb-2'>Hisar</h4>
                            <div className='flex items-center gap-2'><IoCallOutline className='text-gray-400' />
                                <span>+91-1662-234567</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <CiMail className='tetx-gray-400' />
                                <span>hisar@inld.org.in</span>
                            </div>
                        </div>
                        <div className='border border-gray-200 rounded-lg p-4'>
                            <h4 className='font-semibold text-gray-900 mb-2'>Rohtak</h4>
                            <div className='flex items-center gap-2'><IoCallOutline className='text-gray-400' />
                                <span>+91-1262-234567</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <CiMail className='tetx-gray-400' />
                                <span>rohtak@inld.org.in</span>
                            </div>
                        </div>
                        <div className='border border-gray-200 rounded-lg p-4'>
                            <h4 className='font-semibold text-gray-900 mb-2'>Sirsa</h4>
                            <div className='flex items-center gap-2'><IoCallOutline className='text-gray-400' />
                                <span>+91-1666-234567</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <CiMail className='tetx-gray-400' />
                                <span>sirsa@inld.org.in</span>
                            </div>
                        </div>
                        <div className='border border-gray-200 rounded-lg p-4'>
                            <h4 className='font-semibold text-gray-900 mb-2'>Karnal</h4>
                            <div className='flex items-center gap-2'><IoCallOutline className='text-gray-400' />
                                <span>+91-184-234567</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <CiMail className='tetx-gray-400' />
                                <span>karnal@inld.org.in</span>
                            </div>
                        </div>
                        <div className='border border-gray-200 rounded-lg p-4'>
                            <h4 className='font-semibold text-gray-900 mb-2'>Ambala</h4>
                            <div className='flex items-center gap-2'><IoCallOutline className='text-gray-400' />
                                <span>+91-171-234567</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <CiMail className='tetx-gray-400' />
                                <span>ambala@inld.org.in</span>
                            </div>
                        </div>
                        <div className='border border-gray-200 rounded-lg p-4'>
                            <h4 className='font-semibold text-gray-900 mb-2'>Gurugram</h4>
                            <div className='flex items-center gap-2'><IoCallOutline className='text-gray-400' />
                                <span>+91-124-234567</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <CiMail className='tetx-gray-400' />
                                <span>gurugram@inld.org.in</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*next section */}
            <div className='flex flex-col gap-6 rounded-xl border border-gray-200 mt-8'>
                <div className='px-6 pt-6'>
                    <h4 className='text-lg'>Leadership Offices</h4>
                </div>
                <div className='px-6 pb-6'>
                    <div className='grid md:grid-cols-2 gap-6'>
                        <div className='border border-gray-200 rounded-lg p-4'>
                            <h4 className='font-semibold text-gray-900 mb-2'>Deputy CM Office</h4>
                            <p className='text-sm text-gray-600 mb-2'>For official matters related to Haryana Government</p>
                            <div className='flex items-center gap-2 text-gray-600'>
                                <GrLocation className='text-gray-400' />
                                <span>Haryana Civil Secretariat, Chandigarh</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <IoCallOutline className='text-gray-400' />
                                <span className='text-gray-600'>+91-172-274-4444</span>
                            </div>
                        </div>

                        <div className='border mt-6 border-gray-200 rounded-lg p-4'>
                            <h4 className='font-semibold text-gray-900 mb-2'>Party President Office</h4>
                            <p className='text-sm text-gray-600 mb-2'>For party-related matters and organizational issues</p>
                            <div className='flex items-center gap-2 text-gray-600'>
                                <GrLocation className='text-gray-400' />
                                <span>INLD Head Office, Chandigarh</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <IoCallOutline className='text-gray-400' />
                                <span className='text-gray-600'>+91-172-270-3456</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*next section */}
            <div className='flex flex-col gap-6 rounded-xl border border-gray-200 mt-12'>
                <div className='px-6 pt-6'>
                    <h4 className='text-lg'>Find Our Offices</h4>
                </div>
                <div className='px-6 pb-6'>
                    <div className='bg-gray-100 h-64 rounded-lg flex items-center justify-center'>
                        <div className='text-center text-gray-500'><GrLocation className='font-bold w-40 h-40 mx-auto mb-4' />
                            <p>Interactive map showing all INLD office locations across Haryana</p>
                            <p className='text-sm'>Head Office: Chandigarh | State Office: Panchkula</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
