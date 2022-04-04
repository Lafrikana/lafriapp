/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function UserCard(props){
    return (
        <div className="p-4 relative mb-20">
            <div className="text-center mb-4 absolute -top-16 right-1/2 transform translate-x-1/2">
                <a href="#" className="block relative overflow-hidden">
                    <img alt={props.name} src={`/assets/members/${props.icon}`} className="mx-auto object-cover rounded-full h-40 w-40  border-2 border-white dark:border-gray-800"/>
                </a>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow px-8 py-4 pt-24">
                <div className="text-center">
                    <p className="text-2xl text-gray-800 dark:text-white">
                        {props.name}
                    </p>
                    <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                        {props.role}
                    </p>
                    <p className="text-md text-gray-500 w-60 dark:text-gray-400 mx-auto py-4 font-light">
                        {props.description}
                    </p>
                </div>
            </div>
        </div>
    )
}