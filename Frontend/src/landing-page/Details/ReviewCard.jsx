import Button from "../../Button";
function ReviewCard({reviews,deleteReview }) {
  return (
    <>
      <div className="card m-2 p-2 "  >
        <div className="card-body">
          <h5 className="card-title">sam</h5>
          <p className="card-text">
            {reviews.comment}
          </p>
          <p className="card-text">
            {reviews.rating}
          </p>
          
            <Button variant="danger" size="small" children="Delete" onClick={()=>deleteReview(reviews._id)}/>
          
        </div>
      </div>
    </>
  );
}

export default ReviewCard;
