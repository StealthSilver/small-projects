import { useEffect, useState } from "react";
import { type Note } from "./types/note";
import { fetchNotes, createNote, deleteNote } from "./api/notes.api";
import NoteForm from "./components/NoteForm";
import NotesList from "./components/NotesList";
import logo from "./assets/notes.svg";

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    fetchNotes().then(setNotes);
  }, []);

  const addNoteHandler = async (title: string, content: string) => {
    const newNote = await createNote({ title, content });
    setNotes((prev) => [...prev, newNote]);
  };

  const deleteNoteHandler = async (id: number) => {
    await deleteNote(id);
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navbar */}
      <nav className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="flex h-9 w-9 items-center justify-center ">
              <img src={logo} alt="Metaphor logo" className="h-6 w-6" />
            </div>
            <div className="leading-tight">
              <span className="block text-sm font-semibold tracking-tight sm:text-base">
                Metaphor
              </span>
              <span className="block text-[0.7rem] text-slate-500 sm:text-xs">
                Notes that stick
              </span>
            </div>
          </div>

          <div className="hidden items-center gap-2 text-xs sm:flex">
            <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-600">
              {notes.length === 0
                ? "No notes yet"
                : `${notes.length} ${notes.length === 1 ? "note" : "notes"}`}
            </span>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-6 sm:px-6 sm:py-8 md:py-10">
        <section className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-[0_16px_40px_rgba(15,23,42,0.04)] sm:p-7 md:p-8">
          <header className="flex flex-col gap-3 border-b border-slate-100 pb-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B3D0FF]">
                Capture your notes
              </p>
              <h1 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
                Your Metaphor workspace
              </h1>
              <p className="mt-1 text-sm text-slate-500">
                Jot ideas, todos, and reminders in a calm, focused space.
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-2xl bg-slate-50 px-3 py-2 text-xs text-slate-500">
              <span className="inline-flex h-2 w-2 rounded-full bg-[#8CFF75]" />
              <span>Notes are stored by the Metaphor backend.</span>
            </div>
          </header>

          <div className="mt-6 grid gap-6 md:grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
            <div className="space-y-5">
              <NoteForm onAdd={addNoteHandler} />
            </div>

            <section className="flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold tracking-[0.16em] uppercase">
                  Your notes
                </span>
                <span>
                  {notes.length === 0
                    ? "Nothing captured yet"
                    : `${notes.length} ${
                        notes.length === 1 ? "note" : "notes"
                      } total`}
                </span>
              </div>
              <div className="max-h-[420px] space-y-2.5 overflow-y-auto pr-1">
                <NotesList notes={notes} onDelete={deleteNoteHandler} />
              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
