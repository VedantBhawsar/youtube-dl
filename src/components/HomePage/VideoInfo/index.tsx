"use client";

import { useState } from "react";
import { Buttons } from "./Buttons";

export const VideoInfo = ({ data, url, playlist }: any) => {
  console.log(url);
  const [loading, setLoading] = useState(false);

  function downloadFile(url: string) {
    var link = document.createElement("a");
    link.href = url;
    link.download = "data.title";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="flex gap-10 text-white p-7">
      <div className="card w-80   bg-base-100 shadow-xl">
        <figure>
          {data?.thumbnail?.url && (
            <img src={data.thumbnail.url} alt="thumbnail" />
          )}
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
                <Buttons
                  resolution={resolution}
                  index={index}
                  playlist={playlist}
                  url={url}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
