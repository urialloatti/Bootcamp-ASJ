const cartCounterIndex = document.getElementById("cart-count");

function loadPage() {
    let currentCart = [];
    try {
        currentCart = JSON.parse(localStorage.getItem("product"));
        currentCart[0];
        cartCounterIndex.style.display = "block";
    } catch(err) {
        currentCart = [];
    };
    let count = 0;
    
    for (prod of currentCart) {
        count += parseInt(prod.quant);
    }
    cartCounterIndex.innerText = count;
}

loadPage();