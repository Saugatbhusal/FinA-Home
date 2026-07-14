import ListingMap from "./ListingMap";
function DetailedCard({ ClickedCardData }) {
  if (!ClickedCardData) return <p>Loading...</p>;
  return (
    <div>
      <div style={{ marginRight: "10px", border: "none",marginTop:"60px" }}>
        <b>{ClickedCardData.title}</b> <br /> <br />
        <img
          style={{ objectFit: "cover" }}
          src={`${ClickedCardData.image?.url || "https://thumbs.dreamstime.com/b/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available-236105299.jpg"}`}
          className="card-img-top"
          alt="image"
        />
        <br />
        <br />
        <div className="card-body">
          <div className="card-text">
            <p>
              {ClickedCardData.description} <br />
            </p>
            <p>
              {ClickedCardData.price}
              <br />
            </p>
            <p>
              {ClickedCardData.country}
              <br />
            </p>

            {ClickedCardData.location}
          </div>
          <hr />
          <div>
            <h4>Where you will be</h4>
            {ClickedCardData?.geometry != null &&<ListingMap lat={ClickedCardData.geometry.lat} lng={ClickedCardData.geometry.lng} title="Test — Melbourne" />}
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailedCard;
