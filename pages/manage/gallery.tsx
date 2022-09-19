/* eslint-disable @next/next/no-img-element */
import { UiFileInputButton } from 'components/UIFileInputButton';
import axios from 'axios';
import jQuery from 'jquery';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import Layout from 'components/Layout';
import { useRouter } from 'next/router';
import Login from 'components/Login';
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next';

const GalleryManage = ({ hasReadPermission, cookieSrc, cookieConsts }) => {

    let cookieValues = getCookies()
    let cookiePermission = false
    cookiePermission = cookieValues ?
        cookieValues.src ?
            decodeURIComponent(cookieValues.src) == cookieConsts
        : false
    : false

    let [gallery_media, updateGalleryMedia] = useState(undefined)
    let [upload_progress, updateUploadProgress] = useState(-1)
  
    const onFileChange = async (formData) => {
        const config = {
            headers: { 'content-type': 'multipart/form-data' },
            onUploadProgress: (event) => {
                updateUploadProgress( Math.round((event.loaded * 100) / event.total) )
            },
        };
        const response = await axios.post('/api/upload_gallery', formData, config);
        updateGalleryMedia(response.data)
        console.log('response', response.data);
    };

    useEffect(() => {
        jQuery(function($){
            const media_input = $('#gallery-media')
            const type_input = $('#gallery-type')
            let placeholder = $('#media-placeholder')
            function handleMedia(status){
                let handler = $('#media-handler')
                if(!status){
                    handler.html("Media File not uploaded!")
                    setTimeout(() => {
                        handler.html('')
                    }, 3000)
                }
            }
            function MediaPlacer(data){
                let mimetype = data.mimetype
                let name = data.originalname
                let img = /image/
                let vid = /video/
                let type = vid.test(mimetype) ? "video" : "image"
                let build = type == "image" ?
                    `<img src="/uploads/gallery/${name}" class='object-contain h-60 w-auto' alt="${name}"/>`
                : `<video src="/uploads/gallery/${name}" class='object-contain h-60 w-auto' controls></video>`
                media_input.val(JSON.stringify(data))
                type_input.val(type)
                placeholder.html(build)
            }
            gallery_media != undefined ? (
                MediaPlacer(gallery_media.data)
            ) : ''
            if(upload_progress == -1){}
            else {
                if(upload_progress == 100){
                    placeholder.html(`<p class='text-3xl text-green-500 font-bold self-center'>100% Complete</p>`)
                    setTimeout(() => {
                        gallery_media != undefined ? (
                            MediaPlacer(gallery_media.data)
                        ) : ''
                    }, 2000)
                }
                else {
                    placeholder.html(`<p class='text-3xl text-gray-600 self-center font-bold'>${upload_progress}%</p>`)
                }
            }
            const add = $('#add-gallery')
            const form_add = $('#form-add-gallery')
            form_add.on('submit', function(e){
                e.preventDefault()
                if(media_input.val() != undefined && media_input.val() != "" ){
                    let media_data = media_input.val()
                    let description = $('#description-box').val()
                    let media_type = type_input.val()
                    $('#add-gallery').html('Adding ...')
                    axios
                    .post('/api/create_file', {
                        'media': media_data,
                        'description': description,
                        'type': media_type
                    })
                    .then((response) => {
                        $('#add-gallery').html(response.data.message)
                        setTimeout(() => {
                            $('#add-gallery').html('Redirecting to Gallery')
                        }, 1000)
                        setTimeout(() => {
                            window.location.href = "/gallery"
                        }, 2500)
                    });
                    e.stopImmediatePropagation()
                 }
                 else handleMedia(false)
            })
        })
        console.log("Permission => " + hasReadPermission);
        console.log("cookieSrc => " + cookieSrc);
        console.log("cookieConsts => " + cookieConsts);
    }, [gallery_media, upload_progress, hasReadPermission, cookieSrc, cookieConsts])

    const router = useRouter();

    console.log(cookiePermission)
    if (!cookiePermission) {
        return <Login redirectPath={router.asPath} />;
    }
  
    return (
        <Layout env="manage-gallery" title="Admin Manage | Gallery">
            <div className='p-6 pt-10 flex flex-col align-center content-center w-full max-w-4xl mx-auto'>
                <h2 className='mb-4 font-bold text-xl text-gray-600'>Add Media to the Gallery</h2>
                <div className='w-full'>
                    <UiFileInputButton
                        label="Upload Image or Video"
                        uploadFileName="galleryFile"
                        onChange={onFileChange}
                        acceptedFileTypes="video/*,image/*"
                        type="file"
                    />
                </div>
                <div id="media-placeholder" className='w-full mt-2 bg-gray-200 h-64 rounded-md overflow-hidden flex flex-col align-center justify-center'>
                    <FontAwesomeIcon icon={faFileAlt} className='w-20 h-20 text-gray-400 self-center'/>
                </div>
                <form className='flex flex-col content-center justify-center mt-6' id='form-add-gallery'>
                    <label htmlFor="message" className="block mb-2 text-md font-medium text-gray-900">
                        Description of the Media
                    </label>
                    <input type="hidden" name="gallery-media" id="gallery-media" value=""/>
                    <input type="hidden" name="gallery-type" id="gallery-type" value="image"/>
                    <textarea
                        id="description-box"
                        rows={8}
                        className="block mb-4 p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:ring-2 outline-none"
                        placeholder="Write a description for this media"
                        required>
                    </textarea>
                    <p id='media-handler' className='text-red-600 text-center font-bold'></p>
                    <button type="submit" id='add-gallery' className="relative mt-2 flex self-center justify-center py-4 px-6 bg-blue hover:bg-blue-400 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-44 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
                        Add to Gallery
                    </button>
                </form>
            </div>
        </Layout>
    );
};

export default GalleryManage
