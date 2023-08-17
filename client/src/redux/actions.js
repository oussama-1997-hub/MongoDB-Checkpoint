import { GET_CONTACTS } from "./actionType"
import axios from "axios"
//fetch Data
export const getContacts=()=>(dispatch)=>{
axios.get("/api/contact/")
.then((res)=>dispatch({type:GET_CONTACTS,payload:res.data}))
.catch(err=>console.log(err))
}


//add new Contact
export const addContact=(newContact)=>(dispatch)=>{
    axios.post("/api/contact/add",newContact)
    .then((res)=>dispatch(getContacts()))
    .catch((err)=>console.log(err))
}
//delete user 
export const deletContact=(idContact)=>(dispatch)=>{
    axios.delete(`/api/contact/${idContact}`)
    .then((res)=>dispatch(getContacts()))
    .catch((err)=>console.log(err))
}

//edit user
export const editContact=(idContact,editedContact)=>(dispatch)=>{
    axios.put(`/api/contact/edit/${idContact}`,editedContact)
    .then((res)=>dispatch(getContacts()))
    .catch((err)=>console.log(err))
}