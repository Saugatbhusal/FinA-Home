import { useEffect, useState } from "react";
import EditForm from "./EditForm";
import { useParams, useNavigate } from "react-router-dom";
import ApiFetch from "../../ApiFetch"

function Editpage() {
  const [listingDetail, setListingDetail] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const fectchDataForEdit = async () => {
    const result = await fetch(`http://localhost:8080/listings/edit/${id}`);
    const data = await result.json();
    if(result.status===401){
      navigate("/signup")
    }
    setListingDetail({
      title: data.title,
      description: data.description,
      price: data.price,
      location: data.location,
      country: data.country,
      image: data.image,
    }); // may be can be written in better ways
  };

  useEffect(() => {
    fectchDataForEdit();
  }, []);

  function handleChange(e) {
    setListingDetail((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }
  async function handleEditSubmit(e) {
    e.preventDefault();

    const res = await fetch(`http://localhost:8080/listings/${id}`, {
      method: "PUT",
      credential: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(listingDetail),
    });
    const data = await res.json();
    if (data.success) {
      navigate(`/listings/detail/${id}`);
    }
  }

  if (!listingDetail) {
    return <p>...Loading</p>;
  }

  return (
    <div>
      <EditForm
        listingData={listingDetail}
        handleEditSubmit={handleEditSubmit}
        handleChange={handleChange}
      />
    </div>
  );
}

export default Editpage;
