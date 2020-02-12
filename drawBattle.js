//render battle container
function renderBattle(attackingPlayer, defendingPlayer){
    const mainBody = document.querySelector('#main-body')
    mainBody.innerHTML = ''
    renderDefendingPokemon(defendingPlayer)
    renderAttackingPokemon(attackingPlayer)
    renderOptions(attackingPlayer, defendingPlayer)
}

//render defending pokemon
function renderDefendingPokemon(player) {
    const mainBody = document.querySelector('#main-body')
    const defendContainer = document.createElement('div')
    defendContainer.id = "defend-pokemon-container"
    mainBody.append(defendContainer)
    renderPokeInfo(player.activePokemon(), defendContainer), 
    renderSprite(player.activePokemon(), defendContainer, player.activePokemon().front_sprite)
}

//render attacking pokemon
function renderAttackingPokemon(player) {
    const mainBody = document.querySelector('#main-body')
    const attackContainer = document.createElement('div')
    attackContainer.id = "attack-pokemon-container"
    mainBody.append(attackContainer)
    renderPokeInfo(player.activePokemon(), attackContainer), 
    renderSprite(player.activePokemon(), attackContainer, player.activePokemon().back_sprite)
}

//render pokemon info box
function renderPokeInfo(pokemon, container){
    const infoBox = document.createElement('ul')
    infoBox.className = "infoBox"
    container.append(infoBox)
    const name = document.createElement('li')
    name.innerText = pokemon.name
    name.className = "name"
    infoBox.append(name)
    const health = document.createElement('li')
    health.innerText = `Health: ${pokemon.health}`
    health.className = "health"
    infoBox.append(health)
}
//render pokemon sprite
function renderSprite(pokemon, container, url){
    const spriteContainer = document.createElement('div')
    spriteContainer.className = "sprite"
    spriteContainer.innerHTML = `<img src='${url}'>`
    container.append(spriteContainer)
}
//render options for attacking player
function renderOptions(attackingPlayer, defendingPlayer){
    const mainBody = document.querySelector('#main-body')
    const optionsList = document.createElement('div')
    optionsList.id = "#option-list"
    mainBody.append(optionsList)
    const fightButton = document.createElement('button')
    fightButton.className = "option-button"
    fightButton.id = "fight"
    fightButton.innerText = "Fight"
    optionsList.append(fightButton)
    
    const healButton = document.createElement('button')
    healButton.className = "option-button"
    healButton.id = "heal"
    healButton.innerText = "Heal"
    optionsList.append(healButton)
    
    const changeButton = document.createElement('button')
    changeButton.className = "option-button"
    changeButton.id = "change"
    changeButton.innerText = "Change Pokemon"
    optionsList.append(changeButton)
}
//draw options to make pokemon switch
function renderSwitchOptions(attackingPlayer){
    if (attackingPlayer.notFainted().length <= 1){

    }
    else{
        const availablePokemon = attackingPlayer.notFainted().filter((pokemon, index) => {
            return index != attackingPlayer.activePokemonIndex
        })
        console.log(availablePokemon)
    }
}