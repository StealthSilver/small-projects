"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNotes = exports.createNotes = exports.getNotes = void 0;
const notes_store_1 = require("../data/notes.store");
const getNotes = (req, res) => {
    res.json(notes_store_1.notes);
};
exports.getNotes = getNotes;
const createNotes = (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ error: "Title and content are required" });
    }
    const newNote = {
        id: Date.now(),
        title,
        content,
    };
    notes_store_1.notes.push(newNote);
    res.status(201).json(newNote);
};
exports.createNotes = createNotes;
const deleteNotes = (req, res) => {
    const id = Number(req.params.id);
    const index = notes_store_1.notes.findIndex((note) => note.id === id);
    if (index === -1) {
        return res.status(404).json({ error: "Note not found" });
    }
    notes_store_1.notes.splice(index, 1);
    res.status(204).send();
};
exports.deleteNotes = deleteNotes;
