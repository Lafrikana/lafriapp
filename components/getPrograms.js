import fs from "fs";
import path from "path";
import matter from "gray-matter";

const articlesDirectory = path.join(process.cwd(), "content/programs");

export function getAllFilesFrontMatter(dir) {
	const files = fs.readdirSync(path.join(process.cwd(), "programs", dir));
	const allProgramsData = files.map((fileName) => {
		const id = fileName.replace(/\.mdx$/, "");

		const fullPath = path.join(articlesDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, "utf-8");

		const { data } = matter(fileContents);

		return {
			id,
			...data,
		};
	});

	return allProgramsData.sort((a, b) => {
		if (a.date < b.date) {
			return 1;
		} else {
			return -1;
		}
	});
}

export function getAllProgramIds() {
	const fileNames = fs.readdirSync(articlesDirectory);
	return fileNames.map((fileName) => {
		return {
			params: {
				id: fileName.replace(/\.mdx$/, ""),
			},
		};
	});
}