const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('../config');

const UnauthorizedError = require('../errors/unauthorized-err');


module.exports = (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) {
    throw new UnauthorizedError('Пожалуйста, пройдите авторизацию');
  }

  let payload;
  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    next(err);
  }
  req.user = payload;
  return next();
};
