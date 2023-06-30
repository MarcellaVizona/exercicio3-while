let numero =  parseInt(prompt('Digite um numero inteiro e positivo e te mostrarei a contagem até o mesmo'));
let contador = 1;
let mensagem = "contagem";

if(isNaN(numero)||numero<=0 ){
    alert("Este número não é valido");
}else{
     while(contador <= numero ){
        mensagem = mensagem + ' ' + contador;
        contador++
    }
     mensagem = mensagem + ' acabou';
     alert(mensagem);
}



