var con=require('./connection');
var express = require("express");
var app     = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.get('/',function(req,res){
    res.sendFile(__dirname+'/register.html');
  });
  app.post('/register',function(req,res){
    //console.log(req.body);
    var first_name=req.body.fname;
    var last_name=req.body.sname;
    var user_name=req.body.username;
    var password=req.body.password;
    var mno=req.body.mobile;
    var gender=req.body.gender;
    var state= req.body.state;
    var city=req.body.city;
    var DOB=req.body.dateofbirth;
    var email=req.body.email;
   console.log(req.body)

    
    con.connect(function(error) {
       if (error) throw error;
       
        var sql = "INSERT INTO user_data (name,surname,username,password,contact_no,gender,state,city,DOB, email) VALUES ('"+first_name+"','"+last_name+"','"+user_name+"','"+password+"','"+mno+"','"+gender+"','"+state+"','"+city+"','"+DOB+"','"+email+"')";
        con.query(sql, function (error, result) {
            if (error) throw error;
            res.send("Welcome\n" +first_name+" you have registered successfuly and your id is "+result.insertId);
             res.end();
    });
  
   });
});
  app.listen(7000);
