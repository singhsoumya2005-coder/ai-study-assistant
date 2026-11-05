require("dotenv").config();
const express = require("express");
const connectDB=require("./config/db");
const noteRoutes=require("./routes/noteRoutes");
const userRoutes=require("./routes/userRoutes");

const app = express();




app.use(express.json());
connectDB();
app.get("/",(req,res)=>{
    res.send("welcome to AI study assistant");
});


app.use("/notes",noteRoutes);
app.use("/users",userRoutes);
console.log("you bkl");


app.listen(3000, () => {
    console.log("Server running on port 3000");
});