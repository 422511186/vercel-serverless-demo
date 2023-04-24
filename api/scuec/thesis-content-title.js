import R from "../../commons/R";
import {LaTex, ResultKey} from "../../commons/Constant";

module.exports = (req, res) => {

    let body = req.body;
    let resultBody = {}

    try {
        let layer = body["layer"];
        if (layer === 1) {
             resultBody[ResultKey.prefixData] = '\\chapter'
        } else if (layer === 2) {
             resultBody[ResultKey.prefixData] = '\\section'
        } else {
             resultBody[ResultKey.prefixData] = '\\subsection'
        }
        let data = ''
        body['children'].forEach(c => {
            data += c['text']
        })

        resultBody[ResultKey.data] = `{${data}}`
        resultBody[ResultKey.postData] = LaTex.newline
        res.status(200).json(R.success(resultBody))
    } catch (e) {
        res.status(200).json(R.error(e.message))
    }
}
