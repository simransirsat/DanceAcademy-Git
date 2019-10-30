var express = require('express');
var router = express.Router();

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

router.get('/', function(req, res, next) {
  res.render('choreo');
});

module.exports = router;