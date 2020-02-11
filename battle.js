function startBattle(player1, player2) {
    const mainBody = document.querySelector('#main-body')
    let oneActivePokemon = 0
    let twoActivePokemon = 0
    let player1Turn = true
    mainBody.innerHTML = `<div id="player2-main-container">
        <div id="player2-info-container">
        </div>
        <div id="player2-sprite-container">
        </div>
    </div>
    <div id="player1-main-container">
        <div id="player1-info-container">
        </div>
        <div id="player1-sprite-container">
        </div>
    </div>
    <div id="options">
        <ul id="option-list">
        </ul>
    </div>`
    renderOnePokemon(player1, oneActivePokemon)
    renderTwoPokemon(player2, twoActivePokemon)
    renderOptions(player1Turn, oneActivePokemon, twoActivePokemon, player1, player2)
}
function renderTwoPokemon(player2, activePokemon) {
    const spriteContainer = document.querySelector('#player2-sprite-container')
    spriteContainer.innerHTML = `<img src='${player2.pokemons[activePokemon].front_default}'>`
    const pokeInfo = document.createElement('ul')
    const infoContainer = document.querySelector('#player2-info-container')
    infoContainer.innerHTML = ""
    infoContainer.append(pokeInfo)
    const pokeName = document.createElement('li')
    const pokeHealth = document.createElement('li')
    pokeName.innerText = player2.pokemons[activePokemon].name
    pokeInfo.append(pokeName)
    pokeHealth.innerText = player2.pokemons[activePokemon].health
    pokeInfo.append(pokeHealth)
}
function renderOnePokemon(player1, activePokemon) {
    const spriteContainer = document.querySelector('#player1-sprite-container')
    spriteContainer.innerHTML = `<img src='${player1.pokemons[activePokemon].back_default}'>`
    const pokeInfo = document.createElement('ul')
    const infoContainer = document.querySelector('#player1-info-container')
    infoContainer.innerHTML = ""
    infoContainer.append(pokeInfo)
    const pokeName = document.createElement('li')
    const pokeHealth = document.createElement('li')
    pokeName.innerText = player1.pokemons[activePokemon].name
    pokeInfo.append(pokeName)
    pokeHealth.innerText = player1.pokemons[activePokemon].health
    pokeInfo.append(pokeHealth)
}
function renderOptions(player1Turn, oneActivePokemon, twoActivePokemon, player1, player2){
    const optionsList = document.querySelector("#option-list")
    optionsList.innerHTML = ""
    const fightButton = document.createElement('button')
    fightButton.className = "option-button"
    fightButton.id = "fight"
    fightButton.innerText = "Fight"
    optionsList.append(fightButton)
    fightButton.addEventListener('click', () =>{
        handleFightEvent(oneActivePokemon, twoActivePokemon, player1Turn, player1, player2)
    })
    const healButton = document.createElement('button')
    healButton.className = "option-button"
    healButton.id = "heal"
    healButton.innerText = "Heal"
    optionsList.append(healButton)
    healButton.addEventListener("click", () => {
        heal(oneActivePokemon, twoActivePokemon, player1Turn, player1, player2)
    })
    const changeButton = document.createElement('button')
    changeButton.className = "option-button"
    changeButton.id = "change"
    changeButton.innerText = "Change Pokemon"
    optionsList.append(changeButton)
}
function changeTurns(player1Turn){
    return player1Turn
}

//heal pokemon if trainer has potions left
function heal(oneActivePokemon, twoActivePokemon, player1Turn, player1, player2){
    const pokemon = player1Turn ? player1.pokemons[oneActivePokemon] : player2.pokemons[twoActivePokemon]
    // if (pokemon.health < 100){
    //     if (pokemon.health < 90){
    //         pokemon.health = pokemon.health + 10
    //     }
    //     else{
    //         pokemon.health = 100
    //     }
    // }
    pokemon.health = pokemon.health + 10
    console.log(pokemon)
    player1Turn = !player1Turn
    renderOnePokemon(player1, oneActivePokemon)
    renderTwoPokemon(player2, twoActivePokemon)
    renderOptions(player1Turn, oneActivePokemon, twoActivePokemon, player1, player2)
}
    
    function handleFightEvent(oneActivePokemon, twoActivePokemon, player1Turn, player1, player2) {
    console.log('clicked')
    if (player1Turn === true) {
        player2.pokemons[oneActivePokemon].health -= Math.floor((Math.random() * 20) + 1);
        player1Turn = false
    } else {
        player1.pokemons[twoActivePokemon].health -= Math.floor((Math.random() * 20) + 1);
        player1Turn = true
    }
    renderOnePokemon(player1, oneActivePokemon)
    renderTwoPokemon(player2, twoActivePokemon)
    renderOptions(player1Turn, oneActivePokemon, twoActivePokemon, player1, player2)
}