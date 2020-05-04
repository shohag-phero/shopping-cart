
//increasing Quantity of product
const plusBtn1 = document.getElementById("plusBtn1");
plusBtn1.addEventListener("click", function(){
  increasingQuantity("input-QuantityP1");
  updatePriceByQuantity("input-QuantityP1", 1219, "mobilePrice");
    
})
const plusBtn2 = document.getElementById("plusBtn2");
plusBtn2.addEventListener("click", function(){
    increasingQuantity("input-QuantityP2");
    updatePriceByQuantity("input-QuantityP2", 59, "casePrice");
})

// decreasing Quantity of product
const minusBtn1 = document.getElementById("minusBtn1");
minusBtn1.addEventListener("click", function(){
    decreasingQuantity("input-QuantityP1");
    updatePriceByQuantity("input-QuantityP1", 1219, "mobilePrice");
})
const minusBtn2 = document.getElementById("minusBtn2");
minusBtn2.addEventListener("click", function(){
    decreasingQuantity("input-QuantityP2");
    updatePriceByQuantity("input-QuantityP2", 59, "casePrice");
})


// function for increasing Quantity of product
function increasingQuantity(id){
   const currentQuantity  = parseFloat(document.getElementById(id).value);
   const updateQuantity = currentQuantity + 1 ;
   document.getElementById(id).value = updateQuantity;
   

}
// function for decreasing Quantity of product
function decreasingQuantity(id){
    const currentQuantity  = parseFloat(document.getElementById(id).value);
     if (currentQuantity > 0) {
        const updateQuantity = currentQuantity - 1 ;
   document.getElementById(id).value = updateQuantity;
    }
}
 //function for product price depending on the Quantity

 function updatePriceByQuantity(currentQuantityInnerTextID, pricePerProduct, priceInnerTextID){
    const currentQntNumber = document.getElementById(currentQuantityInnerTextID).value;
    const currentQntPrice = currentQntNumber * pricePerProduct;
    document.getElementById(priceInnerTextID).innerText = currentQntPrice;
    

}
//update subtotal depend on quantity of product
}


 
