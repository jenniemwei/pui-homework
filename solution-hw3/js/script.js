let allGlazing = {
  "Keep Original": 0,
  "Sugar Milk": 0,
  "Vanilla Milk": 0.5,
  "Double Chocolate": 1.5,
};

let allPackSize = {
  1: 1,
  3: 3,
  6: 5,
  12: 10,
};

let glazeSelect = document.getElementById("glazingOptions");
let packSelect = document.getElementById("packOptions");
let detailPrice = document.querySelector("#detail-price");
const basePrice = 2.49;
let rollPrice = basePrice;
let packSize = 1;
detailPrice.innerText = "$" + basePrice;

for (const [key, value] of Object.entries(allGlazing))  {
  let glazeOption = document.createElement("option");
  glazeOption.textContent = key;
  glazeOption.value = value;
  glazeSelect.appendChild(glazeOption);
}
for (const [key, value] of Object.entries(allPackSize))  {
  let packOption = document.createElement("option");
  packOption.textContent = key;
  packOption.value = value;
  packSelect.appendChild(packOption);
}

function glazingChange(glazeElement) {
  const priceChange = glazeElement.value;
  rollPrice = basePrice + parseFloat(priceChange);
  detailPrice.innerText = "$" + (rollPrice * packSize).toFixed(2);
}

function packSizeChange(packElement) {
  packSize = packElement.value;
  detailPrice.innerText = "$" + (rollPrice * packSize).toFixed(2);
}
