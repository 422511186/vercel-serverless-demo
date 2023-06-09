import R from "../../commons/R";
import {LaTex, ResultKey} from "../../commons/Constant";

module.exports = (req, res) => {

    let body = req.body;
    let resultBody = {}

    try {
        let children = body['children'];

        let data = ''
        for (let i = 0; i < children.length; i++) {
            data += children[i]['text'];
        }
        data += LaTex.newline + LaTex.newline
        resultBody[ResultKey.data] = data

        res.status(200).json(R.success(resultBody))
    } catch (e) {
        res.status(200).json(R.error(e.message))
    }
}
