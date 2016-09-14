class PokemonviewController {
    constructor(pokeapiClientService, $stateParams, $http) {
        'ngInject';
        this.name = 'pokemonview';
        this.pokemonID = $stateParams.id;
        this._pokeapiClientService = pokeapiClientService;

        this._pokeapiClientService.getPokemon('//pokeapi.co/api/v2/pokemon/' + $stateParams.id, (err, pokemon) => {
            this.pokemon = pokemon;
        });
        this._pokeapiClientService.getPokemon('//pokeapi.co/api/v2/pokemon/' + (parseInt($stateParams.id) + 1), (err, pokemon) => {
            this.nextPokemon = pokemon;
        });
        this._pokeapiClientService.getPokemon('//pokeapi.co/api/v2/pokemon/' + (parseInt($stateParams.id) - 1), (err, pokemon) => {
            this.prevPokemon = pokemon;
        });
        this._pokeapiClientService.getCharacteristic('//pokeapi.co/api/v2/characteristic/' + (parseInt($stateParams.id) - 1), (err, pokemon) => {
            this.prevCharacteristic = pokemon;
            console.log(pokemon);
        });
        //console.log(pokemon);
        //console.log($http);
        //console.log(pokeapiClientService);
    }
}

export default PokemonviewController;
