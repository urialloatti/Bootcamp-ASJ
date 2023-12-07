const cartCounter = document.getElementById("cart-count");
const productsContainer = document.getElementById("products-container");
const productsCountElement = document.getElementById("products-count");
const subTotalPriceElement = document.getElementById("sub-total-price");
const totalPriceElement = document.getElementById("total-price");
const confirmPurchaseElement = document.getElementById("confirm-purchase");

let dellButtons;
let currentCart = [];
let productsCount = 0;
let subTotalPrice = 0;
let totalPrice = 0;

const loadCartIndicator = (currentCart) => {
    let count = 0;
    for (prod of currentCart) {
        count += parseInt(prod.quant);
        cartCounter.style.display = "block";
    }
    cartCounter.innerText = count;
}


const confirmPurchase = () => {
    confirmPurchaseElement.addEventListener("click", () => {
        let flag = confirm("Está seguro de realizar la compra?")
        if(flag) {
            alert("Compra realizada!");
            localStorage.removeItem("product");
        }
        loadPage();
    }); 
}

function loadPage() {
    try {
        currentCart = JSON.parse(localStorage.getItem("product"));
        currentCart[0];
        cartCounter.style.display = "block";
    } catch(err) {
        currentCart = [];
    };
    loadCartIndicator(currentCart);
    loadCart(currentCart);
    loadCartSummary(currentCart);
    loadDellButtons();
}


function loadCart(cart) {
    productsContainer.innerHTML = "";
    for (currProduct of cart) {
        loadProduct(currProduct);
    }
}


function loadProduct(product) {
    productsContainer.innerHTML += 
    `
    <div class="col-12">
        <div class="row mx-2 mb-2 bg-dark-subtle text-emphasis-dark rounded py-3">
            <div class="col-3">
                <img src="https://dummyimage.com/600x400/000/fff&text=Product" alt="${product.prodName}" class="rounded">
            </div>
            <div class="col">
                <div class="row">
                    <div class="col-12">
                        <p>${product.prodName} - ${product.color}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <button class="btn btn-secondary del-btn"id="${product.id}">Delete</button>
                    </div>
                </div>
            </div>
            <div class="col-3 text-end">
                <p><strong>$</strong>${product.productPrice}</p>
                <p>x${product.quant}</p>
            </div>
        </div>
    </div>
    `;
}


function loadDellButtons() {
    dellButtons = document.getElementsByClassName("del-btn");

    for (btn of dellButtons) {
        let btnId = btn.id;
        btn.addEventListener("click", () => {
            currentCart = currentCart.filter(prod => prod.id != btnId);
            loadCart(currentCart);
            localStorage.setItem("product", JSON.stringify(currentCart));
            loadPage();
        })
    }

}

function loadCartSummary(products) {
    let productsCount = 0;
    let subTotalPrice = 0;
    let totalPrice = 0;

    for (prod of products) {
        subTotalPrice += parseInt(prod.productPrice);
        productsCount += parseInt(prod.quant);
    }
    totalPrice = subTotalPrice;
    productsCountElement.innerText = productsCount;
    subTotalPriceElement.innerText = subTotalPrice;
    totalPriceElement.innerText = totalPrice;
    
    confirmPurchase();
}


loadPage();




