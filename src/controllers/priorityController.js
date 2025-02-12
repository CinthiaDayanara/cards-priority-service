const { Card } = require("../models/Card");  // Asegúrate de importar el modelo de la tarjeta

// Controlador para obtener todas las tarjetas
exports.getAllCards = async (req, res) => {
  try {
    // Obtener todas las tarjetas de la base de datos
    const cards = await Card.findAll();

    // Si no se encuentran tarjetas, devolver un mensaje adecuado
    if (cards.length === 0) {
      return res.status(404).json({ message: "No se encontraron tarjetas" });
    }

    // Si se encuentran tarjetas, devolverlas como respuesta
    return res.status(200).json(cards);
  } catch (error) {
    console.error("Error al obtener tarjetas:", error);
    return res.status(500).json({ message: "Error al obtener tarjetas" });
  }
};
