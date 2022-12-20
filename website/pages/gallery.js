import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const Gallery = () => {
    return (
        <div className="main">
            <Container >
                <Row>
                    <Col className="p-3">
                        <Image src="image_1.jpg" width={200} height={200} rounded />
                    </Col>
                    <Col className="p-3">
                        <Image src="image_2.jpg" width={200} height={200} rounded />
                    </Col>
                    <Col className="p-3">
                        <Image src="image_3.jpg" width={200} height={200} rounded />
                    </Col>
                    <Col className="p-3">
                        <Image src="image_4.jpg" width={200}  height={200} rounded />
                    </Col>
                </Row>
                <Row>
                    <Col className="p-3">
                        <Image src="image_5.jpg" width={200} height={200} rounded />
                    </Col>
                    <Col className="p-3">
                        <Image src="image_6.jpg" width={200} height={200} rounded />
                    </Col>
                    <Col className="p-3">
                        <Image src="image_7.jpg" width={200} height={200} rounded />
                    </Col>
                    <Col className="p-3">
                        <Image src="image_8.jpg" width={200} height={200} rounded />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Gallery;