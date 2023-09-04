import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ImageCard from "../components/imageCard";

function Images() {
  const [allImage, setAllImage] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const url = "https://api.slingacademy.com/v1/sample-data/photos?limit=20";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(url);
        setAllImage(response.data.photos);
        setIsLoading(false);
      } catch (error) {
        alert(error.message);
      }
    }
    fetchData();
  }, []);

  return (
    <section className="flex flex-wrap gap-1 justify-center">
      {isLoading ? (
        <p>Loading....</p>
      ) : (
        allImage.map((photo) => (
          <Link key={photo.id} to={`/photo/${photo.id}`}>
            <ImageCard photo={photo} />
          </Link>
        ))
      )}
    </section>
  );
}

export default Images;
