const express = require("express");
const app = express();

const cookies=require("cookies")
const bodyParser = require('body-parser')
app.use(express.json()); 

var knex = require("./models/database")


var signup = express.Router();
app.use("/", signup);
require("./Routes/signup")(signup, knex);

var login=express.Router();
app.use('/',login);
require('./Routes/login')(login,knex)

var create_post=express.Router();
app.use('/',create_post);
require('./Routes/create_post')(create_post,knex)

var like_dislike=express.Router();
app.use('/',like_dislike);
require('./Routes/like_dislike')(like_dislike,knex)

var getAll=express.Router();
app.use('/',getAll);
require('./Routes/getAll_like')(getAll,knex)


var server = app.listen(2021, function(){
    console.log("server is running port....")
});