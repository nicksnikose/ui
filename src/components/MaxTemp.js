import React, { useEffect, useState } from 'react';
import './MaxTempStyle.css'

const MaxTemp = () => {
    const [temperatures, setTemperatures] = useState([]);
    const [cityWithMaxTemp, setCityWithMaxTemp] = useState('');


    useEffect(() => {
        fetch('http://localhost:5000/api/cities/')
          .then(response => response.json())
          .then(data => {
            setTemperatures(data);
            findCityWithMaxTemp(data);
          })
          .catch(error => {
            console.error(error);
          });
      },[]);

      const findCityWithMaxTemp = (data) => {
        const city = data.reduce((prev, current) => {
          return prev.max_temp > current.max_temp ? prev : current;
        });
    
        setCityWithMaxTemp(city);
};

  return (
    <div className='main'>
     <p> City Name: {cityWithMaxTemp.city_name}</p>
     <p> State :  {cityWithMaxTemp.State}</p>
     <p> Minimum Temperature is :{cityWithMaxTemp.min_temp}</p>
     <p> Maximum Temperature is :{cityWithMaxTemp.max_temp}</p>
    </div>
  );
};

export default MaxTemp;