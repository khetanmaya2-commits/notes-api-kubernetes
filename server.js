const express = require('express')

const app= express();
const PORT = 3000;

app.use(express.json())

const notes=[
     {
    id: 1,
    title: "Learn Docker",
    content: "Build and run containers"
  },
  {
    id: 2,
    title: "Learn Kubernetes",
    content: "Deploy applications using Pods"
  }
];

app.get('/',(req,res)=>{
    res.json({
        message:"Notes API is running and it is built using node and express!",
        version: "3.0"
    });
});

app.get('/health',(req,res)=>{
    res.json({
        status: "health",
        version: "3.0"
    });
});

app.get('/notes',(req,res)=>{
    res.json(notes);
});

app.listen(PORT,()=>{
    console.log(`Notes API running on port ${PORT}`);
});