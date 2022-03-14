/*
1- Quando clicar no pokemonda listagem temos que esconder o cartao do pokemon aberto e mostrar o cartao correspodente ao que foi selecionado na listagem.

para isso vamos precisar trabalhar com dois elementos
1- listagem 
2- cartao pokemon


precisamos criar duas variáveis no JS para trabalhar com o elementos da tela

vamos precisar trablhar com o evento de clique feito pelo usuario na listagem de pokemons

remover a classe aberto só do cartao que está anerto
- ao clicar em um pokemon da listagem pegamos o idesse pokemon para saber qual cartao mostrar
-remover a classe ativo que marca o pokemon selecionado 
- adicionar a classe ativo no item da lista selecionado
*/

// criando duas variadaveis no JS para trabalhar com os elementos da tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon ')
//console.log(listaSelecaoPokemons)
const pokemonCard = document.querySelectorAll('.cartao-pokemon')
listaSelecaoPokemons.forEach(pokemon =>{
    // vamos precisar trablhar com o evento de clique feito pelo usuario na listagem de pokemons
    pokemon.addEventListener('click', ()=> {
        
        // remover a classe aberto só do cartao
        const cartaoPokemonAberto = document.querySelector('.aberto')
       cartaoPokemonAberto.classList.remove('aberto')
    

       // - ao clicar em um pokemon da listagem pegamos o idesse pokemon para saber qual cartao mostrar

       const idPokemonSelecionado = pokemon.attributes.id.value
        const idDoCartaoPokemonParaAbri = 'cartao-'+ idPokemonSelecionado
      const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbri)
        cartaoPokemonParaAbrir.classList.add('aberto')
        
      

        //removando o ATIVO do pokemon
       const pokemonAtivoNaListagem = document.querySelector('.ativo')
       pokemonAtivoNaListagem.classList.remove('ativo')

       
       const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
       pokemonSelecionadoNaListagem.classList.add('ativo')
    
    })

} )



