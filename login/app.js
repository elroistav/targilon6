const express = require('express')
const app = express()
app.use(express.static('public'))
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended : true}))
function calc(x,y,operation){
switch (operation) {
case '0':
return x+y
case '1':
return x-y
case '2':
return x*y
case '3':
return x/y
default:
return 'incalculable'
}
}
app.post('/login', function(req,res){
    var user = req.body.username;
    var pass = req.body.password;

if (user == "AVI" && pass == 1234){
    res.send("Welcome AVI")
}
else{
    res.send("Invalid User/Password")
}

})
app.get('/login', function(req, res) {
    var user = req.query.username; 
    var pass = req.query.password;

    if (user === "AVI" && pass === "1234") {
        res.send("Welcome AVI");
    } else {
        res.send("Invalid User/Password");
    }
})


app.listen(3330)
