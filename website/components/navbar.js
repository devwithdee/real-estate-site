import Link from 'next/link'
import styles from '../styles/navbar.module.css'

const Navbar = () => {
    return ( 
        <div className={styles.container}>
        <div className={styles.wrapper}>
        <img src="home.png" width={65} height={65}></img>

            <Link href='/' className={styles.link}>
                Home
            </Link>
            <Link href='/about'  className={styles.link}>
                About
            </Link>
            <Link href='/features'  className={styles.link}>
                Features
            </Link>
            <Link href='/locations'  className={styles.link}>
                Locations
            </Link>
            <Link href='/availability'  className={styles.link}>
                Availability
            </Link>
            <Link href='/contact'  className={styles.link}>
                Contact
            </Link>
            <Link href='/login'  className={styles.link}>
                Login
            </Link>
            </div>
        </div>
     );
}
 
export default Navbar;