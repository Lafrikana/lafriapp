import React from 'react'
import Layout from 'components/Layout'
import { getAllBlogIds } from "components/getBlogs";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";
import { parseMDX } from "components/parseMdx";
import { convertDate } from "components/date";
import { getAllBlogsFrontMatter } from 'components/getBlogs';
import { RecommendedBlogs } from 'components/LatestBlogs';

export default function Blog({ frontMatter, readTime, mdxSource, parsedTime, blogs }){
    return (
        <Layout env='blog' title={frontMatter.title}>
			<div className='content-header relative programs px-5 py-10 md:px-10 mb-16 h-144 flex flex-col justify-start align-end grid'
					style={{background: `linear-gradient(rgba(0, 0, 0, 0.8), transparent 30%),
					linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent 30%),
					url(${frontMatter.display})`}}
				>
                <div className='text-white relative mt-auto'>
                    <h1 className='text-5xl relative bf-bottom font-extrabold sm:text-6xl'>{frontMatter.title}</h1>
                </div>
            </div>
            <div className='article-window w-full grid lg:grid-cols-3'>
                <article className="bg-white align-center mx-auto px-6 w-full lg:my-4 max-w-2xl lg:max-w-3xl prose prose-xl dark:prose-dark lg:col-span-2">
                    <div className="border-b-2 border-gray-400 mb-4">
                        <h2 className='text-2xl font-bold'>{frontMatter.title}</h2>
                        <div className='pb-4'>
                            <p>
                                {convertDate(frontMatter.date, "PPP")}
                                {" • "}
                                {readTime.text}
                            </p>
                        </div>
                        {/* <div className="mb-8 not-prose text-black dark:text-white">
                            {frontMatter.tags.map((tag) => (
                                <Link href={`/tags/${tag}`} key={tag}>
                                    <a className="mr-2 bg-gray-300 dark:bg-gray-800 p-2 rounded text-base">
                                        {tag}
                                    </a>
                                </Link>
                            ))}
                        </div> */}
                    </div>

                    <div className="w-full md:text-lg lg:text-2xl">
                        <MDXRemote {...mdxSource} />
                    </div>
                </article>
                <div className='mx-auto lg:-ml-1 px-6 w-full pt-8 mt-4 lg:mt-0 lg:pt-0 border-t-2 border-gray-200 lg:border-0'>
                    <h2 className='pl-3 font-bold text-2xl text-center lg:text-left'>Recent Posts</h2>
                    <RecommendedBlogs blogs={blogs} exist={frontMatter.id}/>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps({ params }) {
    const blogs = getAllBlogsFrontMatter("blogs")
    const blogData = await parseMDX(params.id, "content/blogs");
	return {
		props: {
			...blogData,
            blogs: blogs.splice(0, 10),
		},
	};
}

export async function getStaticPaths({ params }) {
	const paths = getAllBlogIds();
	return {
		paths,
		fallback: false,
	};
}