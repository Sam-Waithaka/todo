import Note from '../models/Note.js'
export async function getAllNotes (req, res) {
    try {
        const notes = await Note.find().sort({createdAt:-1})
        res.status(200).json(notes)
    } catch (error) {
        res.status(500).json({message: "Internal Server Error"})
        console.error(`Error in getAllNotes controller: ${error}`)
    }
}

export async function getNotebyId(_, res){
    try {
        const { title, content } = req.body;
        const note = await Note.findByIdAndUpdate(
            req.params.id, 
            // { title, content }, 
            // { new: true }
        );
        if (!note) return res.status(404).json({meesage: "Note not found"})
        res.json(note)
        
    } catch (error) {
        res.status(500).json({message: "Internal Server Error"})
        console.error(`Error in getNotebyId controller: ${error}`)

    }
}

export async function createNote (req, res){
    try {
        const {title, content} = req.body
        console.log(title, content);

        const newNote = new Note({title, content})
        const savedNote = await newNote.save()
        res.status(201).json(savedNote)
    } catch (error) {
        res.status(500).json({message: "Internal Server Error"})
        console.error(`Error in createNote controller: ${error}`)
    }
}

export async function updateNote(req, res) {
    try {
        
        const { title, content } = req.body;
        const updatedNote = await Note.findByIdAndUpdate(
            req.params.id, 
            { title, content }, 
            { new: true }
        );

        if (!updatedNote) {
            return res.status(404).json({ message: "Note not found" });
        }


        res.status(200).json({
            message: "Note Updated successfully",
            note: updatedNote
        });
    
    } catch (error) {
        console.error(`Error in updateNote controller: ${error}`);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export async function deleteNote (req, res){
    try {
        const { title, content } = req.body;
        const deletedNote = await Note.findByIdAndDelete(
            req.params.id, 
            { title, content }, 
            { new: true }
        );

        if (!deletedNote) return res.status(404).json({ message: "Note not found" });

        res.status(200).json({message: "Note Deleted Succesfully"})

    } catch (error) {
        console.error(`Error in deleteNote controller: ${error}`);
        res.status(500).json({ message: "Internal Server Error" });
    }
}


