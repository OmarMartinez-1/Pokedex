import { requestEach } from '../../api/requestPokeApi'
import { useState, useEffect } from 'react'
import ElementGridPokemons from '../Atom/ElementGridPokemons'

const ViewPokemons = () => {
    const [dataPokemons, setDataPokemons] = useState([])

    const bringData = async () => {
        try {
            const arrayPokemons = await requestEach()
            
            setTimeout(() => {
                setDataPokemons(arrayPokemons)
            },160)

            
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        bringData()

    }, [])



    return (

        <div className="viewPokemons">
            {
                dataPokemons.map((pokemon) => {
                    return <ElementGridPokemons
                        key={pokemon.id}
                        img={pokemon.sprites.front_default}
                        name={pokemon.name}
                        id={pokemon.id} />
                })
            }
        </div>
    )

}

export default ViewPokemons