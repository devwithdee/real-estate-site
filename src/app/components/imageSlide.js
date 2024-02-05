"use client"
import Carousel from 'react-bootstrap/Carousel';
import styles from '../styles/imageSlide.module.css';
import Image from 'next/image';

function Slide(props) {
    return (
        <div className={styles.slide}>
        <Carousel className={styles.wrapper}>
            <Carousel.Item interval={2500}>
                <Carousel.Caption>
                    <h3>{props.title_1}</h3>
                </Carousel.Caption>
                <Image
                    className='d-block w-100'
                    src={props.image_1}
                    alt={props.alt_1}
                    width={props.width}
                    height={props.height}
                />
            </Carousel.Item>
            <Carousel.Item interval={2500}>
            <Carousel.Caption>
                    <h3>{props.title_2}</h3>
                </Carousel.Caption>
                <Image
                    className='d-block w-100'
                    src={props.image_2}
                    alt={props.alt_2}
                    width={props.width}
                    height={props.height}
                />
            </Carousel.Item>
        </Carousel>
        </div>
    );
}

export default Slide;