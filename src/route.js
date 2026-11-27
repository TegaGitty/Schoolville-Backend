import express from 'express';
import *as bookController from './contoller.js'

const router = express.Router();

router.get('', bookController.getBooks);
router.get('/:id', bookController.getBookByID);
router.post("", bookController.createBook);
router.put("/:id", bookController.updateBook);
router.delete("/:id", bookController.deleteBook);

export default router;