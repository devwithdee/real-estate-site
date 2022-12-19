import Link from 'next/link'
import { Nav, Button } from 'react-bootstrap';
import styles from '../styles/navbar.module.css';


const Navbar = () => {


    return (
        <Nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-xl">

                <img src="home.png" width={65} height={65}></img>

                <Link href='/' className="nav-link">
                    Home
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapse" aria-controls="navbars" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link href='/about' className="nav-link">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href='/features' className="nav-link">
                                Features
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href='/locations' className="nav-link">
                                Locations
                            </Link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Find Your Home
                            </a>
                            <ul class="dropdown-menu">
                                <li><Link href='/availability' className="nav-link">
                                    Availability
                                </Link></li>
                                <li><Link href='/login' className="nav-link">
                                    Apply
                                </Link></li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="navbar-nav px-3">
                        <li className="nav-item text-nowrap">
                            <Button className="nav-link text-light">
                                Contact
                            </Button>
                        </li>
                    </ul>
                </div >
            </div >
        </Nav >
    );
}

export default Navbar;