

function validateForm() {
    let x = document.getElementById("name").value;
    let y= document.getElementById("mail").value;
    let z= document.getElementById("age").value;
    if (x == "") {
        alert("Preencha todos os espacos");
        document.getElementById("name").style.backgroundColor = "red";
        return false;
    }
    else if (y == "" ) {
        alert("Preencha todos os espacos");
        document.getElementById("mail").style.backgroundColor = "red";
        return false;
    }
    else if (z == "") {
        alert("Preencha todos os espacos");
        document.getElementById("age").style.backgroundColor = "red";
        return false;
    }
    else if ( z < 18 ){
        alert("Apenas maiores de idade");
        return false;
    }
   
    else {
        alert("Enviado com Sucesso");
        return true;

    }
   


}
