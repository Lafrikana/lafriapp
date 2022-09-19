/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next';

const apiRoute = nc<NextApiRequest, NextApiResponse>({
    onError(error, req, res) {
        res.status(501).json({ error: `Sorry something Happened! ${error.message}` })
    },
    onNoMatch(req, res) {
        res.status(405).json({ error: `Method '${req.method}' Not Allowed` })
    },
})

apiRoute.post((req, res) => {
    let data = getCookies({ req, res });
    res.status(200).json({ cookie: data })
});

const vercelRoute = (request: VercelRequest, response: VercelResponse) => {
    let data = request.headers.cookie
    response.status(200).json({ cookie: data });
};

// export default vercelRoute;
export default apiRoute;

export const config = {
	api: {
		bodyParser: true,
	},
};
