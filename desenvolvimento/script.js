const formulario = document.querySelector('#email_form')
const emailInput = document.querySelector('#email')
const errorMenssage = document.querySelector('#error_mensage')

function validaEmail(){
    const regexEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$/i;

    let emailValue = emailInput.value;
    let isValid = regexEmail.test(emailValue)

    if (!isValid){
        emailInput.classList.add('invalido')
        errorMenssage.innerHTML = 'Valid e-mail required'
        return;
    }

    emailInput.classList.remove('invalido')
    errorMenssage.innerHTML = ''

    const urlParams = new URLSearchParams(window.location.search)
    urlParams.set('email', emailValue)

    window.location.href = 'thanks.html?' + urlParams.toString()

}

    formulario.addEventListener('submit', function(event){
        event.preventDefault()
        validaEmail()
    })
