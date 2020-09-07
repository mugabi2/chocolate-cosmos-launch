process.env.PROVIDER_CALLBACK_HOST = 'https://chocolate-cosmos.web.app/';
process.env.CALLBACK_HOST = 'stardigitalbikes.com';
process.env.TARGET_ENVIRONMENT = 'sandbox';
process.env.COLLECTIONS_PRIMARY_KEY = '1deae1372c5c45ed946ab8d1bde2a5d5';
process.env.COLLECTIONS_SECONDARY_KEY = '36e2bd203bc2468c8d31f859ce2b9989';
process.env.COLLECTIONS_USER_SECRET = 'ba23d6f0e8794b3e92540cdbde9c5ca1';
process.env.COLLECTIONS_USER_ID = 'ca96f95b-2bec-413e-9946-eb409138031e';
const momo = require("mtn-momo");

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
    amount: "50",
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
console.log("bala bala"+collections.getBalance());
    // Get account balance
    return collections.getBalance();
  })
  .then(accountBalance => console.log({ accountBalance }))
  .catch(error => {
    console.log(error);
  });
