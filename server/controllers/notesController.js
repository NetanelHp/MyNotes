const Note = require("../models/Note");

exports.getNotes = async (req, res) => {
  try {
    const notes = await Note.find({});
    return res.status(200).json(notes);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
};

exports.addNote = async (req, res) => {
  try {
    const newNote = new Note(req.body);
    const savedNote = await newNote.save();
    return res.status(200).json(savedNote);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

exports.deleteNote = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Note.findOneAndDelete({ _id: id });
    return res.status(200).json(deleted);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ msg: err.message });
  }
};
