const mongoose = require('mongoose');

var mongoDB = 'mongodb://127.0.0.1/student-api';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log("connect database"))
.catch((e)=> console.log(e));



