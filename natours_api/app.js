const express = require('express');

app = express();

app.get('/',(req,res)=>{
    res.send("server says hello");
})

app.post('/',(req,res)=>{
    res.status(200).json({message:'Hello World' , text: 'meri marzi'});
})

const port=3000;
app.listen(port,()=>{
    console.log("I am listening");
})