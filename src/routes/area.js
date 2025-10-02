const express = require("express");
const router = express.Router();
const Area = require("../models/areaModel");     // 👈 Modelo Area
const Animal = require("../models/animalModel"); // 👈 Modelo Animal

// Crear un área
router.post("/areas", (req, res) => {
    const area = new Area(req.body);
    area.save()
        .then((data) => res.json(data))
        .catch((error) => res.status(400).json({ message: error }));
});

// Agregar un animal a un área existente
router.put("/areas/:id", async (req, res) => {
    const { id } = req.params;
    const animal = new Animal(req.body);

    try {
        let animalConsulta = await Animal.findOne({ codigo: animal.codigo });
        let idAnimal;

        if (!animalConsulta) {
            const dataAnimal = await animal.save();
            idAnimal = dataAnimal._id;
        } else {
            idAnimal = animalConsulta._id;
        }

        const areaActualizada = await Area.updateOne(
            { _id: id },
            { $addToSet: { animales: idAnimal } }
        );

        res.json(areaActualizada);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;