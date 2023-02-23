import React,{useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Header from "./Header"
function Login()
{
    const history=useHistory();
    const[email, setEmail]=useState("");
    const[password, setPassword]=useState("");

    useEffect(()=>{
        if(localStorage.getItem('user-info'))
        {
            history.push('./add')
        }
    },[])

    async function login(){
        let item = {password,email}
        
        let result = await fetch("http://localhost:8000/api/login",{
            method: 'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item)
        });
        result=await result.json();
        if(result.success){
            localStorage.setItem("user-info",JSON.stringify(result));
            history.push("/add")
            alert(result.success)
        } else{
            alert(result.error)
        }
       
    }

    return(
        <div>
            <Header />
            <div className="col-sm-6 offset-sm-3">
            <h1 className="text-center">Login</h1>
            <br/>
            <input type="text" value={email} placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)} className="form-control"/>
            <br />
            <input type="text" value={password} placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)} className="form-control"/>
            <br />
            <button onClick={login} className="btn btn-primary mx-auto">Login</button>
            </div>
        </div>
    )
}

export default Login