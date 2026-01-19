import { useState } from "react"
import ButtonComponents from "../components/Button"
import { Header } from "../components/Header"
import InputBox from "../components/InputBox"
import axios from "axios"


export const Signin=()=>{
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const  handle= async ()=>{
    try {
   const response =await axios({
    method:"POST",
    url:"http://localhost:3000/api/v1/signin",
    data: {
        email:email,
        password:password
    },
    headers:{'Content-Type':"application/json"}
    }) 
    if(!response){alert("Response not get")}
    if(response){alert("signIn sucesfully")
        localStorage.setItem("token",response.data.token);
        setEmail("")
        setPassword("")
    }

     } catch (error) {
      console.log(error)
      alert(error)      
     }
    }
    return <div className="h-screen bg-white flex justify-center items-center">
        <div className="flex flex-col bg-white border items-center p-4 h-max shadow-lg">
            <Header text="Sign In"></Header>
            <InputBox text="Username" type="text" onChange={(e)=>setEmail(e.target.value)} value={email} ></InputBox>
            <InputBox text="Password" type="password" onChange={(e)=>{setPassword(e.target.value)}} value={password}></InputBox>
            <ButtonComponents text="Sign In" onClick={handle}></ButtonComponents>

        </div>

    </div>
}