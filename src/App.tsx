import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hideLoader, showLoader } from "./state/actions/loaderActions";
import { Helmet, HelmetProvider } from "react-helmet-async";
import MyRouter from "./routers/index";
import Spinner from "./components/Spinner/Spinner";

function App() {
  const dispatch = useDispatch();

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
