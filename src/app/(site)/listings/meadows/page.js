import { Button } from "react-bootstrap";
import styles from '../../../styles/meadows.module.css';
import Link from 'next/link';
import AptListing from "../../../components/apt";
import MeadowsData from "../../../lib/meadowsdata";


const Meadows = () => {
    const meadowsData = MeadowsData.map((data) => {
        return (
            <AptListing key={data.key}
                id={data.id}
                image={data.image[0]}
                title={data.title}
                price={data.price}
                availability={data.availability}
                loc={'meadows'}
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
            <h1 style={{ fontWeight: '200', color: 'var(--brown)' }}>Meadows Apartments</h1>
        </div>
        <div className={styles.aptWrapper}>
        {meadowsData}
            </div>
        </div>
     );
}
 
export default Meadows;