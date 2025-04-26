import { hideLoader, showLoader } from "../../../features/loader/loaderSlice";
import { useAppSelector, useAppDispatch } from "../../../hooks/hooks";
import { Product } from "../../../models/product";
import React, { useState } from "react";
import productsSearch from "../../../services/products-search";
import recentSearchService from "../../../services/recent-search-service";
import searchSuggestionService from "../../../services/search-suggestion-service";
import { RootState } from "../../../state/store";
import { useNavigate } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface ProductSearchProps {
  onClose?: () => void;
  onSearchComplete?: () => void;
}

const ProductSearch: React.FC<ProductSearchProps> = ({
  onClose,
  onSearchComplete,
}) => {
  const dispatch = useAppDispatch();
  const customer = useAppSelector((state: RootState) => state.auth);
  const [searchSuggestions, setSearchSuggestions] = useState<
    { product_name: string }[]
  >([]);
  const [recentSearches, setRecentSearches] = useState<string[]>([]); // State for recent searches
  const [searchTerm, setSearchTerm] = useState(""); // Store the current search term
  const inputRef = React.createRef<HTMLInputElement>();
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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputRef.current?.value) return;

    const searchTerm = inputRef.current.value;

    const { request } = productsSearch.getAll<
      Product,
      { ["item_search_text"]: string }
    >({
      ["item_search_text"]: searchTerm || "",
    });

    dispatch(showLoader());

    request
      .then((res) => {
        dispatch(hideLoader());
        console.log(searchTerm);
        navigate("/page-search", {
          state: {
            products: res.data,
            searchText: searchTerm,
          },
        });
        onSearchComplete();
      })
      .catch((err) => {
        dispatch(hideLoader());
      });
  };

  const getSearchSuggestion = (e: React.ChangeEvent) => {
    const query = (e.target as HTMLInputElement).value;

    setSearchTerm(query); // Update the search term state
    if (query) {
      const { request } = searchSuggestionService.getAll<
        { product_name: string },
        { item_search_text: string }
      >({
        item_search_text: query,
      });

      request
        .then((res) => {
          setSearchSuggestions(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setSearchSuggestions([]); // Clear suggestions when input is empty
    }
  };

  const getRecentSearch = () => {
    if (customer.customer_id) {
      const { request } = recentSearchService.getAll<
        string,
        { customer_id: string }
      >({
        customer_id: customer.customer_id,
      });

      request
        .then((res) => {
          setRecentSearches(res.data); // Update recent searches state
        })
        .catch((err) => console.log(err));
    }
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
    setSearchTerm("");
    navigate("/");
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion);
    inputRef.current!.value = suggestion;
    setSearchSuggestions([]);
    handleSearch(new Event("submit") as unknown as React.FormEvent);
  };

  return (
    <div className="relative w-full">
      <form
        onSubmit={handleSearch}
        className="flex-1 py-5 text-slate-900 dark:text-slate-100"
      >
        <div className="bg-slate-50 dark:bg-slate-800 flex items-center space-x-1.5 px-5 h-full rounded">
          {renderMagnifyingGlassIcon()}
          <input
            ref={inputRef}
            type="text"
            value={searchTerm} // Controlled input with searchTerm
            placeholder="Type and press enter"
            className="border-none bg-transparent focus:outline-none focus:ring-0 w-full text-base"
            autoFocus
            onFocus={getRecentSearch} // Fetch recent searches on input focus
            onChange={getSearchSuggestion}
          />
          <button type="button" onClick={handleClose}>
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>
        <input type="submit" hidden value="" />
      </form>

      {/* Suggestions Dropdown */}
      {searchSuggestions.length > 0 && (
        <div className="absolute top-12 left-0 right-0 bg-white shadow-lg rounded-md border border-gray-200 max-h-60 overflow-auto z-50">
          <ul className="py-2">
            {searchSuggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(suggestion.product_name)}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              >
                {suggestion.product_name}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Recent Searches Dropdown */}
      {recentSearches.length > 0 && searchTerm === "" && (
        <div className="absolute top-12 left-0 right-0 bg-white shadow-lg rounded-md border border-gray-200 max-h-60 overflow-auto z-50">
          <ul className="py-2">
            {recentSearches.map((search, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(search)}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              >
                {search}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductSearch;
