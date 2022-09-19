/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import type { VercelRequest, VercelResponse } from '@vercel/node';

const apiRoute = nc<NextApiRequest, NextApiResponse>({
    onError(error, req, res) {
        res.status(501).json({ error: `Sorry something Happened! ${error.message}` })
    },
    onNoMatch(req, res) {
        res.status(405).json({ error: `Method '${req.method}' Not Allowed` })
    },
})

apiRoute.post((req, res) => {
    console.log("Testing")
    let data = req.headers.cookie
    console.log(data)
    res.status(200).json({ cookie: data })
});

const vercelRoute = (request: VercelRequest, response: VercelResponse) => {
    console.log("Testing")
    let data = request.headers.cookie
    console.log(data)
    response.status(200).json({ cookie: data });
};

export default vercelRoute;
// export default apiRoute;

export const config = {
	api: {
		bodyParser: true,
	},
};
