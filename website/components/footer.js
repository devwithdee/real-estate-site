import styles from '../styles/footer.module.css'

const Footer = () => {
    return (
        <div>
        <div className={styles.footer}>
            <div className={styles.container}>
                <h1 className={styles.h1}>Contact</h1>
                <ul className={styles.ul1}>
                    <li className={styles.li}>
                        Locations: Pittsburgh, PA <br /> Fox Chapel, PA
                    </li>
                    <li className={styles.li}>
                        Phone: +1 (234)-567-8910
                    </li>
                    <li className={styles.li}>
                        Email: companyName@email.com
                    </li>
                </ul>
            </div>
            <div className={styles.container}>
                <h2 className={styles.h1}>Site Map</h2>
                <ul className={styles.ul2}>
                    <li className={styles.li}>Gallery</li>
                    <li className={styles.li}>Amentities</li>
                    <li className={styles.li}>Contact</li>
                </ul>
                <ul className={styles.ul2}>
                    <li className={styles.li}>Availability</li>
                    <li className={styles.li}>Apply</li>
                    <li className={styles.li}>Login</li>
                </ul>
            </div>
            <div className={styles.container}>
                <h3 className={styles.h1}>Disclaimer: </h3>
                <p className={styles.p}>All of the content on this site is fake.<br />All of the images used are from unsplash.</p>
            </div>
        </div>
        <div className={styles.container}>
        <h3 className={styles.h3}>Designed and Developed by Donna-Jo Bohl </h3>
    </div>
    </div>
    );
}

export default Footer;