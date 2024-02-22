// import React, { useState } from "react";
// import {
//   Button,
//   Col,
//   Container,
//   Form,
//   InputGroup,
//   Pagination,
//   Row,
// } from "react-bootstrap";
// import { useLoaderData } from "react-router-dom";
// import ToyCard from "../../shared/Card/ToyCard";
// import { useEffect } from "react";
// import { LazyLoadComponent } from "react-lazy-load-image-component";
// import Loader from "../../shared/Loader/Loader";
// import useTitle from "../../../hooks/useTitle";

const Toys = () => {
  //   const toys = useLoaderData();
  //   const [loadedToys, setLoadedToys] = useState(toys);
  //   const [searchText, setSearchText] = useState("");
  //   const [priceSort, setPriceSort] = useState("");
  //   const [loading, setLoading] = useState(true);
  //   const [toyCount, settoyCount] = useState(0);
  //   const [currentPage, setCurrentPage] = useState(0);
  //   useTitle("All Toys");
  //   const handleSearch = (e) => {
  //     e.preventDefault();
  //     setSearchText(e.target.search.value);
  //   };
  //   useEffect(() => {
  //     const url =
  //       searchText === ""
  //         ? `http://localhost:5000/totalToys`
  //         : `http://localhost:5000/totalToys?toy_name=${searchText}`;
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         settoyCount(data.total_toys);
  //         console.log(data.total_toys);
  //       });
  //   }, [searchText]);
  //   useEffect(() => {
  //     const url =
  //       searchText === ""
  //         ? `http://localhost:5000/toys?price=${priceSort}`
  //         : `http://localhost:5000/toys?toy_name=${searchText}&price=${priceSort}`;
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setLoadedToys(data);
  //         setLoading(false);
  //         setCurrentPage(0);
  //       });
  //   }, [priceSort]);
  //   useEffect(() => {
  //     const url =
  //       priceSort === ""
  //         ? `http://localhost:5000/toys?toy_name=${searchText}`
  //         : `http://localhost:5000/toys?toy_name=${searchText}&price=${priceSort}`;
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setLoadedToys(data);
  //         setLoading(false);
  //         setCurrentPage(0);
  //       });
  //   }, [searchText]);
  //   useEffect(() => {
  //     const url = "http://localhost:5000/toys";
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setLoadedToys(data);
  //         setLoading(false);
  //       });
  //   }, []);
  //   const toysPerPage = 20;
  //   const totalPages = Math.ceil(toyCount / toysPerPage);
  //   const pageNumbers = [...Array(totalPages).keys()];
  //   // Pagination Call
  //   useEffect(() => {
  //     fetch(
  //       `http://localhost:5000/toys?page=${currentPage}&$limit=${toysPerPage}`
  //     )
  //       .then((res) => res.json())
  //       .then((data) => setLoadedToys(data));
  //     setLoading(false);
  //   }, [currentPage]);
  //   if (loading) {
  //     return (
  //       <div className="d-flex align-items-center justify-content-center position-fixed bg-light vh-100 vw-100 top-0">
  //         <Loader></Loader>
  //       </div>
  //     );
  //   }
  //   return (
  //     <Container className="py-5">
  //       <h2 className="fw-bold fs-1 mb-4">Our Toys Collection</h2>
  //       <div className="mb-4 bg-dark rounded-3 py-4">
  //         <Row className="justify-content-center align-items-center gap-2 p-3">
  //           <Col md={4}>
  //             <Form onSubmit={handleSearch}>
  //               <InputGroup>
  //                 <Form.Control
  //                   placeholder="Search By Toy Name"
  //                   aria-label="Toy Name"
  //                   aria-describedby="basic-addon2"
  //                   name="search"
  //                 />
  //                 <Button
  //                   variant="primary"
  //                   id="button-addon2"
  //                   className="text-white"
  //                   type="submit"
  //                 >
  //                   Search Toy
  //                 </Button>
  //               </InputGroup>
  //             </Form>
  //           </Col>
  //           <Col md={3}>
  //             <Form.Select
  //               name="category"
  //               onChange={(e) => {
  //                 setPriceSort(parseInt(e.target.value));
  //               }}
  //               defaultValue={priceSort}
  //             >
  //               <option value="">Sort By Price</option>
  //               <option value="1">Low Price</option>
  //               <option value="-1">Hight Price</option>
  //             </Form.Select>
  //           </Col>
  //         </Row>
  //       </div>
  //       <Row xs={1} md={3} className="g-4">
  //         {loadedToys.map((toy) => (
  //           <LazyLoadComponent key={toy._id}>
  //             <ToyCard toy={toy}></ToyCard>
  //           </LazyLoadComponent>
  //         ))}
  //       </Row>
  //       {toyCount > toysPerPage && (
  //         <Row className="pt-5">
  //           <Col md={12}>
  //             <Pagination className="justify-content-center">
  //               {pageNumbers.map((num) => (
  //                 <Pagination.Item
  //                   key={num}
  //                   active={num === currentPage}
  //                   onClick={() => {
  //                     setCurrentPage(num);
  //                     setLoading(true);
  //                   }}
  //                 >
  //                   {num + 1}
  //                 </Pagination.Item>
  //               ))}
  //             </Pagination>
  //           </Col>
  //         </Row>
  //       )}
  //     </Container>
  //   );
};

export default Toys;
