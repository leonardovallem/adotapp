function adicionaUsuario() {
    var usuarios = [];
    const usuario = {
        nome: this.inputNome.value,
        sobrenome: this.inputSobrenome.value,
        email: this.inputEmailCadastro.value,
        senha: this.inputSenhaCadastro.value
    }

    usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

    usuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    console.log("Funcionou?");
}
