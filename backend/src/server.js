import cors from 'cors'
import express from 'express'
import dotenv from 'dotenv'

import rateLimit from './middleware/rateLimiter.js'
import notesRoutes from './routes/notesRoutes.js'
import {connectDB} from './config/db.js'


dotenv.config()

const app = express()
const PORT = process.env.PORT || 5001


//Middleware
app.use(express.json()) // this will parse json bodies: req.body

// Simple custom middleware
// app.use((req, res, next)=>{
//     console.log('New request');
//     next()
    
// })

app.use(cors({
    origin: "http://localhost:5173",
}))
app.use(rateLimit)
app.use("/api/notes", notesRoutes)


// Connect DB then start app
connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log('Server started at port', PORT);
        
    })
})
