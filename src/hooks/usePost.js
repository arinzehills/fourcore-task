import { useState, useCallback } from 'react';
import { API_URI } from './useGet';


const usePost = (path,{ method = 'POST',contentType } = {}) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    var mainUrl = `${API_URI}${path}`; 

    const postData = useCallback(
      async (payload) => {
        console.log("payload",payload)
        setLoading(true);
        try {
          const response = await fetch(mainUrl,{
            method:method,
            headers: {
              'Content-Type':  'application/json',
            },
            body:JSON.stringify(payload),
          });
          
          const text = await response.text();
          console.log("STATUS",text,response.status)
          if (response.status === 200||response.status===201) {
            const result = JSON.parse(text);
            setLoading(false);
            setData(result);
            setError(null);
          } else {
            setLoading(false);
            setData(null);
            setError(text);
          }
        } catch (err) {
        //   setError(err);
          console.log("EROR",err);
          setData(null);
        } finally {
          setLoading(false);
        }
      },
      [path]
    );
  
    return { data, error, loading, postData };
  };
  
export default usePost;
