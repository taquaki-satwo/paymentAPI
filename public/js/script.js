window.onload = function () {
  var $btn = document.getElementById('btn');
  btn.addEventListener('click', onBuyClicked, false);
}

function onBuyClicked() {
  if (!window.PaymentRequest) {
    location.href = '/checkout';
    return;
  }

  var supportedInstruments = [{
    supportedMethods: ['basic-card'],
    data: {
      supportedNetworks: [
        'visa', 'mastercard', 'amex', 'discover',
        'diners', 'jcb', 'unionpay'
      ]
    }
  }];

  var details = {
    displayItems: [
      {
        label: '通常商品',
        amount: { currency: 'YEN', value: '10000' }
      },
      {
        label: 'クーポン',
        amount: { currency: 'YEN', value: '-2000' }
      }
    ],
    total: {
      label: '合計',
      amount: { currency: 'YEN', value: '8000' }
    }
  };

  var request = new PaymentRequest(supportedInstruments, details);

  request.show();
}
