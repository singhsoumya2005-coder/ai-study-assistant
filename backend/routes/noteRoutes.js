const express = require("express");
const protect =require("../middleware/authMiddleware");

const router = express.Router();


const {
    getAllNotes,createNote,getSingleNote,updateNote,deleteNote
} = require("../controllers/notesController");

router.get("/", protect,getAllNotes);
router.post("/",protect,createNote);
router.get("/:id",getSingleNote);
router.put("/:id",updateNote);
router.delete("/:id",deleteNote);


module.exports = router; 