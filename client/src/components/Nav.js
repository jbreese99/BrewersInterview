import React from 'react'; 
import {Link} from 'react-router-dom';

function Nav() {
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark top">
            <div class="navbar-nav ml-auto">
                <Link to='/' className="nav-item nav-link active">Home</Link>
            </div>
        </nav>
    );
}

export default Nav;