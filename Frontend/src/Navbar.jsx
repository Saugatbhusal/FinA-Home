import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import {AuthContext} from "./authenticate/AuthProvider"
import "../src/landing-page/home/Home.css"
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate= useNavigate()
  const {user, setUser}=useContext(AuthContext)
  let username=user?.username
  
  async function handleLougout(){
   
    const res=await fetch("http://localhost:8080/auth/logout",{method:"POST",
      credentials:"include"
    })
    const response= await res.json()
    if(response.success){
      setUser(null)
 
    
    }
  }

  return <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/listings">icon</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="/listings">All listing</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2 nav-input" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success nav-btn" type="submit"><i className="fa-solid fa-magnifying-glass"></i>Search</button>
      </form>
      <div className="navbar-nav ms-auto">
      <a className="nav-link" href="/listings/new">Airbnb your home</a>
      {username? <button className="nav-link btn btn-link" onClick={handleLougout}>Log out</button>:(<>
        <Link className="nav-link" to="/login">Sign in</Link>
        <Link className="nav-link" to="/signup">Sign up</Link>
      </>) }
      
       
      </div>
    </div>
  </div>
</nav>
    

  ;
}

export default Navbar;
