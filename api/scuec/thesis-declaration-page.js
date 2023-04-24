import R from "../../commons/R";
import {LaTex, ResultKey} from "../../commons/Constant";

module.exports = (req, res) => {
    let resultBody = {}
    try {
        resultBody[ResultKey.data] = `\\frontmatter${LaTex.newline}\\makecover${LaTex.newline}\\tableofcontents${LaTex.newline}`

        res.status(200).json(R.success(resultBody))
    } catch (e) {
        res.status(200).json(R.error(e.message))
    }
}
