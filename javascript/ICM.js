function calcular() {
    let total=0 ;
  
  
  
    // Este será nuestro elemento donde poner el valor total de la division
    let resultado = document.getElementById("resultado");
    
    // Aquí  los valores traídos de los input
    // encontrados por su atributo id="" parseados a un número literal
    // con la función parseInt()
  let  pesos = parseInt(document.getElementById("peso").value);
  let  alturas =parseInt(document.getElementById("altura").value);
    
    total= (((pesos/(alturas * alturas)))*10000);/* llevo cm^2 a metro cuadrado*/
    total=Number(total.toFixed(2));
    // Aquí le decimos al elemento resultado que nos muestre el resultado de la división
    // 
   resultado.innerHTML = total;
  }


  // me falta el condicional donde me diga de acuerdo con el 
  //resultado me diga bajo peso normal el otro..y obesidad y 