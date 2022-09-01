import fs from 'fs';

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

function Dater(){
    var now = new Date();
    var y = now.getFullYear();
    var mo = now.getMonth();
    var da = now.getDate();
    var m = '';
    var d = String(da);
    switch(mo){
        case 0:
        m = String("01");
        break; case 1:
        m = String("02");
        break; case 2:
        m = String("03");
        break; case 3:
        m = String("04");
        break; case 4:
        m = String("05");
        break; case 5:
        m = String("06");
        break; case 6:
        m = String("07");
        break; case 7:
        m = String("08");
        break; case 8:
        m = String("09");
        break; case 9:
        m = String("10");
        break; case 10:
        m = String("11");
        break; case 11:
        m = String("12");
        break;
    }
    switch(da){
        case 1:
        d = String("01");
        break; case 2:
        d = String("02");
        break; case 3:
        d = String("03");
        break; case 4:
        d = String("04");
        break; case 5:
        d = String("05");
        break; case 6:
        d = String("06");
        break; case 7:
        d = String("07");
        break; case 8:
        d = String("08");
        break; case 9:
        d = String("09");
        break;
    }
    var conc = y + "-" + m + "-" + d;
    return String(conc);
}

const GalleryInit = (file, type, description) => {
    let stamp = Dater()
    return `---
file: "/uploads/gallery/${file}"
type: "${type}"
date: "${stamp}"
description: "${description}"
---
`
}

apiRoute.post((req, res) => {
    let data = req.body
    console.log(data)
    let media = JSON.parse(data.media)
    let file = media.originalname
    let description = data.description
    let type = data.type
    fs.writeFile(`/content/gallery/${file}.mdx`, GalleryInit(file, type, description), function (err) {
        if (err) return err
        return true
    });
    res.status(200).json({ message: 'Added Successfully' })
});

export default apiRoute;

export const config = {
	api: {
		bodyParser: true, // Disallow body parsing, consume as stream
	},
};
