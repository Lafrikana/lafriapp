/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { convertDate } from "components/date";

export default function GalleryCard(props){
    return (
        <div className="gallery-item relative">
            {
                props.type == "image" ?
                    <>
                        <img src={props.file} className="img-responsive h-full" data-description={props.description} data-date={props.date} alt={props.description}/>
                        <div className="absolute cursor-pointer item-effects top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0" style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}}></div>
                    </>
                : <video className="vid">
                    <source src={props.file}
                        type="video/mp4" data-description={props.description} data-date={props.date}>
                    </source>
                </video>
            }
        </div>
    )
}