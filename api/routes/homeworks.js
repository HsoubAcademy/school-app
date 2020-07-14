var express = require('express')
var router = express.Router()

router.get('/', function(req, res) {
    con.query(`SELECT h.description, TIME_FORMAT(h.deadline, "%H %i A") AS 'deadline_time', DATE_FORMAT(h.deadline,"%d-%m-%Y") AS 'deadline_date',DAYNAME(h.deadline) AS 'deadline_day', (SELECT name FROM subjects WHERE id = h.subject_id) AS 'subject_name' FROM homeworks AS h
    INNER JOIN user_classes AS uc ON h.class_id = uc.class_id AND uc.user_id = ? AND h.deadline >= CURRENT_DATE()`, [req.query.user_id], function(err, result, fields) {
        if (err) throw err;
        res.send({ status: 1, message: result });
    })
})

module.exports = router