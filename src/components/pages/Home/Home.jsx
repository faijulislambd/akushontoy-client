import React, { useState } from "react";
import "./Home.scss";
import Banner from "./Banner";
import { Container } from "react-bootstrap";
import Gallery from "./Gallery";
import CategoryTab from "./CategoryTab";
import { useEffect } from "react";
import Counter from "./Counter";
import Loader from "../../shared/Loader/Loader";
import CTA from "./CTA";
import "aos/dist/aos.css"; // You can also use <link> for styles
import useTitle from "../../../hooks/useTitle";
// ..

const Home = () => {
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(true);
  useTitle("Home");
  useEffect(() => {
    loadedCategories();
  }, []);

  const loadedCategories = async () => {
    await fetch("https://akushontoy-server.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
    setLoading(false);
  };
  if (loading) {
    return (
      <div className="d-flex align-items-center justify-content-center position-fixed bg-light vh-100 vw-100 top-0">
        <Loader></Loader>
      </div>
    );
  }

  return (
    <div>
      <section className="banner">
        <Banner></Banner>
      </section>
      <section className="py-6">
        <Container>
          <Gallery></Gallery>
        </Container>
      </section>
      <section className="py-6 bg-primary text-white">
        <Container>
          <CategoryTab categories={categories}></CategoryTab>
        </Container>
      </section>
      <section className="py-6" data-aos="fade-in">
        <Container>
          <Counter categories={categories}></Counter>
        </Container>
      </section>
      <section className="py-6 bg-primary text-white">
        <Container>
          <CTA></CTA>
        </Container>
      </section>
    </div>
  );
};

export default Home;
