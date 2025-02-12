const { Card } = require('../models/Card');  // Asegúrate de importar el modelo correctamente

// Obtener todas las tarjetas
const getCards = async (req, res) => {
  try {
    const tarjetas = await Card.findAll(); // Usamos Sequelize para encontrar todas las tarjetas
    res.status(200).json(tarjetas);
  } catch (error) {
    res.status(500).json({ error: "❌ Error al obtener tarjetas: " + error.message });
  }
};

module.exports = { getCards };
