import React from "react";
import { useState } from 'react'
import burger from "../component/logo/burger.png"
import pza from "../component/logo/pza.png"
import cobo2 from "../component/logo/cobo2.png"
function Menu() {
    const [counter, setCounter] = useState(0);
    const pluse = () => {
        setCounter(count => count + 1)
    }
    const minues = () => {
        setCounter(count => count - 1)
    }
    const [counter2, setCounter2] = useState(0);
    const pluse2 = () => {
        setCounter2(count => count + 1)
    }
    const minues2 = () => {
        setCounter2(count => count - 1)
    }
    const [counter3, setCounter3] = useState(0);
    const pluse3 = () => {
        setCounter3(count => count + 1)
    }
    const minues3 = () => {
        setCounter3(count => count - 1)
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <div className="card" style={{ width: "15rem" }}>
                        <img className="card-img-top" src={burger} alt="logo" />
                        <spam className="text-center">frence </spam>
                        <spam className="text-center">price = 100 </spam>
                        <h5 className="text-center">Quantity = {counter}</h5>
                        <div className="btn-group " role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-secondary " onClick={pluse}>+</button>
                            <button type="button" className="btn btn-secondary" onClick={minues}>-</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm">
                    <div className="card" style={{ width: "15rem" }}>
                        <img className="card-img-top" src={pza} alt="logo" />
                        <spam className="text-center">frence </spam>
                        <spam className="text-center">price = 100 </spam>
                        <h5 className="text-center"> Quantity= {counter2}</h5>
                        <div className="btn-group " role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-secondary " onClick={pluse2}>+</button>
                            <button type="button" className="btn btn-secondary" onClick={minues2}>-</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm">
                    <div className="card" style={{ width: "15rem" }}>
                        <img className="card-img-top" src={cobo2} alt="logo" />
                        <spam className="text-center">frence </spam>
                        <spam className="text-center">price = 100 </spam>
                        <h5 className="text-center"> Quantity= {counter3}</h5>
                        <div className="btn-group " role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-secondary " onClick={pluse3}>+</button>
                            <button type="button" className="btn btn-secondary" onClick={minues3}>-</button>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <h4 className="text-center">PLACE ORDER</h4>
            <div className="container text-center">
                <a href="/placeorder" className="btn btn-danger" role="button"> Click to order</a>
                </div>
        </div>

    );
}
export default Menu;