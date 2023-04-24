import R from "../../commons/R";

module.exports = (req, res) => {

    let body = req.body;
    let resultBody = {}
    
    try {
        let layer = body["layer"];
        if (layer === 1) {
            resultBody["prefix_data"] = '\\chapter'
        } else if (layer === 2) {
            resultBody["prefix_data"] = '\\section'
        } else {
            resultBody["prefix_data"] = '\\subsection'
        }
        let data = ''
        body['children'].forEach(c => {
            data += c['text']
        })

        resultBody["data"] = `{${data}}`
        resultBody["post_data"] = '\n'
        res.status(200).json(R.success(resultBody))
    } catch (e) {
        res.status(200).json(R.error(e.message))
    }
}
