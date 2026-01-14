import { useState } from "react";

const App = () => {
  const [greeting, setGreeting] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchGreeting = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("http://localhost:3000/api/greet");
      if (!res.ok) {
        throw new Error("Failed to fetch greeting");
      }
      const data: { message: string } = await res.json();
      setGreeting(data.message);
    } catch (error) {
      console.error(error);
      setGreeting("Something went wrong while fetching the greeting.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl shadow-slate-950/40 backdrop-blur-sm p-8 space-y-6">
        <header className="space-y-2">
          <p className="text-[11px] font-semibold tracking-[0.25em] text-sky-400 uppercase">
            Greeting App
          </p>
        </header>

        <main className="space-y-4">
          <button
            type="button"
            onClick={fetchGreeting}
            disabled={isLoading}
            className="inline-flex items-center justify-center w-full rounded-xl bg-sky-500 px-4 py-2.5 text-sm font-medium text-slate-950 shadow-sm shadow-sky-500/40 hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? "Fetching your greeting..." : "Greet me"}
          </button>

          {greeting && (
            <div className="mt-2 rounded-xl border border-sky-500/40 bg-sky-500/10 px-4 py-3 text-sm font-medium text-sky-50 shadow-sm">
              {greeting}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
