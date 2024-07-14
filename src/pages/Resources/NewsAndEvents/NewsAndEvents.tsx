import { useNavigate } from "react-router-dom";
import EmailSubscribeSection from "../../../shared/EmailSubscribeSection/EmailSubscribeSection";
import { useEffect, useState } from "react";
import newsEventsService, {
  INewsAndEvents,
} from "../../../services/news-events-service";
import { CanceledError } from "axios";
import NewsAndEventCard from "./NewsAndEventCard";
import Spinner from "../../../components/Spinner/Spinner";

const NewsAndEvents = () => {
  const [newsAndEvents, setNewsAndEvents] = useState<INewsAndEvents[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const { request, cancel } = newsEventsService.getAll<INewsAndEvents>();

    setLoading(true);

    request
      .then((res) => {
        setLoading(false);
        setNewsAndEvents(res.data);
      })
      .catch((err) => {
        setLoading(false);
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
  }, []);

  if (loading) return <Spinner size="large" color="primary" />;

  return (
    <section className="container my-20">
      <div className="pt-12 pb-16 lg:pb-28">
        <div className="nc-SectionMagazine5">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            {newsAndEvents.map((data) => (
              <NewsAndEventCard key={data.event_id} newsAndEvent={data} />
            ))}
          </div>
        </div>
      </div>

      {/* EMAIL SUBSCRIBE SECTION */}
      <section className="mt-40">
        <EmailSubscribeSection />
      </section>
    </section>
  );
};

export default NewsAndEvents;
