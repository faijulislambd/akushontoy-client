import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Carousel indicators={false}>
      <Carousel.Item>
        <div className="img-overlay">
          <img
            className="d-block w-100"
            src="https://i.ibb.co/XtyxgLJ/banner-10.jpg"
            alt="Banner One"
          />
        </div>
        <Carousel.Caption>
          <h3 className="fw-bold fs-2">Action Comics</h3>
          <p className="fs-5">Get your favorite action figures here</p>
          <Link to="/toys" className="btn btn-primary text-white fs-6">
            Let's Go!
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="img-overlay">
          <img
            className="d-block w-100"
            src="https://i.ibb.co/dctM1Bz/banner-20.jpg"
            alt="Second slide"
          />
        </div>
        <Carousel.Caption>
          <h3 className="fw-bold fs-2">Dragon Ball Z</h3>
          <p className="fs-5">Check out our latest dragon ball z collection</p>
          <Link to="/toys" className="btn btn-primary text-white fs-6">
            Let's Go!
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
