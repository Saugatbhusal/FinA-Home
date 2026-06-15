import { useState } from "react";
import NewListForm from "./NewListForm";
import { useNavigate } from "react-router-dom";
import Footer from "../../Footer";

function NewAirbnb() {
  const [formdata, setFormdata] = useState({
    title: "",
    description: "",
    location: "",
    image: "",
    price: "",
  });
  const navigate = useNavigate();
  function handleChange(e) {
    setFormdata((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch("http://localhost:8080/listings/new", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    });
    if (!res.ok) {
      const data = await res.json();
      navigate("/error", { state: { message: data.error } });
      return;
    }
  }
  return (
    <div>
      <div className="container">
        <NewListForm handleChange={handleChange} handleSubmit={handleSubmit} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default NewAirbnb;
