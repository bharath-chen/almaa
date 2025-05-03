import { useEffect, useState } from "react";
import BackgroundSection from "../../../components/BackgroundSection/BackgroundSection";
import Heading from "../../../components/Heading/Heading";
import BranchDetailPopup from "./BranchDetailPopup";
import EmailSubscribeSection from "../../../shared/EmailSubscribeSection/EmailSubscribeSection";
import BranchCard from "./BranchCard";
import branchesService, { IBranch } from "../../../services/branches-service";
import { CanceledError } from "axios";
import useMetaTags from "../../../hooks/useMetaTags";
import MetaTags from "../../../shared/MetaTags/MetaTags";

const OurBranches = () => {
  const [branches, setBranches] = useState<IBranch[]>([]);
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [branch, setBranch] = useState<IBranch | null>(null);
  const { metaTag: metaTagProps } = useMetaTags();

  const handleCardClick = (item: IBranch) => {
    console.log(item);
    setBranch(item);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    console.log("handleClosePopup");
    setShowPopup(false);
  };

  useEffect(() => {
    const { request, cancel } = branchesService.getAll<IBranch>();

    request
      .then((res) => {
        setBranches(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;

        setError(err.message);
      });

    () => cancel();
  }, []);

  return (
    <div className="container mt-10 mb-10">
      {/* METATAGS */}
      {metaTagProps && <MetaTags metaTagProps={metaTagProps} />}
      {/* SECTION */}
      <div className="relative py-20 lg:py-20 mb-40">
        <BackgroundSection />
        <Heading
          className="mb-12 lg:mb-14 text-neutral-900 dark:text-neutral-50"
          fontClass="text-3xl md:text-4xl 2xl:text-5xl font-semibold"
          isCenter
          desc=""
        >
          List of Branches
        </Heading>
        <div
          className={`nc-SectionGridMoreExplore relative`}
          data-nc-id="SectionGridMoreExplore"
        >
          <div
            className={`grid gap-4 md:gap-7 grid-cols-1 md:grid-cols-2 xl:grid-cols-3`}
          >
            {branches.map((branch) => (
              <BranchCard
                key={branch.branch_id}
                branch={branch}
                onCardClick={() => handleCardClick(branch)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showPopup && (
        <BranchDetailPopup branch={branch} onClose={handleClosePopup} />
      )}

      {/* EMAIL SUBSCRIBE SECTION */}
      <EmailSubscribeSection />
    </div>
  );
};

export default OurBranches;
