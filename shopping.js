
//increasing Quantity of product and price 
const plusBtn1 = document.getElementById("plusBtn1");
plusBtn1.addEventListener("click", function(){
  increasingQuantity("input-QuantityP1");
  updatePriceByQuantity("input-QuantityP1", 1219, "mobilePrice");

  //update subtotal depend of first product
  const subtotal = document.getElementById("subTotal").innerText;
  const subtotalNumber= parseFloat(subtotal);
  const updateSubtotal = 1219 + subtotalNumber;
  document.getElementById("subTotal").innerText = updateSubtotal;

  //update total depend of first product
  const total = document.getElementById("Total").innerText;
  const totalNumber= parseFloat(total);
  const updateTotal = 1219 + totalNumber;
  document.getElementById("Total").innerText = updateTotal;
    
})
const plusBtn2 = document.getElementById("plusBtn2");
plusBtn2.addEventListener("click", function(){
    increasingQuantity("input-QuantityP2");
    updatePriceByQuantity("input-QuantityP2", 59, "casePrice");

    //update subtotal depend of second product 
  const subtotal = document.getElementById("subTotal").innerText;
  const subtotalNumber= parseFloat(subtotal);
  const updateSubtotal = 59 + subtotalNumber;
  document.getElementById("subTotal").innerText = updateSubtotal;

  //update total depend of second product
  const total = document.getElementById("Total").innerText;
  const totalNumber= parseFloat(total);
  const updateTotal = 59 + totalNumber;
  document.getElementById("Total").innerText = updateTotal;
})



// decreasing Quantity of product and price
const minusBtn1 = document.getElementById("minusBtn1");
minusBtn1.addEventListener("click", function(){
    decreasingQuantity("input-QuantityP1");
    updatePriceByQuantity("input-QuantityP1", 1219, "mobilePrice");

    
  // decrease subtotal depend of first product
  const subtotal = document.getElementById("subTotal").innerText;
  const subtotalNumber= parseFloat(subtotal);
  const updateSubtotal = subtotalNumber - 1219;
  document.getElementById("subTotal").innerText = updateSubtotal;

  // decrease total depend of first product
  const total = document.getElementById("Total").innerText;
  const totalNumber= parseFloat(total);
  const updateTotal = subtotalNumber - 1219;
  document.getElementById("Total").innerText = updateTotal;
    
})
const minusBtn2 = document.getElementById("minusBtn2");
minusBtn2.addEventListener("click", function(){
    decreasingQuantity("input-QuantityP2");
    updatePriceByQuantity("input-QuantityP2", 59, "casePrice");

    // decrease subtotal depend of second product
  const subtotal = document.getElementById("subTotal").innerText;
  const subtotalNumber= parseFloat(subtotal);
  const updateSubtotal =  subtotalNumber - 59;
  document.getElementById("subTotal").innerText = updateSubtotal;

  // decrease total depend of second product
  const total = document.getElementById("Total").innerText;
  const totalNumber= parseFloat(total);
  const updateTotal = totalNumber - 59;
  document.getElementById("Total").innerText = updateTotal;
})



// function for increasing Quantity of product
function increasingQuantity(id){
    const Quantity = document.getElementById(id).value;
   const currentQuantity  = parseFloat(Quantity);
   const updateQuantity = currentQuantity + 1 ;
   document.getElementById(id).value = updateQuantity;
   
   

}
// function for decreasing Quantity of product
function decreasingQuantity(id){
    const currentQuantity = parseFloat(document.getElementById(id).value);
     if (currentQuantity > 0) {
        const updateQuantity = currentQuantity - 1 ;
        document.getElementById(id).value = updateQuantity;
        
    }
}
//  //function for product price depending on the Quantity

 function updatePriceByQuantity(currentQuantityInnerTextID, pricePerProduct, priceInnerTextID){
    const currentQntNumber = document.getElementById(currentQuantityInnerTextID).value;
    const currentQntPrice = currentQntNumber * pricePerProduct;
    document.getElementById(priceInnerTextID).innerText = currentQntPrice;
    
    

}



 
