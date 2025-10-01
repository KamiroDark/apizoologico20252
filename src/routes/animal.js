const express = require('express');
const router = express.Router(); //Maneja las rutas de Express
const animalSchema = require('../models/animalModel');

// Crear un nuevo animal
router.post("/animalitos", (req, res) => {
    const animal = animalSchema(req.body);
    animal
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Consultar los animales
router.get("/animalitos", (req, res) => {
    animalSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json ({ message: error }));
});

//Buscar animal por ID
router.get("/animalitos/:id", (req, res) =>{
    const {id} = req.params;
    animalSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

//Modificar animal por ID
router.put("/animalitos/:id", (req, res) =>{
    const {id} = req.params;
    const {nombre, edad, tipo, fecha} = req.body;
    animalSchema
        .updateOne({ _id: id }, {
            $set:{nombre, edad, tipo, fecha}
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

//Eliminar un animal por ID
router.delete("/animalitos/:id", (req, res) =>{
    const {id} = req.params;
    animalSchema
        .findByIdAndDelete(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

module.exports = router;