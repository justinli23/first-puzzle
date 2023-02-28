import { useState, useEffect } from "react"
import bluesquare from "../../assets/bluesquare.png"
// import whitesquare from "../../assets/whitesquare.png"

function Square1() {

    const [value, setValue] = useState(0);
    
    function handleValue (event) {
        setValue(event.target.value)
    }

    return (
        <div className="square">
            <p>
                {value}
            </p>
            <form>
                <input type="number"
                min="0"
                max="9"
                value={value}
                onChange={handleValue}
                className="value"
                />
            </form>
        </div>
    )

}

export default Square1