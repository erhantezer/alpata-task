
import { Link } from "react-router-dom"


const Navbar = () => {

    const currentUser = false;


    return (
        <nav style={{ backgroundColor: "lightgrey" }} className="navbar navbar-expand-lg" >
            <div className="container-fluid" style={{ display: "flex" }}>
                <Link style={{ color: "darkblue", flexGrow: "24" }} className="navbar-brand fs-3 fw-bold ms-3" to="/">
                    <img src="alpata.png" className="rounded float-start" style={{width:120}} alt="..."/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-bolder">
                        {currentUser ? (
                            <>
                                <li className="nav-item ">
                                    <Link className="nav-link active me-2" aria-current="page" to="/home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Logout</Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link me-2" to="/">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar