import Slide from "../components/imageSlide";
import styles from '../styles/features.module.css';
import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Amenities = () => {

    const [key, setKey] = useState('community');


    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Amenities</h1>

            <div className={styles.container}>

                <div className={styles.textContainer}>

                    <Tabs
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                    >
                        <Tab eventKey="community" title=" Community Amenities">
                            <ul className={styles.ul}>
                                <li>24/7 Fitness Center</li>
                                <li>Pet Park</li>
                                <li>Near Biking/Walking Trails</li>
                                <li>Close to public transportation</li>
                                <li>Garage Parking</li>
                            </ul>
                        </Tab>
                        <Tab eventKey="apartment" title="Apartment Amenities">
                            <ul className={styles.ul}>
                                <li>Stainless Steel Appliances</li>
                                <li>Furnished Apartments Available</li>
                                <li>Energy Efficient</li>
                                <li>Central Air</li>
                                <li>New Carpet</li>
                                <li>Hardwoord Floors</li>
                            </ul>
                        </Tab>
                        <Tab eventKey="pets" title="Pet Policy">
                            <ul className={styles.ul}>
                                <li>Cats, Dogs, Birds, Small Animals Welcome</li>
                                <li>Non-Refundable $200 pet deposit per pet due at move-in</li>
                                <li>Maximum 2 pets allowed</li>
                            </ul>
                        </Tab>
                    </Tabs>
                </div>
            </div>
            <Slide
                title_1=""
                image_1="fitness.jpg"
                alt_1="Fitness Amenities Photo"
                title_2=""
                image_2="stainlesskitchen.jpg"
                alt_2="Stainless Steel Appliance Amenities Photo"
            />
        </div >
    );
}

export default Amenities;