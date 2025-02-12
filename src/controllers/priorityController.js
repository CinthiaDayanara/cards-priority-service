const sequelize = require("../config/database");  // Asegúrate de tener la conexión a la base de datos configurada

// Obtener todas las tarjetas con una consulta SQL directa
exports.getCards = async (req, res) => {
  try {
    // Consulta SQL para obtener todas las tarjetas
    const [tarjetas] = await sequelize.query("SELECT * FROM tarjetas");

    res.status(200).json(tarjetas);
  } catch (error) {
    console.error("Error al obtener tarjetas:", error);
    res.status(500).json({ error: "❌ Error al obtener tarjetas: " + error.message });
  }
};
