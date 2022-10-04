const db = require ("../models");
const Bicycle = db . bicycles;
const Op = db.Sequelize.Op;


// Retrieve all Bicycles from the database .
exports.findA11 = (req, res) => {
};
// Find a single Bicycle with an id
exports.findOne = ( req, res ) => {
};
// Update a Bicycle by the id in the request
exports.update = ( req, res ) => {
  if(req.body.status --- undefined){
    res.status(400).send({message: 'Debe rellenar los campos.'});
    return
  }
  Bicycle.update({
    status: req.body.status
  },{
    where : { idproducto: req.params.idproducto}
  })
  .then( data =>{
    res.status(200).send(data);
  }).catch( err => {
    res.status(500).send({
      message: err.message || 'Some error happened while updating.'
    })
  });
};
// Delete a Bicycle with the specified id in the request
exports.delete = ( req, res ) => {
  Bicycle.destroy({
    where : { idproducto: req.params.idproducto }
  })
  .then( data => {
    res.status(200).send({ message: 'producto eliminado.'});
  }).catch( err =>{
    req.status(500).send({
      message: err.message || 'Error al intentar eliminar el producto.'
    })
  });
};

// Create and Save a new Bicycle
exports.create = (req, res) => {
    // Validate request
    if (!req.body.nombre) {
      res.status(400).send({
        message : "Content can not be empty!"
      });
      return ;
    }
    // Create a Bicycle
    const bicycle = {
      
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      img: req.body.img,

    };
    // Save Bicycle in the database
    Bicycle.create(bicycle)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status (500).send({
          message:
            err.message || "Some error occurred while creating the bicycle ."     
      });
    });
  };

  // Retrieve all Bicycles from the database .
  exports.findAll  = (req, res) => { 
    Bicycle.findAll()
      .then(data => {
       res.send(data);
      })
      .catch(err => {
       res.status(500).send({
         message :
           err.message || "Some error occurred while retrieving bicycles ."

        });
        });
    };