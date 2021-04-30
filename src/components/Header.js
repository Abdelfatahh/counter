import React from 'react';
import {Link} from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <Link to="/" className="navbar-brand">React</Link>

                <Link to="/Users" className="nav-item nav-link">Users</Link>
                <Link to="/login" className="nav-item nav-link">Login</Link>
                <Link to="/todo" className="nav-item nav-link">Todo</Link>
               
            </nav>
        );
    }
}

export default Header;