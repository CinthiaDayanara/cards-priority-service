const { updatePriority } = require("../services/priorityService");
const { validatePriorityUpdate } = require("../utils/validators");

exports.setPriority = async (req, res) => {
  try {
    validatePriorityUpdate(req.body);

    const updatedCard = await updatePriority(req.body.card_id, req.body.priority);
    res.status(200).json({ message: "Prioridad actualizada", card: updatedCard });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
