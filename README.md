# cardwhere-backend

## Android App - CardWhere's backend

```sh
$ npm install
$ npm start
```

## APIs Design
| APIs           | Method | Urls                                       |
| -------------- | ------ | ------------------------------------------ |
| Get All Cards  | GET    | http://localhost:3000/api/v1/cards         |
| Get Card By ID | GET    | http://localhost:3000/api/v1/card/:card_id |
| Create Card    | POST   | http://localhost:3000/api/v1/card          |
| Update Card    | PUT    | http://localhost:3000/api/v1/card/:card_id |
| Delete Card    | DELETE | http://localhost:3000/api/v1/card/:card_id |