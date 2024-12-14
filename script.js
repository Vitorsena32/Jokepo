const result = document.querySelector('.result')
const humanScore= document.querySelector('#human-Score')
const machineScore= document.querySelector('#machine-Score')


let humanScoreNumber= 0
let machineScoreNumber= 0

const GAME_OPTIONS ={
    ROCK: ' rock',
    PAPER: 'paper',
    SCRISSOR:'scrissors'
}


const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())

}


const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK,GAME_OPTIONS.PAPER, GAME_OPTIONS.SCRISSOR]

    const randomNumber = Math.floor(Math.random() * 3)

    console.log(randomNumber)

    return choices[randomNumber]
}


const playTheGame = (human, machine) => {

    console.log('Humano:' + human + 'Maquina:' + machine)

    if (human === machine) {
        result.innerHTML = "Empate &#x1F91D"

    } else if (
        (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||
        (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCRISSOR) ||
        (human === GAME_OPTIONS.SCRISSOR && machine === GAME_OPTIONS.PAPER)
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