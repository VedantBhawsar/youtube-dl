"use client";

import { Buttons } from "./Buttons";

export const VideoInfo = ({ data, url, playlist }: any) => {
  return (
    <div className="flex gap-10 text-white p-7">
      <div className="card w-80   bg-base-100 shadow-xl">
        <figure className="relative">
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
                  key={index}
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
