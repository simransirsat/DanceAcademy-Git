var express = require('express');
var router = express.Router();
var app = express();
var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'stepup'
});

app.use('/courses', function (req, res) {
  console.log('Category: ' + req.query['category']);
  connection.connect(function (err) {
    connection.query("SELECT * FROM courses", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });
});
router.get('/', function (req, res, next) {
  // connection.connect(function (err) {
  //   if (err) throw err;
    connection.query("SELECT * FROM courses", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      res.render('courses', { cour: result });
    // });
  });
});

router.get('/delcourses', function (req, res, next) {
  console.log("hi");
  connection.connect(function (err) {
    connection.query('DELETE FROM courses WHERE cno=?', req.query['category'], function (error, results, fields) {
      console.log("hi");
      
      res.render('courses', { data: results, id: req.query['category'] });
    });
  });
});


router.get('/', function (req, res, next) {
  res.render('courses', { cour: data });
});

router.post('/', function (request, response) {
  addCno = request.body.addCno;
  addForm = request.body.addForm;
  addDur = request.body.addDur;
  addFee = request.body.addFee;
  addBatch = request.body.addBatch;


  console.log(addCno);
  var sql = "INSERT INTO courses (Cno, Form, Duration, Fees, Batch) VALUES ('" + addCno + "', '" + addForm + "', '" + addDur + "', '" + addFee + "','" + addBatch + "')";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
    //response.redirect('/choreo');
  });
  connection.query("SELECT * FROM courses", function (err, result, fields) {
    if (err) throw err;
    data = result;
    console.log(result);
  });

});

module.exports = router;