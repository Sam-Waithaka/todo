export function getAllNotes (req, res) {
    res.status(200).send('you Just fetched the notes')
}

export function createNote (req, res){
    res.status(201).json({message:'Post created succesfully'})
}

export function updateNote (req, res){
    res.status(200).json({message:'Post Updated succesfully'})
}

export function deleteNote (req, res){
    res.status(200).json({message: 'Note deleted succsfully'})
}


