

let glazeSelect = document.getElementById("glazingOptions");
let packSelect = document.getElementById("packOptions");
let detailPrice = document.getElementById("detail-price");

let packSize = 1;


// populate options
for (const [key, value] of Object.entries(allGlazing)) {
  let glazeOption = document.createElement("option");
  glazeOption.textContent = key;
  glazeOption.value = value;
  glazeSelect.appendChild(glazeOption);
}
for (const [key, value] of Object.entries(allPackSize)) {
  let packOption = document.createElement("option");
  packOption.textContent = key;
  packOption.value = value;
  packSelect.appendChild(packOption);
}

// detail page
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const roll = params.get("roll");

let basePrice = rolls[roll]["basePrice"];
let rollPrice = basePrice;
detailPrice.innerText = "$" + basePrice;

let header = document.getElementById("detail-header");
header.innerText = `${roll} Cinnamon Roll`;

let detailImage = document.getElementById("detail-image");
detailImage.src = `../assets/products/${rolls[roll]["imageFile"]}`;
detailImage.alt=`${roll} Cinnamon Roll Image`

// select changes
//updates roll price by adding glaze price to base
//then updates displayed price
function glazingChange(glazeElement) {
  const priceChange = glazeElement.value;
  console.log(basePrice)
  rollPrice = basePrice + parseFloat(priceChange);
  detailPrice.innerText = "$" + (rollPrice * packSize).toFixed(2);
}
//updates displayed price multiplying by pack size value
function packSizeChange(packElement) {
  packSize = packElement.value;
  detailPrice.innerText = "$" + (rollPrice * packSize).toFixed(2);
}


retrieveFromLocalStorage(); //gets initial stored cart when the page reloads


//adds roll object to cart array
function addToCart() {
  const currGlaze = glazeSelect.options[glazeSelect.selectedIndex].innerText;
  const currPack = packSelect.options[packSelect.selectedIndex].innerText;
  const newRoll = new Roll(roll, currGlaze, currPack, basePrice);
  cart.push(newRoll);
  saveToLocalStorage();
  retrieveFromLocalStorage();
}


function saveToLocalStorage(){
  const cartString=JSON.stringify(cart);
  localStorage.setItem('storedRollCart', cartString);
}




