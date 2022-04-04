import path from "path";
import Link from 'next/Link';
import { getAllBlogIds } from "./getBlogs";
import BlogCard from "./BlogCard";

export default function LatestBlogs({ blogs }) {

	let dir, fullPath, fileContents, createdTime, parsedTime;

	return (
		<div className="w-full bg-white p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
			<div className="header flex items-end justify-between mb-12">
				<div className="title">
					<p className="text-4xl font-bold text-gray-800 mb-4">
						Latest Blogs
					</p>
					<p className="text-2xl font-light text-gray-600">
						Explore and read through our latest posts
					</p>
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-4">
				{blogs.map((blog) => (
					// dir = path.join(process.cwd(), 'content/blogs'),
					// fullPath = path.join(dir, `${blog}.mdx`),
					// fileContents = require('fs').readFileSync(fullPath, "utf-8"),
					// createdTime = new Date(require('fs').statSync(fullPath).ctimeMs),
					// parsedTime = createdTime.getFullYear() +
					// "-" + (createdTime.getMonth() < 9 ? '0' + String(createdTime.getMonth() + 1) : createdTime.getMonth() + 1) +
					// "-" + (createdTime.getDate() < 10 ? '0' + String(createdTime.getDate()) : createdTime.getDate()),
					// console.log(parsedTime),
					<BlogCard
						key={blog.id}
						post={{
							id: blog.id,
							display: blog.display,
							type: blog.type,
							title: blog.title,
							summary: blog.summary,
							author: blog.author,
							// signature: parsedTime
						}}
						image={{
							src: '/assets/icons/lafrikana_solid.png',
							alt: "L'AFRIKANA"
						}}
					/>
				))}
			</div>
		</div>
	);
}

export function RecommendedBlogs({ blogs, exist }) {
	blogs.length > 4 ?
		blogs = blogs.splice(0, 5)
	: ''
	return (
		<div className="bg-white py-4 max-w-7xl">
			<div className="grid grid-cols-1 gap-2">
				{
					blogs.length > 1 ?
						blogs.map((blog) => (
							blog.id != exist ? (
								<BlogCard
									key={blog.id}
									post={{
										id: blog.id,
										display: blog.display,
										type: blog.type,
										title: blog.title,
										summary: blog.summary,
										author: blog.author,
										signature: blog.signature
									}}
									image={{
										src: '/assets/icons/lafrikana_solid.png',
										alt: "L'AFRIKANA"
									}}
								/> )
							: ''
						))
					: <h2 className="font-bold text-lg text-center p-10 text-gray-600 w-full bg-gray-200 rounded-md">No recent posts, come back later</h2>
				}
			</div>
		</div>
	);
}