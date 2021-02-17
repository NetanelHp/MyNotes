const express = require("express");
const router = express.Router();
const {
  getNotes,
  addNote,
  deleteNote,
} = require("../controllers/notesController");

router.route("/getnotes").get(getNotes);
router.route("/addnote").post(addNote);
router.route("/deletenote/:id").delete(deleteNote);

module.exports = router;
