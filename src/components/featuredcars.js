import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import car1 from "../assests/images/tesla-model-s.jpg"
import car2 from "../assests/images/bmw-m3.jpg"
import car3 from "../assests/images/audi-a6.jpg"
import car4 from "../assests/images/mercedes-c-class.jpg"
import car5 from "../assests/images/ford-mustang.jpg"
import car6 from "../assests/images/toyota-supra.jpg"
import car7 from "../assests/images/chevrolet-camaro.jpg"
import car8 from "../assests/images/porsche-911.jpg"



const featuredCarsData = [
    {
        id: 1,
        image: car1,
        model: "Tesla Model S",
        price: "$89,990",
        description: "An all-electric luxury sedan with top-tier performance and advanced features.",
        rating: 4.9,
    },
    {
        id: 2,
        image: car2,
        model: "BMW M3",
        price: "$72,800",
        description: "A high-performance sports sedan with precision engineering and iconic design.",
        rating: 4.7,
    },
    {
        id: 3,
        image: car3,
        model: "Audi A6",
        price: "$58,900",
        description: "A perfect blend of luxury, technology, and performance in a midsize sedan.",
        rating: 4.6,
    },
    {
        id: 4,
        image: car4,
        model: "Mercedes-Benz C-Class",
        price: "$46,000",
        description: "Compact luxury at its best, with refined style and innovative features.",
        rating: 4.8,
    },
    {
        id: 5,
        image: car5,
        model: "Ford Mustang",
        price: "$42,000",
        description: "A classic American muscle car known for its power and iconic design.",
        rating: 4.5,
    },
    {
        id: 6,
        image: car6,
        model: "Toyota Supra",
        price: "$45,000",
        description: "A sporty coupe with thrilling performance and a striking look.",
        rating: 4.6,
    },
    {
        id: 7,
        image: car7,
        model: "Chevrolet Camaro",
        price: "$41,295",
        description: "Aggressive design, great handling, and high horsepower options.",
        rating: 4.4,
    },
    {
        id: 8,
        image: car8,
        model: "Porsche 911",
        price: "$114,400",
        description: "Legendary sports car offering unmatched driving dynamics and prestige.",
        rating: 5.0,
    },
];


export default function AppFeaturedCars() {
    return (
        <section id="featuredcars" className="block teams-block">
            <Container fluid>
                <div className="title-holder">
                    <h2>Featured Cars</h2>
                    <div className="subtitle">Checkout The Featured Cars</div>
                </div>
                <Row>
                    {featuredCarsData.map((cars) => {
                        return (
                            <Col sm={3} key={cars.id}>
                                <div className="feaCarsImg">
                                    <img src={cars.image} alt="FeaturedCarImage" />
                                </div>
                                <br></br>
                                <div className="content" id='feaCon'>
                                    <h3>{cars.model}</h3>
                                    <span className="designation">{cars.price}</span>
                                    <p>{cars.description}</p>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </section>
    );
}