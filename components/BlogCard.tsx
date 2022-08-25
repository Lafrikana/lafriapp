/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import anime from 'animejs'
import jQuery from 'jquery'

export default function BlogCard(props){

    const animationRef = useRef(null);
    useEffect(() => {
        animationRef.current = anime({
            targets: ".scale",
            scale: 1.1,
            delay: function(el, i) {
                return i * 100;
            },
            loop: false,
            direction: "forward",
            easing: "easeInOutSine",
        });
    }, []);

    const [hover, setHover] = useState(false)
    const hoverOn = function(){
        setHover(true);
    }
    const hoverOff = function(){ 
        setHover(false)
    }

    return (
        <div className="overflow-hidden shadow-2xl rounded-lg h-120 w-full md:w-88 cursor-pointer m-auto h-full">
            <Link href={`/blog/${props.post.id}`}>
                <a className="w-full block h-full">
                    <div className='overflow-hidden'>
                        <img alt={props.post.title} src={props.post.display} title={props.post.title} className={
                                hover ? "blogcard-image active h-60 w-full object-cover transition ease-out duration-1500" : "blogcard-image h-60 w-full object-cover transition ease-out duration-1500"
                            }
                            onMouseEnter={hoverOn}
                            onMouseLeave={hoverOff}
                        />
                    </div>
                    <div className="bg-white dark:bg-gray-800 w-full p-4">
                        <p className="text-primary text-md font-medium">
                            {props.post.type}
                        </p>
                        <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                            {props.post.title}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 font-light text-md">
                            {props.post.summary}
                        </p>
                        <div className="flex items-center mt-4 bottom-0 relative">
                            <span className="flex justify-center content-center relative">
                                <img alt={props.image.alt} src={props.image.src} className="block mx-auto border-2 border-primary object-cover rounded-full h-10 w-10 "/>
                            </span>
                            <div className="flex flex-col justify-between ml-2 text-sm">
                                <p className="text-gray-800 dark:text-white font-bold">
                                    {props.post.author}
                                </p>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {props.post.signature}
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    )
}