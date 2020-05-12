function adicionaUsuario() { // tela de cadastro -> checa se o usuario já existe, se não: adiciona
    var usuarios = [];
    usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

    let emailCadastrado = document.getElementById("inputEmailCadastro").value;

    if(usuarios.length == 0){ //se não tiver nenhum usuario no localStorage
        const usuario = {
            nome: this.inputNome.value,
            sobrenome: this.inputSobrenome.value,
            email: this.inputEmailCadastro.value,
            senha: this.inputSenhaCadastro.value
        }

        usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

        usuarios.push(usuario);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        document.getElementById('formCadastro').action = "home.html";
        
    }else{                  //se já  tiver usuarios no localStorage
        //console.log("Já existe no minimo um usuario.");

        let  jaFoiCadastrado=false;  //iniciando uma variavel booleana para testar se o email fornecido ja foi cadastrado
        for(i=0 ; i < usuarios.length ; i++){
            if(usuarios[i].email == emailCadastrado){
                alert("Esse email ja foi cadastrado.");
                jaFoiCadastrado = true; // se der verdadeiro ele automaticamente para esse script
                document.getElementById('formCadastro').action = "login.html";
                break;
            }
        }
        if(!jaFoiCadastrado){ // se não tiver sido cadastrado ele cadastra no localStorage
            const usuario = {
                nome: this.inputNome.value,
                sobrenome: this.inputSobrenome.value,
                email: this.inputEmailCadastro.value,
                senha: this.inputSenhaCadastro.value
            }

            usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

            usuarios.push(usuario);
            localStorage.setItem("usuarios", JSON.stringify(usuarios));

            document.getElementById('formCadastro').action = "home.html";            
        }
    }

}


function checaUsuario() {    // tela de login -> checa se o usuario já existe, se não: erro
    var usuarios = [];
    usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

    var emailParaLogin = document.getElementById("inputEmail").value;


    if(usuarios.length == 0){          // se não tiver nenhum usuario no localStorage não tem como ele ser cadastrado
        alert("Email não cadastrado.");
        document.getElementById('formLogin').action = "cadastro.html";
        
    }else{
        var jaFoiCadastrado=false;  //iniciando uma variavel booleana para testar se o email fornecido ja foi cadastrado
        for(i=0 ; i < usuarios.length ; i++){
            if(usuarios[i].email == emailParaLogin){
                var indexIgual = i;
                jaFoiCadastrado = true; // se der verdadeiro ele automaticamente para esse script
                document.getElementById('formLogin').action = "home.html";
                break;
            }
        }
        if(!jaFoiCadastrado){
            alert("Email não cadastrado.");
            document.getElementById('formLogin').action = "cadastro.html";
            
        }
    }
}

function mostraUsuario() {

    var arrayUsuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
    var nomeUsuario = arrayUsuarios[indexdoobjeto].nome;
    var sobrenomeUsuario = arrayUsuarios[indexdoobjeto].sobrenome;
    

      /*iterar por cada objeto da lista de usuarios
        o objeto que tiver o email igual ao fornecido vai ser selecionado
        pegar o nome e sobrenome do objeto selecionado*/

    let objetoEncontrado; // variavel booleana para identificar em qual i em usuarios[i] foi encontrado o email igual

    document.getElementById("nomeUsuario").innerHTML = `${nomeUsuario} ${sobrenomeUsuario}`;

}
