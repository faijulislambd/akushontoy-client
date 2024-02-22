// import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
// import ToyCard from "../../shared/Card/ToyCard";
// import { useEffect, useState } from "react";
// import { useContext } from "react";
// import { UserContext } from "../../../../Providers/AuthProvider";
// import Loader from "../../shared/Loader/Loader";
// import { LazyLoadComponent } from "react-lazy-load-image-component";
// import useTitle from "../../../hooks/useTitle";

const MyToys = () => {
  //   const { user } = useContext(UserContext);
  //   const [loadedToys, setLoadedToys] = useState([]);
  //   const [searchText, setSearchText] = useState("");
  //   const [loading, setLoading] = useState(true);
  //   const handleSearch = (e) => {
  //     e.preventDefault();
  //     setSearchText(e.target.search.value);
  //   };
  //   useTitle("My Toys");
  //   useEffect(() => {
  //     let url =
  //       searchText !== ""
  //         ? `http://localhost:5000/mytoys?uploaded_by=${user.email}&toy_name=${searchText}`
  //         : `http://localhost:5000/mytoys?uploaded_by=${user.email}`;
  //     fetch(url, {
  //       method: "GET",
  //       headers: {
  //         authorization: localStorage.getItem("toys-api-access-token"),
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setLoadedToys(data);
  //         setLoading(false);
  //       });
  //   }, [searchText]);
  //   if (loading) {
  //     return (
  //       <div className="d-flex align-items-center justify-content-center position-fixed bg-light vh-100 vw-100">
  //         <Loader></Loader>
  //       </div>
  //     );
  //   }
  //   return (
  //     <Container className="py-5">
  //       <h2 className="fw-bold fs-1 mb-4">My Toys Collection</h2>
  //       <div className="mb-4 bg-dark rounded-3 p-4">
  //         <Row className="justify-content-center align-items-center gap-2">
  //           <Col md={6}>
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
  //         </Row>
  //       </div>
  //       {loadedToys.length > 0 ? (
  //         <Row xs={1} md={3} className="g-4">
  //           {loadedToys.map((toy) => (
  //             <LazyLoadComponent key={toy._id}>
  //               <ToyCard toy={toy}></ToyCard>
  //             </LazyLoadComponent>
  //           ))}
  //         </Row>
  //       ) : (
  //         <h3 className="fs-1 text-center my-3">
  //           Sorry You Have not Added Any Toys Yet!
  //         </h3>
  //       )}
  //     </Container>
  //   );
};

export default MyToys;
