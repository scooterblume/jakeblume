var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	//make all strings for jakes images
	var len = 26;
	var jakes = new Array(len);
	for (var i =0; i <=len; i++){
		if (i!=7 && i!= 10){
			jakes[i]= "jake"+(i+1);
		}
		
	}
	console.log(jakes[0])
  res.render('index', {
   title: 'Happy Birthday!',
   pic: jakes
    });
});

module.exports = router;
