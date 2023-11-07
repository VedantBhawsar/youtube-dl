"use client";

import axios from "axios";
import { useState } from "react";

export const VideoInfo = ({ data, video_url }: any) => {
  console.log(video_url);
  const [loading, setLoading] = useState(false);

  function downloadFile(url: string) {
    var link = document.createElement("a");
    link.href = url;
    link.download = "data.title";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const handleDownload = async (resolution: string) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/video/download`,
        {
          url: video_url,
          resolution: resolution,
        }
      );
      alert(response.data.result);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex gap-10 text-white p-7">
      <div className="card w-80   bg-base-100 shadow-xl">
        <figure>
          <img src={data.thumbnail.url} alt="thumbnail" />
        </figure>
        <div className="card-body p-5 text-[--textColor] ">
          <p>{data.title}</p>
        </div>
      </div>
      <div className="overflow-x-auto">
        <div className="card w-auto py-5 px-2  bg-base-100 shadow-xl">
          <table className="table text-[--textColor]">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Resolutions</th>
                <th></th>
                <th>Download</th>
              </tr>
            </thead>
            <tbody>
              {data.quality.map((resolution: any, index: any) => (
                <tr>
                  <th>{index + 1}</th>
                  <td>{resolution}</td>
                  <td></td>
                  <td>
                    <button
                      className="btn btn-xs btn-success"
                      onClick={() => handleDownload(resolution)}
                    >
                      {loading ? (
                        <div className="flex items-center gap-1">
                          <span className="loading loading-spinner"></span>
                          Loading...
                        </div>
                      ) : (
                        "Download"
                      )}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
