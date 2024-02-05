import { Button, Dropdown } from "react-bootstrap";
import styles from '../../../styles/searchbar.module.css'


const Search = () => {
    return ( 
    <div className={styles.container}>
        <Dropdown>
            <Dropdown.Toggle variant="secondary" className={styles.searchBtn} id="searchBedrooms">
                # of Bedrooms
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item>1 Bedroom</Dropdown.Item>
                <Dropdown.Item>2 Bedroom</Dropdown.Item>
                <Dropdown.Item>3 Bedroom</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
            <Dropdown.Toggle variant="secondary" className={styles.searchBtn} id="petFriendly">
                Pets
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item>Yes</Dropdown.Item>
                <Dropdown.Item>No</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
            <Dropdown.Toggle variant="secondary" className={styles.searchBtn} id="searchLocation">
                Location
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item>Fox Chapel</Dropdown.Item>
                <Dropdown.Item>Pittsburgh</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <Button variant="secondary" className={styles.goBtn} id="searchButton">Search</Button>
    </div>
        
     );
}
 
export default Search;