/*function clientePedido(numeroPedido){
    if(numeroPedido === 1){
      console.log('Pizza Calabresa');
    } else if(numeroPedido === 2){
      console.log('Pizza de Quatro Queijos');
    } else if(numeroPedido === 3){
      console.log('Pizza de Frango com Catupiry');
    } else if(numeroPedido === 4){
      console.log('Pizza de Brigadeiro');
    } else {
      console.log('Número de pedido inválido!');
    }
}

clientePedido(4);*/

/*function clientePedido(numeroPedido){
    if(numeroPedido === 1){
      console.log('Pizza de Calabresa');
    } else if(numeroPedido === 2){
      console.log('Pizza de Quatro Queijos');
    } else if(numeroPedido === 3){
      console.log('Pizza de Frango com Catupiry');
    } else if(numeroPedido === 4){
      console.log('Pizza de Brigadeiro');
    } else {
      console.log('Número de pedido inválido!');
    }

    return
  }
  
clientePedido(1);*/

function mediaDosNumeros(arrayNumeros){
    let soma = 0;
    for(let i = 0; arrayNumeros.length > i; i++){
        soma += arrayNumeros[i];
    }
    let media = (soma / arrayNumeros.length);
    return media;
}

console.log(mediaDosNumeros([2, 4, 8]));