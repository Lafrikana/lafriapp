/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from 'components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import Slider from "react-slick"
import { useEffect } from 'react'
import jQuery from 'jquery'
import Menu from 'components/Menu'
import Script from 'next/script'
import 'styles/slick.module.css'
import styles from 'styles/slick.module.css'
import { getAllBlogsFrontMatter } from 'components/getBlogs'
import LatestBlogs from 'components/LatestBlogs'

export default function Home({ blogs }){

	const config = {
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: false,
		dots: true,
		dotsClass: "slick_slider_dots",
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};

	const moduleConfig = {
		...config,
		dotsClass: styles.slick_slider_dots
	}

	const keywords = ['first', 'second', 'third', 'fourth', 'fifth']

	const slides = [
		{
			title: 'Welcome',
			subtitle: "Welcome to L'AFRIKANA Organization",
			text: '',
			button: 'Get Started',
			button_link: '#welcome'
		},
		{
			title: 'Our Perspective',
			subtitle: '',
			text: "L'AFRIKANA is a registered refugee-run community-based organisation whose aim is to empower fellow refugees and the local community living with them",
			button: null,
		},
		{
			title: 'What We Do',
			subtitle: '',
			text: '',
			button: 'Explore our Programs',
			button_link: 'programs'
		},
		{
			title: 'Who We Are',
			subtitle: '',
			text: '',
			button: 'About Us',
			button_link: 'about'
		},
	]

	useEffect(() => {
		jQuery(function($){
			$.fn.SnakeParallax=function(a){this.ready(function(){$('[snake-parallax="hero"]').css({"background-repeat":"no-repeat","background-size":"cover",overflow:"hidden",width:"100%",height:"100vh",position:"relative"}),$("head").append($("<style>body,html{width:100%;height:100%;}</style>"));var e=$.extend({backgroundPosition:"center top",backgroundImage:""},a);return $('[snake-parallax="hero"]').css({backgroundPosition:e.backgroundPosition,backgroundImage:e.backgroundImage})}),this.scroll(function(){var a=$(document).scrollTop().valueOf()/2;$('[snake-parallax="hero"]').css({height:"calc(100vh - "+Math.round(a)+"px)"})})};
            $(document, window).SnakeParallax({
                backgroundPosition:"center top",
                backgroundImage:"url(/assets/images/education.jpg)"
            });
			$('#nav-toggle').on('click', function(){
				$('#nav-content').toggleClass('hidden');
			})
		});
	})

	return (
		<Layout env="home" title="L'AFRIKANA - Home">
			<div className="slide-container">
				<Slider {...config}>
					{slides.map((x, i) => {
						return (
							<div key={i} className={`slide-box ${keywords[i]}`}>
								<div className="slide-item">
									<div className="text-box">
										<h1>{x.title}</h1>
										{
											!x.subtitle ?
												<br/>
											: ''
										}
										{
											x.subtitle != '' ?
												<h3 className='text-white'>{x.subtitle}</h3>
											: ''
										}
										{
											x.text != '' ?
												<p className='text-white font-normal text-2xl max-w-5xl'>{ x.text }</p>
											: ''
										}
										{
											x.button ?
												<div className="slide-info">
													<Link href={x.button_link ? x.button_link : ''}>
														<a>
															<button className="tr-3 bt-primary bt-primary-hb hover:bg-transparent py-3 px-5 rounded text-white font-bold">{x.button}</button>
														</a>
													</Link>
												</div>
											: ''
										}
									</div>
								</div>
							</div>
						)
					})}
				</Slider>
			</div>

			<div className='about-init' id="welcome">
				<div className="max-w-screen-xl p-4 bg-white dark:bg-gray-800 mx-auto px-4 sm:px-6 lg:px-8 relative py-26 pb-10 pt-10 lg:mt-20">
					<div className="relative">
						<div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
							<div className="lg:col-start-2 lg:max-w-2xl ml-auto">
								<h4 className="mt-2 text-2xl leading-8 font-extrabold text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
									Our Purpose
								</h4>
								<p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
									L&#x27;AFRIKANA seeks to be a channel of transformation through which refugees can play an active role in finding solutions to challenges they face and eventually contribute to their welfare as well as to the social and economic development of their host nation Kenya.
								</p>
							</div>
							<div className="mt-10 lg:-mx-4 relative relative-20 lg:mt-0 lg:col-start-1 flex items-center justify-center">
								<div className="relative space-y-1">
									<div className="flex items-end justify-start lg:justify-start space-x-1">
										<img className="rounded-lg shadow-lg w-32 md:w-56" width="200" src="/assets/images/image_block1.jpg" alt="1"/>
										<img className="rounded-lg shadow-lg w-40 md:w-64" width="260" src="/assets/images/image_block2.jpg" alt="2"/>
									</div>
									<div className="flex items-start justify-start lg:justify-start space-x-1">
										<img className="rounded-lg shadow-lg w-32 md:w-56" width="220" src="/assets/images/image_block3.jpg" alt="3"/>
										<img className="rounded-lg shadow-lg w-26 md:w-56" width="200" src="/assets/images/image_block4.jpg" alt="4"/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="lg:mt-0 lg:flex-shrink-0 relative text-center block">
						<div className="mt-12 inline-flex rounded-md shadow">
							<Link href="/about">
								<a>
									<button type="button" className="py-4 px-6 bg-primary hover:bg-primary-dark focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
										Read More about us
									</button>
								</a>
							</Link>
						</div>
					</div>
				</div>

				<br/><br/>
				<LatestBlogs blogs={blogs}/>

				<br/><br/><br/><br/>
				{/* <div className="flex items-center justify-center px-5 py-5">
					<div className="w-full mx-auto max-w-xl rounded-lg bg-white dark:bg-gray-800 shadow-lg px-5 pt-5 pb-10 text-gray-800 dark:text-gray-50">
						<div className="w-full pt-1 text-center pb-5 -mt-16 mx-auto">
							<img alt="profil" src="/assets/images/_icon_vision.png" className="mx-auto object-cover rounded-full h-40 w-40 "/>
						</div>
						<div className="w-full mb-10">
							<div className="text-3xl text-indigo-500 text-left leading-tight h-3">
								“
							</div>
							<p className="text-sm text-gray-600 dark:text-gray-100 text-center px-5">
								To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
							</p>
							<div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
								”
							</div>
						</div>
						<div className="w-full">
							<p className="text-md text-indigo-500 font-bold text-center">
								Tom Hardy
							</p>
							<p className="text-xs text-gray-500 dark:text-gray-300 text-center">
								@thom.hardy
							</p>
						</div>
					</div>
				</div> */}


			</div>


		</Layout>
		
	)
}

export const getStaticProps = async () => {
	const blogs = getAllBlogsFrontMatter("blogs")

	return {
		props: {
			blogs: blogs.splice(0, 3),
		},
		revalidate: 1,
	};
};
