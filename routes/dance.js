var express = require('express');
var router = express.Router();
var app = express();
// module.exports={

    
// danceRouter:(req,res)=>{
//         connection.query("SELECT * from dancer",function(err,results,field){

<<<<<<< Updated upstream
//             console.log(results);
//         });
//     }
// };
  
router.post('/', function(request, response) {
    response.redirect('/dance');
});
router.post('/', function(request, response) {
    response.redirect('/choreo');
});
router.post('/', function(request, response) {
    response.redirect('/studio');
});
router.post('/', function(request, response) {
    response.redirect('/courses');
});
router.post('/', function(request, response) {
    response.sendFile("here");
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

=======
app.use('/dance', function(req, res) {
  console.log('Category: ' + req.query['category']);
  connection.connect(function(err) {
      connection.query("SELECT * FROM dancer", function(err, result, fields) {
      if(err) throw err;
      console.log(result);
  });
});
});
>>>>>>> Stashed changes

router.get('/', function(req, res, next) {
  res.render('dance');
});

router.post('/', function(request, response) {
  addId=request.body.addId;
  addName=request.body.addName;
  addDOB=request.body.addDOB;
  addSex=request.body.addSex;
  addForm=request.body.addForm;
    
  console.log(addId);
    var sql = "INSERT INTO dancer (Did, Dname, Sex, DOB, Dform) VALUES ('"+addId+"', '"+addName+"', '"+addSex+"', '"+addDOB+"', '"+addForm+"')";
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

