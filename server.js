var express = require('express');
var request = require('request');

//http://localhost:6789/load/?url=****
//http://localhost:6789/load/?url=http://watermarkero.blogspot.mx
var app = express();
app.use('/load', 
	function(req,res){
		var url = req.url.replace('/?url=','');
		console.log(url);
		req.pipe(request(url)).pipe(res);
	}
);
app.listen(6789);
console.log('proxy corriendo en el puerto 6789');


