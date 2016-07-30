var mysql = require('mysql');
var express = require('express');
var app = express();


var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "resumeapp"
});
connection.connect(function(error){
	if(!!error){
		console.log('Error');
	}else{
		console.log('Connected');
	}
});

var port = 3000;
app.listen(port);
console.log("Server running on "+port);

app.get('/', function(req, res){
	console.log("Hello Express!");
	//res.send("Hello HTML!");
	connection.query("SELECT * FROM person", function(error,rows,fields){
	if(!!error){
		console.log('Query Bad');
		console.log('Error: '+error);
	}else{
		//console.log('Query Good');
		console.log(res.json(rows));
		res.send(res.json(rows));
	}
})
});



// connection.query("SELECT * FROM person", function(error,rows,fields){
// 	if(!!error){
// 		console.log('Query Bad');
// 		console.log('Error: '+error);
// 	}else{
// 		console.log('Query Good');
// 		console.log(rows);
// 	}
// })

// connection.query("INSERT INTO person (firstname, lastname, email, mobilenum, gender, degree, address)"+
// 	"VALUE('Jeffrey', 'Mocoy', 'jmocoy@gmail.com', '+6395687623','Male', 'BSIT', 'Davao City')", function(error,rows,fields){
// 	if(!!error){
// 		console.log('Query Bad');
// 		console.log('Error: '+error);
// 	}else{
// 		console.log('Query Good');
// 		console.log(rows);
// 	}
// })