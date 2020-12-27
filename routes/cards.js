
const cardsRouter = require('express').Router(); // создали роутер
const { celebrate } = require('celebrate');
const validationCookies = require('../middlewares/validationCookies');
const validationCreateCard = require('../middlewares/validationCreateCard');
const validationDeleteCard = require('../middlewares/validationDeleteCard');
const {
  getCards, createCard, getCardMiddleware, deleteCard,
} = require('../controllers/card');
const auth = require('../middlewares/auth');

cardsRouter.get('/cards', celebrate(validationCookies), auth, getCards);
cardsRouter.post('/cards', celebrate(validationCreateCard), auth, createCard);
cardsRouter.delete('/cards/:cardId', celebrate(validationCookies), celebrate(validationDeleteCard), auth, getCardMiddleware, deleteCard);

module.exports = cardsRouter;
