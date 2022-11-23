import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
import router from './app.js'
import { Connection } from './database/db.js'
dotenv.config()
const app = express()
const Port  = process.env.Port

app.use(cors()); 
app.use(bodyParser.json({ extended: true}));
app.use(bodyParser.urlencoded({extended: true}))

app.use('/',router)
Connection()

app.listen(Port,()=> console.log(`Server is running on port ${Port}`) )