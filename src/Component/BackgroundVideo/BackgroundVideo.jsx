import "./BackgroundVideo.css";
import Background from "./BackgroundVideo-assets/background.mp4";

const BackgroundVideo = () => {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        id="bg-video"
        className="fixed inset-0 w-full h-full object-cover z-[-1]"
      >
        <source src={Background} type="video/mp4" />
      </video>
    </>
  );
};

export default BackgroundVideo;
