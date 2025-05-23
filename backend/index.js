import express, { urlencoded } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv'
import connectDB from './utils/db.js';
import userRoute from './routes/user.route.js'
import postRoute from './routes/post.route.js'
import messageRoute from  './routes/message.route.js'

dotenv.config()

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({extended: true}))


const corsOptions={
    origin: 'http://localhost:5173',
    credentials: true
}

app.use(cors(corsOptions))


const PORT= process.env.PORT || 5000;
const url = process.env.url || ""
console.log(process.env.url)

connectDB(url)


app.use("/api/v1/user",userRoute)
app.use("/api/v1/post",postRoute)
app.use("/api/v1/message",messageRoute)



app.listen(PORT,()=>{
    console.log(`server listen at port ${PORT}`)
})
