"use client"
import Card from 'react-bootstrap/Card';

const FeaturesCard = (props) => {
    return ( 
        <Card style={{ width: '20rem'}}>
            <Card.Img variant='top' src={props.image} width={props.width} height={props.height}/>
            <Card.Body>
                <Card.Title style={{ color: '#000', fontSize: '14px'}}>{props.title}</Card.Title>
            </Card.Body>
        </Card>
     );
}
 
export default FeaturesCard;