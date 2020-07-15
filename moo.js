// const momo = require("mtn-momo");
  require('dotenv').config();
// console.log('Now the value for FOO is:', process.env.CALLBACK_HOST);
// console.log('Now the value for FOO is:', process.env.TARGET_ENVIRONMENT);
const momo = require("mtn-momo");
mtnmomo();
function mtnmomo(){
const { Collections } = momo.create({
  callbackHost: process.env.CALLBACK_HOST
});

const collections = Collections({
  userSecret: process.env.COLLECTIONS_USER_SECRET,
  userId: process.env.COLLECTIONS_USER_ID,
  primaryKey: process.env.COLLECTIONS_PRIMARY_KEY
});

// Request to pay
collections
  .requestToPay({
    amount: "5",
    currency: "EUR",
    externalId: "123456",
    payer: {
      partyIdType: "MSISDN",
      partyId: "256774645196"
    },
    payerMessage: "testing",
    payeeNote: "hello"
  })
  .then(transactionId => {
    console.log({ transactionId });

    // Get transaction status
    return collections.getTransaction(transactionId);
  })
  .then(transaction => {
    console.log({ transaction });

    // Get account balance
    return collections.getBalance();
  })
  .then(accountBalance => console.log({ accountBalance }))
  .catch(error => {
    console.log(error);
  });
}
