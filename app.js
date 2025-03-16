import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { ConnectDB } from './db/connection.js';
import router from './UseRouter/UseRouter.js';

const app=express();
ConnectDB()


const PORT=process.env.PORT || 4300;
app.use(express.json())
app.use('user',router)

app.listen(PORT,()=>{
    console.log(`server start at ${PORT}`);
})