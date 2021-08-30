const express = require('express')
const app = express()
const cors = require("cors")
require("./db/conn")
const port = 8000;
// const path = require('path');
const Student =  require("./model/student")

app.use(express.json());

app.use(cors());
const name = {
  name : "nikhil jain"
}

app.get('/',(req,res)=>{

  res.send(" all good ")
})

app.get('/test',async (req,res)=>{
  try {
    const studentdata = await Student.find();
    res.send(studentdata)
    res.send("test work ")
  } catch (error) {
    res.send(error);
  }
})

app.post('/test',async(req,res)=>{
 try {
    
  const User = new Student({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  console.log(req.body);
  const insertdata = await User.save();
    res.send(User);

 } catch (e) {

  res.status(400).send(e);
   
 }
  console.log(req.body.username); 

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})