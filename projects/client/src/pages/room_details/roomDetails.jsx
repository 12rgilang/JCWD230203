import { useParams, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import SinglePage from "./SinglePage";


function RoomDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState([])

  useEffect(() => {
    onGetData();
  }, []);

  const onGetData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/properties/room-details?room_id=${id}`
      );
      console.log(res)
      setDetails(res.data.data);
      
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <>
      <main>
        <div className="sm:mx-6 md:mx-10 lg:mx-12 px-3">
          {/* <RoomDetail /> */}
          {/* <RoomDetail /> */}
          <SinglePage details={details} />
        </div>
      </main>
    </>
  );
}

export default RoomDetails;
