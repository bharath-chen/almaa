import React, { FC, useState } from "react";
import MenuBar from "../../../shared/MenuBar/MenuBar";
import AvatarDropdown from "./AvatarDropdown";
import Navigation from "../../../shared/Navigation/Navigation";
import CartDropdown from "./CartDropdown";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";
import almaaLogo from "../../../assets/almaa-logo-small.png";
import productsSearch from "../../../services/products-search";
import { Product } from "../../../models/product";
import { useAppDispatch } from "../../../hooks/hooks";
import { hideLoader, showLoader } from "../../../features/loader/loaderSlice";
import { RootState } from "../../../state/store";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../../features/auth/authSlice";

export interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const inputRef = React.createRef<HTMLInputElement>();
  const [showSearchForm, setShowSearchForm] = useState(false);
  const dispatch = useAppDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const { request } = productsSearch.getAll<
      Product,
      { ["item_search_text"]: string }
    >({
      ["item_search_text"]: inputRef.current.value || "",
    });

    dispatch(showLoader());

    request
      .then((res) => {
        dispatch(hideLoader());
        console.log(res.data);
      })
      .catch((err) => {
        dispatch(hideLoader());
        console.log(err.message);
      });
  };

  const renderSearchForm = () => {
    return (
      <form
        onSubmit={handleSearch}
        className="flex-1 py-2 text-slate-900 dark:text-slate-100"
      >
        <div className="bg-slate-50 dark:bg-slate-800 flex items-center space-x-1.5 px-5 h-full rounded">
          {renderMagnifyingGlassIcon()}
          <input
            ref={inputRef}
            type="text"
            placeholder="Type and press enter"
            className="border-none bg-transparent focus:outline-none focus:ring-0 w-full text-base"
            autoFocus
          />
          <button type="button" onClick={() => setShowSearchForm(false)}>
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>
        <input type="submit" hidden value="" />
      </form>
    );
  };

  const renderContent = () => {
    return (
      <div className="h-20 flex justify-between">
        <div className="flex items-center lg:hidden flex-1">
          <MenuBar />
        </div>

        <div className="flex flex-1 items-center justify-center">
          {/* <Logo className="flex-shrink-0" /> */}
          <h1>
            <NavLink to="/">
              <img src={almaaLogo} alt="Almaa logo" />
            </NavLink>
          </h1>
        </div>

        <div className="flex-auto hidden lg:flex justify-center mx-4">
          {showSearchForm ? renderSearchForm() : <Navigation />}
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
              <CartDropdown />
            </>
          )}
          {!isLoggedIn && (
            <>
              <Link to="/login">Login</Link>
            </>
          )}
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
