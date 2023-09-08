import React, { useEffect, useState } from "react";
import Youtube_Videos_API from "../utils/constant";
import axios from "axios";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  console.log("dfhvdhs", videos);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyAbkMvXyXMmCz1DaTD-5wQXoNglbs9rBIU"
    );
    const json = await data.json();
    setVideos(json.items);
  };
  return (
    <div className="flex flex-wrap ml-5">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
