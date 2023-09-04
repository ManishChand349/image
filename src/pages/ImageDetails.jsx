import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ImageDetails() {
  const { id } = useParams();
  const [photo, setphoto] = useState(null);
  const url = `https://api.slingacademy.com/v1/sample-data/photos/${id}`;

  useEffect(() => {
    async function fetchphotoDeatils() {
      try {
        const response = await axios.get(url);
        setphoto(response.data.photo);
      } catch (error) {
        console.error("Error fetching Photo details:", error);
      }
    }
    fetchphotoDeatils();
  }, [id]);
  if (!photo) {
    return <div>Loading....</div>;
  }
  return (
    <div className="flex flex-col ">
      <img className="" src={photo.url} alt={`${photo.title} image`} />
      <div>
        <h2 className="font-bold">{photo.title}</h2>
        <p>{photo.description}</p>
      </div>
    </div>
  );
}

export default ImageDetails;
