var express = require('express');
var app = express();
var port = 3000;
var fs = require('fs');

app.get('/',(req,res)=> {
    fs.readFile('db.json','utf-8',(err,data) => {
        if(err) throw err;
        res.send(data)
    })
})


app.listen(port,(err) => {
    if(err) throw err;
    console.log('Server is running on port 3000')
})