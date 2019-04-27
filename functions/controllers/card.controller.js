const admin = require("./../firebase");
const fireData = admin.database();

module.exports = {
    getAllCards,
    getCardByCardId,
    addCard,
    updateCard,
    deleteCard
};

function getAllCards(req, res, next) {
    fireData.ref('cards').once('value', (snapshot) => {
        return res.status(200).json(snapshot.val());
    })
}

function getCardByCardId(req, res, next) {
    fireData.ref('cards').child(req.params.id)
    .once('value', (snapshot) => {
        return res.status(200).json(snapshot.val());
    })
}

function addCard(req, res, next) {
    fireData.ref('cards').push(
        req.body
    )
    .then( () => {
        fireData.ref('cards').once('value', (snapshot) => {
            return res.status(200).json(snapshot.val());
        })
    });
}

function updateCard(req, res, next) {
    fireData.ref('cards').child(req.params.id).update(
        req.body
    ).then( () => {
        fireData.ref('cards').once('value', (snapshot) => {
            return res.status(200).json(snapshot.val());
        })
    });
}

function deleteCard(req, res, next) {
    fireData.ref('cards').child(req.params.id).remove()
    .then( () => {
        fireData.ref('cards').once('value', (snapshot) => {
            return res.status(200).json({ message: "delete success"});
        })
    });
}

