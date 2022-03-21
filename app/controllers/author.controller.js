const { Author, Sequelize: { Op } } = require("../models");
// const Author = db.Author;
// const Op = db.Sequelize.Op;

// Create and Save a new author
exports.create = (req, res) => {
  // Create a author
  const author = {
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    active: req.body.active ? req.body.active : false
  };

  // Save author in the database
  Author.create(author)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the author."
      });
    });
};

// Retrieve all author from the database.
exports.findAll = async (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  try {
    const author = await Author.findAll({ where: condition });
    return res.json({
      status: 200,
      message: "Author's fetched successfully!",
      data: author
    })


    console.log(author.json());
    
  } catch (error) {
    res.json({
      status: 400,
      message: "Author not found!"
    })
  }


 console.log(author, "test");
   
  // Author.findAll({ where: condition })
  //   .then(data => {
  //     res.send(data);
  //   })
  //   .catch(err => {
  //     res.status(500).send({
  //       message:
  //         err.message || "Some error occurred while retrieving author."
  //     });
  //   });
};

// Find a single author with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Author.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find author with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving author with id=" + id
      });
    });
};

// Update a author by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Author.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "author was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update author with id=${id}. Maybe author was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating author with id=" + id
      });
    });
};

// Delete a author with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Author.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "author was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete author with id=${id}. Maybe author was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete author with id=" + id
      });
    });
};

// Delete all author from the database.
exports.deleteAll = (req, res) => {
  Author.destroy({
    where: {},
    truncate: false
  })
    .then(num => {
      res.send({ message: `${num} author were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all author."
      });
    });
};

// find all active author
exports.findAllActive = (req, res) => {
  Author.findAll({ where: { active: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving author."
      });
    });
};