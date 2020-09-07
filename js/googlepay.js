const paymentsClient =
  new google.payments.api.PaymentsClient({environment: 'TEST'});
  //2
  const tokenizationSpec = {
  type: 'PAYMENT_GATEWAY',
  parameters: {
    gateway: 'example',
    gatewayMerchantId: 'gatewayMerchantId'
  }
};
// 3333
const cardPaymentMethod = {
  type: 'CARD',
  tokenizationSpecification: tokenizationSpec,
  parameters: {
    allowedCardNetworks: ['VISA','AMEX'],
    allowedAuthMethods:
      ['PAN_ONLY','CRYPTOGRAM_3DS'],
    billingAddressRequired: true,
    billingAddressParameters: {
      format: 'FULL',
      phoneNumberRequired: true
    }
  }
};
//444444
const gPayClientConfiguration = {
  apiVersion: 2,
  apiVersionMinor: 0,
  allowedPaymentMethods: [cardPaymentMethod]
};

gPayClient.isReadyToPay(gPayClientConfiguration)
  .then(function(response) {
      if(response.result) {
        // add a Google Pay button
        gPayClient.createButton({
  // defaults to black if default or omitted
  buttonColor: 'default',
  // defaults to long if omitted
  buttonType: 'long',
  onClick: onGooglePaymentsButtonClicked
});
      }
    }).catch(function(err) {
      // log error in developer console
    });
  //555555
  const paymentDataRequest = {
    allowedPaymentMethods: ['CARD', 'TOKENIZED_CARD'],
    cardRequirements: {
      allowedCardNetworks: ['AMEX', 'DISCOVER', 'JCB', 'MASTERCARD', 'VISA']
    },
   paymentMethodTokenizationParameters: {
      tokenizationType: 'PAYMENT_GATEWAY',
      parameters: {'gateway':'example','gatewayMerchantId':'abc123'}
    }
  };
  //66666666666
  paymentDataRequest.transactionInfo = {
    currencyCode: 'USD',
    totalPriceStatus: 'FINAL',
    totalPrice: '12.34'
  };
  //77777777
  const paymentToken = data.paymentMethodToken;
askProcessorToCharge(paymentToken, '12.34');

// const baseRequest = {
//   apiVersion: 2,
//   apiVersionMinor: 0
// };
// const tokenizationSpecification = {
//   type: 'PAYMENT_GATEWAY',
//   parameters: {
//     "gateway": "payu"
//     "gatewayMerchantId": "YOUR_GATEWAY_MERCHANT_ID"
//     }
// };
// const allowedCardNetworks = ["MASTERCARD", "VISA"];
// const allowedCardAuthMethods = ["PAN_ONLY", "CRYPTOGRAM_3DS"];
// // 444444
// const baseCardPaymentMethod = {
//   type: 'CARD',
//   parameters: {
//     allowedAuthMethods: allowedCardAuthMethods,
//     allowedCardNetworks: allowedCardNetworks
//   }
// };
// const cardPaymentMethod = Object.assign(
//   {tokenizationSpecification: tokenizationSpecification},
//   baseCardPaymentMethod
// );
// // 555555
// const paymentsClient =
//     new google.payments.api.PaymentsClient({environment: 'TEST'});
// // 66
// const isReadyToPayRequest = Object.assign({}, baseRequest);
// isReadyToPayRequest.allowedPaymentMethods = [baseCardPaymentMethod];
//
// paymentsClient.isReadyToPay(isReadyToPayRequest)
//     .then(function(response) {
//       if (response.result) {
//         // add a Google Pay payment button
//         // 77777777
//         const button =
//             paymentsClient.createButton({onClick: () => console.log('TODO: click handler')});
//         document.getElementById('container').appendChild(button);
//       }
//     })
//     .catch(function(err) {
//       // show error in developer console for debugging
//       console.error(err);
//     });
// // 8888888 next to 77
// const paymentDataRequest = Object.assign({}, baseRequest);
// paymentDataRequest.allowedPaymentMethods = [cardPaymentMethod];
// paymentDataRequest.transactionInfo = {
//   totalPriceStatus: 'FINAL',
//   totalPrice: '50',
//   currencyCode: 'USD',
//   countryCode: 'US'
// };
// // this will be given
// paymentDataRequest.merchantInfo = {
//   merchantName: 'Example Merchant'
//   merchantId: '12345678901234567890'
// };
// // 999999
// paymentsClient.loadPaymentData(paymentDataRequest).then(function(paymentData){
//   // if using gateway tokenization, pass this token without modification
//   paymentToken = paymentData.paymentMethodData.tokenizationData.token;
// }).catch(function(err){
//   // show error in developer console for debugging
//   console.error(err);
// });
