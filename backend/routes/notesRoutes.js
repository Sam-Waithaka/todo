import express from 'express'
import { createNote, deleteNote, getAllNotes, updateNote } from '../controllers/notesControllers.js';

const router = express.Router();

export default router;

router.get('/', getAllNotes)

router.post('/', createNote)

router.put('/:id', updateNote )

router.delete('/:id', deleteNote)