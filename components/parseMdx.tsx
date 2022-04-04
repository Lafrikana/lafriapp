import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import rehypeCodeTitles from "rehype-code-titles";
import readingTime from "reading-time";
import { create } from "domain";
const mdxPrism = require('mdx-prism');

export async function parseMDX(id, fileDirectory) {
	const dir = path.join(process.cwd(), fileDirectory);
	const fullPath = path.join(dir, `${id}.mdx`);
	const fileContents = fs.readFileSync(fullPath, "utf-8");
	const createdTime = new Date(fs.statSync(fullPath).ctimeMs);
	const parsedTime = createdTime.getFullYear() +
	"-" + (createdTime.getMonth() < 9 ? '0' + String(createdTime.getMonth() + 1) : createdTime.getMonth() + 1) +
	"-" + (createdTime.getDate() < 10 ? '0' + String(createdTime.getDate()) : createdTime.getDate())
	console.log(parsedTime)

	const { data, content } = matter(fileContents);
	const mdxSource = await serialize(content, {
		mdxOptions: {
			rehypePlugins: [rehypeCodeTitles, mdxPrism],
		},
		scope: data,
	});

	const readTime = readingTime(content);

	return {
		id,
		mdxSource,
		readTime,
		frontMatter: data,
		parsedTime
	};
}