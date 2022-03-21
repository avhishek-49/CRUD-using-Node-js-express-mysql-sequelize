const books = require("../controllers/book.controller");
const validate = require("../validations/validation");
const { createValidation, findOneValidation } = require("../validations/book.validation");

var router = require("express").Router();
// Create a new book
router.post("/", validate(createValidation), books.create);

// Retrieve all books
router.get("/", books.findAll);

// Retrieve all published books
router.get("/", books.findAllPublished);

// Retrieve a single book with id
router.get("/:id", validate(findOneValidation), books.findOne);

// Update a book with id
router.put("/:id", books.update);

// Delete a book with id
router.delete("/:id", books.delete);

// Delete all books
router.delete("/", books.deleteAll);

module.exports = router;