import React, { useEffect, useState } from 'react';
import "./SearchStyle.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Search = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/cities", {
        method: "GET"
      });

      if (response.ok) {
        const result = await response.json();
        setData(result);
      } else {
        console.log("Failed to fetch data from the API.");
      }
    } catch (error) {
      console.log("Error occurred while fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = () => {
    const result = data.find(name => name.city_name.toLowerCase() === searchTerm.toLowerCase());
    setSearchResult(result);
    if(!result){
      toast.error("It is not available");
    }else {
      toast.success("Find Your Data successfully!");
  }
  };

  return (
    <div className='main'>
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search by city name" />
      <input onClick={handleSearch} type='Submit' value='Search' />

      <div className='result'>
      {searchResult ? (
        <div className='text'>
          <h2>Search Result</h2>
          <p>City: {searchResult.city_name}</p>
          <p>State: {searchResult.State}</p>
          <p>Minimun Temperature: {searchResult.min_temp}</p>
          <p>Maximum Temperature: {searchResult.max_temp}</p>
        </div>
      ) : (
        <p></p>
        
        )}
        <ToastContainer position='top-center'/>
      </div>
    </div>
    
  );
};

export default Search;