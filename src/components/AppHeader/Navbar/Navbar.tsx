import { FC, useState } from "react";
import MenuBar from "../../../shared/MenuBar/MenuBar";
import AvatarDropdown from "./AvatarDropdown";
import Navigation from "../../../shared/Navigation/Navigation";
import CartDropdown from "./CartDropdown";
import { Link, NavLink, useNavigate } from "react-router-dom";
import almaaLogo from "../../../assets/almaa-logo-small.png";
import { selectIsLoggedIn } from "../../../features/auth/authSlice";
import { useSelector } from "react-redux";
import ProductSearch from "./ProductSearch";

const Navbar: FC = () => {
  const [showSearchForm, setShowSearchForm] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  const renderMagnifyingGlassIcon = () => {
    return (
      <svg
        width={22}
        height={22}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 22L20 20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  const handleClose = () => {
    setShowSearchForm(false);
    navigate("/");
  };

  const renderContent = () => {
    return (
      <div className="h-20 flex justify-between">
        <div className="flex items-center lg:hidden flex-1">
          <MenuBar />
        </div>

        <div className="flex flex-1 items-center justify-center">
          <h1>
            <NavLink to="/">
              <img src={almaaLogo} alt="Almaa logo" />
            </NavLink>
          </h1>
        </div>

        <div className="flex-auto hidden lg:flex justify-center mx-4">
          {showSearchForm ? (
            <ProductSearch onClose={handleClose} />
          ) : (
            <Navigation />
          )}
        </div>

        <div className="flex-1 flex items-center justify-end text-slate-700 dark:text-slate-100">
          {!showSearchForm && (
            <button
              className="hidden lg:flex w-10 h-10 sm:w-12 sm:h-12 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none items-center justify-center"
              onClick={() => setShowSearchForm(!showSearchForm)}
            >
              {renderMagnifyingGlassIcon()}
            </button>
          )}
          {isLoggedIn && (
            <>
              <AvatarDropdown />
            </>
          )}
          {!isLoggedIn && (
            <>
              <Link to="/login">Login</Link>
            </>
          )}
          <CartDropdown />
        </div>
      </div>
    );
  };

  return (
    <div className="nc-MainNav2Logged relative z-10 bg-white dark:bg-neutral-900 border-b border-slate-100 dark:border-slate-700">
      <div className="container px-2">{renderContent()}</div>
    </div>
  );
};

export default Navbar;
