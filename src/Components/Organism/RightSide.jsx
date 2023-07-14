import { useState } from "react"
import ViewPokemons from "../Molecule/ViewPokemons"
import DangerousPokemons from "../Molecule/DangerousPokemons"


const RightSide = () => {
    const [isActive, setIsActive] = useState(true)

    const onActive = (id) => {

        setIsActive(() => id)
        console.log(isActive)
    }

    return (
        <div className="rightSide">
            <div className="borderShadowRight">
                <div className="paddingRightSide">
                    <div className="screenInformation"></div>
                    <ViewPokemons />
                    <DangerousPokemons isActive={isActive} />

                    <div className="buttonsPower">
                        <input className="turnOff" type="button" value="" onClick={() => { onActive(false) }} />
                        <input className="turnOn" type="button" value="" onClick={() => { onActive(true) }} />
                    </div>
                    <input className="inputSearchId" type="number" placeholder="Serch by id:" />
                    <input className="inputSearchName" type="text" placeholder="Serch by name:" />

                </div>
            </div>
        </div>
    )
}

export default RightSide