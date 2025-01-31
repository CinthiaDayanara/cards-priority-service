require("dotenv").config();
const express = require("express");
const priorityRoutes = require("./src/routes/priorityRoutes");
const sequelize = require("./src/config/database");

const app = express();
app.use(express.json());

app.use("/priority", priorityRoutes);

const PORT = process.env.PORT || 5012;
sequelize.sync()
  .then(() => {
    console.log("📦 Base de datos sincronizada");
    app.listen(PORT, () => {
      console.log(`🚀 Cards Priority Service corriendo en el puerto ${PORT}`);
    });
  })
  .catch(error => console.error("❌ Error al sincronizar la base de datos:", error));
