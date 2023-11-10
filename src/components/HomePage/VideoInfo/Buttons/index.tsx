"use client";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";

export const Buttons = ({ index, resolution, playlist, url }: any) => {
  const [loading, setLoading] = useState(false);
  const [link, setLink] = useState("");

  function downloadFile(url: any, fileName: any) {
    alert(url);
    var link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const playlist_download = async (resolution: string) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/playlist/download`,
        {
          url: url,
          resolution: resolution,
        }
      );
      setLink(response.data.url);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const video_download = async (resolution: string) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/video/download`,
        {
          url,
          resolution,
        }
      );
      setLink(response.data.url);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <tr key={index}>
      <th>{index + 1}</th>
      <td>{resolution}</td>
      <td></td>
      <td className="gap-4 flex">
        {playlist ? (
          <button
            className="btn btn-xs btn-success"
            onClick={() => playlist_download(resolution)}
          >
            {loading ? (
              <div className="flex items-center gap-1">
                <span className="loading loading-spinner"></span>
                Loading...
              </div>
            ) : link === "" ? (
              "Download"
            ) : (
              <Link
                className="btn btn-xs btn-success"
                target="_blank"
                href={link}
              >
                Get
              </Link>
            )}
          </button>
        ) : (
          <button
            className="btn btn-xs btn-success"
            onClick={() => video_download(resolution)}
          >
            {loading ? (
              <div className="flex items-center gap-1">
                <span className="loading loading-spinner"></span>
                Loading...
              </div>
            ) : link === "" ? (
              "Download"
            ) : (
              <Link
                className="btn btn-xs btn-success"
                target="_blank"
                href={link}
              >
                Get
              </Link>
            )}
          </button>
        )}
      </td>
    </tr>
  );
};
