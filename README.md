# cardwhere-backend

## Android App - CardWhere's backend

1. Create 'firebase_key' folder in functions folder
2. Add your private key file (JSON) in firebase_key folder

How To generate a private key file:
- In the Firebase console, open Settings > Service Accounts.
- Click Generate New Private Key, then confirm by clicking Generate Key.
- Securely store the JSON file containing the key.

```sh
$ cd functions
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
