import ListingMap from "./ListingMap";
function DetailedCard({ ClickedCardData }) {
  if (!ClickedCardData) return <p>Loading...</p>;
  return (
    <div>
      <div style={{ marginRight: "10px", border: "none",marginTop:"60px" }}>
        <b>{ClickedCardData.title}</b> <br /> <br />
        <img
          style={{ objectFit: "cover" }}
          src={`${ClickedCardData.image.url}`}
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
          <div>
            {ClickedCardData?.geometry != null &&<ListingMap lat={-37.8136} lng={144.9631} title="Test — Melbourne" />}
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailedCard;
