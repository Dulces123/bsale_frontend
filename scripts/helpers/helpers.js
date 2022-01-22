const helpers = (() => {
  function resultMessage(number){
    if(number === 0) return 'No se encontraron productos!';
    else if (number == 1) return '1 producto encontrado!';
    else if (number >= 1) return `${number} productos encontrados!`
  }

  function priceWithDiscount(price, discount){
    return price * (1 - discount/100);
  }
  
  function formatPrice(price){
    return `$${price.toFixed(2)}`
  }

  function totalAmount(element){
    const amount = [...document.querySelectorAll(element)].map(p => parseInt(p.innerText.replace("$",""))).reduce((o,n) => o + n,0)
    document.querySelector("#total").innerText = `Total: $${amount}.00`;
  }

  function quantityMessage(quantity){
    if(quantity == 0){
      return "0 items seleccionados 😢";
    }else if(quantity == 1){
      return `${quantity} item seleccionado 🥳`;
    }else{
      return `${quantity} items seleccionados 🥳`;
    }
  }

  return {
    resultMessage,
    priceWithDiscount,
    formatPrice,
    quantityMessage,
    totalAmount
  }
})();

export default helpers;