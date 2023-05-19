import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./IndexStyle.css"



const Index = () => {
  const [form ,setForm]=useState({});

  const handlechange=(e)=>{
    setForm({
      ...form,
    [e.target.name]:e.target.value
    })
  }

  const handlesubmit=async(e)=>{
   e.preventDefault()
   const response = await fetch("http://localhost:5000/api/cities",{
    method:"POST",
    body:JSON.stringify(form),
    headers:{
      "Content-Type":"application/json"
    }
   });
   if (response.ok) {
    toast.success("Form submitted successfully!");
  } else {
    toast.error("Form submission failed!");
  }
   
  }


  return (
    <div>
      <form onSubmit={handlesubmit}>
        <h1>Please Enter Data</h1>
      <label for='nme' className=' fw-bold '>City Name : </label>
        <input type='text'  className="question" id="msg" name='city_name' placeholder='Enter City Name' onChange={handlechange}/> <br />
        <label for='' className=' fw-bold '>State :</label>
        <input type='text' className="question" id="msg" name='State' placeholder='Enter State' onChange={handlechange}/> <br />
        <label for='' className=' fw-bold '>Minimum Temperature :</label>
        <input type='text'  className="question" id="msg" name='min_temp' placeholder='Enter min_temp' onChange={handlechange}/> <br />
        <label for='' className='fw-bold '>Maximum Temperature : </label>
        <input type='text'  className="question" id="msg" name='max_temp' placeholder='Enter max_temp' onChange={handlechange} /> <br />
        <input  type='submit' value='Submit' />
      </form>
      <ToastContainer position='bottom-center'/>
    </div>
  )
}

export default Index