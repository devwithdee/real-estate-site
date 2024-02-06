"use client"
import Link from 'next/link'
import { Nav } from 'react-bootstrap';
import styles from '../styles/navbar.module.css';
import Image from 'next/image';
import { useAccount } from '../../../context/account';

const Navbar = () => {

    const { isLoggedIn, setIsLoggedIn } = useAccount();

    const logout = () => {
        setIsLoggedIn(false);
    };

    return (
        <Nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-xl">
                <Link href='/' className="nav-link">
                    <Image src="/logo.png" width={65} height={65} alt='logo' ></Image>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapse" aria-controls="navbars" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link href='/gallery' className="nav-link">
                                Gallery
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href='/features' className="nav-link">
                                Amenities
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href='/listings' className="nav-link">
                                Availability
                            </Link>
                        </li>
                        <li className="nav-item text-nowrap">
                            <Link href='/contact' className="nav-link">
                                Contact
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            {isLoggedIn ?
                                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Hello, User!
                                </a> :
                                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Login
                                </a>
                            }
                            {isLoggedIn ?
                                <ul className={`dropdown-menu ${styles.dropdown}`}>
                                    <li><Link href='/portal/account' className="nav-link">
                                        View Account
                                    </Link></li>
                                    <li><button className={styles.btn} onClick={logout}>Logout</button></li>
                                </ul> :
                                <ul className="dropdown-menu">
                                    <li><Link href='/portal/login' className="nav-link">
                                        Login
                                    </Link></li>
                                    <li><Link href='/portal/applicant' className="nav-link">
                                        Create Account
                                    </Link></li>
                                </ul>
                            }
                        </li>
                    </ul>

                    <ul className="navbar-nav px-3">
                        <li className="nav-item text-nowrap">
                            <Link href='#' className="nav-link">
                                +1(234)-567-8910
                            </Link>
                        </li>
                    </ul>
                </div >
            </div>
        </Nav >
    );
}

export default Navbar;