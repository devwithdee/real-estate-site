import { Button } from "react-bootstrap";
import Search from "../../components/searchbar";
import styles from '../../styles/trails.module.css';
import Link from 'next/link'
import AptListing from "../../components/apt";
import TrailsData from "../../utils/trailsdata";


const Trails = () => {

    const trailsData = TrailsData.map((data) => {
        return (
            <AptListing key={data.key}
                id={data.id}
                image={data.image[0]}
                title={data.title}
                price={data.price}
                availability={data.availability}
                slug={data.slug}
                width={100}
                height={200}
            />
        )
    })
    return (
        <div className={styles.container}>
            <Link href='/listings'>
                <Button className={styles.btn}>Back</Button>
            </Link>
            <div className={styles.wrapper}>
                <h1 style={{ fontWeight: '200', color: 'var(--brown)' }}>Trails Apartments</h1>
            </div>
            <div className={styles.aptWrapper}>
                {trailsData}
            </div>
        </div>
    );
}


export default Trails;
