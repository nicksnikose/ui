import React, { useEffect, useState } from 'react';
import './MinTempStyle.css'

const MinTemp = () => {
    const [temperatures, setTemperatures] = useState([]);
    const [cityWithMinTemp, setCityWithMinTemp] = useState('');


    useEffect(() => {
        fetch('http://localhost:5000/api/cities/')
          .then(response => response.json())
          .then(data => {
            setTemperatures(data);
            findCityWithMinTemp(data);
          })
          .catch(error => {
            console.error(error);
          });
      },[]);

      const findCityWithMinTemp = (data) => {
        const city = data.reduce((prev, current) => {
          return prev.min_temp <  current.min_temp ? prev : current;
        });
    
        setCityWithMinTemp(city);
    };

  return (
    <div>
        <p className='pi'>City Name : {cityWithMinTemp.city_name}</p>
        <p className='pi'>State : {cityWithMinTemp.State}</p>
        <p className='pi'>Minimum Temperature is : {cityWithMinTemp.min_temp}</p>
        <p className='pi'>Maximum Temperature is : {cityWithMinTemp.max_temp}</p>
    </div>
  );
};

export default MinTemp;