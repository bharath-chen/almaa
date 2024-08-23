import { useEffect, useState } from "react";
import SectionFounder from "../../../containers/PageAbout/SectionFounder";
import EmailSubscribeSection from "../../../shared/EmailSubscribeSection/EmailSubscribeSection";
import { LayoutGridDemo } from "./LayoutGridDemo";
import galleryListService, {
  IGallery,
} from "../../../services/gallery-list-service";
import { CanceledError } from "axios";
import { hideLoader, showLoader } from "../../../features/loader/loaderSlice";
import { useAppDispatch } from "../../../hooks/hooks";

const Media = () => {
  const dispatch = useAppDispatch();

  const [galleryList, setGalleryList] = useState<IGallery[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const { request, cancel } = galleryListService.getAll<IGallery>();

    dispatch(showLoader());

    request
      .then((res) => {
        dispatch(hideLoader());
        setGalleryList(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        dispatch(hideLoader());
        setError(err.message);
      });
  }, []);

  return (
    <>
      <div className="container my-20">
        <SectionFounder />
      </div>
      <LayoutGridDemo />

      {/* EMAIL SUBSCRIBE SECTION */}
      <section className="mt-40">
        <EmailSubscribeSection />
      </section>
    </>
  );
};

export default Media;
