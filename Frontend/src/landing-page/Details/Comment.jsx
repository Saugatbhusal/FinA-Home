function Comment() {
  return (
    <div className="mb-3">
      <label htmlFor="comment" className="form-label">
        Comment
      </label>
      <textarea
        name="review[comment]"
        id="comment"
        className="form-control"
        required
      ></textarea>
      <div className="invalid-feedback">Needs comment before submission</div>
    </div>
  );
}

export default Comment;
