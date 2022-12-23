import Carousel from 'react-bootstrap/Carousel';
import styles from '../styles/slug.module.css';

const DetailsPage = (props) => {
    return ( 
        <div className={styles.slide}>
            <Carousel className={styles.wrapper}>
            <Carousel.Item>
                <img
                    className='d-block w-100'
                    src={props.image1}
                />
            </Carousel.Item>
            <Carousel.Item>

                <img
                    className='d-block w-100'
                    src={props.image2}
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
                <li>{props.details[0]}</li>
                <li>{props.details[1]}</li>
                </ul>
            </div>
        </div>
     );
}
 
export default DetailsPage;