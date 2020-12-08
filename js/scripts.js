var pokemonRepository = (function (pokemonArray) {
    let pokemonList = [
        {
            name: 'Bulbasaur',
            height: 0.7,
            types: ['grass', ' poison'],
            fire: false
        },
        {
            name: 'Ivysaur',
            height: 1,
            types: ['grass', ' poison'],
            fire: false
        },
        {
            name: 'Venusaur',
            height: 2,
            types: ['grass', ' poison'],
            fire: false
        },
        {
            name: 'Charmander',
            height: 0.6,
            types: ['fire'],
            fire: true
        },
        {
            name: 'Charmeleon',
            height: 1.1,
            types: ['fire'],
            fire: true
        },
        {
            name: 'Charizard',
            height: 1.7,
            types: ['fire', 'flying'],
            fire: true
        },
        {
            name: 'Squirtle',
            height: 0.5,
            types: ['water'],
            fire: true
        },
        {
            name: 'Wartortle',
            height: 1,
            types: ['water'],
            fire: true
        },
        {
            name: 'Balstoise',
            height: 1.6,
            types: ['water'],
            fire: true
        },
    ];

    function add(pokemon) {
        pokemonList.push(pokemon)
    }
    function getAll(){
        return pokemonList
    }
    return {
        add: add,
        getAll: getAll
    };

})();





/*
pokemonRepository.forEach(function (pokemonType) {
    document.write('<p><strong>Name: </strong></p> ' + '<p>' + pokemonType.name + '<br />' + '[Height: ' + pokemonType.height + ']' + '<br>' + '[Types: ' + pokemonType.types + ']' + '</p>');

});
 */
