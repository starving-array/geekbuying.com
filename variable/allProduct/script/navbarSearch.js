// // console.log("master", masterRawAllProduct);
// import {navTopBarExport} from "../components/chunks.js";

// document.getElementById("navbar").innerHTML = navTopBarExport();

let searchInputIn = document.getElementById("searchNav");
searchInputIn.addEventListener("input", function () {
  searchInInputDowScroll();
});

function searchInInputDowScroll() {
  let inputKeyWord = document.getElementById("searchNav");
  let searchScrollView = masterRawAllProduct.filter(function (elem) {
    if (elem.productName.includes(inputKeyWord.value)) {
      return elem;
    }
  });
  console.log(searchScrollView);
  displayNav(searchScrollView);
}

function displayNav(data) {
  let container = document.getElementById("searchDwonPop");
  container.innerHTML = null;
  data.forEach(function ({
    productName,
    currencySign,
    offerPrice,
    actualPrice,
    discount,
    shipToOmit,
    imageUrl,
    imageReview,
    review_num,
    freeShip,
    productId,
  }) {
    let boxDiv = document.createElement("div");
    boxDiv.setAttribute("class", "searchDwonPopBoxIn");

    let left = document.createElement("div");
    let image = document.createElement("img");
    image.src = imageUrl;
    left.append(image);

    let right = document.createElement("div");
    let title = document.createElement("span");
    title.innerText = productName;
    let price = document.createElement("span");
    price.innerText = `Price: ${offerPrice}`;
    right.append(title, price);

    boxDiv.append(left, right);
    container.append(boxDiv);

    boxDiv.addEventListener("click", function () {
      dataPassToDetail(
        productName,
        currencySign,
        offerPrice,
        actualPrice,
        discount,
        shipToOmit,
        imageUrl,
        imageReview,
        review_num,
        freeShip,
        productId
      );
    });
  });
}
// dataPassToDetail
class Product {
    constructor(
      productName,
      currencySign,
      offerPrice,
      actualPrice,
      discount,
      shipToOmit,
      imageUrl,
      review_num,
      freeShip,
      productId,
      shipto
    ) {
      this.productName = productName;
      this.currencySign = currencySign;
      this.offerPrice = offerPrice;
      this.actualPrice = actualPrice;
      this.discount = discount;
      this.shipToOmit = shipToOmit; // it's array of countries
      this.imageUrl = imageUrl;
      this.review_num = review_num;
      this.freeShip = freeShip;
      this.productId = productId;
      this.shipto = shipto;
    }
  }
  
  function dataPassToDetail(
    productName,
    currencySign,
    offerPrice,
    actualPrice,
    discount,
    shipToOmit,
    imageUrl,
    review_num,
    freeShip,
    productId
  ) {
    let shipto = document.getElementById("shipToNavImg");
    let newObj = new Product(
      productName,
      currencySign,
      offerPrice,
      actualPrice,
      discount,
      shipToOmit,
      imageUrl,
      review_num,
      freeShip,
      productId,
      shipto.alt
    );
    //   console.log(newObj)
    // localStore
    localStorage.setItem("dataToLocalDetail", JSON.stringify(newObj));
    //
    //   window.location.href= ""
  }
  

  document.getElementById("logoNav").addEventListener("click", function () {
    window.location.href = "/geekbuying.com/index.html";
  });