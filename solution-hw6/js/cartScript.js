//populate cart page dom w rolls from cart array
  let cartContainer = document.getElementById("cart-container");
  let firstChild = cartContainer.firstChild;
  for (const roll of cart) {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    const rollImage = rolls[roll.type]["imageFile"];
    const rollBasePrice = rolls[roll.type]["basePrice"];
    const rollsPrice = (
      (rollBasePrice + allGlazing[roll.glazing]) *
      allPackSize[roll.size]
    ).toFixed(2);

    cartItem.innerHTML = `
<div class="item-info">
  <img class="cart-image" src="../assets/products/${rollImage}" alt="${roll.type} cinnamon roll image">
  <div class="features">
    <p id="roll-name">${roll.type} Cinnamon Roll</p>
    <p id="roll-glaze">Glazing: ${roll.glazing}</p>
    <p id="pack-size">Pack Size: ${roll.size}</p>
  </div>

  <p class="price">$ ${rollsPrice}</p>
</div>

<h3 class="idElem" onclick="removeFromCart(this)">Remove</h3>`;

    cartContainer.insertBefore(cartItem, firstChild);
  }

calcTotalPrice() //initial cart total price


setItemId() //set the initial ids/indexes


//sets all the item ids so they match their new cart index
function setItemId(){
    const allItems=document.querySelectorAll(".idElem")
    for (i=0; i<allItems.length; i++){
        allItems[i].id=`${i}`
    }
}
//updates total cart price by geting price from the dom
function calcTotalPrice(){
    let cartTotal=0;
    const allPrices=document.querySelectorAll(".price")
    for (const price of allPrices){
        let rollPrice= parseFloat((price.innerText).substring(1)) //removes dollar sign to get numerical price
        cartTotal+=rollPrice
    }
    document.getElementById("cart-total").innerText = `$ ${(cartTotal).toFixed(2)}`;
}


//removes items from cart page and cart array
function removeFromCart(clickedItem) {
  const itemId=clickedItem.id
  cart.splice(itemId,1)
  let cartItem = clickedItem.parentNode;
  cartItem.remove()
  setItemId()
  saveToLocalStorage()
  calcTotalPrice()
  updateCartOval()
}
