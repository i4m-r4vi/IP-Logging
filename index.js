const express = require('express');
const app = express();

app.use((req,res,next)=>{
    console.log(`${req.ip}`);
    next();
})


app.get('/',(req,res)=>{
    try {
        res.send(`
            <p>Welcome To Logging</p>`)
    } catch (error) {
        console.log("Something error in Home");
        res.status(404).json({message:"You are not"})
    }
})


app.listen(3000,()=>{
    console.log("The port is Listening on 3000")
})