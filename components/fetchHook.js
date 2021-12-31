import {useEffect, useState} from "react";
import axios from "axios";

const useFetch = (remoteUrl) => {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState(remoteUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if(url !== "" && url !== null && url !== undefined) {
        setIsError(false);
        setIsLoading(true);
        try {
          const result = await axios(url);
          setData(result.data);
        } catch (error) {
          setIsError(true);
        }
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return [{ data, isLoading, isError }, setUrl];
}

export default useFetch;
