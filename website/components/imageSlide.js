import Carousel from 'react-bootstrap/Carousel';
import styles from '../styles/imageSlide.module.css'

function Slide() {
    return (
        <div className={styles.slide}>
        <Carousel className={styles.wrapper}>
            <Carousel.Item interval={2500}>
                <Carousel.Caption>
                    <h3>Fox Chapel</h3>
                </Carousel.Caption>
                <img
                    className='d-block w-100'
                    src='foxchapel.jpg'
                    alt='foxchapel image'
                />
            </Carousel.Item>
            <Carousel.Item interval={2500}>
            <Carousel.Caption>
                    <h3>Pittsburgh</h3>
                </Carousel.Caption>
                <img
                    className='d-block w-100'
                    src='pitt.jpg'
                    alt='pittsburgh image'
                />
            </Carousel.Item>
        </Carousel>
        </div>
    );
}

export default Slide;