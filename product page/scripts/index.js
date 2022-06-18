let product = {
    "productName": "cycle",
    "offerPrice": "210",
    "actualPrice": "300",
    "discount": "90",
    "shipForm": "xyz",
    "shipToOmit": ["india","USA"],
    "imageUrl": "/jksdhfkjdlfkzd"
}

localStorage.setItem("singleProductView", JSON.stringify(product) )

let data = JSON.parse(localStorage.getItem("singleProductView"));
console.log(data)


document.getElementsByClassName("productName").innerText = data.productName;