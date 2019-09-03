import { useState, useEffect } from 'react';

const useApi = (url) => {
  const [result, setResult] = useState([]);
  useEffect(() => {
    async function getApiResult() {
      const res = await fetch(url);
      const newResult = await res.json();
      setResult(newResult);
    };

    getApiResult();
  }, []);

  return result;
};

export default useApi;