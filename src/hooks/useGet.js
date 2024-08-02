import { useEffect, useState } from "react";



export const API_URI='https://fakestoreapi.com'


function useGet(path) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
      var mainUrl = `${API_URI}${path}`; 

        setLoading(true);
        const response = await fetch(mainUrl);
        const text = await response.text();
        const result = JSON.parse(text);
        // console.log("STATUS",text,response.status)
        if (response.status === 200 || response.status===201) {
          setLoading(false);
          setData(result);
          setError(null);
        } else {
          setLoading(false);
          setData(null);
        console.log("What happened")
          setError(result);
        }
      } catch (error) {
        console.log("What happened")
        setError(error);
        setLoading(false);
      }
    };

    return () => {
      fetchData();
    };
  }, [path]);
  return { data, loading, error };
}

export default useGet;

