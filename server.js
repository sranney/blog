const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const authRouter = require("./routes/auth");
const adminRouter = require("./routes/admin");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(express.static("client/build"));

app.use("/",authRouter);
app.use("/admin",adminRouter);

const mongoose = require("mongoose");
const mongoURI = process.env.mongoURI||require("../secrets/blog").MONGOURI;

mongoose.connect(mongoURI,()=>console.log("successfully connected to mongodb"));

app.listen(process.env.PORT||5000,()=>console.log(`application listening on port ${process.env.PORT||5000}`));