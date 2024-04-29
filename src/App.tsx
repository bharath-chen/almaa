import { useEffect, useState } from "react";
import MyRouter from "./routers/index";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Spinner from "./components/Spinner/Spinner";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <Spinner size="large" />;

  return (
    <HelmetProvider>
      <Helmet>
        <title>Almaa</title>
        <meta name="description" content="Almaa || Shop - eCommerce" />
      </Helmet>

      {/* MAIN APP */}
      <div className="bg-white text-base dark:bg-slate-900 text-slate-900 dark:text-slate-200">
        <MyRouter />
      </div>
    </HelmetProvider>
  );
}

export default App;
