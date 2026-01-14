"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const notes_controller_1 = require("../controllers/notes.controller");
const router = (0, express_1.Router)();
router.get("/", notes_controller_1.getNotes);
router.post("/", notes_controller_1.createNotes);
router.delete("/:id", notes_controller_1.deleteNotes);
exports.default = router;
