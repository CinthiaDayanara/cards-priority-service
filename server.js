require("dotenv").config();
const express = require("express");
const sequelize = require("./src/config/database");
const cardRoutes = require("./src/routes/priorityRoutes");

const app = express();
app.use(express.json());

// Usar las rutas de tarjetas
app.use("/cards", cardRoutes);  

const PORT = process.env.PORT || 5012;

sequelize.sync()
  .then(() => {
    console.log("📦 Base de datos sincronizada");
    app.listen(PORT, () => {
      console.log(`🚀 Cards Service corriendo en el puerto ${PORT}`);
    });
  })
  .catch(error => console.error("❌ Error al sincronizar la base de datos:", error));
