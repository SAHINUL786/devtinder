import express from 'express';
const app = express();



app.use("/",(req,res)=>{
    res.send("hello world from the daashboard");
});
app.use("/hello",(req,res)=>{
    res.send("hello world from the hello");
});
app.use("/test",(req,res)=>{
    res.send("hello world from the test");
});
app.use("/data",(req,res)=>{
    res.send("hello world from the data");
});


app.listen(5000,()=>{
    console.log("server is listening on port 5000");
    
});