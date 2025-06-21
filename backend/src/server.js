import cors from 'cors'
import express from 'express'
import dotenv from 'dotenv'
import path from 'path' 

import rateLimit from './middleware/rateLimiter.js'
import notesRoutes from './routes/notesRoutes.js'
import {connectDB} from './config/db.js'


dotenv.config()

const app = express()
const PORT = process.env.PORT || 5001
const __dirname = path.resolve()


//Middleware
app.use(express.json()) // this will parse json bodies: req.body

// Simple custom middleware
// app.use((req, res, next)=>{
//     console.log('New request');
//     next()
    
// })

if (process.env.NODE_ENV !== 'production') {
    app.use(cors({
        origin: "http://localhost:5173",
    }))
}


app.use(rateLimit)
app.use("/api/notes", notesRoutes)


if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, "../frontend/dist")))
    app.get(/.*/, (req, res)=>{
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"))
    })
}


// Connect DB then start app
connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log('Server started at port', PORT);
        
    })
})