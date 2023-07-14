import AreaButtons from "./AreaButtons"
import PrincipalScreen from "./PrincipalScreen"
const ButtomLeftSide = () => {
    return (        
    <div className="bottomLeftSide">
        <div className="shadowBottom"></div>
        <div className="paddingLeftSide">
            <PrincipalScreen />
            <AreaButtons />
        </div>
    </div>
       
)
}

export default ButtomLeftSide