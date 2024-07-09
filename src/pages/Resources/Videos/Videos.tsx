import Video from "./Video";
import video1Img from "../../../assets/HOME PAGE/9-video-1.jpg";
import video2Img from "../../../assets/HOME PAGE/9-video-2.jpg";
import video3Img from "../../../assets/HOME PAGE/9-video-3.jpg";
import EmailSubscribeSection from "../../../shared/EmailSubscribeSection/EmailSubscribeSection";

const VIDEOS = [
  {
    id: 1,
    title: "Video 1",
    description: "Description for Video 1",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: video1Img,
  },
  {
    id: 2,
    title: "Video 2",
    description: "Description for Video 2",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: video2Img,
  },
  {
    id: 3,
    title: "Video 3",
    description: "Description for Video 3",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: video3Img,
  },
  {
    id: 4,
    title: "Video 4",
    description: "Description for Video 4",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: video1Img,
  },
];

const Videos = () => {
  return (
    <div className="container my-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {VIDEOS.map((video) => {
          return <Video key={video.id} video={video} />;
        })}
      </div>

      {/* EMAIL SUBSCRIBE SECTION */}
      <section className="mt-40">
        <EmailSubscribeSection />
      </section>
    </div>
  );
};

export default Videos;
