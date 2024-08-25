const express=require('express');
const app = express();
app.get('/',async(req,resp)=>{
resp.send("hello sagar")
});
app.listen(4000,()=>{
    console.log("server running...");
})