//roll constructor
class Roll {
  constructor(rollType, rollGlazing, packSize, basePrice) {
    this.type = rollType;
    this.glazing = rollGlazing;
    this.size = packSize;
    this.basePrice = basePrice;
  }
}

//cart array
let cart = [];

//storage retrieval
function retrieveFromLocalStorage() {
  const cartString = localStorage.getItem("storedRollCart");
  if (cartString != null) {
    cart = JSON.parse(cartString);
  }
  console.log(cart);
}
retrieveFromLocalStorage(); //gets initial stored cart when the page reloads

function saveToLocalStorage(){
    const cartString=JSON.stringify(cart);
    localStorage.setItem('storedRollCart', cartString);
    console.log(cart);
  }
  
//updating nav bar cart oval based on cart count
function updateCartOval() {
  let cartOval = document.getElementById("oval");
  cartOval.innerText = cart.length;
}

updateCartOval(); //updates the red oval in the nav bar upon opening a page