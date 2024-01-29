import { Link } from "react-router-dom";

function Nav(){
    return (
        <header>
            <nav className="container">
                <Link to="/"><h1>Lulini Workout</h1></Link>
            </nav>
        </header>
        
    )
}

export default Nav;