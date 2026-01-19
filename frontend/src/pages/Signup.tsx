import { useState } from "react"
import InputBox from "../components/InputBox"
import ButtonComponents from "../components/Button"
import axios from "axios"
import { Header } from "../components/Header"

export const Signup =()=>{
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const handle =async ()=>{
        try {
            const response = await axios({
                method:"POST",
                url:"http://localhost:3000/api/v1/signup",
                data:{
                    name:name,
                    email:email,
                    password:password
                },
                headers:{'Content-Type':"application/json"}
            })
            if(!response){alert('SIgnup not succesfully') }
            if(response){
                alert("Signup Succesfully")
                setEmail("")
                setName("")
                setPassword("")
            }

        } catch (error) {
            console.log(error)
            alert(error)
        }
    }
    return <div className="flex justify-center items-center bg-white h-screen">
        <div className="h-max flex flex-col items-center justify-center bg-white border p-4">
            <Header text="Sign Up"></Header>
            <InputBox text="Name" type="text" value={name} onChange={(e)=>{setName(e.target.value)}}></InputBox>
            <InputBox text="Username" type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}></InputBox>
            <InputBox text="Password" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}></InputBox>

            <ButtonComponents text="Sign Up" onClick={handle}></ButtonComponents>
        </div>

    </div>
}