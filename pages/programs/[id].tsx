import React from 'react'
import Layout from 'components/Layout'
import { getAllProgramIds } from "components/getPrograms";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";
import { parseMDX } from "components/parseMdx";
import { convertDate } from "components/date";

export default function Program({ frontMatter, readTime, mdxSource }){
    return (
        <Layout env='programs'>
			<div className='content-header relative programs px-5 py-10 md:px-10 mb-16 h-144 flex flex-col justify-start align-center grid content-end'
					style={{background: `linear-gradient(rgba(0, 0, 0, 0.8), transparent 30%),
					linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent 30%),
					url(${frontMatter.cover_image})`}}
				>
                <div className='text-white relative'>
                    <h1 className='text-5xl relative bf-bottom font-extrabold sm:text-6xl'>{frontMatter.title}</h1>
                </div>
            </div>
            <article className="bg-white self-center align-center mx-auto px-6 w-full md:my-4 max-w-2xl lg:max-w-4xl md:text-lg lg:text-2xl prose prose-xl dark:prose-dark">
				<div className="w-full">
					<MDXRemote {...mdxSource} />
				</div>
			</article>
        </Layout>
    )
}

export async function getStaticProps({ params }) {
    const programData = await parseMDX(params.id, "content/programs");
	return {
		props: {
			...programData,
		},
	};
}

export async function getStaticPaths({ params }) {
	const paths = getAllProgramIds();
	return {
		paths,
		fallback: false,
	};
}