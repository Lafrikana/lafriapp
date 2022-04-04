import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogsDirectory = path.join(process.cwd(), "content/blogs");

export function getAllBlogsFrontMatter(dir) {
	const files = fs.readdirSync(path.join(process.cwd(), "content", dir));
	const allBlogsData = files.map((fileName) => {
		const id = fileName.replace(/\.mdx$/, "");

		const fullPath = path.join(blogsDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, "utf-8");

		const { data } = matter(fileContents);

		return {
			id,
			...data,
		};
	});

	return allBlogsData.sort((a, b) => {
		if (a.date < b.date) {
			return 1;
		} else {
			return -1;
		}
	});
}

export function getAllBlogIds() {
	const fileNames = fs.readdirSync(blogsDirectory);
	return fileNames.map((fileName) => {
		return {
			params: {
				id: fileName.replace(/\.mdx$/, ""),
			},
		};
	});
}