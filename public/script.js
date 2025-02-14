function onGooglePayLoaded() {
    const paymentsClient = new google.payments.api.PaymentsClient({ environment: 'TEST' });

    const button = paymentsClient.createButton({
        onClick: onGooglePayButtonClick
    });

    document.getElementById('gpay-button').appendChild(button);
}

function onGooglePayButtonClick() {
    const paymentDataRequest = {
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [{
            type: 'UPI',
            parameters: {
                pa: '9732012478.eazypay@icici', // Replace with your actual UPI ID
                pn: 'Roy Ply Payment',
                mc: '', // Optional merchant code
                tr: '123456789', // Unique transaction ID
                tn: 'Payment for Roy Ply Products',
                url: 'https://roy-ply-payment.vercel.app'
            }
        }]
    };

    const paymentsClient = new google.payments.api.PaymentsClient({ environment: 'TEST' });
    paymentsClient.loadPaymentData(paymentDataRequest)
        .then(paymentData => {
            console.log('Payment successful!', paymentData);
            alert('Payment successful!');
        })
        .catch(error => {
            console.error('Payment failed:', error);
            alert('Payment failed. Try again.');
        });
}

// Load Google Pay on page load
window.onload = onGooglePayLoaded;
