const { Joi } = require('celebrate');

module.exports = {
  body: Joi.object().keys({
    name: Joi.string().min(2).max(20)
      .required(),
    link: Joi.string().required()
      .regex(/http[s]?:\/\/(www\.)?((\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})|(\w+\.\w+))(:\d{2,5})?((\/[-a-zA-Z0-9\/]*)?)#?\d?/), // eslint-disable-line
  }).unknown(true),
  user: Joi.object().keys({
    _id: Joi.string().alphanum().max(30),
  }),
};
