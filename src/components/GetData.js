import React, { useEffect, useState } from 'react'
import './GetDataStyle.css'

const GetData = () => {
  const [data, setData]=useState([])

    const sec =async()=>{
        const response= await fetch("http://localhost:5000/api/cities",{
          method:"GET"
      });
  
      const rupali = await response.json()
       setData(rupali)
      }
    
      const deleteData =async(city_name)=>{
        try{
          const response =await fetch(`http://localhost:5000/api/cities/${city_name}` ,{
            method:'DELETE'
          })
          if(response.ok){
            const updateData =data.filter(item => item.city_name !== city_name);
            setData(updateData);
          }
        }catch (error) {
          console.log(error);
        }
      };

      useEffect(() => {
        sec();
      }, )


  return (
    <div>
      <table>

      <thead>
              <tr>
                <th >City Name </th>
                <th >State</th>
                <th >Minimum Temperature</th>
                <th >Maximum Temperature</th>
                <th >Delete</th>
               
              </tr>
            </thead>
        {
        data.map((dat)=> 
            
            <tbody>
              <tr key={dat.city_name}>
                <td>{dat.city_name}</td>
              
                <td >{dat.State}</td>
              
                <td >{dat.min_temp}</td>
             
                <td >{dat.max_temp}</td>
                
                <td> 
                  <i className="fa-solid fa-trash" onClick={()=> deleteData(dat.city_name)}></i>
                </td>
                

              </tr>
            </tbody>
       )
      }
      </table>
    </div>
  )
}

export default GetData