var methodData = [{ supportedMethods: ['visa', 'mastercard'] }];
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
}

var request = new PaymentRequest(methodData, details);
var btn = document.getElementById('btn');

btn.addEventListener('click', function () {
  request.show().then(function (PaymentResponse) {
    paymentResponse.complete('success');
  }).catch(function (err) {
    console.error('ERROR', err.message);
  });
}, false);

var paymentTimeout = window.setTimeout(function () {
  window.clearTimeout(paymentTimeout);
  request.abort().then(function () {
    console.log('Payment Timeout');
  }).catch(function () {
    console.log('Unable');
  });
}, 20 * 60 * 1000);