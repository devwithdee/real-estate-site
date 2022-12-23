import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const Gallery = () => {
    return (
        <div className="main">
            <Container style={{ paddingBottom: '4em' }} >
                <Row>
                    <Col className="p-3">
                        <Image src="trailsbed.jpg" width={200} height={200} rounded />
                    </Col>
                    <Col className="p-3">
                        <Image src="trailskitchen.jpg" width={200} height={200} rounded />
                    </Col>
                    <Col className="p-3">
                        <Image src="trailsroom.jpg" width={200} height={200} rounded />
                    </Col>
                    <Col className="p-3">
                        <Image src="mbed.jpg" width={200}  height={200} rounded />
                    </Col>
                </Row>
                <Row>
                    <Col className="p-3">
                        <Image src="mkitchen.jpg" width={200} height={200} rounded />
                    </Col>
                    <Col className="p-3">
                        <Image src="mliving.jpg" width={200} height={200} rounded />
                    </Col>
                    <Col className="p-3">
                        <Image src="pitt.jpg" width={200} height={200} rounded />
                    </Col>
                    <Col className="p-3">
                        <Image src="foxchapel.jpg" width={200} height={200} rounded />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Gallery;