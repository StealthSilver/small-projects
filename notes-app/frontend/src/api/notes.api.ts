import { type Note } from "../types/note";

const BASE_URL = "http://localhost:3000/api/notes";

export const fetchNotes = async (): Promise<Note[]> => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const createNote = async (note: Omit<Note, "id">): Promise<Note> => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(note),
  });

  return res.json();
};

export const deleteNote = async (id: number): Promise<void> => {
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
};
