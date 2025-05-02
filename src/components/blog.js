import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import car1 from "../assests/images/mercedes-c-class.jpg"
import car2 from "../assests/images/ford-mustang.jpg"
import car3 from "../assests/images/toyota-supra.jpg"
const blogData = [
  {
    id: 1,
    image: car1,
    time: "02 May 2025",
    title: "Top 5 Cars for Urban Commuting",
    description:
      "Explore compact, fuel-efficient cars that are perfect for daily city driving and parking in tight spots.",
    link: "/blog/urban-commuting-cars",
  },
  {
    id: 2,
    image: car2,
    time: "25 Apr 2025",
    title: "Car Maintenance Saves You Money",
    description:
      "Regular servicing, oil changes, and tire care can help avoid major expenses later.",
    link: "/blog/car-maintenance-tips",
  },
  {
    id: 3,
    image: car3,
    time: "18 Apr 2025",
    title: "2025’s Hottest New Car Models",
    description:
      "A sneak peek into the most exciting and tech-packed car models launching this year.",
    link: "/blog/new-car-models-2025",
  },
];

export default function AppBlog() {
  return (
    <section id="blog" className="block blog-block">
      <Container fluid>
        <div className="title-holder">
          <h2>latest from blog</h2>
          <div className="subtitle"> get our latest news from blog</div>
        </div>

        <Row>
          {blogData.map((blog) => {
            return (
              <Col sm={4} key={blog.id}>
                <div className="holder">
                  <Card className="cardBlog">
                    <Card.Img variant="top" src={blog.image} className="cardImgBlog"/>
                    <Card.Body>
                      <time>{blog.time}</time>
                      <Card.Title>{blog.title}</Card.Title>
                      <Card.Text>{blog.description}</Card.Text>
                      <a href={blog.link} className="btn btn-primary" >
                        Read More
                      </a>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
      ;
    </section>
  );
}
