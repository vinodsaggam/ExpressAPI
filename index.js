import * as dotenv from 'dotenv';
import express, { json } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from  './routes/index.js';
import mongoose from 'mongoose';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const DB_URL = process.env.SERVER_DATABASE_URL;
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: false}))
app.use(cors());

app.use('/test',router)

mongoose.connect(DB_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(
    app.listen(PORT, console.log(`Server running on port: ${PORT}`))
)
const db = mongoose.connection;

db.on("error", (error) => console.log(error.message))
db.on("open",() => console.log("Connected to db"))


