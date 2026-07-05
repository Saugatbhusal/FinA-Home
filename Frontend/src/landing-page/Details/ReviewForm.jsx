function ReviewFrom({ handleSubmit, review, setReview }) {
  return (
    <form >
      <div>
        <div>
          <label htmlFor="rating" className="form-lable">
            Rating
          </label>
          <br />
          <input
            type="range"
            name="rating"
            min={0}
            max={5}
            id="rating"
            value={review.rating}
            onChange={(e)=>setReview((prev)=>({...prev,rating:Number(e.target.value)}))}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="comment" className="form-label">
            Comment
          </label>
          <textarea
            name="comment"
            id="comment"
            value={review.comment}
            onChange={(e)=>setReview((prev)=>({...prev,comment:e.target.value}))}
            className="form-control"
            required
          ></textarea>
          <div className="invalid-feedback">
            Needs comment before submission
          </div>
        </div>
        <button className="btn btn-outline-dark" type="submit"  onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewFrom;
