import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const Gallery = () => {
    return (
        <div className="main">
            <Container className='gallery-container' style={{ paddingBottom: '4em', paddingLeft: '10%', paddingRight: '10%', margin: '0 auto'}} >
                <Row>
                    <Col className="p-3">
                        <Image src="trailsbed.jpg" width={190} height={180} rounded />
                    </Col>
                    <Col className="p-3">
                        <Image src="trailskitchen.jpg" width={190} height={180} rounded />
                    </Col>
                    <Col className="p-3">
                        <Image src="trailsroom.jpg" width={190} height={180} rounded />
                    </Col>
                    <Col className="p-3">
                        <Image src="mbed.jpg" width={190}  height={180} rounded />
                    </Col>
                </Row>
                <Row>
                    <Col className="p-3">
                        <Image src="mkitchen.jpg" width={190} height={180} rounded />
                    </Col>
                    <Col className="p-3">
                        <Image src="mliving.jpg" width={190} height={180} rounded />
                    </Col>
                    <Col className="p-3">
                        <Image src="pitt.jpg" width={190} height={180} rounded />
                    </Col>
                    <Col className="p-3">
                        <Image src="foxchapel.jpg" width={190} height={180} rounded />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Gallery;