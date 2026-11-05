const Note = require("../models/noteModel");

const getAllNotes = async (req, res) => {
  const notes = await Note.find();
  res.json({
    success: true,
    notes,
  });
};

const createNote = async (req, res) => {
  const note = await Note.create({
    title: req.body.title,
  });
  res.status(201).json({
    success: true,
    note,
  });
};

const getSingleNote = async (req, res) => {
  console.log("GET SINGLE NOTE HIT");

  const note = await Note.findById(req.params.id);
  if (!note) {
    return res.status(404).json({
      success: false,
      message: "Note not found",
    });
  }
  res.json({
    success: true,
    note,
  });
};

const updateNote = async (req, res) => {
  const note = await Note.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
    },
    {
      new: true,
    },
  );
  if (!note) {
    return res.status(404).json({
      success: false,
      message: "Note not found",
    });
  }
  res.json({
    success: true,
    note,
  });
};

const deleteNote = async (req, res) => {
  console.log(req);
  console.log(req.params);
  await Note.findByIdAndDelete(req.params.id);
  res.json({
    success: true,
    message: "Deleted successfully",
  });
};

module.exports = {
  getAllNotes,
  createNote,
  getSingleNote,
  updateNote,
  deleteNote,
};
