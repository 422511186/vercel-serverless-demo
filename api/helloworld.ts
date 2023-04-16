import {VercelRequest, VercelResponse} from '@vercel/node';

module.exports = async (req: VercelRequest, res: VercelResponse) => {
    let body = req.body;

    const data = {
        msg: "hello world!"
    };
    res.status(200).json(data);
}
