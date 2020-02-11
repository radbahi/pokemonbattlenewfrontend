function startBattle(player1, player2) {
    const mainBody = document.querySelector('#main-body')
    const oneActivePokemon = 0
    const twoActivePokemon = 0
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
    renderOptions()
}
function renderTwoPokemon(player2, activePokemon) {
    const spriteContainer = document.querySelector('#player2-sprite-container')
    spriteContainer.innerHTML = `<img src='${player2.pokemons[activePokemon].front_default}'>`
    const pokeInfo = document.createElement('ul')
    const infoContainer = document.querySelector('#player2-info-container')
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
    infoContainer.append(pokeInfo)
    const pokeName = document.createElement('li')
    const pokeHealth = document.createElement('li')
    pokeName.innerText = player1.pokemons[activePokemon].name
    pokeInfo.append(pokeName)
    pokeHealth.innerText = player1.pokemons[activePokemon].health
    pokeInfo.append(pokeHealth)
}
function renderOptions(){
    const optionsList = document.querySelector("#option-list")
    const fightButton = document.createElement('button')
    fightButton.className = "fight-button"
    fightButton.innerText = "Fight"
    optionsList.append(fightButton)
    const healButton = document.createElement('button')
    healButton.className = "heal-button"
    healButton.innerText = "Heal"
    optionsList.append(healButton)
    const changeButton = document.createElement('button')
    changeButton.className = "change-button"
    changeButton.innerText = "Change Pokemon"
    optionsList.append(changeButton)
}