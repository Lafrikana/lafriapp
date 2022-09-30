/* eslint-disable @next/next/no-img-element */
import path from "path";
import Link from 'next/link';
import GalleryCard from "./GalleryCard";

export default function GalleryMedia({ gallery }) {
	return (
		<div className="w-full bg-white p-4 md:p-6 lg:p-8 mx-auto">
			<div className="header flex items-end justify-between mb-4">
				<div className="title">
					<p className="text-2xl font-normal text-gray-500 mb-2">
						Explore Our Organization Media
					</p>
				</div>
			</div>
			{/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-4"> */}
            <div id="gallery" className="container-fluid">
				{gallery.map((media) => (
					<GalleryCard
						key={media.file}
                        date={media.date}
                        type={media.type}
                        file={media.file}
                        description={media.description}
					/>
				))}
			</div>
		</div>
	);
}