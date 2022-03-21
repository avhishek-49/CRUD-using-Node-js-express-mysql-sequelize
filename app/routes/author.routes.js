const Author = require("../controllers/author.controller");
const validate = require("../validations/validation");
const { createValidation, findOneValidation } = require("../validations/author.validation");

var router = require("express").Router();
// Create a new user
router.post("/", validate(createValidation), Author.create);

// Retrieve all Author
router.get("/", Author.findAll);

// Retrieve all active Author
router.get("/", Author.findAllActive);

// Retrieve a single user with id
router.get("/:id", validate(findOneValidation), Author.findOne);

// Update a user with id
router.put("/:id", Author.update);

// Delete a user with id
router.delete("/:id", Author.delete);

// Delete all Author
router.delete("/", Author.deleteAll);

module.exports = router;

