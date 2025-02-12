const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Card = sequelize.define("Card", {
  id: { 
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true 
  },
  titulo: { 
    type: DataTypes.STRING, 
    allowNull: false, 
    field: "titulo"
  },
  descripcion: { 
    type: DataTypes.TEXT, 
    allowNull: true, 
    field: "descripcion"
  },
  fecha_vencimiento: { 
    type: DataTypes.DATE, 
    allowNull: true, 
    field: "fecha_vencimiento"
  },
  fecha_creacion: { 
    type: DataTypes.DATE, 
    allowNull: false, 
    defaultValue: DataTypes.NOW, 
    field: "fecha_creacion"
  },
  lista_id: { 
    type: DataTypes.INTEGER, 
    allowNull: false, 
    field: "lista_id" 
  }
}, {
  tableName: "tarjetas", 
  timestamps: false
});

module.exports = Card;
