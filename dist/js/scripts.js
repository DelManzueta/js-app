let pokemonRepository = (function() {
    let pokemonList = []
    let pokemonApi = 'https://pokeapi.co/api/v2/pokemon/?limit=15';

    function getAll() {
        return pokemonList;
    }

    function add(pokemon) {
        if (typeof(pokemon) === 'object') {
            pokemonList.push(pokemon);
        } else {
            console.log('Wrong Pokemon');
        }
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

    function loadList() { //pulling from pokeapi json file 
        return fetch(pokemonApi).then(function(response) { // pulls declared var converts to response function
            return response.json(); //function now attached with json...pulling json specific from url  
        }).then(function(json) {
            json.results.forEach(function(item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
                //console.log(pokemon);
            });
        }).catch(function(e) {
            console.error(e);
        })
    }

    function loadDetails(item) {
        let apiUrl = item.detailsUrl; // pulls from loadlist function output 
        return fetch(apiUrl)
            .then(function(response) { // follow above
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

    function showModal(modalCopy) { // changed from pokemon, remove all bottom-modal is being brought in from bootstrap.all you need to to do is add the info

        //now this is where the info from the json will be displayed
        let modalTitle = document.querySelector('.modal-title'); //will pull the style in html where modal-title class is present
        modalTitle.innerText = modalCopy.name //will apply style to data received from json

        let modalBody = document.querySelector('.modal-body');
        modalBody.innerHTML = ''; //clears all syntax modal-body class 

        let modalImg = document.createElement('img');
        modalImg.src = modalCopy.imageUrl; // get the url of the external script file

        let pokeHeight = document.createElement('p');
        pokeHeight.innerText = 'Height: ' + modalCopy.height;

        let pokeWeight = document.createElement('p');
        pokeWeight.innerText = 'Weight: ' + modalCopy.weight;

        let pokeTypes = document.createElement('p');
        pokeTypes.innerText = 'Types: ' + modalCopy.types

        let pokeMoves = document.createElement('p');
        pokeMoves.innerText = 'Moves: ' + modalCopy.moves

        modalBody.append(modalImg);
        modalBody.append(pokeHeight);
        modalBody.append(pokeWeight);
        modalBody.append(pokeTypes);
        modalBody.append(pokeMoves)

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