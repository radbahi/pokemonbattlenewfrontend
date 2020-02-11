//get users and render list of possible opponents
function selectOpponent(currentUser){
    const body = document.querySelector("#main-body")
    body.innerHTML = `
        <div id="user-battle-container">
        </div>
        <div id="opponent-battle-container">
        </div>
        <div id="opponent-list">
        </div>
    `
    displayUserTeam(currentUser)
    console.log(currentUser)

}
//display user team
function displayUserTeam(user){
    //display name
    const userBatCon = document.querySelector("#user-battle-container")
    const userHeader = document.createElement('h3')
    userHeader.innerText = user.name
    userBatCon.append(userHeader)
    //display pokemon
    user.pokemons.forEach(pokemon =>{
        const pokeSpan = document.createElement('span')
        pokeSpan.innerHTML = `
            <img src = ${pokemon.front_default}>
            <h6>${pokemon.name}</h6>
            <ul>
                <li>Types: ${pokemon.types}</li>
                <li>Moves: ${pokemon.moves}</li>
            </ul>
        `
        userBatCon.append(pokeSpan)
    })
}