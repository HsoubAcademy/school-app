var express = require('express')
var router = express.Router()

router.get('/', function(req, res) {
    con.query("SELECT *, (SELECT name FROM subjects WHERE id = er.subject_id) AS 'subject_name' FROM exam_results AS er WHERE er.user_id = ?", [req.query.user_id], function(err, result, fields) {
        if (err) throw err;
        res.send({ status: 1, message: result });
    })
})

module.exports = router