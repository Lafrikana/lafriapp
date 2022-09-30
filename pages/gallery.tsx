/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import Layout from 'components/Layout'
import Script from 'next/script';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { getAllGalleryFrontMatter } from 'components/getGallery';
import GalleryMedia from 'components/GalleryMedia';
import axios from 'axios';
import Loading from 'components/Loading';

export default function Gallery({ media }){

    let [readMedia, updateReadMedia] = useState(undefined)

    const readDir = async () => {

        const config = {
            headers: { 'content-type': 'multipart/form-data' },
            body: {

            } 
        };


        const response = await axios.post('https://app-media.lafrikana.or.ke/media/read_media.php', {}, config);

        updateReadMedia(response.data)

    };

    useEffect(() => {
        readDir()
        setMounted(true)
    }, [])

	const [mounted, setMounted] = useState(false);

	if (!mounted) return null;

    return (
        <Layout env='gallery' title="Our Gallery">
            <Head key="gallery-head">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.1/animate.min.css"/>
            </Head>
            <Script defer src="/scripts/jquery-2.2.2.min.js"></Script>
            <Script defer src="/scripts/bootstrap-3.3.6.min.js" type="text/javascript"></Script>
            <div className='content-header relative gallery px-5 py-10 md:px-10 h-128 flex flex-col justify-start align-center grid content-end'>
                <div className='text-white relative'>
                    <h1 className='text-5xl relative bf-bottom font-extrabold sm:text-6xl'>Our Gallery</h1>
                </div>
            </div>
            <div id="galleryModal" className="modal fade" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                        </div>
                    </div>
                </div>
            </div>
            {
                !readMedia ? <Loading/> : <GalleryMedia gallery={readMedia}/>
            }
            <Script defer type='text/javascript' src='/scripts/g-modal.js'></Script>
        </Layout>
    )
}

export const getStaticProps = async () => {
	const media = getAllGalleryFrontMatter("gallery")

	return {
		props: {
			media: media.splice(0, 10),
		},
		revalidate: 1,
	};
};