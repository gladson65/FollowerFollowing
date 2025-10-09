import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { userRoutes } from './routes/user.routes.js';

// create a server
const followerServer = new express();
followerServer.listen('7000', ()=> {
    console.log('server is running on the port 7000')
})

// json parse middleware
followerServer.use(express.json());
// cors origin support
followerServer.use(cors());

// mongoDB connection
mongoose.connect('mongodb://localhost:27017/followerData');

const checkDB = mongoose.connection;
checkDB.on('open', ()=> {
    console.log("MongoDB database is connected");
})
checkDB.on('error', ()=> {
    console.log("MongoDB database connection is not successful")
})

// passing app into router
userRoutes(followerServer)
