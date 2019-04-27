const admin = require("./../firebase");
const fireData = admin.database();

module.exports = {
    getAllCards,
    getCardByCardId,
    addCard,
    updateCard,
    deleteCard
};

async function getAllCards(req, res, next) {
    await fireData.ref('cards').once('value', (snapshot) => {
        return res.status(200).json(snapshot.val());
    })
}

async function getCardByCardId(req, res, next) {
    await fireData.ref('cards').child(req.params.id)
    .once('value', (snapshot) => {
        return res.status(200).json(snapshot.val());
    })
}

async function addCard(req, res, next) {
    await fireData.ref('cards').push(
        req.body
    )
    .then( () => {
        fireData.ref('cards').once('value', (snapshot) => {
            return res.status(200).json(snapshot.val());
        })
    });
}

async function updateCard(req, res, next) {
    await fireData.ref('cards').child(req.params.id).update(
        req.body
    ).then( () => {
        fireData.ref('cards').once('value', (snapshot) => {
            return res.status(200).json(snapshot.val());
        })
    });
}

async function deleteCard(req, res, next) {
    await fireData.ref('cards').child(req.params.id).remove()
    .then( () => {
        fireData.ref('cards').once('value', (snapshot) => {
            return res.status(200).json({ message: "delete success"});
        })
    });
}

