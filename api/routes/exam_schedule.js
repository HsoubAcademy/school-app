var express = require('express')
var router = express.Router()

router.get('/', function(req, res) {
    con.query(`SELECT DAYNAME(es.datetime) AS 'day', TIME(es.datetime) AS 'time', Date(es.datetime) AS 'date', es.duration, (SELECT name FROM subjects WHERE id = es.subject_id) AS 'subject_name' FROM exam_schedule AS es 
    INNER JOIN class_subjects AS cs ON cs.subject_id = es.subject_id
    INNER JOIN user_classes AS uc ON cs.class_id = uc.class_id AND uc.user_id = ?`, [req.query.user_id], function(err, result, fields) {
        if (err) throw err;
        res.send({ status: 1, message: result });
    })
})

module.exports = router