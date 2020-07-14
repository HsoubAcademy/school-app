var app = require('express')();
var http = require('http').createServer(app);
var bodyParser = require('body-parser');
var mysql = require('mysql');
var md5 = require('md5');

//Routes
const login = require("./routes/login.js");
const absences = require("./routes/absences.js");
const classes_calendar = require("./routes/classes_calendar.js");
const exam_results = require("./routes/exam_results.js");
const exam_schedule = require("./routes/exam_schedule.js");
const homeworks = require("./routes/homeworks.js");
const notifications = require("./routes/notifications.js");
const posts = require("./routes/posts.js");
const sanctions = require("./routes/sanctions.js");
const user_info = require("./routes/user_info.js");

//https://scotch.io/tutorials/use-expressjs-to-get-url-and-post-parameters
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//Routes
app.use('/login', login);
app.use('/absences', absences);
app.use('/classes_calendar', classes_calendar);
app.use('/exam_results', exam_results);
app.use('/exam_schedule', exam_schedule);
app.use('/homeworks', homeworks);
app.use('/notifications', notifications);
app.use('/posts', posts);
app.use('/sanctions', sanctions);
app.use('/user_info', user_info);

//
app.get('/', function(req, res) {
    res.send('<h1>مرحباً بكم في أكاديمية حسوب</h1>');
});

//MySQL
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "school"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

//Global Var
global.con = con;
global.md5 = md5;

http.listen(3000, function() {
    console.log('listening on *:3000');
});