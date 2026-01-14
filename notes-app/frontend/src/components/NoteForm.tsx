import { useState } from "react";

interface Props {
  onAdd: (title: string, content: string) => void;
}

const NoteForm = ({ onAdd }: Props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return;

    onAdd(title, content);
    setTitle("");
    setContent("");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50/60 p-4 sm:p-5 md:p-6 shadow-sm shadow-slate-200"
    >
      <div className="space-y-2">
        <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          Title
        </label>
        <input
          className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#B3D0FF] focus:outline-none focus:ring-2 focus:ring-[#B3D0FF]/40 transition"
          placeholder="Give your note a clear, simple title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          Details
        </label>
        <textarea
          className="w-full min-h-[120px] rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#B3D0FF] focus:outline-none focus:ring-2 focus:ring-[#B3D0FF]/40 transition resize-y"
          placeholder="Add context, links, or a short checklist."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <div className="flex items-center justify-between gap-3 pt-1">
        <p className="hidden text-xs text-slate-500 sm:block">
          Press{" "}
          <span className="rounded bg-white/10 px-1.5 py-0.5 text-[0.7rem]">
            Enter
          </span>{" "}
          to quickly save.
        </p>
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#B3D0FF] to-[#8CFF75] px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-md shadow-[#B3D0FF]/40 transition hover:brightness-105 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B3D0FF]/70 disabled:opacity-60"
          disabled={!title || !content}
        >
          Add note
        </button>
      </div>
    </form>
  );
};

export default NoteForm;
