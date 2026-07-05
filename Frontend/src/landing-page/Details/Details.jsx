import DetailedCard from "./DetailedCard";
import ReviewCard from "./ReviewCard";
import Button from "../../Button";
import ReviewFrom from "./ReviewForm";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import "../home/Home.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Details() {
  const navigate = useNavigate();
  const [clickedCardData, setClickedCardData] = useState(null);
  const [review, setReview] = useState({ rating: 1, comment: "" });
  const { id } = useParams();

  async function fetchClickedCardData() {
    try {
      const res = await fetch(`http://localhost:8080/listings/detail/${id}`);
      const data = await res.json();
      setClickedCardData(data);
    } catch (err) {
      console.log("Error", err);
    }
  }
  async function deleteReview(reviewId) {
    try {
      const res = await fetch(
        `http://localhost:8080/listings/${id}/review/${reviewId}`,
        {
          method: "Delete",
          credential: "include",
        }
      );
      const result= await res.json()
      if(result.success){
        fetchClickedCardData()
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if (!id) return;
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

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:8080/listings/${id}/review`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(review),
      });
      let result = await res.json();
      console.log(result);
      if (result.success === true) {
        setReview({ rating: 1, comment: "" });
        fetchClickedCardData();
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  if (!clickedCardData) {
    return <p>...Loading</p>;
  }
  return (
    <div className="row">
      <div className=" col-5 offset-4 mt-3">
        <Navbar /> <br />
        <DetailedCard ClickedCardData={clickedCardData} />
        <br />
        <div className="d-flex gap-2">
          <Button variant="danger" size="md" onClick={handleEdit}>
            Edit
          </Button>
          <Button variant="danger" size="md" onClick={handleDelete}>
            Delete
          </Button>
        </div>
        <hr />
        <div>
          <ReviewFrom
            handleSubmit={handleSubmit}
            review={review}
            setReview={setReview}
          />
        </div>
        <hr />
        <div className="row p-0">
          {clickedCardData.reviews.map((ele) => {
            return (
              <div className="col-6  " key={ele._id}>
                <ReviewCard reviews={ele} deleteReview={deleteReview} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="col-12">
        <Footer />
      </div>
    </div>
  );
}

export default Details;
