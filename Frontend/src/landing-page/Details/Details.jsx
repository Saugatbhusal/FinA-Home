import DetailedCard from "./DetailedCard";
import ReviewCard from "./ReviewCard";
import Star from "./Star";
import Comment from "./Comment";
import Button from "../../Button";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import "../home/Home.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Details() {
  const navigate = useNavigate();
  const [clickedCardData, setClickedCardData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    async function fetchClickedCardData() {
      try {
        const res = await fetch(`http://localhost:8080/listings/detail/${id}`);
        const data = await res.json();
        setClickedCardData(data);
      } catch (err) {
        console.log("Error", err);
      }
    }
    fetchClickedCardData();
  }, [id]);

  async function handleDelete() {
    try {
      const res = await fetch(`http://localhost:8080/listing/${id}`, {
        method: "DELETE",
        credential: "include",
      });
    } catch (error) {
      console.log(error);
    }
  }
  function handleEdit() {
    navigate(`/listing/edit/${id}`);
  }
  return (
    <div className="row">
      <div className=" col-5 offset-4 mt-3">
        <Navbar/> <br />
        <DetailedCard ClickedCardData={clickedCardData} />
        <br />
        <div className="d-flex gap-2">
          <Button variant="danger" size="md">
            Edit
          </Button>
          <Button variant="danger" size="md" onClick={handleDelete}>
            Delete
          </Button>
        </div>
        <hr />
      </div>
      <div className=" col-6 offset-4">
        <Comment />
      </div>
     
      <div className="col-12">
    <Footer/>
      </div>
    </div>
  );
}

export default Details;
