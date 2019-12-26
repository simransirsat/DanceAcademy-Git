var express = require('express');
var router = express.Router();
var app = express();
var data;
var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'stepup'
});



router.get('/delcourses/:category', function (req, res, next) {
  var data = req.params.category;
  console.log(data);
  connection.connect(function (err) {

    connection.query('DELETE FROM courses WHERE Cno =  "' + data + '"', function (error, results, fields) {
      if (error) console.log("error");
      console.log("deleted");
      console.log(req.params.category);
      res.redirect("/courses");

      connection.query("SELECT * FROM courses", function (err, result, fields) {
        if (err) throw err;
        data = result;
        console.log(result);
      });
    });
  });
});
router.get('/courses', function (req, res, next) {
  res.render('courses', { cour: data });
});
module.exports = router;
