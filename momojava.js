
  const momoBtn=document.querySelector('#mtnmomo');
  momoBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log("momo");
    const momo = require("mtn-momo");
    // const momo: Config = {
    //   environment: Environment.SANDBOX,
    //   baseUrl: "test",
    //   primaryKey: "1deae1372c5c45ed946ab8d1bde2a5d5",
    //   userId: "fa1ca5d2-0da3-4d88-b9b2-4c9b5562cc2b",
    //   userSecret: "4235033426974670b69dc5313c1bd535"
    // };

    const { Collections } = momo.create({
      callbackHost: "chocolate-cosmos.web.app"
    });

    const collections = Collections({
      userSecret: "4235033426974670b69dc5313c1bd535",
      userId: "fa1ca5d2-0da3-4d88-b9b2-4c9b5562cc2b",
      primaryKey: "1deae1372c5c45ed946ab8d1bde2a5d5"
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

        // Get account balance
        return collections.getBalance();
      })
      .then(accountBalance => console.log({ accountBalance }))
      .catch(error => {
        console.log(error);
      });
  })
