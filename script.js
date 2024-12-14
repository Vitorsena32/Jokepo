const result = document.querySelector('.result')
const humanScore= document.querySelector('#human-Score')
const machineScore= document.querySelector('#machine-Score')


let humanScoreNumber= 0
let machineScoreNumber= 0

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())

}


const playMachine = () => {
    const choices = ['rock', 'paper', 'scrissors']

    const randomNumber = Math.floor(Math.random() * 3)

    console.log(randomNumber)

    return choices[randomNumber]
}


const playTheGame = (human, machine) => {

    console.log('Humano:' + human + 'Maquina:' + machine)

    if (human === machine) {
        result.innerHTML = "Empate &#x1F91D"

    } else if (
        (human === 'paper' && machine === "rock") ||
        (human === 'rock' && machine === 'scrissors') ||
        (human === 'scrissors' && machine === 'paper')
    ) {
        humanScoreNumber ++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você ganhou &#x1F947"
    } else {
        machineScoreNumber ++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = " Você perdeu &#x1F6AB"
    }


}