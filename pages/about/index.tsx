/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import Layout from 'components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons'
import UserCard from 'components/UserCard'

export default function About(){

    return (
        <Layout env="about">
            <div className='content-header relative about px-5 py-10 md:px-10 h-128 flex flex-col justify-start align-center grid content-end'>
                <div className='text-white relative'>
                    <h1 className='text-5xl relative bf-bottom font-extrabold sm:text-6xl'>About Us</h1>
                </div>
            </div>
            <div className='about-initialize' id="our_statement">
                <br/><br/><br/>
                <div className="bg-white dark:bg-gray-800 border-b-2 border-gray-300">
                    <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                        <div className="block relative pb-5">
                            <Image
                                src="/assets/images/_icon_wwa.png"
                                width="100px"
                                height="100px"
                                alt="who we are"
                            />
                        </div>
                        <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                            <span className="block text-primary">
                                Who We Are
                            </span>
                        </h2>
                        <p className="text-xl mt-4 max-w-md mx-auto text-gray-800">
                            L&#x27;AFRIKANA is a refugee-led community-based organization whose aim is to empower Refugees and the host community for integration and socio-economic development. 
                        </p>
                    </div>
                </div>

                <div className="bg-gray-100 dark:bg-gray-800 pb-30 border-b-2 border-gray-300">
                    <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                        <div className="block relative pb-5">
                            <Image
                                src="/assets/images/_icon_wwd.png"
                                width="100px"
                                height="100px"
                                alt="what we do"
                            />
                        </div>
                        <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                            <span className="block text-primary">
                                What We Do
                            </span>
                        </h2>
                        <p className="text-xl mt-4 max-w-md mx-auto text-gray-800">
                            We empower Refugees and the host community for integration and socio-economic development. 
                        </p>
                        <div className="lg:mt-0 lg:flex-shrink-0">
                            <div className="mt-12 inline-flex rounded-md shadow">
                                <Link href="/programs">
                                    <a>
                                        <button type="button" className="py-4 px-6 bg-primary hover:bg-primary-dark focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
                                            View Our Programs
                                        </button>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 border-b-2 border-gray-300">
                    <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                        <div className="block relative pb-5">
                            <Image
                                src="/assets/images/_icon_mission.png"
                                width="100px"
                                height="100px"
                                alt="mission"
                            />
                        </div>
                        <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                            <span className="block text-primary">
                                Our Mission
                            </span>
                        </h2>
                        <p className="text-xl mt-4 max-w-md mx-auto text-gray-800">
                            We support refugee and host communities through education, training, advocacy, and facilitation and implementation of various community projects.
                        </p>
                    </div>
                </div>

                <div className="bg-gray-100 dark:bg-gray-800 border-b-2 border-gray-300">
                    <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                        <div className="block relative pb-5">
                            <Image
                                src="/assets/images/_icon_vision.png"
                                width="100px"
                                height="100px"
                                alt="vision"
                            />
                        </div>
                        <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                            <span className="block text-primary">
                                Our Vision
                            </span>
                        </h2>
                        <p className="text-xl mt-4 max-w-md mx-auto text-gray-800">
                            An environment where refugees are fully integrated in the host country and freely use their talents, abilities and capabilities to positively transform the livelihoods of fellow refugees and host community.
                        </p>
                    </div>
                </div>
            </div>
            <div className="about-corevalues border-b-2 border-gray-300" id="core_values">
                <div className="relative bg-white dark:bg-gray-800 px-5 py-4 md:px-20">
                    <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
                        <div className="lg:col-start-0 md:pl-20">
                            <br/><br/>
                            <h4 className="text-2xl leading-8 font-extrabold text-gray-900 dark:text-white tracking-tight sm:leading-9">
                                Our Core Values
                            </h4>
                            <ul className="mt-10">
                                <li>
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white p-2">
                                                <FontAwesomeIcon icon={faHandHoldingHeart}/>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h5 className="text-lg leading-0 text-gray-900 dark:text-white font-bold">
                                                INTEGRITY
                                            </h5>
                                            {/* <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                                                Know everything about your business in a single glance with your new dashboard.
                                            </p> */}
                                        </div>
                                    </div>
                                </li>
                                <li className="mt-10">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white p-2">
                                                <FontAwesomeIcon icon={faHandHoldingHeart}/>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h5 className="text-lg leading-0 text-gray-900 dark:text-white font-bold">
                                                INCLUSIVITY
                                            </h5>
                                            {/* <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                                                Know everything about your business in a single glance with your new dashboard.
                                            </p> */}
                                        </div>
                                    </div>
                                </li>
                                <li className="mt-10">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white p-2">
                                                <FontAwesomeIcon icon={faHandHoldingHeart}/>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h5 className="text-lg leading-0 text-gray-900 dark:text-white font-bold">
                                                ACCOUNTABILITY
                                            </h5>
                                            {/* <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                                                Know everything about your business in a single glance with your new dashboard.
                                            </p> */}
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="lg:col-start-2 md:pl-20">
                            <ul className="mt-10">
                                <li>
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white p-2">
                                                <FontAwesomeIcon icon={faHandHoldingHeart}/>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h5 className="text-lg leading-0 text-gray-900 dark:text-white font-bold">
                                                SUSTAINABILITY
                                            </h5>
                                            {/* <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                                                Know everything about your business in a single glance with your new dashboard.
                                            </p> */}
                                        </div>
                                    </div>
                                </li>
                                <li className="mt-10">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white p-2">
                                                <FontAwesomeIcon icon={faHandHoldingHeart}/>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h5 className="text-lg leading-0 text-gray-900 dark:text-white font-bold">
                                                MUTUAL RESPECT
                                            </h5>
                                            {/* <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                                                Know everything about your business in a single glance with your new dashboard.
                                            </p> */}
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* <div className="mt-10 -mx-4 md:-mx-12 relative lg:mt-0 lg:col-start-1">
                            <img src="/images/object/8.jpg" alt="illustration" className="relative mx-auto shadow-lg rounded w-auto"/>
                        </div> */}
                    </div>
                    <br/><br/>
                </div>
            </div>
            <br/><br/>
            <section className="mb-20 text-gray-700">
                <div className="text-center md:max-w-xl lg:max-w-3xl mx-auto" id="about">
                    <h3 className="text-3xl font-bold mb-6 text-gray-800">Our Team</h3>
                    <p className="mb-6 pb-2 md:mb-12 md:pb-0">
                        Meet the team behind L&#x27;AFRIKANA
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center about-team p-4 max-w-7xl mx-auto bg-grayer-light rounded-md border-2 border-gray-300">
                    <div className="block rounded-lg shadow-lg bg-white">
                        <div className="overflow-hidden rounded-t-lg h-36 bg-primary"></div>
                        <div className="w-56 -mt-28 overflow-hidden border border-2 border-white rounded-full mx-auto bg-white">
                            <img src="/assets/members/member_gilbert.jpg" alt="Gilbert Asukulu"/>
                        </div>
                            <div className="p-6">
                            <h4 className="text-2xl font-semibold mb-4">Gilbert Asukulu</h4>
                            <hr />
                            <p className="mt-4">
                                Executive Director
                            </p>
                        </div>
                    </div>
                    <div className="block rounded-lg shadow-lg bg-white">
                        <div className="overflow-hidden rounded-t-lg h-36 bg-primary"></div>
                        <div className="w-56 -mt-28 overflow-hidden border border-2 border-white rounded-full mx-auto bg-white">
                            <img src="/assets/members/member_bizo.jpg" alt="Biaba Bizo"/>
                        </div>
                            <div className="p-6">
                            <h4 className="text-2xl font-semibold mb-4">Biaba Bizo</h4>
                            <hr />
                            <p className="mt-4">
                                Programs Coordinator
                            </p>
                        </div>
                    </div>
                    <div className="block rounded-lg shadow-lg bg-white">
                        <div className="overflow-hidden rounded-t-lg h-36 bg-primary"></div>
                        <div className="w-56 -mt-28 overflow-hidden border border-2 border-white rounded-full mx-auto bg-white">
                            <img src="/assets/members/member_mercy.jpg" alt="Mercy Muunda"/>
                        </div>
                            <div className="p-6">
                            <h4 className="text-2xl font-semibold mb-4">Mercy Muunda</h4>
                            <hr />
                            <p className="mt-4">
                                <i className='fas fa-role'/>
                                Finance Officer
                            </p>
                        </div>
                    </div>
                    <div className="block rounded-lg shadow-lg bg-white">
                        <div className="overflow-hidden rounded-t-lg h-36 bg-primary"></div>
                        <div className="w-56 -mt-28 overflow-hidden border border-2 border-white rounded-full mx-auto bg-white">
                            <img src="/assets/members/member_catherine.jpg" alt="Catherine Njeri"/>
                        </div>
                            <div className="p-6">
                            <h4 className="text-2xl font-semibold mb-4">Catherine Njeri</h4>
                            <hr />
                            <p className="mt-4">
                                <i className='fas fa-role'/>
                                Treasurer
                            </p>
                        </div>
                    </div>
                    <div className="block rounded-lg shadow-lg bg-white">
                        <div className="overflow-hidden rounded-t-lg h-36 bg-primary"></div>
                        <div className="w-56 -mt-28 overflow-hidden border border-2 border-white rounded-full mx-auto bg-white">
                            <img src="/assets/members/member_aoci.jpg" alt="Aoci Soren"/>
                        </div>
                            <div className="p-6">
                            <h4 className="text-2xl font-semibold mb-4">Aoci Soren</h4>
                            <hr />
                            <p className="mt-4">
                                Monitoring and Evaluation Officer
                            </p>
                        </div>
                    </div>
                    <div className="block rounded-lg shadow-lg bg-white">
                        <div className="overflow-hidden rounded-t-lg h-36 bg-primary"></div>
                        <div className="w-56 -mt-28 overflow-hidden border border-2 border-white rounded-full mx-auto bg-white">
                            <img src="/assets/members/member_sheila.jpg" alt="Dorothy Sheila"/>
                        </div>
                            <div className="p-6">
                            <h4 className="text-2xl font-semibold mb-4">Dorothy Sheila</h4>
                            <hr />
                            <p className="mt-4">
                                Procurement Officer/Finance Assistant
                            </p>
                        </div>
                    </div>
                    <div className="block rounded-lg shadow-lg bg-white">
                        <div className="overflow-hidden rounded-t-lg h-36 bg-primary"></div>
                        <div className="w-56 -mt-28 overflow-hidden border border-2 border-white rounded-full mx-auto bg-white">
                            <img src="/assets/members/member_elizabeth.jpg" alt="Elizabeth Njambi"/>
                        </div>
                            <div className="p-6">
                            <h4 className="text-2xl font-semibold mb-4">Elizabeth Njambi</h4>
                            <hr />
                            <p className="mt-4">
                                <i className='fas fa-role'/>
                                Human Resource Assistant
                            </p>
                        </div>
                    </div>
                    <div className="block rounded-lg shadow-lg bg-white">
                        <div className="overflow-hidden rounded-t-lg h-36 bg-primary"></div>
                        <div className="w-56 -mt-28 overflow-hidden border border-2 border-white rounded-full mx-auto bg-white">
                            <img src="/assets/members/member_petronilla.jpg" alt="Petronilla Khasandi"/>
                        </div>
                            <div className="p-6">
                            <h4 className="text-2xl font-semibold mb-4">Petronilla Khasandi</h4>
                            <hr />
                            <p className="mt-4">
                                <i className='fas fa-role'/>
                                Office Admin
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div className='section-map w-full'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d669.058394524974!2d36.72722889402141!3d-1.2911951664239372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1bc59c617de9%3A0xcffee90581fbac5a!2sKabiria%20Rd%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1648706183479!5m2!1sen!2ske"
                    className="w-full h-144"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </Layout>
    )
}