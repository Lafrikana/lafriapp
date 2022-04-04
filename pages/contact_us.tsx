/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Layout from 'components/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneSquare, faMailBulk } from '@fortawesome/free-solid-svg-icons'

export default function ContactUs(){
    return (
        <Layout env="contact_us">
            <div className='content-header relative contact_us px-5 py-10 md:px-10 h-128 flex flex-col justify-start align-center grid content-end'>
                <div className='text-white relative'>
                    <h1 className='text-5xl relative bf-bottom font-extrabold sm:text-6xl'>Contact Us</h1>
                </div>
            </div>
            
            <div className="relative bg-white dark:bg-gray-800 p-4 max-w-7xl mx-auto">
                <br/><br/>
                <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
                    <div className="lg:col-start-2 md:pl-20">
                        <h4 className="text-2xl leading-8 font-extrabold text-gray-900 dark:text-white tracking-tight sm:leading-9">
                            Call us
                        </h4>
                        <ul className="mt-10">
                            <li>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                            <FontAwesomeIcon icon={faPhoneSquare} className='w-8 h-8'/>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h5 className="text-lg leading-6 text-gray-900 dark:text-white font-normal hover:text-underline">
                                            <a href="tel://+254 110 223350">
                                                Tel: <strong>+254 110 223350</strong>
                                            </a>
                                        </h5>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <br/>
                        <h4 className="text-2xl leading-8 font-extrabold text-gray-900 dark:text-white tracking-tight sm:leading-9">
                            Email us
                        </h4>
                        <ul className="mt-10">
                            <li>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                            <FontAwesomeIcon icon={faMailBulk} className='w-8 h-8'/>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h5 className="text-lg leading-6 text-gray-900 dark:text-white font-normal hover:text-underline">
                                            <a href="mailto://info@lafrikana.or.ke">
                                                Email: <strong>info@lafrikana.or.ke</strong>
                                            </a>
                                        </h5>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-10 -mx-4 md:-mx-12 relative lg:mt-0 lg:col-start-1">
                        <img src="/assets/images/contactus1.jpg" alt="illustration" className="relative mx-auto shadow-lg rounded w-auto"/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}