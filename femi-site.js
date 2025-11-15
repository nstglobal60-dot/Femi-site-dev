
// PAYSTACK CHECKOUT
const drawerCheckout = document.getElementById("drawer-checkout");
drawerCheckout.addEventListener('click', () => {
    if(cart.length === 0) { alert('Your cart is empty!'); return; }
    const email = prompt('Enter your email for payment:');
    if(!email) return;

    let totalAmount = cart.reduce((sum, item) => sum + item.price, 0) * 100; // in kobo

    var handler = PaystackPop.setup({
        key: 'REPLACE_WITH_YOUR_PUBLIC_KEY', // <-- Replace with your Paystack public key
        email: email,
        amount: totalAmount,
        currency: 'NGN',
        ref: '' + Math.floor((Math.random() * 1000000000) + 1),
        onClose: function(){
            alert('Payment cancelled');
        },
        callback: function(response){
            alert('Payment successful! Reference: ' + response.reference);
            cart = [];
            updateCart();
        }
    });
    handler.openIframe();
});
