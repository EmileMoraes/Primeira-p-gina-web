document.getElementById("enviar").addEventListener("click",validaFormulario)


function validaFormulario(){

  if(document.getElementById("nome").value != "" &&
     document.getElementById("email").value != "" &&
     document.getElementById("telefone").value != "" ){

    alert("Prontinho! você receberá as novidades por email.")
  }else{
    alert("Por favor, preencha os campos nome e email.")
  }
}









//operador and no js - &&
//se os campos de nome e email estiverem preenchidos
  //envie os dados
//senao
 // peça para o usuario que preencha os campos nome e email