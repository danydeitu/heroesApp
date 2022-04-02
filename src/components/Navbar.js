import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { types } from '../types';

export const Navbar = () => {

    const navigate = useNavigate()

    const {user, dispatch} = useContext(AuthContext);
    const {name} = user;

    const handleLogout = () => {

        dispatch({
            type : types.logout,
            payload : null
        });

        navigate('/login')

    }

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Heroes App</Link>
             
                <div className="navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink
                            className="nav-link"
                            to="/marvel"
                        >Marvel
                        </NavLink>
                        <NavLink
                            className="nav-link"
                            to="/dc"
                        >DC Comics
                        </NavLink>
                        <NavLink
                            className="nav-link"
                            to="/search"
                        >Search
                        </NavLink>
                    </div>
                </div>
              

            </div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ms-auto">
                    <p className="nav-item nav-link text-info mb-0">
                        {name}
                    </p>
                    <button
                        className="nav-item nav-link border-0 bg-transparent"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>

    );
};
