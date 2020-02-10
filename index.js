document.addEventListener("DOMContentLoaded", () =>{
    fetchPokemonList()
})

//get all pokemon and put into poke data array
function fetchPokemonList(){
    fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151`)
    .then((response) => {
        return response.json();
    })
    .then((pokeData) => {
        // displayPokemonFrontPage(pokeData.results, 1)
        runner(pokeData.results)
    });
}
//run everything
function runner(pokeData){
    //RUN ALL SETUP
    //************************************************************************************ */
    let currentUser = null
    const allPokeData = pokeData
    displayPokemonFrontPage(1)

    //USER ACTIONS
    //************************************************************************************* */
    const userLogInButton = document.querySelector("#submit-name")
    userLogInButton.addEventListener("submit", (event) =>{
        event.preventDefault()
        const nameInput = document.querySelector("#name-input").value
        getUser(nameInput)
    })
    //grab user data from backend
    function getUser(username){
        fetch('http://localhost:3000/users')
        .then((response) => {
            return response.json();
        })
        .then((allUsers) => {
            
            if (allUsers.filter(user => { return user.name === username }).length > 0)
            {
                currentUser = allUsers.find(user => {return username === user.name})
                renderUserInfo()
            }
            else{
                createUser(username)
            }
        });
    }
    //post to new user
    function createUser(nameInput){
        fetch('http://localhost:3000/users', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name: nameInput}),
        })
        .then((response) => response.json())
        .then((userData) => {
            currentUser = userData
            renderUserInfo()
        })
    }
    //render user info
    function renderUserInfo(){
        const userContainer = document.querySelector("#user-container")
        userContainer.innerHTML=`
            <h1>Logged in as: ${currentUser.name}</h1>
            <div id="team-container">
            </div>
        `
        currentUser.pokemons.forEach(pokemon =>{
            const pokeSpan = document.createElement('span')
            pokeSpan.innerHTML = `
                <img src = ${pokemon.front_default}>
                <h6>${pokemon.name}</h6>
            `
            const teamContainer = document.querySelector("#team-container")
            teamContainer.append(pokeSpan)
        })
    }


    //DISPLAYING POKEMON FUNCTIONS
    //*********************************************************************************** */
    //display pokemon main and in list form
    function displayPokemonFrontPage(selectedPokemonId){
        displaySelected(allPokeData[selectedPokemonId - 1])
        displayList(allPokeData.filter((pokemon, index) => index != selectedPokemonId - 1))
    }
    //fetch data to see selected pokemon
    function displaySelected(pokemon){
        // console.dir(pokemon)
        fetch(`${pokemon.url}`)
        .then((response) => {
            return response.json();
        })
        .then((pokeInfo) => {
            renderSelected(pokeInfo)
        });
    }
    //display selected pokemon
    function renderSelected(pokeInfo){
        const pokeContainer = document.querySelector("#selected-pokemon")
        pokeContainer.innerHTML = `
            <h3>${pokeInfo.name}</h3>
            <img src= ${pokeInfo.sprites.front_default} class="selected-sprite">
            <p>id: ${pokeInfo.id}</p>
            <button id="add-to-team">Add to team!</button>
        `
        const addTeamButton = document.querySelector("#add-to-team")
        addTeamButton.addEventListener("click", () =>{
            addPokemon(pokeInfo)
        })
    }
    //create new pokemon and add to trainer's team
    function addPokemon(pokeInfo){
        
        fetch('http://localhost:3000/pokemons', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: pokeInfo.name,
                types: pokeInfo.types,
                user_id: currentUser.id,
                front_default: pokeInfo.sprites.front_default,
                back_default: pokeInfo.sprites.back_default
            })
            })
        .then((response) => response.json())
        .then((pokeData) => {
            currentUser = getUser(currentUser.name)
            renderUserInfo()
        })
    }

    //fetch data to render pokemon list item
    function displayList(pokeListData){
        const pokeList = document.querySelector("#pokemon-list")
        pokeList.innerHTML = ""
        for (i = 0 ; i < 150 ; i++){
            fetch(`${pokeListData[i].url}`)
        .then((response) => {
            return response.json();
        })
        .then((pokeInfo) => {
            renderListItem(pokeInfo)
        });
        }
    }

    //render one pokemon list element
    function renderListItem(pokeInfo){
        const pokeList = document.querySelector("#pokemon-list")
        pokemonLi = document.createElement('li')
        pokemonLi.className ="pokemon-list-element"
        pokemonLi.innerHTML = `
            <img src= ${pokeInfo.sprites.front_default} class="list-sprite">
            <span>${pokeInfo.name}</span>
        `
        pokeList.append(pokemonLi)
        pokemonLi.addEventListener("click", () => 
            displayPokemonFrontPage(pokeInfo.id)
        )
    }
}