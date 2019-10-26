var express = require('express');
var router = express.Router();

router.post('/', function(request, response) {
    response.sendFile("here");
    id=request.body.id;
    name=request.body.name;
    dob=request.body.dob;
    sex=request.body.sex;
    dform=request.body.dform;
    console.log(id);
  });

// router.get('/', function(req, res, next) {
//   res.render('temp');
// });

module.exports = router;
