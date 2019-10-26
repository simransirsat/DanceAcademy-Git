var express = require('express');
var router = express.Router();
var app = express();



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


router.get('/', function(req, res, next) {
  res.render('dance');
});

module.exports = router;
