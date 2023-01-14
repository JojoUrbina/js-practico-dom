const $input1=document.querySelector('#number1');
const $input2=document.querySelector('#number2');
const $btnCalcular=document.querySelector('#calcular');
const $resultado=document.querySelector('#resultado');
$btnCalcular.addEventListener("click",calcular)
function calcular(){
    let resultadoSuma=Number(($input1.value))+(Number($input2.value));
    $resultado.innerText= "funciona, tu resultado es "+ resultadoSuma;
    console.log("funciona, tu resultado es "+ resultadoSuma)
}
