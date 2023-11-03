import axios from "axios";
import { useEffect } from "react";

export const useFecth = (endpoint, initial) => {
  const [data, setData] = useState(initial);

  useEffect(() => {
    const getData = axios.get(endpoint);
    getData.then((res) => setData(res.data));
  }, [endpoint]);

  return { data };
};
