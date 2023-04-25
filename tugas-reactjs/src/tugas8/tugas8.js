import React from "react";
import { useState } from "react";
import '../style.css'

const Tugas8 = () => {
    const [number, setNumber] = useState(0)

    const handleChangeCount = () => {
        setNumber(number + 1 )
    }


    return(
        <div className="card">
            <div className="container">
                <div className="number">
                    <p> {number} </p>
                </div>
                <div className="container__bottom">
                    <button onClick={handleChangeCount}>Tambah</button>
                </div>

                {number > 10 ? <p>State count sudah lebih dari 10!!</p> : ""}
            </div>
        </div>
    )

    

}

export default Tugas8;