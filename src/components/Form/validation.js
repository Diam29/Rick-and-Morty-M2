

const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,35}$/i;
const regexPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,10}$/;


function validation(inputs) {

    let errors = {};
    if (!inputs.username.trim()) {
        errors.username = 'El campo no debe estar vacío'

    } else if (!regexEmail.test(inputs.username)) {
        errors.username = 'Debe ser un email'

    } else if (inputs.username.length > 35) {
        errors.username = 'Debe ser menor a 35 caracteres'

    }
    else if (!regexPassword.test(inputs.password)) { errors.password = 'La contraseña debe tener entre 6 y 10 caracteres y al menos un número' }

    return errors;
}

export default validation;