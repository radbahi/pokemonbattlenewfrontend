//**GET DATA********************************************************************************** */
//fetch list of all users and then render opoonents screen
function fetchOpponents(currentUser){
    fetch('http://localhost:3000/users')
    .then((response) => {
        return response.json();
    })
    .then((allUsers) => {
        selectOpponent(currentUser, allUsers)
    })
}

//get users and render list of possible opponents
function selectOpponent(currentUser, allUsers){
    const opponents = allUsers
    const currentSelection = opponents[0]
    const body = document.querySelector("#main-body")
    body.innerHTML = `
        <div id="user-battle-container">
        </div>
        <div id="opponent-battle-container">
        </div>
        <div id="opponent-list">
        </div>
        <button id="start-battle">Start Battle</button>
    `
    const battleButton = document.querySelector("#start-battle")
    battleButton.addEventListener("click", ()=>{
        startBattle(currentUser, currentSelection)
    })
    displayTeam(currentUser, "user")
    displayTeam(currentSelection, "opponent")
    displayOpps(opponents)
}


//**DISPLAY FUNCS***************************************************************************** */
//display user team
function displayTeam(user, div){
    //display name
    const userBatCon = document.querySelector(`#${div}-battle-container`)
    userBatCon.innerHTML = ""
    const userHeader = document.createElement('h3')
    userHeader.innerText = user.name
    userBatCon.append(userHeader)
    //display pokemon
    user.pokemons.forEach(pokemon =>{
        const pokeSpan = document.createElement('span')
        pokeSpan.className = "pokemon"
        pokeSpan.innerHTML = `
            <img src = ${pokemon.front_default}>
            <h6>${pokemon.name}</h6>
            <ul>
                <li>Types: ${pokemon.types[0].name}</li>
                <li>Moves: ${pokemon.types[0].moves}</li>
            </ul>
        `
        userBatCon.append(pokeSpan)
    })
}

//display opponent options, allow you to choose selected opponent
function displayOpps(opponents){
    opponents.forEach(opponent =>{
        const oppButton = document.createElement('button')
        const oppList = document.querySelector("#opponent-list")
        oppButton.className = "oppButton"
        oppButton.innerText = `${opponent.name}`
        oppList.append(oppButton)
        oppButton.addEventListener("click", () =>{
            currentSelection = opponent
            displayTeam(currentSelection, "opponent")
        })
    })
}