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

app.use('/dance', function (req, res) {
  console.log('Category: ' + req.query['category']);
  connection.connect(function (err) {
    connection.query("SELECT * FROM dancer", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });
});
router.get('/', function (req, res, next) {
  // connection.connect(function (err) {
  //   if (err) throw err;
    connection.query("SELECT * FROM dancer", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      res.render('dance', { dancers: result });
    // });
  });
});

router.get('/deldancer', function (req, res, next) {
  console.log("hi");
  connection.connect(function (err) {
    connection.query('DELETE FROM dancer WHERE did=?', req.query['category'], function (error, results, fields) {
      console.log("hi");
      // res.render('dance', {dancers:data});
      res.render('dance', { data: results, id: req.query['category'] });

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
  res.render('dance', { dancers: data });
});

router.post('/', function (request, response) {
  //addId = request.body.addId;
  addName = request.body.addName;
  addDOB = request.body.addDOB;
  addSex = request.body.addSex;
  addForm = request.body.addForm;

 // console.log(addId);
  var sql = "INSERT INTO dancer (Dname, Sex, DOB, Dform) VALUES ( '" + addName + "', '" + addSex + "', '" + addDOB + "', '" + addForm + "')";
  
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
    response.redirect('/dance');
  });
  connection.query("SELECT * FROM dancer", function (err, result, fields) {
    if (err) throw err;
    data = result;
    console.log(result);
  });

});


module.exports = router;

