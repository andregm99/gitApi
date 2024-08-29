'use client';
import axios from "axios";
import { useEffect,useState } from "react";

interface UserData{
    name:string,
    login:string,
    location:string,
    avatar_url:string
    }

export default function UserProfile(){
const[userData,setUserData]=useState<UserData | null>(null)

useEffect(()=>{
    axios.get('https://api.github.com/users/andregm99').then(response=>setUserData(response.data)).catch(error=>{console.log('usuário não encontrado',error)})
},[])

if(!userData) return <div>usuário não encontrado ...</div>

return(
    <>
        <p>Nome:{userData.name}</p>
        <p>login:{userData.login}</p>
        <p>localização:{userData.location}</p>
        <img src={userData.avatar_url} alt={userData.name} width='100'/>
    </>
)
}