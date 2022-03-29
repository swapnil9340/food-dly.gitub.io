import React from 'react';
import organic from "../component/logo/organic.jpg"

function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-light bg-danger">
                <a className="navbar-brand" href="/">
                    <img src={organic} width="30" height="30" className="d-inline-block align-top" alt=""/>
                        Organic Food Resturant
               </a>
            </nav>
        </div>
    );
}

export default Navbar;