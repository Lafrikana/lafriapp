/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import Layout from 'components/Layout'
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { getAllBlogsFrontMatter } from 'components/getBlogs';
import LatestBlogs from 'components/LatestBlogs';

export default function Blog({ blogs }){

    useEffect(() => setMounted(true), []);

	const [mounted, setMounted] = useState(false);
	const { resolvedTheme, setTheme } = useTheme();

	const switchTheme = () => {
		setTheme(resolvedTheme === "dark" ? "light" : "dark");
	};

	if (!mounted) return null;

    return (
        <Layout env='blog' title="Our Blog">
            <div className='content-header relative blog px-5 py-10 md:px-10 h-128 flex flex-col justify-start align-center grid content-end'>
                <div className='text-white relative'>
                    <h1 className='text-5xl relative bf-bottom font-extrabold sm:text-6xl'>Our Blog</h1>
                </div>
            </div>
            <LatestBlogs blogs={blogs}/>

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

{/* <button
    className="focus:outline-none outline-none"
    onClick={switchTheme}
    role="img"
    aria-labelledby="theme-switcher"
    type="button"
>
    <title id="theme-switcher">
        {resolvedTheme === "dark"
            ? "Switch to light mode"
            : "Switch to dark mode"}
    </title>
    {resolvedTheme === "dark" ? (
        <FontAwesomeIcon icon={faMoon} className="h-6 w-6"/>
    ) : (
        <FontAwesomeIcon icon={faSun} className="h-6 w-6"/>
    )}
</button>
<p>Theme: { resolvedTheme }</p> */}