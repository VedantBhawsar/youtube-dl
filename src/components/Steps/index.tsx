export const Steps = () => {
  return (
    <div className="bg-[--primary]  py-10 text-white   flex flex-col w-full px-48 gap-5">
      <div className="w-full text-center text-2xl">
        <h1 className="text-3xl">
          How to download YouTube videos by ssyoutube <br /> Step-by-step guide
        </h1>
      </div>
      <ol className="text-lg text-pretty gap-2 flex flex-col text-neutral-400">
        <li className="text-inherit">
          Step 1. Copy the URL. To begin, access the YouTube video you wish to
          download and copy its URL.
        </li>
        <li className="text-inherit">
          Step 2. Paste the URL. Simply paste the YouTube URL into the
          designated box located at the top of this page, then click on the
          &quot;Download&quot; button. If you wish to preserve the video on your
          ssyoutube account and personalize it, host it, or stream it, select
          the &quot;Save and edit video&quot; button.
        </li>
        <li className="text-inherit">
          Step 3. Download the video. Now, the video will be automatically saved
          in MP4 format and saved to your device for you to use. Enjoy!
        </li>
        <li className="text-inherit">
          Step 4. You can enjoy and watch it offline.
        </li>
      </ol>
    </div>
  );
};
