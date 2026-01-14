import { Router } from "express";
import {
  getNotes,
  createNotes,
  deleteNotes,
} from "../controllers/notes.controller";

const router = Router();

router.get("/", getNotes);
router.post("/", createNotes);
router.delete("/:id", deleteNotes);

export default router;
