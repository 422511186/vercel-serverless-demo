const R = require("../commons/R");

module.exports = (req, res) => {
    res.status(404).json(R.error("not found", {}, R.CODE.NOT_FOUND));
}
