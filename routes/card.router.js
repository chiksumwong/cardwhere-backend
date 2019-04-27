const cardController = require('./../controllers/card.controller')

module.exports = (router) => {
    router.route('/cards').get(cardController.getAllCards);
    router.route('/card/:id').get(cardController.getCardByCardId);
    router.route('/card').post(cardController.addCard);
    router.route('/card/:id').put(cardController.updateCard);
    router.route('/card/:id').delete(cardController.deleteCard);
}