import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const servicesData = [
    {
        id: 1,
        icon: "fas fa-mobile-alt",
        title: "Responsive Design",
        description:
            "Our websites are optimized for all devices, ensuring a seamless browsing experience whether you're on a desktop, tablet, or smartphone.",
    },
    {
        id: 2,
        icon: "fas fa-lightbulb",
        title: "Creative Design",
        description:
            "We craft visually appealing and user-friendly designs that highlight your vehicle inventory and services, enhancing customer engagement.",
    },
    {
        id: 3,
        icon: "fas fa-search",
        title: "SEO Optimized",
        description:
            "Our SEO strategies improve your website's visibility on search engines, driving more traffic and potential customers to your dealership.",
    },
    {
        id: 4,
        icon: "fas fa-eye",
        title: "Retina Ready",
        description:
            "High-resolution images and graphics ensure your vehicles look stunning on all modern displays, attracting more attention from viewers.",
    },
    {
        id: 5,
        icon: "fas fa-globe",
        title: "Browser Compatibility",
        description:
            "Our websites function flawlessly across all major browsers, providing a consistent experience for every visitor.",
    },
    {
        id: 6,
        icon: "fas fa-headset",
        title: "Customer Support",
        description:
            "We offer dedicated support to assist you with any queries or issues, ensuring your online presence remains smooth and effective.",
    },
];

export default function AppServices() {
    return (
        <section id='services' className='block services-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2 >Our Services</h2>
                    <div className='subtitle'>Services we provide</div>
                </div>
                <Row>

                    {servicesData.map((services) => {
                        return (
                            <Col sm={4} className='holder' key={services.id}>
                                <div className='icon'><i className={services.icon}></i></div>
                                <h3>{services.title}</h3>
                                <p>{services.description}</p>
                            </Col>
                        )
                    }
                    )
                    }
                </Row>
            </Container>
        </section>
    )
}