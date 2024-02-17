
// Select
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
let detailPrice = document.getElementById("detail-price");
let basePrice = 2.49;
let rollPrice = basePrice;
let packSize = 1;


// populate options
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

// select changes
function glazingChange(glazeElement) {
  const priceChange = glazeElement.value;
  rollPrice = basePrice + parseFloat(priceChange);
  detailPrice.innerText = "$" + (rollPrice * packSize).toFixed(2);
}

function packSizeChange(packElement) {
  packSize = packElement.value;
  detailPrice.innerText = "$" + (rollPrice * packSize).toFixed(2);
}

// detail page
let cart=[]
const queryString = window.location.search;
console.log('hello');
console.log(queryString);
const params = new URLSearchParams(queryString);
const roll = params.get('roll')

basePrice = rolls[roll]["basePrice"]
detailPrice.innerText="$"+basePrice


let header=document.getElementById("detail-header")
header.innerText=`${roll} Cinnamon Roll`

let detailImage=document.getElementById("detail-image")
detailImage.src =`../assets/products/${rolls[roll]["imageFile"]}`

class Roll{
  constructor(rollType, rollGlazing,packSize, basePrice){
    this.type=rollType;
    this.glazing=rollGlazing;
    this.size=packSize;
    this.basePrice=basePrice;
  }
}


function addToCart(){
  const currGlaze=glazeSelect.options[glazeSelect.selectedIndex].innerText
  const currPack=packSelect.options[packSelect.selectedIndex].innerText
  const newRoll=new Roll(roll,currGlaze, currPack, basePrice)
  cart.push(newRoll)
  console.log(cart)
}

