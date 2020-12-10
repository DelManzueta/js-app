var pokemonRepository = (function () {
    var pokemonList = [
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
        pokemonList.push(pokemon);
    }
    function getAll() {
        return pokemonList;
    }
    function addListItem(pokemon) {
        let ulPokemon = document.querySelector('ul');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemonList.name;
    }
    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem()
    };
})();

// console.log(pokemonRepository)

pokemonRepository.add({ name: 'Pikachu', height: 1.04, types: ['electric'] });


/*
pokemonRepository.getAll().forEach(function (pokemonObjects) {
    document.write('<p><strong>Name: </strong></p> ' + '<p>' + pokemonObjects.name + '<br />' + '[Height: ' + pokemonObjects.height + ']' + '<br>' + '[Types: ' + pokemonObjects.types + ']' + '</p><br>'
    );
});
*/

pokemonRepository.getAll().forEach(function (pokemonObjects) {
    let ulPokemon = document.querySelector('ul'); //unordered list
    let listItem = document.createElement('li'); //create <li>
    let button = document.createElement('button'); // create button
    button.innerText = pokemonObjects.name; //add pokemon name to button innerText
    button.classList.add('btn'); //add new class
    listItem.appendChild(button); //append button to <li>
    ulPokemon.appendChild(listItem); // append <li> to <ul>
});

/*
Object.keys(pokemonRepository).forEach(function (getAll) {
    console.log(pokemonRepository.getAll(getAll));
});
*/