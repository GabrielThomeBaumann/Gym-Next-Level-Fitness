function validarFormulario() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const idade = document.getElementById('idade').value;
    const cidade = document.getElementById('cidade').value;
    const sexo = document.getElementById('sexo').value;

    if (!nome || !email || !idade || !cidade || !sexo) {
        alert("Please, fill in all the fields.");
        return false;
    }

    if (idade < 18) {
        alert("You must be over 18 years old to register.");
        return false;
    }

    alert("Form successfully submitted!");
    return true;
}
