function startBattle(user, opponent) {
    let player1 = new Player(user.name, user.pokemons)
    let player2 = new Player(opponent.name, opponent.pokemons)
    battle(player1, player2)

    
}
//run battle
function battle(attackingPlayer, defendingPlayer){
    renderBattle(attackingPlayer, defendingPlayer)
    addListeners(attackingPlayer, defendingPlayer)
}
//add event listeners
function addListeners(attackingPlayer, defendingPlayer){
    const fightButton = document.querySelector("#fight")
    fightButton.addEventListener('click', () =>{
        defendingPlayer.takeDamage(Math.floor(Math.random() * 20) + 1)
        battle(defendingPlayer, attackingPlayer)
    })
    const healButton = document.querySelector("#heal")
    healButton.addEventListener("click", () => {
        attackingPlayer.heal(Math.floor(Math.random() * 20) + 1)
        battle(defendingPlayer, attackingPlayer)
    })
    const changeButton = document.querySelector("#change")
    changeButton.addEventListener("click", () => {
        renderSwitchOptions(attackingPlayer)
    })
}




// function endTurn(player1Turn, oneActivePokemon, twoActivePokemon, player1, player2){
//     const currentPlayer = player1Turn ? player1 : player2
//     const mainBody = document.querySelector('#main-body')
//     console.log(currentPlayer, oneActivePokemon, twoActivePokemon)
//     if (currentPlayer.pokemons[player1Turn ? oneActivePokemon : twoActivePokemon].health <= 0){
        
//         if (player1Turn ? oneActivePokemon : twoActivePokemon === currentPlayer.pokemons.length - 1){
//             mainBody.innerHTML = "you lose"
//         }
//         else{
//             player1Turn ? oneActivePokemon = oneActivePokemon + 1 : twoActivePokemon = twoActivePokemon + 1
//         }
//     }
    
//     renderOnePokemon(player1, oneActivePokemon)
//     renderTwoPokemon(player2, twoActivePokemon)
//     renderOptions(player1Turn, oneActivePokemon, twoActivePokemon, player1, player2)
// }

// function renderTwoPokemon(player2, activePokemon) {
//     const spriteContainer = document.querySelector('#player2-sprite-container')
//     spriteContainer.innerHTML = `<img src='${player2.pokemons[activePokemon].front_default}'>`
//     const pokeInfo = document.createElement('ul')
//     const infoContainer = document.querySelector('#player2-info-container')
//     infoContainer.innerHTML = ""
//     infoContainer.append(pokeInfo)
//     const pokeName = document.createElement('li')
//     const pokeHealth = document.createElement('li')
//     pokeName.innerText = player2.pokemons[activePokemon].name
//     pokeInfo.append(pokeName)
//     pokeHealth.innerText = player2.pokemons[activePokemon].health
//     pokeInfo.append(pokeHealth)
// }
// function renderOnePokemon(player1, activePokemon) {
//     const spriteContainer = document.querySelector('#player1-sprite-container')
//     spriteContainer.innerHTML = `<img src='${player1.pokemons[activePokemon].back_default}'>`
//     const pokeInfo = document.createElement('ul')
//     const infoContainer = document.querySelector('#player1-info-container')
//     infoContainer.innerHTML = ""
//     infoContainer.append(pokeInfo)
//     const pokeName = document.createElement('li')
//     const pokeHealth = document.createElement('li')
//     pokeName.innerText = player1.pokemons[activePokemon].name
//     pokeInfo.append(pokeName)
//     pokeHealth.innerText = player1.pokemons[activePokemon].health
//     pokeInfo.append(pokeHealth)
// }
// function renderOptions(player1Turn, oneActivePokemon, twoActivePokemon, player1, player2){
//     const optionsList = document.querySelector("#option-list")
//     optionsList.innerHTML = ""
//     const fightButton = document.createElement('button')
//     fightButton.className = "option-button"
//     fightButton.id = "fight"
//     fightButton.innerText = "Fight"
//     optionsList.append(fightButton)
//     fightButton.addEventListener('click', () =>{
//         handleFightEvent(oneActivePokemon, twoActivePokemon, player1Turn, player1, player2)
//     })
//     const healButton = document.createElement('button')
//     healButton.className = "option-button"
//     healButton.id = "heal"
//     healButton.innerText = "Heal"
//     optionsList.append(healButton)
//     healButton.addEventListener("click", () => {
//         heal(oneActivePokemon, twoActivePokemon, player1Turn, player1, player2)
//     })
//     const changeButton = document.createElement('button')
//     changeButton.className = "option-button"
//     changeButton.id = "change"
//     changeButton.innerText = "Change Pokemon"
//     optionsList.append(changeButton)
// }
// function changeTurns(player1Turn){
//     return player1Turn
// }

// //heal pokemon if trainer has potions left
// function heal(oneActivePokemon, twoActivePokemon, player1Turn, player1, player2){
//     const pokemon = player1Turn ? player1.pokemons[oneActivePokemon] : player2.pokemons[twoActivePokemon]
//     // if (pokemon.health < 100){
//     //     if (pokemon.health < 90){
//     //         pokemon.health = pokemon.health + 10
//     //     }
//     //     else{
//     //         pokemon.health = 100
//     //     }
//     // }
//     pokemon.health = pokemon.health + 10
//     player1Turn = !player1Turn
//     endTurn(player1Turn, oneActivePokemon, twoActivePokemon, player1, player2)
// }
    
//     function handleFightEvent(oneActivePokemon, twoActivePokemon, player1Turn, player1, player2) {
//     if (player1Turn === true) {
//         player2.pokemons[twoActivePokemon].health -= Math.floor((Math.random() * 20) + 1);
//         player1Turn = false
//     } else {
//         player1.pokemons[oneActivePokemon].health -= Math.floor((Math.random() * 20) + 1);
//         player1Turn = true
//     }
//     endTurn(player1Turn, oneActivePokemon, twoActivePokemon, player1, player2)
// }