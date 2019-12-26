var express = require('express');
var router = express.Router();
var app = express();
var data;
var mysql = require('mysql')
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'stepup'
});



router.get('/delchoreo/:category', function(req, res, next) {
  console.log("hi");
  var data=req.params.category;
  console.log(data);
        connection.connect(function(err){

        
		  connection.query('DELETE FROM choreographer WHERE Cid =  "' + data + '"', function(error, results, fields) {
            if (error)console.log("error");
            console.log("deleted");
            console.log(req.params.category);
            res.redirect("/choreo");
      // res.render('dance', {dancers:data});
      //res.render('dance',{data:results,id:req.query['category']});
		
      connection.query("SELECT * FROM choreographer", function (err, result, fields) {
        if (err) throw err;
        data = result;
        console.log(result);
      });
    });
    });
  });
  router.get('/choreo', function(req, res, next) {
    res.render('choreo', {choreographers:data});
  });
module.exports = router;
