const server=require('express');
 server.get('/',(req,res)=>{
    res.send('Hello world');
 });

 server.listen(3000,()=>{
    console.log("i am listening port 3000");
 });