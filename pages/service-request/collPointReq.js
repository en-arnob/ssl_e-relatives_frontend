import axios from "axios";
import React, { useState, useEffect } from "react";

const CollectionPointReq = () => {
  const [bloodReqDetails, setBloodReqDetails] = useState([]);
  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/services/coll-point-requests/59`
      )
      .then((response) => {
        const data = response.data.data;
        setBloodReqDetails(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h4>hello</h4>
    </div>
  );
};

export default CollectionPointReq;
