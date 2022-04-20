/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Script from 'next/script'
import jQuery from 'jquery'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

interface Props {
    //boolean to always open ddm (for presentation)
    forceOpen?: boolean;
    label?: string;
    withDivider?: boolean;
    icon?: JSX.Element;
    items: DDMItem[];
    withBackground?: boolean;
}

export interface DDMItem {
    icon?: JSX.Element;
    label: string;
    desc?: string;
    link?: string;
}

const Menu = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        jQuery(function($){
            function HeaderAdapt(){
                var header, header_box, header_logo, header_trigger, header_navtext, header_navtextactive;
                header = $('#header');
                header_box = $('.header-box');
                header_logo = $('.header-logo');
                header_trigger = $('.header-droptrigger');
                header_navtext = $('.header-navtext');
                header_navtextactive = $('.header-navtextactive');
                function scroll_adapt(){
                    var st = $(window).scrollTop();
                    if($(window).scrollTop() < 100){
                        header.addClass('at-top');
                        header.addClass('md:h-32');
                        header_box.addClass('md:h-32');
                        header_logo.addClass('md:h-28 md:w-28');
                        header_trigger.removeClass('text-gray-900 hover:text-gray-700');
                        header_trigger.addClass('text-white hover:text-white-200');
                        header_navtext.addClass('text-white hover:text-gray-300');
                        header_navtext.removeClass('text-gray-900 hover:text-gray-600');
                        header_navtextactive.addClass('text-secondary hover:text-secondary-dark border-secondary');
                        header_navtextactive.removeClass('text-primary hover:text-primary-dark border-primary');
                    }
                    else if($(window).scrollTop() > 100){
                        header.removeClass('md:h-32');
                        header_box.removeClass('md:h-32');
                        header.removeClass('at-top');
                        header_logo.removeClass('md:h-28 md:w-28');
                        header_trigger.removeClass('text-white hover:text-white-200');
                        header_trigger.addClass('text-gray-900 hover:text-gray-700');
                        header_navtext.removeClass('text-white hover:text-gray-300');
                        header_navtext.addClass('text-gray-900 hover:text-gray-600');
                        header_navtextactive.removeClass('text-secondary hover:text-secondary-dark border-secondary');
                        header_navtextactive.addClass('text-primary hover:text-primary-dark border-primary');
                    }
                    if(st > last_value){
                        if($(window).scrollTop() > 200){
                            header.css({
                                top: '-80px',
                            });
                        }
                    }
                    else if(st < last_value){
                        header.css({
                            top: '0px'
                        });
                    }
                    last_value = st;
                }
                var last_value = 0;
                $(window).on('scroll resize load', function(){
                    scroll_adapt();
                });
            }
            HeaderAdapt();
        })
    }, [isOpen])

    const ProgramsMenu = () => {
        return (
            <div className="group-hover:block dropdown-menu absolute hidden h-auto">
                <ul className="relative top-5 w-56 bg-white shadow-md px-2 rounded-md py-2">
                    <li className="p-1.5 my-1.5 relative bg-white width-full text-primary hover:drop-shadow-md hover:text-white rounded-md hover:bg-primary transition ease-in-out duration-600">
                        <Link href='/programs/rebuild'>
                            <a className="block font-bold text-base cursor-pointer">Re:Build</a>
                        </Link>
                    </li>
                    <li className="p-1.5 my-1.5 relative bg-white width-full text-primary hover:drop-shadow-md hover:text-white rounded-md hover:bg-primary transition ease-in-out duration-600">
                        <Link href='/programs/aep'>
                            <a className="block font-bold text-base cursor-pointer">AEP</a>
                        </Link>
                    </li>
                    <li className="p-1.5 my-1.5 relative bg-white width-full text-primary hover:drop-shadow-md hover:text-white rounded-md hover:bg-primary transition ease-in-out duration-600">
                        <Link href='/programs/training_in_art_tailoring'>
                            <a className="block font-bold text-base cursor-pointer">Tailoring Production</a>
                        </Link>
                    </li>
                    <li className="p-1.5 my-1.5 relative bg-white width-full text-primary hover:drop-shadow-md hover:text-white rounded-md hover:bg-primary transition ease-in-out duration-600">
                        <Link href='/programs/go_girl'>
                            <a className="block font-bold text-base cursor-pointer">Go Girl</a>
                        </Link>
                    </li>
                    {
                        props.env != 'programs' ?
                            <li className="p-1.5 my-1.5 relative bg-white width-full text-primary hover:drop-shadow-md hover:text-white rounded-md hover:bg-primary transition ease-in-out duration-600">
                                <Link href='/programs'>
                                    <a className="block font-bold text-base cursor-pointer">View all {" "} →</a>
                                </Link>
                            </li>
                        : ''
                    }
                </ul>
            </div>
        )
    }

    const AboutMenu = () => {
        return (
            <div className="group-hover:block dropdown-menu absolute hidden h-auto">
                <ul className="relative top-5 w-56 bg-white shadow-md px-2 rounded-md py-2">
                    <li className="p-1.5 my-1.5 relative bg-white width-full text-primary hover:drop-shadow-md hover:text-white rounded-md hover:bg-primary transition ease-in-out duration-600">
                        <Link href='/about#our_statement'>
                            <a className="block font-bold text-base cursor-pointer">Our Statement</a>
                        </Link>
                    </li>
                    <li className="p-1.5 my-1.5 relative bg-white width-full text-primary hover:drop-shadow-md hover:text-white rounded-md hover:bg-primary transition ease-in-out duration-600">
                        <Link href='/about#core_values'>
                            <a className="block font-bold text-base cursor-pointer">Core Values</a>
                        </Link>
                    </li>
                    <li className="p-1.5 my-1.5 relative bg-white width-full text-primary hover:drop-shadow-md hover:text-white rounded-md hover:bg-primary transition ease-in-out duration-600">
                        <Link href='/about#team'>
                            <a className="block font-bold text-base cursor-pointer">Our Team</a>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }

    return (
        <div>
            <Script 
                src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"
                integrity="sha512-z4OUqw38qNLpn1libAN9BsoDx6nbNFio5lA6CuTp9NlK83b89hgyCVq+N5FdBJptINztxn1Z3SaKSKUS5UP60Q=="
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
            />
            <nav id="header" className="bg-white dark:bg-gray-800 shadow h-20 md:h-32">
                <div className="max-w-10xl mx-auto px-2 md:px-10">
                    <div className=" header-box flex items-center justify-between h-20 md:h-32">
                        <div className="w-full justify-between flex items-center">
                            <Link href='/'>
                                <a className="flex-shrink-0">
                                    <img className="h-20 w-20 md:h-28 md:w-28 header-logo" src="/assets/icons/lafrikana_transparent_.png" alt="L'Afrikana"/>
                                </a>
                            </Link>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    {
                                        props.env == 'home' ?
                                            <a className="header-navtextactive text-primary border-b-4 border-primary hover:text-primary-dark dark:hover:text-white pr-3 pl-0.5 py-2 text-md font-bold transition ease-in-out duration-300">
                                                Home
                                            </a>
                                        : <Link href='/'>
                                            <a className="header-navtext text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-white px-3 py-2 text-sm font-medium transition ease-in-out duration-300">
                                                Home
                                            </a>
                                        </Link>
                                    }
                                    {
                                        props.env == 'about' ?
                                            <a className="group header-navtextactive text-primary border-b-4 border-primary hover:text-primary-dark dark:hover:text-white pr-3 pl-0.5 py-2 text-md font-bold transition ease-in-out duration-300">
                                                About Us
                                                <AboutMenu/>
                                            </a>
                                        : <Link href='/about'>
                                            <a className="group header-navtext text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-white px-3 py-2 text-sm font-medium transition ease-in-out duration-300">
                                                About Us
                                                <AboutMenu/>
                                            </a>
                                        </Link>
                                    }
                                    {
                                        props.env == 'programs' ?
                                            <a className="group header-navtextactive text-primary border-b-4 border-primary hover:text-primary-dark dark:hover:text-white pr-3 pl-0.5 py-2 text-md font-bold transition ease-in-out duration-300">
                                                Programs
                                                <ProgramsMenu/>
                                            </a>
                                        : <Link href='/programs'>
                                            <a className="group header-navtext text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-white px-3 py-2 text-sm font-medium transition ease-in-out duration-300">
                                                Programs
                                                <ProgramsMenu/>
                                            </a>
                                        </Link>
                                    }
                                    {
                                        props.env == 'contact_us' ?
                                            <a className="header-navtextactive text-primary border-b-4 border-primary hover:text-primary-dark dark:hover:text-white pr-3 pl-0.5 py-2 text-md font-bold transition ease-in-out duration-300">
                                                Contact Us
                                            </a>
                                        : <Link href='/contact_us'>
                                            <a className="header-navtext text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-white px-3 py-2 text-sm font-medium transition ease-in-out duration-300">
                                                Contact Us
                                            </a>
                                        </Link>
                                    }
                                    {
                                        props.env == 'blog' ?
                                            <a className="header-navtextactive text-primary border-b-4 border-primary hover:text-primary-dark dark:hover:text-white pr-3 pl-0.5 py-2 text-md font-bold transition ease-in-out duration-300">
                                                Blog
                                            </a>
                                        : <Link href='/blog'>
                                            <a className="header-navtext text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-white px-3 py-2 text-sm font-medium transition ease-in-out duration-300">
                                                Blog
                                            </a>
                                        </Link>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <div className="ml-4 flex items-center md:ml-6"></div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button className="header-droptrigger text-gray-900 dark:text-white hover:text-gray-700 inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition ease-in-out duration-300"
                                onClick={() => setIsOpen(!isOpen)}>
                                <svg width="20" height="20" fill="currentColor" className="h-8 w-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {(props.forceOpen || isOpen) && (
                    <div className="md:hidden menu-dropdown bg-white">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 divide-y divide-slate-300">
                            {
                                props.env == 'home' ?
                                    <a className="text-primary dark:text-white block px-3 py-2 text-base font-medium transition ease-in-out duration-300 cursor-default">
                                        Home
                                    </a>
                                : <Link href="/">
                                    <a className="text-gray-500 hover:text-gray-800 dark:hover:text-white block px-3 py-2 text-base font-medium cursor-pointer transition ease-in-out duration-300">
                                        Home
                                    </a>
                                </Link>
                            }
                            {
                                props.env == 'about' ?
                                    <a className="text-primary dark:text-white block px-3 py-2 text-base font-medium transition ease-in-out duration-300 cursor-default">
                                        About Us
                                    </a>
                                : <Link href="/about">
                                    <a className="text-gray-500 hover:text-gray-800 dark:hover:text-white block px-3 py-2 text-base font-medium cursor-pointer transition ease-in-out duration-300">
                                        About Us
                                    </a>
                                </Link>
                            }
                            {
                                props.env == 'programs' ?
                                    <a className="text-primary dark:text-white block px-3 py-2 text-base font-medium transition ease-in-out duration-300 cursor-default">
                                        Programs
                                    </a>
                                : <Link href="/programs">
                                    <a className="text-gray-500 hover:text-gray-800 dark:hover:text-white block px-3 py-2 text-base font-medium cursor-pointer transition ease-in-out duration-300">
                                        Programs
                                    </a>
                                </Link>
                            }
                            {
                                props.env == 'contact_us' ?
                                    <a className="text-primary dark:text-white block px-3 py-2 text-base font-medium transition ease-in-out duration-300 cursor-default">
                                        Contact Us
                                    </a>
                                : <Link href="/contact_us">
                                    <a className="text-gray-500 hover:text-gray-800 dark:hover:text-white block px-3 py-2 text-base font-medium cursor-pointer transition ease-in-out duration-300">
                                        Contact Us
                                    </a>
                                </Link>
                            }
                            {
                                props.env == 'blog' ?
                                    <a className="text-primary dark:text-white block px-3 py-2 text-base font-medium transition ease-in-out duration-300 cursor-default">
                                        Blog
                                    </a>
                                : <Link href="/blog">
                                    <a className="text-gray-500 hover:text-gray-800 dark:hover:text-white block px-3 py-2 text-base font-medium cursor-pointer transition ease-in-out duration-300">
                                        Blog
                                    </a>
                                </Link>
                            }
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
};
export default Menu;