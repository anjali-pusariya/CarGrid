import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";

  const carTestimonials = [
    {
      id: 1,
      name: "Aarav Malhotra",
      description:
        "Car Grid helped me find the perfect SUV for my family. The platform is smooth and the featured listings are top-notch.",
      designation: "IT Professional",
    },
    {
      id: 2,
      name: "Sneha Reddy",
      description:
        "I loved how easy it was to compare models and prices. The website is clean and very user-friendly.",
      designation: "Marketing Executive",
    },
    {
      id: 3,
      name: "Rohit Sharma",
      description:
        "Amazing experience! The car I booked was exactly as described. Highly recommend Car Grid for anyone looking for a new vehicle.",
      designation: "Business Owner",
    },
  ];
  

export default function AppTestimonials() {
  return (
    <section id="testimonials" className="testimonials-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Client Testimonials</h2>
          <div className="subtitle">what client says about us</div>
        </div>

        <Carousel data-bs-theme="dark">
          {carTestimonials.map((testimonials) => {
            return (
              <Carousel.Item key={testimonials.id}>
                <blockquote>
                  <p>{testimonials.description}</p>
                  <cite>
                    <span className="name">{testimonials.name}</span>
                    <span className="designation">
                      {testimonials.designation}
                    </span>
                  </cite>
                </blockquote>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Container>
    </section>
  );
}
