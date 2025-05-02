import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export default function AppContact() {
  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Contact us</h2>
          <div className="subtitle">get connected with us</div>
        </div>
        <Form>
          <Row>
            <Col sm={4}>
              <Form.Control
                type="text"
                placeholder="Enter your full name"
                required
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="email"
                placeholder="Enter your email address"
                required
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="phone"
                placeholder="Enter your contact number"
                required
              />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control
                as="textarea"
                placeholder="Enter your message here..."
              />
            </Col>
          </Row>
          <div className="btn-holder">
            <Button type="submit">Submit</Button>
          </div>
        </Form>
        <br></br>
      </Container>
      <div className="google-map">
        
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.6213180221507!2d81.59487027508719!3d21.24685988045761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28de0d042b2863%3A0x7cb4fdeca99ca23f!2sPt.%20Ravishankar%20Shukla%20University!5e0!3m2!1sen!2sin!4v1746169726505!5m2!1sen!2sin" 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Pt. Ravishankar Shukla University"/>

      </div>
      <Container fluid>
        <div className="contact-info">
          <ul>
            <li>
              <i className="fas fa-envelope"></i>
              anjalip@gmail.com
            </li>
            <li>
              <i className="fas fa-phone"></i>
              1234567890
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              Raipur C.G.
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
