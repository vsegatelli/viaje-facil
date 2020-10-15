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

//Verificar senha
temMaiuscula = /[+A-Z]/
temMinuscula = /[+a-z]/
temNumero = /[+0-9]/
naoTemEspaco = /\S{6,}/
senha.onblur = e => {

let senha = e.target.value
if ( temMaiuscula.test(senha) && temMinuscula.test(senha) && temNumero.test(senha) && naoTemEspaco.test(senha) ) {
e.target.classList.remove('text-danger')
} else {
e.target.focus()
e.target.classList.add('text-danger')
}
if ( temMaiuscula.test(senha) && temMinuscula.test(senha) && temNumero.test(senha) ) {
senhaAlphaNum.classList.add('text-success')
senhaAlphaNum.classList.remove('text-danger')
} else {
senhaAlphaNum.classList.add('text-danger')
senhaAlphaNum.classList.remove('text-success')
}
if ( naoTemEspaco.test(senha) ) {
senha6chars.classList.add('text-success')
senha6chars.classList.remove('text-danger')
} else {
senha6chars.classList.add('text-danger')
senha6chars.classList.remove('text-success')
}

//Validando senha
senhaConfirm.onblur = e => {
    if ( e.target.value !== senha.value ) {
    e.target.focus()
    e.target.classList.add('text-danger')
    senhaConfirmError.classList.remove('d-none')
    } else {
    e.target.classList.remove('text-danger')
    senhaConfirmError.classList.add('d-none')
    }
    }

    //Confirmação do envio do form
    btnEnviar.onclick = e => {

        e.preventDefault()
        confirmado = confirm(`
        Antes de enviar seu formulário, gostaríamos de confirmar seus dados:\n
        Nome: ${nome.value} ${sobrenome.value}\n
        Email: ${email.value}\n
        `)
        confirmado && formulario.submit()
        
        }

        //CEP
        function pesquisarCep( el ) {

            // Limpando o CEP e deixando apenas números
            let cepLimpo = el.replace(/\D/g,'')
            
            // Garantindo que o CEP não está vazio e está no formato esperado
            let formatoCep = /^[0-9]{8}$/
            
            if ( cepLimpo !== '' && formatoCep.test(cepLimpo) ) {
            
            // Mostrando que os campos serão populados
            endereco.value = '...'
            bairro.value = '...'
            cidade.value = '...'
            estado.value = '...'
            
            /**
            * ### IMPORTANTE ###
            * Criando o endpoint do ViaCEP
            * callback=retorno_callback_viacep é o parâmetro (do tipo query param)
            * que chama a nossa função callback a partir do recebimento do retorno
            *
            */
            
            scriptCep = document.createElement('script')
            scriptCep.src = `https://viacep.com.br/ws/${cepLimpo}/json/?callback=retorno_callback_viacep`
            document.querySelector('head').appendChild(scriptCep)
            
            }
            
            }

            //Função de callback
            function retorno_callback_viacep(resposta) {

                // Caso não haja erros...
                if ( !('erro' in resposta) ) {
                
                // Populamos os campos
                endereco.value = resposta.logradouro
                bairro.value = resposta.bairro
                cidade.value = resposta.localidade
                
                // E no caso da UF
                let estados = formulario.querySelectorAll('option')
                for(cadaEstado of estados){
                
                cadaEstado.value === resposta.uf
                && cadaEstado.setAttribute('selected','')
                
                }
                
                // E direcionamos o usuário para o campo de número
                numero.focus()
                
                } else {
                
                // Se der erro, avisamos o usuário, limpamos os campos e focamos no campo CEP novamente
                alert('\nOps!\n\nInfelizmente não encontramos esse CEP...\n\nPor favor, verifique o CEP inserido\n\n')
                endereco.value = ''
                bairro.value = ''
                cidade.value = ''
                estado.value = ''
                }
                
                }