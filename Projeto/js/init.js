(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space




function ajustaData(v) {
  v.value = v.value.replace(/\D/g, "");
  //Adiciona a barra entre o dia e o mês
  v.value = v.value.replace(/^(\d{2})(\d)/, "$1/$2");
  //Adiciona a barra entre o mês e o ano
  v.value = v.value.replace(/(\d{2})(\d)/, "$1/$2");
}

function ajustaCpf(v) {
  v.value = v.value.replace(/\D/g, "");
  //Adiciona ponto após os três primeiros números
  v.value = v.value.replace(/^(\d{3})(\d)/, "$1.$2");
  //Adiciona ponto após os seis primeiros números
  v.value = v.value.replace(/(\d{3})(\d)/, "$1.$2");
  //Adiciona o hífen antes dos últimos 2 caracteres
  v.value = v.value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

function ajustaTelefone(v) {
  v.value = v.value.replace(/\D/g, "");
  //Adiciona parênteses no DDD
  v.value = v.value.replace(/^(\d\d)(\d)/g, "($1) $2");
  //Adiciona hífen no número do telefone
  v.value = v.value.replace(/(\d{5})(\d)/, "$1-$2");
}

function ajustaFixo(v) {
  v.value = v.value.replace(/\D/g, "");
  //Adiciona parênteses no DDD
  v.value = v.value.replace(/^(\d\d)(\d)/g, "($1) $2");
  //Adiciona hífen no número do telefone
  v.value = v.value.replace(/(\d{4})(\d)/, "$1-$2");
}

function cpfLogin(v) {
  v.value = v.value.replace(/\D/g, "");
  //Adiciona ponto após os três primeiros números
  v.value = v.value.replace(/^(\d{3})(\d)/, "$1.$2");
  //Adiciona ponto após os seis primeiros números
  v.value = v.value.replace(/(\d{3})(\d)/, "$1.$2");
  //Adiciona o hífen antes dos últimos 2 caracteres
  v.value = v.value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

function ajustaLetras(v) {
  // Remove os caracteres não alfabéticos
  v.value = v.value.replace(/[0-9]/g, "");
}

function ErroTel(v) {
  if (v.value.length < 8) {
    alert("Telefone tem de ter 8 dígitos!");
  } else if (v.value.length > 8) {
    alert("Telefone só pode ter 8 dígitos");
  }
}


function validarCPF(cpf) {
  cpf = cpf.value.replace(/[^\d]+/g, '');
  if (cpf == '') return false;
  // Elimina CPFs invalidos conhecidos	
  if (cpf.length != 11 ||
    cpf == "00000000000" ||
    cpf == "11111111111" ||
    cpf == "22222222222" ||
    cpf == "33333333333" ||
    cpf == "44444444444" ||
    cpf == "55555555555" ||
    cpf == "66666666666" ||
    cpf == "77777777777" ||
    cpf == "88888888888" ||
    cpf == "99999999999")
    confirm("CPF inválido")
  return false;
  // Valida 1o digito	
  add = 0;
  for (i = 0; i < 9; i++)
    add += parseInt(cpf.charAt(i)) * (10 - i);
  rev = 11 - (add % 11);
  if (rev == 10 || rev == 11)
    rev = 0;
  if (rev != parseInt(cpf.charAt(9)))
    return false;
  // Valida 2o digito	
  add = 0;
  for (i = 0; i < 10; i++)
    add += parseInt(cpf.charAt(i)) * (11 - i);
  rev = 11 - (add % 11);
  if (rev == 10 || rev == 11)
    rev = 0;
  if (rev != parseInt(cpf.charAt(10)))
    return false;
  return true;
}




// msg senha e confirmar senha

$(function () {
  $("#cadastroB").click(function () {
    var senha = $("#password").val();
    var senha2 = $("#password1").val();
    if (senha != senha2) {
      event.preventDefault();
      confirm("As senhas não são iguais!");
    }
    msg = "";

    if ($("#loginC").val() == "") {
      msg = "Informe um login válido";

    }
    if ($("#password").val() == "") {

      msg += "\n Informe uma senha válida";

    }
    if ($("#nomeC").val() == "") {

      msg += "\n Informe o seu nome completo";

    }
    if ($("#nomeM").val() == "") {

      msg += "\n Informe o nome da sua mãe";

    }
    if ($("#datemax").val() == "") {

      msg += "\n Informe sua data de Nascimento";

    }

    if ($("#fixo").val() == "") {

      msg += "\n Informe um telefone válido ";

    }

    if ($("#telefone").val() == "") {

      msg += "\n Informe um celular válido";

    }

    if ($("#cpf").val() == "") {

      msg += "\n Informe um CPF válido";

    }


    if ($("#endereco").val() == "") {

      msg += "\n Informe um endereço válido";

    }

    if ($("#Login").val() == "") {

      msg += "\n Informe um login válido ";

    }

   



    if (msg.length > 0) {

      confirm(msg);
      return false;
    }

  });
});



