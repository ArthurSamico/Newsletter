document.addEventListener('DOMContentLoaded',function(){
    const urlParams = new URLSearchParams(window.location.search)
    const email = urlParams.get('email')
    const emailElement = document.querySelector('#userEmail')

    if(emailElement && email){
        emailElement.textContent = email
    }
})

function dimiss_button(){
    window.location.href = 'index.html'
}