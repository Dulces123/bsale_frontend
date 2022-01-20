const helpers = (() => {
  function resultMessage(number){
    if(number === 0) return 'No se encontraron productos!';
    else if (number == 1) return '1 producto encontrado!';
    else if (number >= 1) return `${number} productos encontrados!`
  }

  return {
    resultMessage
  }
})();

export default helpers;