import { useState } from "react"

function Pokemon() {

    const [pesquisa, setPesquisa] = useState()

    const [pokemon, setPokemon] = useState("vazio")

    const getPokemon = async () => {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemom/${nome}')

        setPokemon(response.data)

        console.log(pokemon)





    }
}




return(

    <div>

        <p><input type="text" onChange={(e) => setPesquisa(e.target.value)} /></p> <button onClick={getPokemon(pesquisa)}>pesquisar</button>

        { Pokemon === "vazio" ? 
            <h2>carregando...</h2>
        
        :

        <p>nome: {pokemon.name}</p>
        <p>peso: {pokemon.weight}</p>
        <p>altura: {pokemon.height}</p>
        

        }

    </div>

)

export default Pokemon