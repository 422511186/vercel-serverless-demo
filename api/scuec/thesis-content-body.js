import R from "../../commons/R";

module.exports = (req, res) => {

    let body = req.body;
    let resultBody = {}

    try {

        let children = body['children'];

        let data = ''
        for (let i = 0; i < children.length; i++) {
            data += children[i]['text'];
        }
        data += '\n\n'
        resultBody['data'] = data

        res.status(200).json(R.success(resultBody))
    } catch (e) {
        res.status(200).json(R.error(e.message))
    }
}
