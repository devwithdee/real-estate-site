import Card from 'react-bootstrap/Card';


const LocationCard = (props) => {
    return ( 
        <Card>
            <Card.Img variant='top' style={{ width: '20em' }} src={props.image} width={props.width} height={props.height}/>
            <Card.Body>
                <Card.Title style={{ color: '#000', fontSize: '14px'}}>{props.title}</Card.Title>
                <Card.Text>{props.text}</Card.Text>
            </Card.Body>
        </Card>
     );
}
 
export default LocationCard;