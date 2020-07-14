var express = require('express')
var router = express.Router()

router.get('/', function(req, res) {
    con.query("SELECT * FROM notifications WHERE user_id = ? ORDER BY id DESC", [req.query.user_id], function(err, result, fields) {
        if (err) throw err;
        res.send({ status: 1, message: result });
    })
})

module.exports = router