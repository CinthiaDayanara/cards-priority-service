const { Card } = require('../models/Card');  // Asegúrate de importar el modelo correctamente

exports.getAllCards = async (req, res) => {
  try {
    const cards = await Card.findAll();  // Usamos el método findAll para obtener todas las tarjetas
    res.json(cards);
  } catch (error) {
    console.error('Error al obtener tarjetas:', error);
    res.status(500).send('Error al obtener tarjetas');
  }
};
