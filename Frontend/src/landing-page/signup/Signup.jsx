import { useState } from "react";
import SignupForm from "./SignupForm";
import { useNavigate } from "react-router-dom";


function Signup() {
  const navigate = useNavigate();
  const [formdata, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  function handleChange(event) {
    setFormData({ ...formdata, [event.target.name]: event.target.value });
  }
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/auth/signup", {
        method: "POST",
        credentials:"include",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata), // object to json
      });
      const result= await res.json()
      if (result.success) {
        navigate("/");
      }else{
        console.log(result.message)
      }
    } catch (error) {
      console.log("Error :", error);
    }
  }
  return (
    <div>


      <SignupForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formdata={formdata}
      />
    </div>
  );
}

export default Signup;
