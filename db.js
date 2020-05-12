function adicionaUsuario(e) {
    var usuarios = [];
    usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

    let emailUsuario = document.getElementById("inputEmail").value;

    if(usuarios.length == 0){
        const usuario = {
            nome: this.inputNome.value,
            sobrenome: this.inputSobrenome.value,
            email: this.inputEmailCadastro.value,
            senha: this.inputSenhaCadastro.value
        }

        usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

        usuarios.push(usuario);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

    }else{

        for(i=0 ; i < usuarios.length ; i++){
            if(usuarios[0].email.indexOf(emailUsuario) == -1){
                const usuario = {
                    nome: this.inputNome.value,
                    sobrenome: this.inputSobrenome.value,
                    email: this.inputEmailCadastro.value,
                    senha: this.inputSenhaCadastro.value
                }
        
                usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
        
                usuarios.push(usuario);
                localStorage.setItem("usuarios", JSON.stringify(usuarios));
            }
            else{
                alert("Esse email já foi cadastrado.");
                return false;
            }
        }
    }        

}

function teste() {
    var usuarios = [];
    usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

    const usuario = {
        nome: this.inputNome.value,
        sobrenome: this.inputSobrenome.value,
        email: this.inputEmailCadastro.value,
        senha: this.inputSenhaCadastro.value
    }

    usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

    usuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}


function mostraUsuario() {
    var arrayUsuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
    var nomeUsuario = arrayUsuarios[arrayUsuarios.length - 1].nome;
    var sobrenomeUsuario = arrayUsuarios[arrayUsuarios.length - 1].sobrenome;
    document.getElementById("nomeUsuario").innerHTML = `${nomeUsuario} ${sobrenomeUsuario}`; 
}

function checaUsuario() {
    var arrayUsuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

}

function x() {
    for(i=0 ; i < JSON.parse(localStorage.getItem("usuarios") || "[]").length ; i++){
        console.log(JSON.parse(localStorage.getItem("usuarios") || "[]")[i].email);
    }

    
}