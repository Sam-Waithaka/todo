import express from 'express'

const app = express()

app.get("/api/notes", (req, res)=>{
    res.status(200).send('you get 10 notes')
}) 

app.post('/api/notes', (req, res)=>{
    res.status(201).json({message:'Post created succesfully'})
})

app.put('/api/notes/:id', (req, res)=>{
    res.status(200).json({message:'Post Updated succesfully'})
})

app.delete('/api/notes/:id', (req, res)=>{
    res.status(200).json({message: 'Note deleted succsfully'})
} )


app.listen(5001, ()=>{
    console.log('Server started');
    
})