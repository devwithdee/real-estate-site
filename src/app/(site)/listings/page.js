import LocationCard from '../../components/locationCard';
import styles from '../../styles/listings.module.css'
import Link from 'next/link'


const Listings = () => {
    return ( 
        <div className={styles.container}>
            <h1 className={styles.h1}>Listings</h1>
            <div className={styles.wrapper}>
            <Link href='/listings/trails'>
            <LocationCard 
            image="/pitt.jpg"
            title="Trails Apartments"
            width={100}
            height={200}
            text="Pittsburgh, PA"/>
            </Link>
            <Link href='/listings/meadows'>
            <LocationCard
            image="/foxchapel.jpg"
            width={100}
            height={200}
            title="Meadows Apartments"
            text="Fox Chapel, PA"/>
            </Link>
            </div>
        </div>
     );
}
 
export default Listings;