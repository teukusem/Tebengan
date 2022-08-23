import React, { useState } from "react";
import { ListGroup, Container, Modal, Pagination, Form } from "react-bootstrap";
import { data } from "../Component/fakeData";
import Navbar from "../Component/Navbar/Navbar";

function Repo() {
  const [show, setShow] = useState(false);
  const [detail, setDetail] = useState({});
  const [posts, setPosts] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  const handleClose = () => setShow(false);

  const handleShowDetail = (item) => {
    setDetail(item);
    setShow(true);
  };

  const totalData = data.length;
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginationPage = Math.ceil(totalData / postPerPage);

  const onChangePagination = (number) => {
    setCurrentPage(number);
  };

  let active = currentPage;
  let items = [];
  for (let number = 1; number <= paginationPage; number++) {
    items.push(
      <Pagination.Item
        onClick={() => onChangePagination(number)}
        key={number}
        active={number === active}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <>
      <Navbar />
      <Container>
        <div className="mt-3 d-flex justify-content-center">
          <input
            type="text"
            className="searchBar"
            placeholder="Search..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
        <ListGroup className="mt-3">
          {currentPosts
            ?.filter((item) => {
              if (searchTerm == "") {
                return item;
              } else if (
                item.nama.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return item;
              }
            })
            .map((item, index) => {
              return (
                <ListGroup.Item
                  variant="dark"
                  onClick={() => handleShowDetail(item)}
                  key={index}
                >
                  <span>{item.id}. </span>
                  <span>Repo : {item.nama}</span>
                  <br />
                  <span style={{ paddingLeft: "18px" }}>
                    Using : {item.language}
                  </span>
                </ListGroup.Item>
              );
            })}
        </ListGroup>
        <div className="d-flex mt-2">
          <Pagination>{items}</Pagination>
          <Form.Select
            size="sm"
            style={{ height: "38px" }}
            className="ms-2"
            value={postPerPage}
            onChange={(e) => setPostsPerPage(e.target.value)}
          >
            <option>Open this select menu</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">All</option>
          </Form.Select>
        </div>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Detail Repo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>Nama : {detail.nama}</h6>
          <h6>Bahasa yang digunakan : {detail.language}</h6>
          <h6>Description : {detail.deskripsi}</h6>
          <h6>Tanggal Di Buat : {detail.startDate}</h6>
          <h6>Tanggal Terakhir Di Perbaharui : {detail.endDte}</h6>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Repo;
