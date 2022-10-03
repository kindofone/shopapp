import { useEffect, useState } from 'react';

function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("Fetching data");
    fetch(url)
      .then(response => response.json())
      .then(responseData => setData(responseData));
  }, [url]);

  return data;
}

export default useFetch;