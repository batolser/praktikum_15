const { Joi } = require('celebrate');

module.exports = {
  body: Joi.object().keys({
    email: Joi.string().required()
      .regex(/^([a-zA-Z0-9_-]+)@([a-z]+)\.([a-z]+)$/),
    password: Joi.string().min(8).required(),
    name: Joi.string().min(2).max(20)
      .required()
      .regex(/^([А-Я]{1}[а-яё]{1,}|[А-Я]{1}[а-яё]{1,}-[А-Я]{1}[а-яё]{1,})$/),
    about: Joi.string().min(2).max(20)
      .required(),
    avatar: Joi.string().required()
      .regex(/http[s]?:\/\/(www\.)?((\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})|(\w+\.\w+))(:\d{2,5})?((\/[-a-zA-Z0-9\/]*)?)#?\d?/), // eslint-disable-line
  }),
};
