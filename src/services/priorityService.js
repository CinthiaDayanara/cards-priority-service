const Card = require("../models/Card");

const updatePriority = async (card_id, priority) => {
  const card = await Card.findByPk(card_id);
  if (!card) throw new Error("Tarjeta no encontrada.");

  card.priority = priority;
  await card.save();

  return card;
};

module.exports = { updatePriority };
