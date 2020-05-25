const { Joi } = require('celebrate');

module.exports = {
  body: Joi.object().keys({
    email: Joi.string().required()
      .regex(/^([a-zA-Z0-9_-]+)@([a-z]+)\.([a-z]+)$/),
    password: Joi.string().min(8).required(),
  }),
};
