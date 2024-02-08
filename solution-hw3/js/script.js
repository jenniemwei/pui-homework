let allGlazing=[
    {
        name:"Keep Original",
        price: 0,
    },
    {
        name:"Sugar Milk",
        price: 0,
    },
    {
        name:"Vanilla Milk",
        price: .5,
    },
    {
        name:"Double Chocolate",
        price: 1.5,
    },
]

let allPackSize=[
    {
        name:"1",
        price: 1,
    },
    {
        name:"3",
        price: 3,
    },
    {
        name:"6",
        price: 5,
    },
    {
        name:"12",
        price: 10,
    },
]

let glazeSelect= document.getElementById("glazingOptions")
let packSelect= document.getElementById("packOptions")
let detailPrice = document.querySelector('#detail-price');
const basePrice= 2.49
let rollPrice=basePrice
let packSize=1
detailPrice.innerText= "$"+ basePrice



for (let i=0; i<4; i++){
    let glazeOption= document.createElement("option");
    glazeOption.textContent=allGlazing[i].name
    glazeOption.value=allGlazing[i].price
    glazeSelect.appendChild(glazeOption)

    let packOption=document.createElement("option");
    packOption.textContent=allPackSize[i].name
    packOption.value=allPackSize[i].price
    packSelect.appendChild(packOption)   
}

  
function glazingChange(glazeElement){
    const priceChange=glazeElement.value;
    rollPrice=basePrice+parseFloat(priceChange)
    detailPrice.innerText= "$"+(rollPrice*packSize).toFixed(2)
}

function packSizeChange(packElement){
   packSize=packElement.value;
   detailPrice.innerText= "$"+(rollPrice*packSize).toFixed(2)
}
