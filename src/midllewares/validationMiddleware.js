/* eslint-disable newline-per-chained-call */
/* eslint-disable consistent-return */
const Joi = require("joi");

module.exports = {
  addPostValidation: (req, res, next) => {
    // Объявляему схему валидации
    const schema = Joi.object({
      // eslint-disable-next-line newline-per-chained-call
      topic: Joi.string().alphanum().min(3).max(30).required(),
      text: Joi.string().alphanum().min(10).max(400).required(),
    });

    // Проверяем данные клиента на валидацию
    const validationResult = schema.validate(req.body);

    // Если есть ошибка
    if (validationResult.error) {
      return res.status(400).json({ status: validationResult.error.details });
    }

    next();
  },

  patchPostValidation: (req, res, next) => {
    // Объявляему схему валидации
    const schema = Joi.object({
      topic: Joi.string().alphanum().min(3).max(30).optional(),
      text: Joi.string().alphanum().min(10).max(400).optional(),
    });

    // Проверяем данные клиента на валидацию
    const validationResult = schema.validate(req.body);

    // Если есть ошибка
    if (validationResult.error) {
      return res.status(400).json({ status: validationResult.error.details });
    }

    next();
  },
};
