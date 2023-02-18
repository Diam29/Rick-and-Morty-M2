

const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,10}$/;


function validation(inputs) {
    let errors = {};
    if (!inputs.username || regexEmail.test(inputs.username) || inputs.username.length > 35) errors.username = 'Debe ingesar un Email'
    if (!inputs.password || regexPassword.test(inputs.password)) errors.password = 'La contraseña debe tener entre 6 y 10 caracteres, al menos una letra mayusucla, minuscula y numero'
    return errors;
}

export default validation;