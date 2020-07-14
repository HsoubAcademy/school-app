var express = require('express')
var router = express.Router()

router.get('/', function(req, res) {
    con.query(`SELECT s.day, s.period, (SELECT su.name FROM subjects AS su WHERE su.id = cs.subject_id) AS 'subject_name' FROM classes_calendar AS cc 
    INNER JOIN schedule AS s ON s.id = cc.schedule_id
    INNER JOIN user_classes AS uc ON uc.class_id = cc.class_id AND uc.user_id = ?
    INNER JOIN class_subjects AS cs ON cs.class_id = cc.class_id`, [req.query.user_id], function(err, result, fields) {
        if (err) throw err;
        res.send({ status: 1, message: result });
    })
})

module.exports = router