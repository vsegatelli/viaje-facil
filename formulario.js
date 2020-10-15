window.onload

const formulario = document.querySelector('#meuForm')
const nome = document.querySelector('#nome')
const sobrenome = document.querySelector('#sobrenome')
const email = document.querySelector('#email')
const emailConfirm = document.querySelector('#emailConfirm')
const cep = document.querySelector('#cep')
const cidade = document.querySelector('#cidade')
const estado = document.querySelector('#uf')
const bairro = document.querySelector('#bairro')
const endereco = document.querySelector('#endereco')
const numero = document.querySelector('#numero')
const complemento = document.querySelector('#complemento')
const senha = document.querySelector('#senha')
const senha6chars = document.querySelector('#senha6chars')
const senhaAlphaNum = document.querySelector('#senhaAlphaNum')
const senhaSpecialChars = document.querySelector('#senhaSpecialChars')
const senhaConfirm = document.querySelector('#senhaConfirm')
const senhaConfirmEqual = document.querySelector('#senhaConfirmEqual')
const btnEnviar = document.querySelector('#btnEnviar')

//Validando UF
let ufs = ['AC','AL','AM','AP','BA','CE','DF','ES','GO','MA','MG','MS','MT','PA','PB','PE','PI','PR','RJ','RN','RO','RR','RS','SC','SE', 'SP', 'TO']

for(let uf of ufs) {
estado.innerHTML += `
<option value="${uf}">${uf}</option>
`
}

//Validação do e-mail
email.onblur = e => {
    if ( e.target.value.includes('@') === false ) {
    e.target.focus()
    e.target.classList.add('text-danger')
    emailError.classList.remove('d-none')
    (emailConfirm.value !== '' && emailConfirm.value !== email.value)
    ? emailConfirmError.classList.remove('d-none')
    : emailConfirmError.classList.add('d-none')
    } 
    else {
    e.target.classList.remove('text-danger')
    emailError.classList.add('d-none')
    }
    }

    //Confirmação de e-mail
    emailConfirm.onblur = e => {
        if ( e.target.value !== email.value ) {
        e.target.focus()
        e.target.classList.add('text-danger')
        emailConfirmError.classList.remove('d-none')
        } else {
        e.target.classList.remove('text-danger')
        emailConfirmError.classList.add('d-none')
        }
        }

