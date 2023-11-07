"use client";
import axios from "axios";
import { useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { VideoInfo } from "../VideoInfo";

export const TopSection = ({ playlist }) => {
  const [arrow, setArrow] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/video/get?url=${url}`
      );
      setData(response.data);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-[--primary] py-10  items-center justify-center flex flex-col w-full px-48 gap-10">
      <h1 className="text-3xl font-[--font-family-sans-sarif] text-white">
        {playlist ? "Youtube Playlist Downloader" : "Youtube Video Downloader"}
      </h1>
      <div className="w-4/6 max-h-12  rounded-md bg-white flex">
        <input
          placeholder={`Paste your ${
            playlist ? "playlist" : "video"
          } link here`}
          className="w-full h-12 outline-none pl-5 rounded-md"
          onChange={(e) => setUrl(e.target.value)}
        />
        <button
          className="flex gap-1 items-center bg-red-500 m-1 p-3 rounded-md px-5 text-white "
          onClick={handleSubmit}
        >
          Download
          <div className={`${!arrow && "hidden"}`}>
            <BiRightArrowAlt size={"1.2em"} />
          </div>
        </button>
      </div>
      {loading && (
        <span className="loading loading-dots loading-lg text-white"></span>
      )}
      {data && <VideoInfo data={data} video_url={url} />}
    </div>
  );
};
