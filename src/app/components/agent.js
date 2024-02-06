"use client"
import Card from 'react-bootstrap/Card';

const AgentCard = (props) => {
    return ( 
        <Card style={{ width: '16rem'}}>
            <Card.Img variant='top' height={350} style={{ backgroundSize: 'contain' }} src={props.image}/>
            <Card.Body>
                <Card.Title style={{ color: '#000', fontSize: '18px'}}>{props.title}</Card.Title>
                <Card.Text style={{ color: '#000', fontSize: '16px'}}>{props.email}</Card.Text>
            </Card.Body>
        </Card>
     );
}
 
export default AgentCard;