import express from 'express';
const app = express();



app.use("/hello",(req,res)=>{
    res.send("hello world from the hello");
});


app.get('/user',(req,res)=>{
    res.send("got the data from db");

});

app.post("/user",(req,res)=>{
    res.send("data saved to the db");
});
app.delete("/user",(req,res)=>{
    res.send("deleted the user data ");
});


app.use("/",(req,res)=>{
    res.send("hello world from the daashboard");
});

app.listen(5000,()=>{
    console.log("server is listening on port 5000");
    
});