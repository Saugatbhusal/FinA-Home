import { useState } from "react";
import NewListForm from "./NewListForm";
import { useNavigate } from "react-router-dom";
import Footer from "../../Footer";

function NewAirbnb() {
  const [formdata, setFormdata] = useState({
    title: "",
    description: "",
    location: "",
    category:"",
    price: "",
  });
  const [imagefile,setImagefile]=useState(null)

// handleImage form input
  function handleImage(e){
    setImagefile(e.target.files[0])
    
  }
 
  const navigate = useNavigate();

  function handleChange(e) {
    setFormdata((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }
// image upload to cloudinary
  async function directUploads(file){
    const res= await fetch(`http://localhost:8080/listings/image/signature`, {credentials: "include"})
    
    const  {signature,timeStamp,apiKey,cloudname}= await res.json()
    const data=new FormData()
    data.append("file",file)
    data.append("signature",signature)
    data.append("timestamp",timeStamp)
    data.append("api_key",apiKey)

    const uploadim =await fetch(`https://api.cloudinary.com/v1_1/${cloudname}/image/upload`,{
      method:"POST",body:data
    })
    if(!uploadim.ok){
      const err= await uploadim.json()
      console.log(err.error?.message ||"upload failed")
      return
    }
    const result= await uploadim.json()
    return {
      url: result.secure_url, filename: result.public_id
    }
}
  async function handleSubmit(e) {
    e.preventDefault();
    let image=null
    if(imagefile){ image= await directUploads(imagefile)}

    const res = await fetch("http://localhost:8080/listings/new", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...formdata,image}),
    });
    if (!res.ok) {
      const data = await res.json();
      navigate("/error", { state: { message: data.error } });
      return;
    }else{
      navigate("/listings")
    }
  }
  return (
    <div>
      <div className="container">
        <NewListForm handleChange={handleChange} handleSubmit={handleSubmit} handleImage={handleImage} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default NewAirbnb;
