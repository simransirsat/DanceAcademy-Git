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

connection.connect(function(err) {
    if (err) throw err;
    connection.query("SELECT * FROM dancer", function (err, result, fields) {
      if (err) throw err;
      data = result;
      console.log(result);
    });
  });

// module.exports = {
//     danceRouter: (req, res) => {
//       let query =
//         "SELECT * FROM dancer"; // query database to get all the players
//         console.log(query);
//       // execute query
//       connection.query(query, (err, result) => {
//         if (err) {
//           res.redirect("/");
//         }
//         // res.render("show-booking.ejs", {
//         //   title: "VEDITA TOURS",
//         //   customer: result
//         // });
//         console.log(result);
//       });
//     }
//   };
  
  
// router.post('/', function(request, response) {
//     response.redirect('/dance');
// });
// router.post('/', function(request, response) {
//     response.redirect('/choreo');
// });
// router.post('/', function(request, response) {
//     response.redirect('/studio');
// });
// router.post('/', function(request, response) {
//     response.redirect('/courses');
// });
// router.post('/', function(request, response) {
//     response.sendFile("here");
// });
app.get('/dance', function(req, res) {
    console.log('Category: ' + req.query['category']);
    con.connect(function(err) {
 
    connection.query("SELECT * FROM dancer", function(err, result, fields) {
      //res.render('dance',{dancer:results});
      if(err) throw err;
      console.log(result);
  
  });});
  });

// router.post('/', function(request, response) {
//     response.sendFile("here");
//     id=request.body.id;
//     name=request.body.name;
//     dob=request.body.dob;
//     sex=request.body.sex;
//     dform=request.body.dform;
//     console.log(id);
//     response.redirect('/temp');
//   });


router.get('/', function(req, res, next) {
  res.render('dance', {dancers:data});
});
module.exports = router;

