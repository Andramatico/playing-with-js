


function validateForm() {
    event.preventDefault()
    const name = document.getElementById("name");
    const mail = document.getElementById("mail");
    const age = document.getElementById("age");
    const regex = "[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$";

    if (name.value === "") {
        alert("Preencha todos os espacos");
        name.style.backgroundColor = "red";

    } else if (mail.value === "") {
        alert("Preencha todos os espacos");
        mail.style.backgroundColor = "red";
    } else if (!mail.value.match(regex)) {
        alert("Email Invalido");
        mail.style.backgroundColor = "red";
    } else if (age.value === "") {
        alert("Preencha todos os espacos");
        age.style.backgroundColor = "red";

    } else if (age.value < 18) {
        alert("Apenas maiores de idade");
        age.style.backgroundColor = "red"

    } else {
        alert("Enviado com Sucesso");

    }



}
