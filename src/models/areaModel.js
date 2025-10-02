const mongoose = requiere('mongoose');

const areaSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    animales: [{ type: mongoose.Scgema.Types.ObjectId, ref: 'Animal' }]
});

module.exports = mongoose.model('Area', areaSchema);