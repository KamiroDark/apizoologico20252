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

module.exports = router;