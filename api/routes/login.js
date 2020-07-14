var express = require('express')
var router = express.Router()

router.post('/', function(req, res) {
    con.query("SELECT * FROM users WHERE username = ? AND password = ?", [req.body.username, req.body.password], function(err, result, fields) {
        if (err) throw err;
        if (result.length > 0) {
            if (result)
                res.send({ status: 1, message: result });
        } else {
            res.send({ status: 0, message: "خطأ في اسم المستخدم أو كلمة المرور" });
        }
    })
})

module.exports = router