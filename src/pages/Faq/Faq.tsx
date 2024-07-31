import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import Heading from "../../shared/Heading/Heading";
import Spinner from "../../components/Spinner/Spinner";
import faqService from "../../services/faq-service";
import AppAccordion from "../../components/AppAccordion/AppAccordion";
import { IFaq } from "../../services/faq-service";

const Faq = () => {
  const [faqs, setFaqs] = useState<IFaq[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const { request, cancel } = faqService.getAll<IFaq>();

    setLoading(true);

    request
      .then((res) => {
        setFaqs(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        if (err instanceof CanceledError) return;

        setError(err.message);
      });

    return () => cancel();
  }, []);

  if (loading) return <Spinner size="large" color="primary" />;

  return (
    <div className="container mx-auto px-4 my-20">
      <div className="grid grid-cols-1">
        <Heading desc="">FAQs</Heading>
        <div className="w-full rounded-2xl space-y-2.5">
          {faqs.map((item) => (
            <AppAccordion
              key={item.faq_id}
              title={item.question}
              body={item.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
