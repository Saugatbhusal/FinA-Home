import Button from "../../Button";

function EditForm({listingData,handleEditSubmit,handleChange}) {
  return (
    <div className="row mt-5">
      <div className="col-6 offset-3">
        <form onSubmit={handleEditSubmit}>
          <div className="form-group mb-3">
            <h2> Add your Place</h2>
            <label htmlFor="exampleFormControlInput1">Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={listingData.title}
              onChange={handleChange}
              id="title"
              placeholder="Bakingum place"
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="exampleFormControlInput1">Description</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              name="description"
              value={listingData.description}
              onChange={handleChange}
              rows="3"
            ></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="category">
              Category
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              name="category"
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Choose...
              </option>
              <option value="Dome">Dome</option>
              <option value="Beach">Beach</option>
              <option value="Castel">Castel</option>
              <option value="Camping">Camping</option>
              <option value="Village">Village</option>
              <option value="Amazon">Amazon</option>
              <option value="Mountain">Mountain</option>
            </select>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="exampleFormControlInput1">Location</label>
            <input
              type="text"
              className="form-control"
              name="location"
              value={listingData.location}
              onChange={handleChange}
              id="title"
              placeholder="Bakingum place"
            />
          </div>
          <br />
          <div className="form-group mb-3">
            <label htmlFor="exampleFormControlFile1">Example file input</label>
            <br />
            <input
              type="file"
              name="image"
              onChange={handleChange}
              className="form-control-file"
              id="exampleFormControlFile1"
            />
          </div>
          <div className="row">
            <div className="col col-md-8">
              <label htmlFor="exampleFormControlTextarea1">Enter the price</label>
              <input
                className="form-control"
                name="price"
                value={listingData.price}
                onChange={handleChange}
                placeholder="150"
              />
            </div>
            <div className="col col-md-4">
              <label htmlFor="exampleFormControlTextarea1">Country</label>
              <input
                className="form-control "
                name="country"
                value={listingData.country}
                onChange={handleChange}
                placeholder="Australia"
              />
            </div>
          </div>
          <div className="mt-3">
          <Button  variant="danger" size="md" >
            Submit
          </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditForm;
