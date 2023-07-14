import { useState, useEffect } from "react"
import { dangerousRequest } from "../../api/requestPokeApi"
import ElementGridPokemons from "../Atom/ElementGridPokemons"



const DangerousPokemons = ({ isActive }) => {

    const [dataDangerous, setDataDangerous] = useState([])


    useEffect(() => {
        const isFetched = false
        if (!isFetched) {
            if (isActive) {
                const fetching = async () => {
                    const arrayDangerous = await dangerousRequest(51)
                    setDataDangerous(arrayDangerous)
                }
                fetching()

                return (() => {
                    return (
                        !isFetched,
                        !isActive
                    )
                })
            }
        }
    }, [isActive])


    return (
        <div className="dangerousPokemon">
            {dataDangerous.map((danger) => {
                return (
                    <ElementGridPokemons
                        key={danger.id}
                        img={danger.sprites.front_default}
                        id={danger.id}
                        name={danger.name} />
                )
            })}
        </div>
    )
}

export default DangerousPokemons