/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Script from 'next/script'
import Link from 'next/link'
import React, { useEffect } from 'react'
import ToggleTheme from 'components/ToggleTheme'
import jQuery from 'jquery'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import Layout from 'components/Layout'

export default function Programs(){

    return (
        <Layout env='programs'>
            <div className='content-header relative programs px-5 py-10 md:px-10 mb-16 h-128 flex flex-col justify-start align-center grid content-end'>
                <div className='text-white relative'>
                    <h1 className='text-5xl relative bf-bottom font-extrabold sm:text-6xl'>Our Programs</h1>
                </div>
            </div>
            <div className='programs-init relative p-0.5 lg:p-8 bg-white'>

                <div className="bg-white dark:bg-gray-800 overflow-hidden relative flex flex-col lg:flex-row lg:items-center mx-auto border-b-2 border-gray-300">
                    <div className="flex items-center gap-4 p-4 lg:p-10 max-w-2xl">
                        <div className='gradiated rounded-lg'>
                            <img src="/assets/images/rebuild.jpg" className="rounded-lg w-1/" alt="Re:build"/>
                        </div>
                    </div>
                    <div className="py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                        <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xlr">
                            <span className="block">
                                1. Re:Build Program
                            </span>
                        </h2>
                        <p className="text-md mt-4 text-gray-800">
                            <strong>Refugees in East Africa: Boosting Urban Innovations for Livelihoods Development</strong><br/>
                            In partnership with the IRC, we deliver services to refugees and the host community by providing them with vocational trainings and skills to boost their livelihoods.
                        </p>
                        <div className="lg:mt-0 lg:flex-shrink-0">
                            <div className="mt-12 inline-flex rounded-md shadow">
                                <Link href='/programs/rebuild'>
                                    <a>
                                        <button type="button" className="py-2 px-4 bg-primary hover:bg-primary-dark focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                            Read More
                                        </button>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 overflow-hidden relative flex flex-col-reverse lg:flex-row lg:items-center mx-auto border-b-2 border-gray-300">
                    <div className="py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                        <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                            <span className="block">
                                2. AEP(Accelerated Education Program)
                            </span>
                        </h2>
                        <p className="text-md mt-4 text-gray-800">
                            To provide education in an accelerated timeframe for disadvantaged groups, over-age, out-of-school children and youth who missed out or had their education interrupted due to poverty, marginalization, conflict or crisis.
                        </p>
                        <div className="lg:mt-0 lg:flex-shrink-0">
                            <div className="mt-12 inline-flex rounded-md shadow">
                                <Link href='/programs/aep'>
                                    <a>
                                        <button type="button" className="py-2 px-4 bg-primary hover:bg-primary-dark focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                            Read More
                                        </button>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 lg:p-10">
                        <div className="flex items-center gap-4 p-4 lg:p-5 max-w-7xl">
                            <div className='gradiated rounded-lg'>
                                <img src="/assets/images/aep2.JPG" className="rounded-lg" alt="AEP"/>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className='bg-white text-center pt-10 text-3xl font-extrabold text-black dark:text-white sm:text-4xl'>3. Women &amp; Youth Alive</h2>
                <div className="bg-white dark:bg-gray-800 overflow-hidden relative flex flex-col lg:flex-row lg:items-center mx-auto border-b-2 border-gray-300">
                    <div className="flex items-center gap-4 p-4 lg:p-4 max-w-4xl">
                        <img src="/assets/images/tailoring2.JPG" className="rounded-lg w-1/2" alt="Training in Art Tailoring"/>
                        <div>
                            <img src="/assets/images/tailoring1.JPG" className="rounded-lg mb-8 max-w-xs" alt="Training in Art Tailoring"/>
                        </div>
                    </div>
                    <div className="py-12 px-4 sm:px-6 lg:py-16 lg:px-3 z-20">
                        <h3 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                            <span className="block">
                                - Training in Art Tailoring
                            </span>
                        </h3>
                        <p className="text-md mt-4 text-gray-800">
                            The Tailoring training course is an environment where refugees and locals gain skills in sewing different items. This knowledge empowers them to be able to work or start their own business.
                        </p>
                        <div className="lg:mt-0 lg:flex-shrink-0">
                            <div className="mt-12 inline-flex rounded-md shadow">
                                <Link href='/programs/training_in_art_tailoring'>
                                    <a>
                                        <button type="button" className="py-2 px-4 bg-primary hover:bg-primary-dark focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                            Read More
                                        </button>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 overflow-hidden relative flex flex-col-reverse lg:flex-row lg:items-center mx-auto border-b-2 border-gray-300">
                    <div className="py-12 px-4 sm:px-6 lg:py-16 lg:px-4 z-20">
                        <h3 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                            <span className="block">
                                - Training in Art &amp; Craft
                            </span>
                        </h3>
                        <p className="text-md mt-4 text-gray-800">
                            This program enables students to use creativity and work with their hands to craft different shapes and designs using locally sourced materials such as banana fiber and sisal.
                        </p>
                        <div className="lg:mt-0 lg:flex-shrink-0">
                            <div className="mt-12 inline-flex rounded-md shadow">
                                <Link href='/programs/training_in_art_and_craft'>
                                    <a>
                                        <button type="button" className="py-2 px-4 bg-primary hover:bg-primary-dark focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                            Read More
                                        </button>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 lg:p-5 max-w-4xl">
                        <img src="/assets/images/art1.JPG" className="rounded-lg w-1/2" alt="Training in Art and Craft"/>
                        <div>
                            <img src="/assets/images/art3.JPG" className="rounded-lg mb-8" alt="Training in Art and Craft"/>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 overflow-hidden relative flex flex-col lg:flex-row lg:items-center mx-auto border-b-2 border-gray-300">
                    <div className="flex items-center gap-4 p-4 lg:p-10">
                        <div className="flex items-center gap-4 p-4 lg:p-5 max-w-4xl">
                            <img src="/assets/images/gogirl.jpg" className="rounded-lg w-1/" alt="Go Girl"/>
                        </div>
                    </div>
                    <div className="py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                        <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                            <span className="block">
                                4. Go Girl
                            </span>
                        </h2>
                        <p className="text-md mt-4 text-gray-800">
                            To visit and empower families and communities, creating awareness and providing support to young girls who are victims of sexual abuse, early pregnancy, early marriage and drug abuse.
                        </p>
                        <div className="lg:mt-0 lg:flex-shrink-0">
                            <div className="mt-12 inline-flex rounded-md shadow">
                                <Link href='/programs/go_girl'>
                                    <a>
                                        <button type="button" className="py-2 px-4 bg-primary hover:bg-primary-dark focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                            Read More
                                        </button>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 overflow-hidden relative flex flex-col-reverse lg:flex-row lg:items-center mx-auto border-b-2 border-gray-300">
                    <div className="py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                        <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                            <span className="block">
                                5. Music and Studio Production
                            </span>
                        </h2>
                        <p className="text-md mt-4 text-gray-800">
                            To promote singing talent of the youth through recording and production of their songs and to offer a space for singing practice to the youth.
                        </p>
                        <div className="lg:mt-0 lg:flex-shrink-0">
                            <div className="mt-12 inline-flex rounded-md shadow">
                                <Link href='/programs/music_and_studio_production'>
                                    <a>
                                        <button type="button" className="py-2 px-4 bg-primary hover:bg-primary-dark focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                            Read More
                                        </button>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 lg:p-10">
                        <div className="flex items-center gap-4 p-4 lg:p-10 max-w-2xl">
                            <img src="/assets/images/music.jpg" className="rounded-lg w-1/" alt="Music Production"/>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 overflow-hidden relative flex flex-col lg:flex-row lg:items-center mx-auto border-b-2 border-gray-300">
                    <div className="flex items-center gap-4 p-4 lg:p-10 max-w-2xl">
                        <img src="/assets/images/covid_response.jpg" className="rounded-lg w-1/" alt="Covid-19 Response"/>
                    </div>
                    <div className="py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                        <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                            <span className="block">
                                6. Covid-19 Response Program
                            </span>
                        </h2>
                        <p className="text-md mt-4 text-gray-800">
                            To provide and distribute relief packages of food, sanitary and hygiene items to urban refugees and needy Kenyans living in Nairobi.
                        </p>
                        <div className="lg:mt-0 lg:flex-shrink-0">
                            <div className="mt-12 inline-flex rounded-md shadow">
                                <Link href='/programs/covid_19_response'>
                                    <a>
                                        <button type="button" className="py-2 px-4 bg-primary hover:bg-primary-dark focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                            Read More
                                        </button>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Layout>

    )
}