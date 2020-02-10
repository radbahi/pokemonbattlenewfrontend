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
    const allPokeData = pokeData
    displayPokemonFrontPage(1)

    //USER ACTIONS
    //************************************************************************************* */
    


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
            <img src= ${pokeInfo.sprites.front_default}>
            <p>id: ${pokeInfo.id}</p>
            <button id="add-to-team">Add to team!</button>
        `
        const addTeamButton = document.querySelector("#add-to-team")
        addTeamButton.addEventListener("click", () =>{
            //TODO: POST REQUEST TO CREATE POKEMON
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
            <img src= ${pokeInfo.sprites.front_default}>
            <span>${pokeInfo.name}</span>
        `
        pokeList.append(pokemonLi)
        pokemonLi.addEventListener("click", () => 
            displayPokemonFrontPage(pokeInfo.id)
        )
    }
}