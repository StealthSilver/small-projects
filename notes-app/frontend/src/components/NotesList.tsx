import { type Note } from "../types/note";

interface Props {
  notes: Note[];
  onDelete: (id: number) => void;
}

const NotesList = ({ notes, onDelete }: Props) => {
  if (notes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50/60 px-6 py-10 text-center text-slate-500">
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#B3D0FF] to-[#8CFF75] text-lg text-slate-900">
          <span>+</span>
        </div>
        <p className="text-sm font-medium text-slate-800">
          Start your first note
        </p>
        <p className="mt-1 text-xs text-slate-500">
          Add a title and some details to capture your thoughts.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2.5">
      {notes.map((note) => (
        <article
          key={note.id}
          className="group flex items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-3.5 shadow-sm shadow-slate-100 transition hover:-translate-y-0.5 hover:border-[#B3D0FF] hover:shadow-md hover:shadow-slate-200/60"
        >
          <div className="flex-1 min-w-0">
            <h3 className="truncate text-sm font-semibold text-slate-900">
              {note.title}
            </h3>
            <p className="mt-1 text-sm text-slate-600 whitespace-pre-wrap">
              {note.content}
            </p>
          </div>

          <button
            onClick={() => onDelete(note.id)}
            className="ml-2 inline-flex items-center rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-500 transition hover:border-red-300 hover:bg-red-50 hover:text-red-500"
          >
            Delete
          </button>
        </article>
      ))}
    </div>
  );
};

export default NotesList;
