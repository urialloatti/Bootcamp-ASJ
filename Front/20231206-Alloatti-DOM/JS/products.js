const quantitySum = document.getElementById("sum");
const quantityRest = document.getElementById("rest");
const quantity = document.getElementById("quantity-selector");
const cartCounter = document.getElementById("cart-count");
const addToCart = document.getElementById("add-cart");
const productName = document.getElementById("product-name");
const productPrice = document.getElementById("product-price");
const colorSelector = document.getElementsByClassName("color-selected");
const prodImg = document.getElementById("product-img")
let currentCart = [];
let color = "White"

const modifyQuantity = (num) => {
    quantity.value = parseInt(quantity.value) + num;
}




function loadPage() {
    try {
        currentCart = JSON.parse(localStorage.getItem("product"));
        currentCart[0];
    } catch(err) {
        currentCart = [];
    };

    quantityRest.addEventListener("click", () => {
        modifyQuantity(-1);
    });

    quantitySum.addEventListener("click", () => {
        modifyQuantity(1);
    });


    loadColorPicker();

    loadCartButton();
}

function loadColorPicker() {
    for (const colorButton of colorSelector) {
        colorButton.addEventListener("click", () =>{
            color = colorButton.id;
            for (const btn of colorSelector) {
                btn.style.border = "2px black solid"
            }
            colorButton.style.border = "2px red solid"
        } )
    }
}

function loadCartButton() {
    addToCart.addEventListener("click", () => {
        currentCart.push({
            id: `del-btn-${currentCart.length}`,
            prodName: productName.innerText,
            productPrice: productPrice.innerText.replace(/[^\d.]/g, ""),
            quant: quantity.value,
            color: color,
            imgSrc: prodImg.src 
        })
        localStorage.setItem("product", JSON.stringify(currentCart));
        cartCounter.innerText = parseInt(cartCounter.innerText) + parseInt(quantity.value);
        cartCounter.style.display = "block";
        quantity.value = 1;
    })
}

loadPage();

