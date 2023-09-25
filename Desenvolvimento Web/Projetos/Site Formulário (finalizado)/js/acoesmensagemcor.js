// Seleciona os elementos do HTML
var radioLaranja = document.getElementById("radioLaranja");
var radioPreto = document.getElementById("radioPreto");
var radioBranco = document.getElementById("radioBranco");
var body = document.body;

function alteracor() {
    if (radioLaranja.checked) {
        body.style.backgroundColor = "orange";
        body.style.color = "black";
    }

    if (radioPreto.checked) {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    }

    if (radioBranco.checked) {
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
}

function mensagemCadastro() {
    alert("Cadastro realizado com sucesso!");
}