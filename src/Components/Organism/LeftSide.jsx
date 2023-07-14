import TopLeftSide from "../Molecule/TopLeftSide"
import BottomLeftSide from "../Molecule/BottomLeftSide"

const LeftSide = () => {

    return (
        <div className="leftSide">
            <TopLeftSide />
            <div className="hingeAndBottom">
                <BottomLeftSide />
                <div className="hinge">
                    <div className="hingeBottom"></div>
                </div>
            </div>
        </div>
    )
}

export default LeftSide