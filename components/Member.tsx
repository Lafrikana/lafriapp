/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function Member(props){
    return (
        <div className="p-4">
            <div className="text-center mb-4 opacity-90">
                <a href="#" className="block relative">
                    <img alt="profile" src={props.src} className="mx-auto object-cover rounded-full h-40 w-40 "/>
                </a>
            </div>
            <div className="text-center">
                <p className="text-2xl text-gray-800 dark:text-white">
                    {props.name}
                </p>
                <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                    {props.role}
                </p>
                <p className="text-md text-gray-500 dark:text-gray-400 max-w-xs py-4 font-light">
                    {props.description}
                </p>
            </div>
        </div>
    )
}