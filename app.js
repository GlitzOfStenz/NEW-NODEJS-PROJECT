import express from "express";
const app = express();

const PORT = process.env.PORT||3000;

//home page

app.get("/",(req,res)=>{
    res.send(`
        <h1>Welcome to my NOde js Application</h1>
        <p>My Application is deployed on render cloud</p>`);
});

//API Route

app.get("/api",(req,res)=>{
    res.json({
        message:"Node js Application is Working",
        platform:"Render Cloud",
        status:"Success"
    });
});

//Health check route

app.get("/health",(req,res)=>{
    res.json({status:"healthy"});
});

app.listen(PORT,"0.0.0.0",()=>{
    console.log(`Server Running in ${PORT}`);
});