import R from "../../commons/R";

export default function handler(request, response) {

    let body = request.body;
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

        response.status(200).json(R.success(resultBody))
    } catch (e) {
        response.status(200).json(R.error(e))
    }
}
