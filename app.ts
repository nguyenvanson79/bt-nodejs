const express = require("express");

const app = express();
const PORT = 8080;


app.get("/" , (req , res)=> {
    res.send ("helo") ;
})

app.listen(PORT , ()=>{
    console.log (`hi :${PORT}`)
})