import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Pagination from "react-bootstrap/Pagination";
const worksData = [
    {
        id: 1,
        link: "https://www.google.com",
        image: require("../assests/images/img2.jpg"),
        title: "Urban Cruiser 2025",
        subtitle: "SUV",
    },
    {
        id: 2,
        link: "https://www.google.com",
        image: require("../assests/images/img3.jpg"),
        title: "Toyota Fortuner",
        subtitle: "SUV",
    },
    {
        id: 3,
        link: "https://www.google.com",
        image: require("../assests/images/img4.jpg"),
        title: "Mahindra Thar",
        subtitle: "Off-Road",
    },
    {
        id: 4,
        link: "https://www.google.com",
        image: require("../assests/images/img5.jpg"),
        title: "Mountain Roamer",
        subtitle: "Off-Road",
    },
    {
        id: 5,
        link: "https://www.google.com",
        image: require("../assests/images/img6.jpg"),
        title: "Hyundai Ioniq 5",
        subtitle: "Hybrid",
    },
    {
        id: 6,
        link: "https://www.google.com",
        image: require("../assests/images/img7.jpg"),
        title: "BMW M4",
        subtitle: "Sports Car",
    },
    {
        id: 7,
        link: "https://www.google.com",
        image: require("../assests/images/img8.jpg"),
        title: "Racer GT-X",
        subtitle: "Sports Car",
    },
    {
        id: 8,
        link: "https://www.google.com",
        image: require("../assests/images/img9.jpg"),
        title: "Mercedes-Benz E-Class",
        subtitle: "Luxury",
    },
    {
        id: 9,
        link: "https://www.google.com",
        image: require("../assests/images/img10.jpg"),
        title: "Sunset Voyager",
        subtitle: "Convertible",
    },
];


let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
    items.push(
        <Pagination.Item key={number} active={number === active}>
            {number}
        </Pagination.Item>
    );
}


export default function AppNewCars() {
    return (
        <div>
            <section id="newcars" className="block works-block">
                <Container fluid>
                    <div className="title-holder">
                        <h2>New Arrivals</h2>
                        <div className="subtitle"> Our Newly Arrived Cars </div>
                    </div>

                    <Row className="portfoliolist">
                        {worksData.map((works) => {
                            return (
                                <Col sm={4} key={works.id}>
                                    <div className="portfolio-wrapper">
                                        <a href={works.link}>
                                            <Image src={works.image} className="newcarimage"/>
                                            <div className="label text-center">
                                                <h3>{works.title}</h3>
                                                <p>{works.subtitle}</p>
                                            </div>
                                        </a>
                                    </div>
                                </Col>
                            );
                        })}
                    </Row>
                    <div>
                        <Pagination>{items}</Pagination>
                    </div>
                </Container>
            </section>

        </div>
    )
}