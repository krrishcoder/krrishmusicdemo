const express = require("express");

const app = express();


// for /  path  only for testing
app.get('/',(req,res)=>{
    return res.json({message:"Hello from sever"});
});

app.listen(8000,()=>{
    console.log("server started..")
})









