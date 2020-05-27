const { Joi } = require('celebrate');

module.exports = {
  params: Joi.object().keys({
    cardId: Joi.string(),
  }),
};
