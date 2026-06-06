const express=require("express");
const app=express();
const trainRoutes = require("./routes/trainRoutes");
app.get("/",(req,res)=>{
  res.send("Backend is Running");
});
app.use("/api/trains", trainRoutes);
app.listen(5001, () => {
  console.log("Server is running on 5001");
});