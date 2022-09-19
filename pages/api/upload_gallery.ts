import multer from 'multer';
import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";

const apiRoute = nc<NextApiRequest, NextApiResponse>({
    onError(error, req, res) {
        res.status(501).json({ error: `Sorry something Happened! ${error.message}` })
    },
    onNoMatch(req, res) {
        res.status(405).json({ error: `Method '${req.method}' Not Allowed` })
    },
})

let file_name = undefined

const upload = multer({
	storage: multer.diskStorage({
		destination: 'public/uploads/gallery',
		filename: (req, file, cb) => (
			file.originalname = `Media_${new Date().getTime()}_${file.originalname}`,
			cb(null, file.originalname),
			file_name = file,
			console.log(file.originalname)
		),
	}),
});

apiRoute.use(upload.array('galleryFile'));

apiRoute.post((req, res) => {
	res.status(200).json({ data: file_name });
});

export default apiRoute;

export const config = {
	api: {
		bodyParser: false, // Disallow body parsing, consume as stream
	},
};