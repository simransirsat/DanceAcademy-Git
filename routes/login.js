var express = require('express');
var router = express.Router();

router.post('/', function(request, response) {
  
  username=request.body.username;
  password=request.body.password;
    
  //console.log(username);
  if(username=="abc"&&password=="abc"){
    response.redirect('/dance');
  }
  else 
  {
    response.send("Incorrect");
  }
});

router.get('/', function(req, res, next) {
  res.render('login');
});

module.exports = router;
