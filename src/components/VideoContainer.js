import React, { useEffect, useState } from "react";
import Youtube_Videos_API from "../utils/constant";
import axios from "axios";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  console.log(videos);

  // useEffect(() => {
  //   getVideos();
  // }, []);

  // const getVideos = () => {
  //   const data = fetch(
  //     "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyAbkMvXyXMmCz1DaTD-5wQXoNglbs9rBIU"
  //   );
  //   const json = data.json();
  //   console.log(json);

  //   // setVideos(json.items);
  // };
  fetch(
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyAbkMvXyXMmCz1DaTD-5wQXoNglbs9rBIU"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // Process the JSON data
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });

  return <div>VideoContainer</div>;
};

export default VideoContainer;
