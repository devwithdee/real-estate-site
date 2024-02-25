import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
import styles from '../styles/slug.module.css';
import Link from 'next/link';
import { Button } from 'react-bootstrap';

const DetailsPage = (props) => {
    return (
        <div className={styles.slide}>
            <Carousel className={styles.wrapper}>
                <Carousel.Item>
                    <Image
                        className='d-block w-100'
                        src={props.image1}
                        alt=""
                        width={200}
                        height={400}
                    />
                </Carousel.Item>
                <Carousel.Item>

                    <Image
                        className='d-block w-100'
                        src={props.image2}
                        alt=""
                        width={200}
                        height={400}
                    />
                </Carousel.Item>
            </Carousel>
            <div className={styles.abtwrapper}>
                <h1>{props.location}</h1>
                <h2>{props.title}</h2>
                <Link href='/portal/application'>
                    <Button className={styles.btn} onClick={props.handleApply}>Apply</Button>
                </Link>
                <p>${props.price}</p>
                <p>Available on {props.availability}</p>
                <p>{props.about}</p>
                <ul className={styles.features}>
                    <li>Features:</li>
                    {props.features.map((feature, index) => (
                        <li key={index}>
                            {index < props.features.length - 1 ? `${feature},` : feature}
                        </li>
                    ))}
                </ul>
                <p>Bedrooms: {props.beds}</p>
                <ul className={styles.details}>
                    <li>{props.details1}</li>
                    <li>{props.details2}</li>
                </ul>
                <p>Unit: {props.unitnum}</p>
            </div>
        </div>
    );
}

export default DetailsPage;