import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
import styles from './styles/slug.module.css';


const DetailsPage = (props) => {
    return ( 
        <div className={styles.slide}>
            <Carousel className={styles.wrapper}>
            <Carousel.Item>
                <Image
                    className='d-block w-100'
                    src={props.image1}
                    alt=""
                    width={100}
                    height={300}
                />
            </Carousel.Item>
            <Carousel.Item>

                <Image
                    className='d-block w-100'
                    src={props.image2}
                    alt=""
                    width={100}
                    height={300}
                />
            </Carousel.Item>
        </Carousel>
            <div className={styles.abtwrapper}>
                <h1>{props.location}</h1>
                <h2>{props.title}</h2>
                <p>${props.price}</p>
                <p>Available on {props.availability}</p>
                <p>{props.about}</p>
                <p>{props.features}</p>
                <p>Bedrooms: {props.beds}</p>
                <ul className={styles.details}>
                <li>{props.details1}</li>
                <li>{props.details2}</li>
                </ul>
            </div>
        </div>
     );
}
 
export default DetailsPage;