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

app.use('/choreo', function (req, res) {
  console.log('Category: ' + req.query['category']);
  connection.connect(function (err) {
    connection.query("SELECT * FROM choreographer", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });
});
router.get('/', function (req, res, next) {
  // connection.connect(function (err) {
  //   if (err) throw err;
    connection.query("SELECT * FROM choreographer", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      res.render('choreo', { choreos: result });
    // });
  });
});

router.get('/delchoreo', function (req, res, next) {
  console.log("hi");
  connection.connect(function (err) {
    connection.query('DELETE FROM choreographer WHERE cid=?', req.query['category'], function (error, results, fields) {
      console.log("hi");
      // res.render('dance', {dancers:data});
      res.render('choreo', { data: results, id: req.query['category'] });

      // connection.query("SELECT * FROM dancer", function (err, result, fields) {
      //   if (err) throw err;
      //   data = result;
      //   console.log(result);
      //   res.redirect('/dance');
      // });
    });
  });
});


router.get('/', function (req, res, next) {
  res.render('choreo', { choreos: data });
});

router.post('/', function (request, response) {
  addId = request.body.addIdC;
  addName = request.body.addNameC;
  addForm = request.body.addFormC;
  addSalary = request.body.addSalaryC;

  console.log(addId);
  var sql = "INSERT INTO choreographer (Cid, Cname, Cform, Salary) VALUES ('" + addId + "', '" + addName + "', '" + addForm + "', '" + addSalary + "')";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
    //response.redirect('/choreo');
  });
  connection.query("SELECT * FROM choreographer", function (err, result, fields) {
    if (err) throw err;
    data = result;
    console.log(result);
  });

});

module.exports = router;