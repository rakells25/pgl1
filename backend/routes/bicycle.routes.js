module.exports = app => {
    const bicycles = require("../controllers/bicycle.controller.js");
   var router = require("express").Router();

   // Create a new Bicycle
router.post("/", bicycles.create);

// Retrieve all Bicycles
router.get("/", bicycles.findAll);

// Retrieve a single Bicycle with id
router.get("/:id", bicycles.findOne);

// Update a Bicycle with id
router.put("/:id", bicycles.update);

// Delete a Bicycle with id
router.delete("/:idproducto", bicycles.delete);
app.use('/api/bicycles', router);

};