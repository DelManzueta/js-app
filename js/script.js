let pokemonRepository = (function() {
    let pokemonList = []
    let pokemonApi = 'https://pokeapi.co/api/v2/pokemon/?limit=15';

    function add(pokemon) {
        pokemonList.push(pokemon);
    }


    function getAll() {
        return pokemonList;
    }

    function addListItem(pokemon) {
        let newList = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        listItem.classList.add('group-list-item');

        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('btn', 'btn-style');
        button.setAttribute('data-target', '#pokedex-modal');
        button.setAttribute('data-toggle', 'modal');

        listItem.appendChild(button);
        newList.appendChild(listItem);

        button.addEventListener('click', function(event) {
            let pokemonTarget = pokemon.pokemonTarget;
            showDetails(pokemon);
        });
    }

    function showDetails(pokemon) {
        loadDetails(pokemon).then(function() {
            showModal(pokemon);
        });
    }

    function loadList() {
        return fetch(pokemonApi).then(function(response) {
            return response.json();
        }).then(function(json) {
            json.results.forEach(function(item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
                // console.log(pokemon);
            });
        }).catch(function(e) {
            console.error(e);
        })
    }

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url)
            .then(function(response) {
                return response.json();
            })
            .then(function(details) {
                item.imageUrl = details.sprites.front_default;
                item.height = details.height;
                item.weight = details.weight;
                item.types = [];
                for (let i = 0; i < details.types.length; i++) {
                    item.types.push(' ' + details.types[i].type.name);
                }
            })
            .catch(function(e) {
                console.error(e);
            });
    }

    function showModal(text) {
        let modalTitle = document.querySelector('.modal-title');
        modalTitle.innerText = text.name;

        let modalBody = document.querySelector('.modal-body');
        modalBody.innerHTML = '';

        let imageElement = document.createElement('img');
        imageElement.src = text.imageUrl;

        let heightElement = document.createElement('p');
        heightElement.innerText = 'Height: ' + text.height;

        let weightElement = document.createElement('p');
        weightElement.innerText = 'Weight: ' + text.weight;

        let typesElement = document.createElement('p');
        typesElement.innerText = 'Types: ' + text.types;

        modalBody.append(imageElement);
        modalBody.append(heightElement);
        modalBody.append(weightElement);
        modalBody.append(typesElement);
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails,
        loadList: loadList,
        loadDetails: loadDetails,
        showModal: showModal
    };
})();
pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});