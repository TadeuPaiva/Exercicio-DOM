// Pegando os dados no HTML 
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
// (substituindo o 'onclick')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
// Gerando numero all e contador de repeticoes
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1


// Eventos
btnTry.addEventListener('click', handleTryClick)
// Adc o Evento Ouvidor(listiner)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', enterControl)


function handleTryClick (event) {
  event.preventDefault()
  // event- objeto com todos os dados do click, nao faca o padrao envindo os dados e nem atualizar a pagina

  const input = document.querySelector('#inputNumber')
  //inputNumber id do input html
  
  if(Number(input.value) == randomNumber) {
    //value recebe o numero que o usuario tentar na pagina

    toggleScreen()

    screen2.querySelector('h2').innerText = `Voce acertou em ${xAttempts} tentativas`
  }

  input.value = ''
  //para limpar o numero usado na tentativa
  xAttempts++
  //Contabilizando as tentativas
}

function handleResetClick() {
  // callback do hide, fazendo voltar a paina anterior
  toggleScreen()
  // Zerando o contador
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
  //Caso nao use o Random novamente, ira pegar o sempre o mesmo numero acertado na primeira vez, dessa forma ira gerar outro
}

// funcao para controle do hide
function toggleScreen() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}

function enterControl (e) {
  // 'key' = tecla
  if(e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
// funcao para que com a tecla 'enter' tbm reset a pagina alem de clicar no botao 'jogar novamente'
}