let pokemonRepository = (function () {
    let pokemonList = [];
    let pokemonApi = 'https://pokeapi.co/api/v2/pokemon/?limit=75';
    let modalContainer = document.querySelector('#modal-container');

    function getAll() {
        return pokemonList;
    }

    function add(pokemon) {
        if (typeof (pokemon) === 'object') {
            pokemonList.push(pokemon);
        } else {
            console.log('Wrong Pokemon');
        }
    }
    /*  function showDetails(pokemon) {
        console.log('showDetails ~ pokemon', pokemon)
      }
    */
    function showModal(name, height) {
        modalContainer.innerHTML = '';

        let modal = document.createElement('div');
        modal.classList.add('modal');

        let closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'X';
        closeButtonElement.addEventListener('click', hideModal)

        let pokemonTitle = document.createElement('h1');
        pokemonTitle.innerText = name;

        let pokemonInfo = document.createElement('p');
        pokemonInfo.innerText = height;

        modal.appendChild(closeButtonElement);
        modal.appendChild(pokemonTitle);
        modal.appendChild(pokemonInfo);
        modalContainer.appendChild(modal);

        modalContainer.classList.add('is-visible');
    }

    function hideModal() {
        let modalContainer = document.querySelector('#moda-container');
        modalContainer.classList.remove('is-visible');
    }

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' &&
            modalContainer.classList.contains('is-visible')) {
            hideModal();
        }
    });


    modalContainer.addEventListener('click', (e) => {
        let target = e.target;
        if (target === modalContainer) {
            hideModal();
        }
    });

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

    function loadList(item) {
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

    //This used to just display the pokemons details to the modal when clicked
    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            showModal(pokemon);
        });
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails,
        showModal: showModal,
        hideModal: hideModal,
    };
})();

pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon)
    });
});
