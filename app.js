const button = document.getElementById('submit');

button.addEventListener('click',verifyNumber);


function verifyNumber(e){
     e.preventDefault();

     const mensagem = document.getElementById('mensagem');

     const numberA = document.getElementById('numberA');
     const numberB = document.getElementById('numberB');


     if(numberA.value < numberB.value){
          mensagem.textContent = `O numero A: ${numberA.value} é menor que o número B: ${numberB.value}`
          numberA.classList.toggle('valid');
          numberB.classList.toggle('valid')
     }else{
          mensagem.textContent = `O número A: ${numberA.value} é maior que o número B: ${numberB.value} Digite novamente`
          numberA.classList.toggle('erro');
          numberB.classList.toggle('erro')
     };

     numberA.value='';
     numberB.value='';
}