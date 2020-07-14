var express = require('express')
var router = express.Router()

router.get('/', function(req, res) {
    con.query("SELECT us.id, us.created_at, s.name, s.details FROM user_sanctions AS us INNER JOIN sanctions AS s ON s.id = us.sanction_id AND us.user_id = ? ORDER BY us.id DESC", [req.query.user_id], function(err, result, fields) {
        if (err) throw err;
        res.send({ status: 1, message: result });
    })
})

module.exports = router