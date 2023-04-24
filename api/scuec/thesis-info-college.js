import R from "../../commons/R";
import {LaTex, ResultKey} from "../../commons/Constant";

module.exports = (req, res) => {

    let body = req.body;
    let resultBody = {}

    try {

        let children = body['children'];
        if (children.length <= 1) {
            res.status(200).json(R.error("请求参数错误"))
            return
        }
        resultBody[ResultKey.data] = `\\cDepartment[${children[1]['text']}]${LaTex.newline}`

        res.status(200).json(R.success(resultBody))
    } catch (e) {
        res.status(200).json(R.error(e.message))
    }
}
