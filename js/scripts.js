var pokemonRepository = (function () {
    var repository = [
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
        repository.push(pokemon);
    }
    function showDetails(pokemon) {
    }
    function getAll() {
        return repository;
    }
    function addListItem(pokemon) {
        let newList = document.querySelector('.pokemon-list');
        let listPokemon = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('btns');
        listPokemon.appendChild(button);
        newList.appendChild(listPokemon);
        //
        button.addEventListener('click', function (pokemon) {
            let pokemonTarget = pokemon.pokemonTarget;
        });
        // 
    }
    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails
    };
})();

pokemonRepository.add({ name: 'Pikachu', height: 1.04, types: ['electric'] });

pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
});
