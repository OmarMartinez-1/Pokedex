import Cross from "../Atom/Cross"

const AreaButtons = () => {
    return (
        <div className="areaButtons">
            <input className="buttonInformation" type="button" value="" alt="traer información" />
            <div className="centerArea">
                <div className="buttonsPower">
                    <input className="turnOff" type="button" value="" />
                    <input className="turnOn" type="button" value="" />
                </div>

                <div className="screenEvolution">
                    
                </div>
            </div>
            <Cross />
        </div>
    )
}

export default AreaButtons