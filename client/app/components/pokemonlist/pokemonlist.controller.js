class PokemonlistController {
    constructor(pokeapiClientService) {
      'ngInject'; 
      this.name = 'pokemonlist';
      this.pokemons = [];
      this.gettingPokemons = false;
      this._pokeapiClientService = pokeapiClientService;
      //console.log(pokeapiClientService.exampleFunction());
  }

  getMore() {
      //for (var i = 1; i < 720; i++){ 
      //    var ids
      //    if (i < 10)
      //    {
      //        ids = "00" + i;
      //    }
      //    else if (i <100)
      //    {
      //        ids = "0" + i;
      //    }
      //    else
      //    {
      //        ids = i;
      //    }
      //    this.pokemons.push({
      //        "name": "bulbasaur",
      //        "id": ids,
      //        "types": [
      //            { "name": "grass" },
      //            { "name": "poison" }
      //        ]
      //    });
      //}
      if (!this.gettingPokemons) {
          this.gettingPokemons = true;
          this._pokeapiClientService.getPokemons(this.pokemons.length, (err, pokemons) => {
              Array.prototype.push.apply(this.pokemons, pokemons);
              this.gettingPokemons = false;
          });
      }
  }

  $onInit() {
      this.getMore();
  }

}

export default PokemonlistController;
