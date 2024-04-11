// Variáveis
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')

let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1


// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', enterEvent)


// Funções 
function handleTryClick(event) {
  event.preventDefault() // não enviar o formulário

  let inputNumber = document.querySelector('#inputNumber')

  if(inputNumber.value < 0 || inputNumber.value > 10) {
    alert("Escolha um número entre 0 e 10!")
    return
  }

  if(inputNumber.value == "") {
    alert("Você precisa colocar um número!")
    return
  }

  if(inputNumber.value == randomNumber) {
    toggleScreen()
    document.querySelector('.screen2 h2').innerText = `Acertou em ${xAttempts} tentativas`
  }

  inputNumber.value = ''
  xAttempts++
}

function handleResetClick() {
  window.location.reload(true)
  xAttempts = 1
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function enterEvent(k) {
  if(k.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
}
