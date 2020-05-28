const Card = require('../models/card');
const NotFoundError = require('../errors/not-found-err');
const ForbiddenError = require('../errors/forbidden-err');

module.exports.getCards = (req, res, next) => {
  Card.find({})
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      next(err);
    });
};

module.exports.createCard = (req, res, next) => {
  const owner = req.user._id;
  const { name, link } = req.body;
  Card.create({ name, link, owner })
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      next(err);
    });
};

module.exports.getCardMiddleware = (req, res, next) => { // eslint-disable-line
  return Card.findById({
    _id: req.params.cardId,
  })
    .then((card) => { // eslint-disable-line
      if (!card) {
        throw new NotFoundError('Карточка не найдена');
        // return next({ status: 404, message: 'Карточка не найдена' });
      }

      // req.card = card;
      next();
    })
    .catch((err) => {
      next(err);
    });
};

module.exports.deleteCard = (req, res, next) => {
  Card.findById(req.params.cardId)
    // .then((cardId) => {
    //   const { owner } = cardId;
    //   return owner;
    // })
    .then((cardId) => {
      if (req.user._id !== cardId.owner.toString()) {
        throw new ForbiddenError('Вы не можете удалить чужую карточку');
      }
      return Card.findByIdAndRemove(req.params.cardId);
    })
    .then(() => {
      res.send('Карточка удалена');
    })
    .catch((err) => {
      next(err);
    });
};
