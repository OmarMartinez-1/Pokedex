import axios from 'axios'
const randomIndex = Math.floor((Math.random() * 1000) + 1)

const requestEach = async () => {
    const arrayPokemons = []
    let { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${randomIndex}&limit=10s`)
    const urlArray = data.results
    urlArray.map(async (randomPokemon) => {
        let { data } = await axios.get(randomPokemon.url)
        arrayPokemons.push(data)
    })
    return arrayPokemons
}

const requestByIdOrName = (dataSerch) => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${dataSerch}`)
}

const dangerousRequest = async (id) => {
    const url = []
    const arrayDangerous = []
    const response = await requestByIdOrName(id)
    const dataArray = response.data.types[0].type.url
    let myType = await axios.get(dataArray)
    const enemyType = myType.data.damage_relations.double_damage_from[0].url
    const { data } = await axios.get(enemyType)
    url.push(data.pokemon[0].pokemon.url)
    url.push(data.pokemon[8].pokemon.url)
    url.map(async (pokemonDangerous) => {
        let { data } = await axios.get(pokemonDangerous)
        arrayDangerous.push(data)
    })
    return arrayDangerous
}




export {
    requestEach,
    dangerousRequest,
    requestByIdOrName
}