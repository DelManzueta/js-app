var pokemonRepository = (function () {
    let pokemonRepo = [];

    let pokemonApi = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function add(pokemon) {
        if (
            typeof pokemon === 'object' &&
            'name' in pokemon &&
            'height' in pokemon &&
            'types' in pokemon
        ) {
            pokemonRepo.push(pokemon);
        } else {
            console.log('pokemon is not correct')
        }
    }

    function add(pokemon) {
        pokemonRepo.push(pokemon);
    }
    function showDetails(pokemon) {
        console.log('showDetails ~ pokemon', pokemon)
    }
    function getAll() {
        return pokemonRepo;
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
            showDetails(pokemon);
        });
        // 
    }
    function loadList() {
        return fetch(pokemonApi).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })
    }
    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails,
        loadList: loadList
    };
})();

// pokemonRepository.add({ name: 'Pikachu', height: 1.04, types: ['electric'] }); 


const newPokemon = {
    name: 'Pikachu',
    height: 1.04,
    types: ['electric']
}
const addObjToRepo = (value, callback) => callback(value)
addObjToRepo(newPokemon, pokemonRepository.add)

function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
        console.log(pokemon);
    });
}


pokemonRepository.loadList().then(function () {
    //Now the data is loaded
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon)
    });
});
