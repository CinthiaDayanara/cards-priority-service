const Joi = require("joi");

const prioritySchema = Joi.object({
  card_id: Joi.number().integer().required(),
  priority: Joi.string().valid("low", "medium", "high").required()
});

const validatePriorityUpdate = (data) => {
  const { error } = prioritySchema.validate(data, { abortEarly: false });
  if (error) throw new Error(error.details.map(err => err.message).join(", "));
};

module.exports = { validatePriorityUpdate };
