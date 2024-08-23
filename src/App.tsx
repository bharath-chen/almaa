import { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import MyRouter from "./routers/index";
import Spinner from "./components/Spinner/Spinner";
import { useAppDispatch } from "./hooks/hooks";
import { hideLoader, showLoader } from "./features/loader/loaderSlice";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(showLoader());

    setTimeout(() => {
      dispatch(hideLoader());
    }, 1000);
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Almaa</title>
        <meta name="description" content="Almaa || Shop - eCommerce" />
      </Helmet>
      {/* MAIN APP */}
      <Spinner size="large" color="primary" />
      <div className="bg-white text-base dark:bg-slate-900 text-slate-900 dark:text-slate-200">
        <MyRouter />
      </div>
    </HelmetProvider>
  );
}

export default App;
