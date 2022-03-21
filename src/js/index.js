//precisamos criar 2 variáveis no JS para trabalhar com os elementos da tela

const listaSelecaoPokemons = document.querySelectorAll ('.pokemon')

const pokemonsCard = document.querySelectorAll ('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        
        const cartaoPokemonAberto = document.querySelector ('.aberto')
        cartaoPokemonAberto.classList.remove ('aberto')

        const idPokemonSelecionado = pokemon.attributes.id.value

        const idPokemonParaabrir = 'cartao-'+ idPokemonSelecionado

        const cartaoPokemonParaAbrir = document.getElementById ('cartao-'+ idPokemonSelecionado)
        cartaoPokemonParaAbrir.classList.add('aberto')

        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')

    })
})
      
    

