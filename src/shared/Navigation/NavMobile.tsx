import React from "react";
import ButtonClose from "../../shared/ButtonClose/ButtonClose";
import { Disclosure } from "@headlessui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { NavItemType } from "./NavigationItem";
import { NAVIGATION_DEMO_2 } from "../../data/navigation";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import almaaLogo from "../../assets/almaa-logo-small.png";
import { Utils } from "../../utils/utils";
import ProductSearch from "../../components/AppHeader/Navbar/ProductSearch";

export interface NavMobileProps {
  data?: NavItemType[];
  onClickClose?: () => void;
}

const NavMobile: React.FC<NavMobileProps> = ({
  data = NAVIGATION_DEMO_2,
  onClickClose,
}) => {
  const navigate = useNavigate();
  const _renderMenuChild = (
    item: NavItemType,
    itemClass = " pl-3 text-neutral-900 dark:text-neutral-200 font-medium "
  ) => {
    return (
      <ul className="nav-mobile-sub-menu pl-6 pb-1 text-base">
        {item.children?.map((i, index) => (
          <Disclosure key={i.href || index} as="li">
            {!i.href && (
              <span
                className={`flex text-sm rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 mt-0.5 pr-4 text-secondary pl-3 text-neutral-900 dark:text-neutral-200 font-medium`}
              >
                <span
                  className={`py-2.5 ${!i.children ? "block w-full" : ""}`}
                  onClick={() => {
                    navigate(`/category/${Utils.urlFormatter(i.url_name)}`, {
                      state: {
                        item: { ...i },
                      },
                    });
                    onClickClose();
                  }}
                >
                  {i.name}
                </span>
                {i.children && (
                  <span
                    className="flex items-center flex-grow"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Disclosure.Button
                      as="span"
                      className="flex justify-end flex-grow"
                    >
                      <ChevronDownIcon
                        className="ml-2 h-4 w-4 text-slate-500"
                        aria-hidden="true"
                      />
                    </Disclosure.Button>
                  </span>
                )}
              </span>
            )}
            {i.href && (
              <NavLink
                to={{
                  pathname: i.href || undefined,
                }}
                className={({ isActive }) =>
                  `flex text-sm rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 mt-0.5 pr-4 ${itemClass} ${
                    isActive ? "text-secondary" : ""
                  }`
                }
              >
                <span
                  className={`py-2.5 ${!i.children ? "block w-full" : ""}`}
                  onClick={onClickClose}
                >
                  {i.name}
                </span>
                {i.children && (
                  <span
                    className="flex items-center flex-grow"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Disclosure.Button
                      as="span"
                      className="flex justify-end flex-grow"
                    >
                      <ChevronDownIcon
                        className="ml-2 h-4 w-4 text-slate-500"
                        aria-hidden="true"
                      />
                    </Disclosure.Button>
                  </span>
                )}
              </NavLink>
            )}
            {i.children && (
              <Disclosure.Panel>
                {_renderMenuChild(
                  i,
                  "pl-3 text-slate-600 dark:text-slate-400 "
                )}
              </Disclosure.Panel>
            )}
          </Disclosure>
        ))}
      </ul>
    );
  };

  const _renderItem = (item: NavItemType, index: number) => {
    return (
      <Disclosure
        key={item.id || index}
        as="li"
        className="text-slate-900 dark:text-white"
      >
        <NavLink
          className={({ isActive }) =>
            `flex w-full items-center py-2.5 px-4 font-medium uppercase tracking-wide text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg ${
              isActive ? "text-secondary" : ""
            }`
          }
          to={{
            pathname: item.href || undefined,
          }}
        >
          <span
            className={!item.children ? "block w-full" : ""}
            onClick={onClickClose}
          >
            {item.name}
          </span>
          {item.children && (
            <span
              className="block flex-grow"
              onClick={(e) => e.preventDefault()}
            >
              <Disclosure.Button
                as="span"
                className="flex justify-end flex-grow"
              >
                <ChevronDownIcon
                  className="ml-2 h-4 w-4 text-neutral-500"
                  aria-hidden="true"
                />
              </Disclosure.Button>
            </span>
          )}
        </NavLink>
        {item.children && (
          <Disclosure.Panel>{_renderMenuChild(item)}</Disclosure.Panel>
        )}
      </Disclosure>
    );
  };

  return (
    <div className="overflow-y-auto w-full h-screen py-2 transition transform shadow-lg ring-1 dark:ring-neutral-700 bg-white dark:bg-neutral-900 divide-y-2 divide-neutral-100 dark:divide-neutral-800">
      <div className="py-6 px-5">
        {/* <Logo /> */}
        <h1>
          <NavLink to="/">
            <img src={almaaLogo} alt="logo" />
          </NavLink>
        </h1>

        <span className="absolute right-2 top-2 p-1">
          <ButtonClose onClick={onClickClose} />
        </span>

        <div className="mt-5">
          <ProductSearch onSearchComplete={onClickClose} />
        </div>
      </div>
      <ul className="flex flex-col py-6 px-2 space-y-1">
        {data.map(_renderItem)}
      </ul>
    </div>
  );
};

export default NavMobile;
