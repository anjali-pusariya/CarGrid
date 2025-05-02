import Carousel from 'react-bootstrap/Carousel';

var carData = [
    {
        id: 1,
        image: require("../assests/images/img-hero1.jpg"),
        title: "Drive Into the Future of Performance",
        description:
            "Experience next-level engineering and unmatched power. Our latest lineup blends innovation with elegance, delivering the ultimate driving thrill for every journey.",
        link: "https://www.google.com",
    },
    {
        id: 2,
        image: require("../assests/images/img-hero2.jpg"),
        title: "Luxury Meets the Open Road",
        description:
            "Feel the comfort of premium interiors and the confidence of cutting-edge safety features. Every detail is crafted for those who demand more from their car.",
        link: "https://www.facebook.com",
    },
    {
        id: 3,
        image: require("../assests/images/img-hero3.jpg"),
        title: "Unleash the Power Within",
        description:
            "From roaring engines to sleek aerodynamics, discover vehicles built to thrill. Get behind the wheel and feel the pulse of true performance.",
        link: "https://www.twitter.com",
    },
];


export default function AppCars() {
    return (
        <section id="home" className='hero-block'>
            <Carousel data-bs-theme="dark" className='carcarousel'>
                {
                    carData.map(car => {
                        return (
                            < Carousel.Item key={car.id} >
                                <img
                                    className="d-block w-100"
                                    src={car.image}
                                    alt={"Slide" + car.id}
                                />

                                <Carousel.Caption className="custom-caption">
                                    <h2>{car.title}</h2>
                                    <p>{car.description}</p>
                                    <a className='btn btn-primary' href={car.link}>
                                        Learn More <i className="fas fa-chevron-right"></i>
                                    </a>
                                </Carousel.Caption>

                            </Carousel.Item>
                        )
                    })
                }

            </Carousel>
        </section >
    )
}