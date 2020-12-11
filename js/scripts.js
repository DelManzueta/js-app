var pokemonRepository = (function () {
    let pokemonList = [];

    let pokemonApi = 'https://pokeapi.co/api/v2/pokemon/?limit=75';

    function add(pokemon) {
        if (
            typeof pokemon === 'object' &&
            'name' in pokemon
        ) {
            pokemonList.push(pokemon);
        } else {
            console.log('pokemon is not correct')
        }
    }

    function add(pokemon) {
        pokemonList.push(pokemon);
    }
    function showDetails(pokemon) {
        console.log('showDetails ~ pokemon', pokemon)
    }
    function getAll() {
        return pokemonList;
    }

    function addListItem(pokemon) {
        let newList = document.querySelector('.pokemon-list');
        let listPokemon = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('btn-style');
        listPokemon.appendChild(button);
        newList.appendChild(listPokemon);
        //
        button.addEventListener('click', function (event) {
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
                // console.log(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })
    }

    function loadDetails(pokemon) {
        let url = pokemon.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            pokemon.imageUrl = details.sprites.front_default;
            pokemon.height = details.height;
            pokemon.types = details.types;
        }).catch(function (e) {
            console.error(e);
        })
    }

    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            console.log(pokemon);
        });
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
    };
})();

pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon)
    });
});
