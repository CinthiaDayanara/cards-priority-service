require("dotenv").config();
const express = require("express");
const sequelize = require("./src/config/database");
const cardRoutes = require("./src/routes/priorityRoutes");  // Ruta para las tarjetas

const app = express();
app.use(express.json());

app.use("/cards", cardRoutes);  // Ruta para manejar las tarjetas

const PORT = process.env.PORT || 5012;  // Puerto configurable

sequelize.sync()
  .then(() => {
    console.log("📦 Base de datos sincronizada");
    app.listen(PORT, () => {
      console.log(`🚀 Cards Service corriendo en el puerto ${PORT}`);
    });
  })
  .catch(error => console.error("❌ Error al sincronizar la base de datos:", error));
