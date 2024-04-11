// Variáveis

const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1


// função callback
function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector('#inputNumber')

  if (Number(inputNumber.value) == randomNumber) {
    screen1.classList.add('hide')
    screen2.classList.remove('hide')

    document.querySelector('.screen2 h2').innerText = `Acertou em ${xAttempts} tentativas`
  }

  inputNumber.value = ''
  xAttempts++
}


// Eventos
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', function() {
  window.location.reload(true)

  xAttempts = 1
})
