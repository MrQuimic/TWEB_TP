
consultasbtn.addEventListener("click", function() {
  let form = document.getElementById("consultasfrm");
  if (form.checkValidity()) {

    consultasForm();

  }

  
});

function consultasForm(){

     //window.alert("Dados inseridos corretamente!");
      document.getElementById('consultasfrm').style.display='none';
      
      document.getElementById("sucessoconsulta").style.display='block';  


      /*
          var name = document.getElementById('pnome').value;
    var surname = document.getElementById('ultimonome').value;
    var genero = document.getElementByName('genero').value;
    var email = document.getElementsById('email').value;
    var idade = document.getElementsById('idade').value;
    var CC = document.getElementsById('cc').value;
    var morada = document.getElementsById('morada').value;
    var medico = document.getElementsByName('medicos').value;
    var horario = document.getElementsByName('horario').value;
    var comentarios = document.getElementById('mensagem').value;
    
    if ((!name) || (!surname) ||  (!genero) || (!email) || (!idade) || (!CC) || (!morada) || (!medico) || (!horario))
    {
      window.alert("Não inseriu todos os dados!");      
      document.querySelector('form').style.display='none';
      document.getElementsById('insucesso').style.display='block';
    }
    else{
      window.alert("Dados inseridos corretamente!");
      document.querySelector('form').style.display='none';
      document.getElementsById('sucesso').style.display='block';
    }*/
  
  }
