import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Script from 'next/script'

export default function Footer(){
    return (
        <>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <footer className="footer-content">
                <div className="footer-div relative max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 text-white">
                    <ul className="text-lg font-light pb-8 flex flex-wrap justify-center">
                        <li className="w-1/2 block md:w-1/3 lg:w-1/3">
                            <div className="text-center">
                                <h2 className="text-white text-md font-medium uppercase mb-4">
                                    EXPLORE
                                </h2>
                                <ul>
                                    <li className="mb-4 hover:text-white hover:underline transition-colors duration-200">
                                        <Link href="/programs">
                                            <a>
                                                Our Programs
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="mb-4 hover:text-white hover:underline transition-colors duration-200">
                                        <Link href="/about">
                                            <a>
                                                About Us
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="mb-4 hover:text-white hover:underline dark:hover:text-white transition-colors duration-200">
                                        <Link href="/blog">
                                            <a>
                                                Our Blog
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="mb-4 hover:text-white hover:underline dark:hover:text-white transition-colors duration-200">
                                        <Link href="/privacy">
                                            <a>
                                                Privacy
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="w-1/2 md:w-1/3 lg:w-1/3">
                            <div className="text-center">
                                <h2 className="text-white text-left md:text-center dark:text-white font-medium text-md uppercase mb-4">
                                    PROGRAMS
                                </h2>
                                <ul>
                                    <li className="mb-4 hover:text-white hover:underline dark:hover:text-white text-left md:text-center transition-colors duration-200">
                                        <Link href="/programs/rebuild">
                                            <a>
                                                Re:Build Program
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="mb-4 hover:text-white hover:underline dark:hover:text-white text-left md:text-center transition-colors duration-200">
                                        <Link href="/programs/aep">
                                            <a>
                                                A.E.P
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="mb-4 hover:text-white dark:hover:text-white text-left md:text-center transition-colors duration-200">
                                        <ul>
                                            <strong>Women and Youth Alive:</strong>
                                            <li className='hover:underline'>
                                                <Link href="/programs/training_in_art_tailoring">
                                                    <a>
                                                        Tailoring Production
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className='hover:underline'>
                                                <Link href="/programs/training_in_art_and_craft">
                                                    <a>
                                                        Art and Craft
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="mb-4 hover:text-white hover:underline dark:hover:text-white text-left md:text-center transition-colors duration-200">
                                        <Link href="/programs/go_girl">
                                            <a>
                                                Go Girl
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="mb-4 hover:text-white hover:underline dark:hover:text-white text-left md:text-center transition-colors duration-200">
                                        <Link href="/music_and_studio_production">
                                            <a>
                                                Music and Studio Production
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="mb-4 hover:text-white hover:underline dark:hover:text-white text-left md:text-center transition-colors duration-200">
                                        <Link href="/programs/training_in_art_tailoring">
                                            <a>
                                                Tailoring Production
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="w-1/2 md:w-1/3 lg:w-1/3 mt-20 md:mt-0 lg:mt-0">
                            <div className="text-center">
                                <h2 className="text-white dark:text-white font-medium text-md uppercase mb-4">
                                    Our Office
                                </h2>
                                <ul>
                                    <li className="mb-4 hover:text-white hover:underline dark:hover:text-white transition-colors duration-200">
                                        <Link href="/about#office">
                                            <a>
                                                No. 1613, Kivuli Centre, Kabiria Road, Riruta, Dagoretti
                                                <br/>
                                                P.O. Box. 8172-00300, Nairobi
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="text-center">
                                <h2 className="text-white dark:text-white font-medium text-md uppercase mb-4 pt-20 md:pt-10">
                                    CONTACT US
                                </h2>
                                <ul>
                                    <li className="mb-4 hover:text-white hover:underline dark:hover:text-white transition-colors duration-200">
                                        <a href="tel://+254 110 223350">
                                            Tel: <strong>+254 110 223350</strong>
                                        </a>
                                    </li>
                                    <li className="mb-4 hover:text-white hover:underline dark:hover:text-white transition-colors duration-200">
                                        <a href="mailto://info@lafrikana.or.ke">
                                            Email: <strong>info@lafrikana.or.ke</strong>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <div className="pt-8 flex border-t border-gray-200 max-w-xs mx-auto items-center justify-evenly">
                        <a href="https://www.facebook.com/LAFRIKANACB0">
                            <i className='text-white hover:text-blue-900 text-2xl fab fa-facebook square transition transition-ease-in transition-3'></i>
                        </a>
                        <a href="https://twitter.com/lafrikanacbo1">
                            <i className='text-white hover:text-blue text-2xl fab fa-twitter transition transition-ease-in transition-3'></i>
                        </a>
                        <a href="https://instagram.com/lafrikanacbo">
                            <i className='text-white hover:text-red-700 text-2xl fab fa-instagram transition transition-ease-in transition-3'></i>
                        </a>
                    </div>
                    {/* <div className="text-center pt-10 sm:pt-12 font-light flex items-center justify-center">
                        <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                            <div className="relative ">
                                <input type="text" id="&quot;form-subscribe-Subscribe" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-white placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-900 focus:border-transparent" placeholder="Email"/>
                            </div>
                            <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-orange-900 rounded-lg shadow-md hover:bg-orange-900 focus:outline-none focus:ring-2 focus:ring-orange-800 focus:ring-offset-2 focus:ring-offset-orange-600" type="submit">
                                Subscribe
                            </button>
                        </form>
                    </div> */}
                    {/* <Subscribe/> */}
                </div>
                <br/><br/>
                <p className="credits">
                    &copy; Copyright L&#x27;AFRIKANA 2022
                </p>
            </footer>
        </>
    )
}
