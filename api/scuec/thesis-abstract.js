import R from "../../commons/R";

module.exports = (req, res) => {

    let body = req.body;
    let resultBody = {}

    try {

        let children = body['children'];
        if (children.length <= 1) {
            res.status(200).json(R.error("请求参数错误"))
            return
        }

        let language = body['language'];
        if (language === 'cn') {
            resultBody["prefix_data"] = '\\begin{cnAbstract}\n'
            resultBody["post_data"] = '\\begin{cnAbstract}\n'
        } else {
            resultBody["prefix_data"] = '\\begin{abstract}\n'
            resultBody["post_data"] = '\\begin{abstract}\n'
        }
        resultBody['data'] = `${children[1]['text']}\n`

        res.status(200).json(R.success(resultBody))
    } catch (e) {
        res.status(200).json(R.error(e.message))
    }
}
