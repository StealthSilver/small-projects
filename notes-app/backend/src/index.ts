import express from "express";
import cors from "cors";
import notesRouter from "./routes/notes.routes";

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));

app.use(express.json());

app.use("/api/notes", notesRouter);

app.listen(3000, () => {
  console.log("app is listening on port 3000");
});
