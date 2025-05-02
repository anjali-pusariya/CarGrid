import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Img1 from '../assests/images/img1.jpg'
import ProgressBar from 'react-bootstrap/ProgressBar';

const engine = 90;
const safety = 98;
const fuel = 82;
export default function AppAbout() {
    return (
        <section id='about' className='block about'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>About Us</h2>
                    <div className='subtitle'>Learn more about us</div>
                </div>
                <Row>
                    <Col><Image src={Img1} /></Col>
                    <Col>
                        <p>Welcome to CarVilla, your ultimate destination for premium cars, unbeatable service, and a driving experience like no other. Whether you're searching for luxury, performance, or everyday comfort, CarVilla brings you a handpicked selection of top-quality vehicles to match every lifestyle.</p>
                        <p>With a passion for excellence and a commitment to trust, we go beyond just selling cars — we build relationships that drive satisfaction. From expert guidance to hassle-free service, CarVilla is where your journey begins with confidence and class.</p>
                        <p><b>Discover the difference. Drive with CarVilla</b></p>
                        <div className='progress-block'>
                            <h4>Engine Performance</h4>
                            <ProgressBar now={engine} label={`${engine}%`} /></div>
                        <div className='progress-block'>
                            <h4>Safety Rating</h4>
                            <ProgressBar now={safety} label={`${safety}%`} /></div>
                        <div className='progress-block'>
                            <h4>Fuel Efficiency</h4>
                            <ProgressBar now={fuel} label={`${fuel}%`} /></div>
                        </Col>
                </Row>
            </Container>
        </section>
    )
}