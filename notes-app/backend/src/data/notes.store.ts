export interface Note {
  id: Number;
  title: string;
  content: string;
}

// in memory data store
export const notes: Note[] = [];
