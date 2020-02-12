//player in battle
class Player{
    constructor(name, pokemons){
        this.name = name
        this.activePokemonIndex = 0
        this.pokemons = pokemons.map(pokemon =>{
            
            return new Pokemon(pokemon.name, pokemon.front_default, pokemon.back_default, pokemon.types)
        })
    }
    //return active pokemon
    activePokemon(){
        return this.pokemons[this.activePokemonIndex]
    }
    //deal damage to active pokemon
    takeDamage(amount){
        this.activePokemon().takeDamage(amount)
    }
    //heal active pokemon
    heal(amount){
        this.activePokemon().heal(amount)
    }
    //switch active pokemon
    switch(pokeId){
        this.activePokemonIndex = pokeId
    }
    //return array of pokemon that haven't fainted
    notFainted(){
        return this.pokemons.filter(pokemon => {
            return !pokemon.fainted
        })
    }
}