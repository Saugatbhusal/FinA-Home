function SignupForm({ handleChange, handleSubmit, formdata }) {
  return (
    <div className=" row">
      <h1 className="col-6 offset-4 mt-4"> Welcome to FindA-Home</h1>
      <div className="col-4 offset-4 mt-4">
        <form
          action="/signup"
          onSubmit={handleSubmit}
          noValidate
          className="needs-validation"
        >
          <div className="mb-2">
            <label className="form-label " htmlFor="username">
              Username
            </label>
            <input
              type="text"
              name="username"
              className="form-control"
              value={formdata.name}
              onChange={handleChange}
              required
            />
            <div className="invalid-feedback">Enter a valid username</div>
          </div>
          <div className="mb-2">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formdata.email}
              required
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={formdata.password}
              onChange={handleChange}
              required
            />
            <div className="invalid-feedback">Enter a valid username</div>
          </div>
          <button className="btn-success" >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
