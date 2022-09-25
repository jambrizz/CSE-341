const { response } = require("express")

const index = (req, res) => {
    res.send("Yasna Ambriz");
}

module.exports = { index };