var express = require('express')
var router = express.Router()

router.get('/', function(req, res) {
    con.query("SELECT p.*, u.full_name, u.avatar, (SELECT COUNT(*) FROM likes AS l WHERE l.post_id = p.id) AS 'likes_count', (SELECT COUNT(*) FROM comments AS c WHERE c.post_id = p.id) AS 'comments_count' FROM posts AS p INNER JOIN users AS u ON u.id = p.user_id ORDER BY id DESC", function(err, result, fields) {
        if (err) throw err;
        res.send({ status: 1, message: result });
    })
})

router.post('/', function(req, res) {
    con.query("INSERT INTO posts (user_id, text) VALUES (?,?)", [req.body.user_id, req.body.text], function(err, result, fields) {
        if (err) throw err;
        res.send({ status: 1, message: result });
    })
})

router.post('/add_like', function(req, res) {
    con.query("INSERT INTO likes (user_id, post_id) VALUES (?,?)", [req.body.user_id, req.body.post_id], function(err, result, fields) {
        if (err) throw err;
        res.send({ status: 1, message: result });
    })
})

router.post('/delete_like', function(req, res) {
    con.query("DELETE FROM likes WHERE user_id = ? AND post_id = ?", [req.body.user_id, req.body.post_id], function(err, result, fields) {
        if (err) throw err;
        res.send({ status: 1, message: result });
    })
})

router.post('/add_comment', function(req, res) {
    con.query("INSERT INTO comments (user_id, post_id, text) VALUES (?,?,?)", [req.body.user_id, req.body.post_id, req.body.text], function(err, result, fields) {
        if (err) throw err;
        res.send({ status: 1, message: result });
    })
})

router.post('/delete_comment', function(req, res) {
    con.query("DELETE FROM comments WHERE id = ? AND user_id = ?", [req.body.comment_id, req.body.user_id], function(err, result, fields) {
        if (err) throw err;
        res.send({ status: 1, message: result });
    })
})

module.exports = router