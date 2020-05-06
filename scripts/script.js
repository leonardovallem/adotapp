window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 700)
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
})

window.onload = () => {
    let validarEmail = () => {
        if(inputEmailCadastro.value.indexOf("@") == -1 && inputEmailCadastro.value.length != 0){
            inputEmailCadastro.style.border = "solid thin red";
        }
        else{
            inputEmailCadastro.style.border = "solid rgba(0,0,0,.42)";
            inputEmailCadastro.style.borderRadius = "25rem";
            inputEmailCadastro.style.borderWidth = "0 0 1px";
        }
    }

    inputEmailCadastro.onchange = validarEmail;

    let validarSenha = () => {
        if(inputSenhaCadastro.value.length < 8){
            inputSenhaCadastro.style.border = "solid thin red";
        }
        else{
            inputSenhaCadastro.style.border = "solid rgba(0,0,0,.42)";
            inputSenhaCadastro.style.borderRadius = "25rem";
            inputSenhaCadastro.style.borderWidth = "0 0 1px";
        }
    }

    inputSenhaCadastro.onchange = validarSenha;


    let confirmarSenhas = () => {
        if(inputSenhaConfirma.value != inputSenhaCadastro.value){
            inputSenhaConfirma.style.border = "solid thin red";
        }
        else{
            inputSenhaConfirma.style.border = "solid rgba(0,0,0,.42)";
            inputSenhaConfirma.style.borderRadius = "25rem";
            inputSenhaConfirma.style.borderWidth = "0 0 1px";
        }
    }

    inputSenhaConfirma.onchange = confirmarSenhas;

}