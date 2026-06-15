import "./Home.css";
function FilterIcons() {
  return (
    <div className="filters-constainer">
      <div id="filters">
        <div className="filter">
          <div>
            <i className="fa-solid fa-fire"></i>
          </div>
          <p>Trending</p>
        </div>
        <div className="filter">
          <div>
            <a href="/listings">
              <i className="fa-solid fa-bed"></i>
            </a>
          </div>
          <p>Rooms</p>
        </div>
        <div className="filter">
          <div>
            <a href="/listings/filtered/?place=Mountain">
              <i className="fa-solid fa-mountain-city"></i>
            </a>
          </div>
          <p>Mountain City</p>
        </div>
        <div className="filter">
          <div>
            <a href="/listings/filtered/?place=Mountain">
              <i className="fa-solid fa-mountain"></i>
            </a>
          </div>
          <p>Mountains</p>
        </div>
        <div className="filter">
          <div>
            <a href="/listings/filtered/?place=Castle">
              <i className="fa-brands fa-fort-awesome"></i>
            </a>
          </div>
          <p>Castle</p>
        </div>
        <div className="filter">
          <div>
            <a href="/listings/filtered/?place=Beach">
              <i className="fa-solid fa-umbrella-beach"></i>
            </a>
          </div>
          <p>Beach</p>
        </div>
        <div className="filter">
          <div>
            <a href="/listings/filtered/?place=Camping">
              <i className="fa-solid fa-tent"></i>
            </a>
          </div>
          <p>Camping</p>
        </div>
        <div className="filter">
          <div>
            <a href="/listings/filtered/?place=Village">
              <i className="fa-solid fa-tractor"></i>
            </a>
          </div>
          <p>Village</p>
        </div>
        <div className="filter">
          <div>
            <a href="/listings/filtered/?place=Amazon">
              <i className="fa-solid fa-cloud-showers-water"></i>
            </a>
          </div>
          <p>Amazon</p>
        </div>
        <div className="filter">
          <div>
            <a href="/listings/filtered/?place=Dome">
              <i className="fa-solid fa-igloo"></i>
            </a>
          </div>
          <p>Dome</p>
        </div>
        <div className="tax-toggle">
          <div className="form-check-reverse form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="switchCheckDefault"
            />
            <label className="form-check-label" htmlFor="switchCheckDefault">
              Display total after taxes
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterIcons;
