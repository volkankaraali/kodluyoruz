import { useState } from 'react';
import axios from 'axios';

function useFetch(){
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData= async(url)=>{
    try {
      const {data}=await axios.get(url);
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  

  return {error,data,loading,fetchData};
}

export default useFetch;