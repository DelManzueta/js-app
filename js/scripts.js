let pokemon1 = {
    name: 'Bulbasaur',
    height: 0.7,
    types: ['grass', 'poison']
}

let pokemon2 = {
    name: 'Ivysaur',
    height: 1,
    types: ['grass', 'poison']
}

let pokemon3 = {
    name: 'Venusaur',
    height: 2,
    types: ['grass', 'poison']
}

let pokemon4 = {
    name: 'Charmander',
    height: 0.6,
    types: ['fire']
}

let pokemon5 = {
    name: 'Charmeleon',
    height: 1.1,
    types: ['fire']
}

var pokemonList = [
    pokemon1,
    pokemon2,
    pokemon3,
    pokemon4,
    pokemon5
];


var pokemonList = {
    pokemon1: 'Bulbasaur',
    pokemon2: 'Ivysaur',
    pokemon3: 'Venusaur',
    pokemon4: 'Charmander',
    pokemon5: 'Charmeleon',
};
for (var pokemonName in pokemonList) {
    document.write(pokemonName + " : " + pokemonList[pokemonName])
}