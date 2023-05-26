import React, { useState } from "react";
import { useEffect } from "react";
import { Row, Tab, Tabs } from "react-bootstrap";
import ToyCard from "../../shared/Card/ToyCard";
import Loader from "../../shared/Loader/Loader";

const CategoryTab = ({ categories }) => {
  const [loadedToys, setLoadedToys] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]._id);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    selectedTabData();
  }, [selectedCategory]);

  const selectedTabData = async () => {
    const url = `https://akushontoy-server.vercel.app/toys?category=${selectedCategory}`;
    await fetch(url)
      .then((res) => res.json())
      .then((data) => setLoadedToys(data));
    setIsLoading(false);
  };

  const handleCategory = (eventKey) => {
    setSelectedCategory(eventKey);
  };

  return (
    <div>
      <h2 className="text-center mb-5">Collections By Our Top Category</h2>

      <Tabs
        defaultActiveKey="Category"
        id="category-tab"
        className="mb-3"
        onSelect={handleCategory}
        activeKey={selectedCategory}
        fill
      >
        {categories.map((category) => (
          <Tab
            eventKey={category._id}
            title={category._id}
            className="py-4"
            key={category._id}
          >
            {isLoading ? (
              <div className="d-flex align-items-center justify-content-center bg-light h-100 w-100">
                <Loader />
              </div>
            ) : (
              <Row xs={1} md={3} className="g-4 justify-content-center">
                {loadedToys.map((toy) => (
                  <ToyCard toy={toy} key={toy._id}></ToyCard>
                ))}
              </Row>
            )}
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default CategoryTab;
