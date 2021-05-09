import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <li class="navbar-brand">Salary Tracker</li>
                    
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link to="/"><li class="nav-item nav-link active">Home<span class="sr-only">(current)</span></li></Link>
                            <Link to="statement"><li class="nav-item nav-link">Statement</li></Link>
                            <Link to="analysis"><li class="nav-item nav-link">Analysis</li></Link>
                        </div>
                    </div>

                    <div class="navbar-nav">
                        <Link to="/logout"><li class="nav-item nav-link">Logout</li></Link>
                    </div>
                </nav>
            </div>
    )
};

export default Navbar;