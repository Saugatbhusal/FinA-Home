import { useState } from "react";
import LoginForm from "./LoginForm";
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import {AuthContext}  from "../../authenticate/AuthProvider"

function Login() {
    const navigate = useNavigate();
  
    const { setUser}=useContext(AuthContext)
    const[formdata,setFormdata]=useState({
        username:"",
        password:""
    })

    function handleChange(event){
        setFormdata(prevdata=>{
            return {...formdata, [event.target.name]:event.target.value}
        })
    }
   async function handleSubmit(event){
    event.preventDefault()
    console.log("1. handleSubmit called, formdata:", formdata);
        try {
            console.log("2. about to fetch");
            const res= await fetch("http://localhost:8080/auth/login",{
                method:"POST",
                credentials:"include",
                headers:{
                    "Content-Type":"application/json"
                },
               
                body:JSON.stringify(formdata)
            })
            console.log("3. fetch resolved, status:", res.status);
            const data= await res.json()
            console.log("4. parsed data:", data);
            if(data.success){
                setUser({
                    username:data.username
                })
                console.log("setuser changed")
                navigate("/")
            }else{
                console.log("failed")
            }
            
        } catch (error) {
            console.log(error)
        }
    }
    return ( <div>
        <LoginForm  handleChange={handleChange} handleSubmit={handleSubmit} formdata={formdata}/>
    </div> );
}

export default Login;
