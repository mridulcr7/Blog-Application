import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes.js";
import router from "./routes/user-routes.js";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);

const dbURI = "mongodb+srv://mridul:mrid77@cluster0.1zljmcg.mongodb.net/BlogApp";

mongoose.connect(dbURI)
    .then(() => {
        console.log("Let's go")
        app.listen(3000);
    })
    .catch(err => {
        console.log("ERROR!!")
        console.log(err)
    })

