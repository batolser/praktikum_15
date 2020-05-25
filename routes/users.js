const usersRouter = require('express').Router(); // создали роутер
const { celebrate } = require('celebrate');
const validationCookies = require('../middlewares/validationCookies');
const {
  getUsers, getUserById,
} = require('../controllers/users');

const auth = require('../middlewares/auth');


usersRouter.get('/users', celebrate(validationCookies), auth, getUsers);
usersRouter.get('/users/:userId', celebrate(validationCookies), auth, getUserById);


module.exports = usersRouter; // экспортировали роутер
