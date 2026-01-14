import { Request, Response } from "express";
import { notes, Note } from "../data/notes.store";

export const getNotes = (req: Request, res: Response) => {
  res.json(notes);
};

export const createNotes = (req: Request, res: Response) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: "Title and content are required" });
  }

  const newNote: Note = {
    id: Date.now(),
    title,
    content,
  };

  notes.push(newNote);

  res.status(201).json(newNote);
};

export const deleteNotes = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const index = notes.findIndex((note) => note.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Note not found" });
  }

  notes.splice(index, 1);
  res.status(204).send();
};
