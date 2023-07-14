const Cross = () => {


    return (
        <div className="cross">
            <div className="outerButtonsUpDown"></div>

            <div className="buttonsUpDown">
                <input className="crossButtons" type="button" value="U" />
                <input className="crossButtons" type="button" value="D" />
            </div>

            <div className="outerButtonsRightLeft"></div>

            <div className="buttonsRightLeft">
                <input className="crossButtons" type="button" value="L" />
                <input className="crossButtons" type="button" value="R" />
            </div>
        </div>
    )
}
export default Cross