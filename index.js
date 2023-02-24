const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require("./User");
require("dotenv/config");
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const { dbUri = "mongodb://127.0.0.1:27017/docker-tut", port = 8090 } = process.env;
mongoose.set('strictQuery',true);
mongoose.connect(dbUri, {useNewUrlParser: true}, (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('connected to db',dbUri);
    }    
});


app.get('/',(req, res) => {
    res.send("Home page");
});

app.post('/users',async (req, res) => {
    console.log(req.body);
    res.send(
        await User.create(req.body)
    );
})

app.get('/users', async (req, res) => {
    res.send(
        await User.find()
    );
});

app.listen(port,() => console.log("App is running"));