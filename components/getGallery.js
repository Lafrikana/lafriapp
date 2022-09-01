import fs from "fs";
import path from "path";
import matter from "gray-matter";

const galleryDirectory = path.join(process.cwd(), "content/gallery");

export function getAllGalleryFrontMatter(dir) {
	const files = fs.readdirSync(path.join(process.cwd(), "content", dir));
	const allGalleryData = files.map((fileName) => {
		const id = fileName.replace(/\.mdx$/, "");

		const fullPath = path.join(galleryDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, "utf-8");

		const { data } = matter(fileContents);

		return {
			id,
			...data,
		};
	});

	return allGalleryData.sort((a, b) => {
		if (a.date < b.date) {
			return 1;
		} else {
			return -1;
		}
	});
}

export function getAllGalleryIds() {
	const fileNames = fs.readdirSync(galleryDirectory);
	return fileNames.map((fileName) => {
		return {
			params: {
				id: fileName.replace(/\.mdx$/, ""),
			},
		};
	});
}