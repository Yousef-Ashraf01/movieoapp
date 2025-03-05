import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchDetails = (endpoint) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        endpoint + "?api_key=b411f5c3625698399966c05ad323ccb5"
      );
      setLoading(false);
      setData(response.data);
    } catch (error) {
      console.log("error ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [endpoint]);

  return { data, loading };
};
