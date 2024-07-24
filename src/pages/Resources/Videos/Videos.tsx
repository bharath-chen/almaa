import Video from "./Video";
import EmailSubscribeSection from "../../../shared/EmailSubscribeSection/EmailSubscribeSection";
import videoService, { IVideo } from "../../../services/video-service";
import { useEffect, useState } from "react";
import { CanceledError } from "axios";

const Videos = () => {
  const [videos, setVideos] = useState<IVideo[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const { request, cancel } = videoService.getAll<IVideo>();

    setLoading(true);

    request
      .then((res) => {
        setLoading(false);
        setVideos(res.data);
      })
      .catch((err) => {
        setLoading(false);
        if (err instanceof CanceledError) return;

        setError(err.message);
      });

    return () => cancel();
  }, []);

  return (
    <div className="container my-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {videos.map((video) => {
          return <Video key={video.video_id} video={video} />;
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
