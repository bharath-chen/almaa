import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { FC, Fragment, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { LocationStates } from "../../routers/types";
import { Utils } from "../../utils/utils";

export interface NavItemType {
  id: string;
  code?: string;
  name: string;
  href: keyof LocationStates;
  targetBlank?: boolean;
  children?: NavItemType[];
  type?: "dropdown" | "megaMenu" | "subMenu" | "none";
  isNew?: boolean;
  className?: string;
  url_name?: string;
}

export interface NavigationItemProps {
  menuItem: NavItemType;
}

const NavigationItem: FC<NavigationItemProps> = ({ menuItem }) => {
  const navigate = useNavigate();
  const [menuCurrentHovers, setMenuCurrentHovers] = useState<string[]>([]);

  const onMouseEnterMenu = (id: string) => {
    setMenuCurrentHovers((state) => [...state, id]);
  };

  const onMouseLeaveMenu = (id: string) => {
    setMenuCurrentHovers((state) => {
      return state.filter((item, index) => {
        return item !== id && index < state.indexOf(id);
      });
    });
  };

  // ===================== MENU SUBMENU =====================
  const renderSubMenu = (menu: NavItemType) => {
    if (!menu.children) {
      return null;
    }

    return (
      <li
        className={`menu-item flex-shrink-0 menu-megamenu menu-megamenu--large`}
      >
        {renderMainItem(menu)}

        <div className="invisible sub-menu absolute top-full inset-x-0 transform z-50 border-t border-slate-200 dark:border-slate-700">
          <div className="bg-neutral-100 dark:bg-neutral-900">
            {/* <div className="container"> */}
            <div className="flex text-sm pt-4 pb-4">
              <div className="flex flex-auto justify-center items-center gap-6 xl:gap-8 pr-6 xl:pr-8">
                {menu.children.map((item, index) => (
                  <div key={index} className="cursor-pointer">
                    <p className="font-medium text-slate-500 dark:text-neutral-200 hover:text-primary-900 dark:hover:text-primary-900">
                      {item.href ? (
                        <Link to={item.href}>{item.name}</Link>
                      ) : (
                        <span>{item.name}</span>
                      )}
                    </p>
                    {/* <ul className="grid space-y-4 mt-4">
                        {item.children?.map(renderMegaMenuNavlink)}
                      </ul> */}
                  </div>
                ))}
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </li>
    );
  };

  // ===================== MENU MEGAMENU =====================
  const renderMegaMenu = (menu: NavItemType) => {
    if (!menu.children) {
      return null;
    }
    return (
      <li
        className={`menu-item flex-shrink-0 menu-megamenu menu-megamenu--large`}
      >
        {renderMainItem(menu)}

        <div className="invisible sub-menu absolute top-full inset-x-0 transform z-50">
          <div className="bg-white dark:bg-neutral-900 shadow-lg">
            <div className="container">
              <div className="flex text-sm border-t border-slate-200 dark:border-slate-700 py-14">
                <div className="flex-1 grid grid-cols-4 gap-6 xl:gap-8 pr-6 xl:pr-8">
                  {menu.children.map((item, index) => (
                    <div key={index}>
                      <p className="font-medium text-slate-900 dark:text-neutral-200">
                        {item.name}
                      </p>
                      <ul className="grid space-y-4 mt-4">
                        {item.children?.map(renderMegaMenuNavlink)}
                      </ul>
                    </div>
                  ))}
                </div>
                {/* <div className="w-[40%] xl:w-[35%]">
                  <CardCategory3 />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  };

  const renderMegaMenuNavlink = (item: NavItemType) => {
    return (
      <li key={item.id} className={`${item.isNew ? "menuIsNew" : ""}`}>
        <NavLink
          target={item.targetBlank ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white "
          to={{
            pathname: item.href || undefined,
          }}
        >
          {item.name}
        </NavLink>
      </li>
    );
  };

  // ===================== MENU DROPDOW =====================
  const renderDropdownMenu = (menuDropdown: NavItemType) => {
    const isHover = menuCurrentHovers.includes(menuDropdown.id);

    return (
      <Popover
        as="li"
        className="menu-item menu-dropdown relative"
        onMouseEnter={() => onMouseEnterMenu(menuDropdown.id)}
        onMouseLeave={() => onMouseLeaveMenu(menuDropdown.id)}
      >
        {() => (
          <>
            <Popover.Button as={Fragment}>
              {renderMainItem(menuDropdown)}
            </Popover.Button>
            <Transition
              as={Fragment}
              show={isHover}
              enter="transition ease-out duration-150"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                static
                className={
                  "sub-menu absolute transform z-10 w-56 top-full left-0 " +
                  menuDropdown.className
                }
              >
                {menuDropdown.className && (
                  <ul className="bg-white grid grid-cols-2 gap-4 p-4 text-sm">
                    {/* Left column */}
                    <div>
                      {menuDropdown.children.slice(0, 8).map((item) => (
                        <li
                          onClick={
                            () =>
                              navigate(
                                `/category/${Utils.urlFormatter(item.url_name)}`
                                // {
                                //   state: {
                                //     categoryId: item.id,
                                //     categoryName: item.name,
                                //   },
                                // }
                              )
                            // navigate(
                            //   `/products?category_id=${item.id}&category=${item.name}`
                            // )
                          }
                          key={item.id}
                          className="px-2"
                        >
                          <span className="cursor-pointer flex items-center py-2 px-4 rounded-md hover:text-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200 font-normal text-neutral-600 dark:text-neutral-400">
                            {item.name}
                          </span>
                        </li>
                      ))}
                    </div>
                    {/* Right column */}
                    <div>
                      {menuDropdown.children.slice(8).map((item) => (
                        <li
                          onClick={
                            () =>
                              navigate(
                                `/category/${Utils.urlFormatter(item.url_name)}`
                                // {
                                //   state: {
                                //     categoryId: item.id,
                                //     categoryName: item.name,
                                //   },
                                // }
                              )
                            // navigate(
                            //   `/products?category_id=${item.id}&category=${item.name}`
                            // )
                          }
                          key={item.id}
                          className="px-2"
                        >
                          <span className="cursor-pointer flex items-center py-2 px-4 rounded-md hover:text-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200 font-normal text-neutral-600 dark:text-neutral-400">
                            {item.name}
                          </span>
                        </li>
                      ))}
                    </div>
                  </ul>
                )}
                {!menuDropdown.className && (
                  <ul
                    className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10 text-sm relative bg-white dark:bg-neutral-900 py-4 grid space-y-1 overflow-y-auto"
                    style={{ maxHeight: "80vh" }} // Limit height to 80% of the viewport height
                  >
                    {menuDropdown.children?.map((i) => {
                      if (i.type) {
                        return renderDropdownMenuNavlinkHasChild(i);
                      } else {
                        return (
                          <li key={i.id} className="px-2">
                            {renderDropdownMenuNavlink(i)}
                          </li>
                        );
                      }
                    })}
                  </ul>
                )}
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
  };

  const renderDropdownMenuNavlinkHasChild = (item: NavItemType) => {
    const isHover = menuCurrentHovers.includes(item.id);
    return (
      <Popover
        as="li"
        key={item.id}
        className="menu-item menu-dropdown relative px-2"
        onMouseEnter={() => onMouseEnterMenu(item.id)}
        onMouseLeave={() => onMouseLeaveMenu(item.id)}
      >
        {() => (
          <>
            <Popover.Button as={Fragment}>
              {renderDropdownMenuNavlink(item)}
            </Popover.Button>
            <Transition
              as={Fragment}
              show={isHover}
              enter="transition ease-out duration-150"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                static
                className="sub-menu absolute z-10 w-56 left-full pl-2 top-0"
              >
                <ul className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10 text-sm relative bg-white dark:bg-neutral-900 py-4 grid space-y-1">
                  {item.children?.map((i) => {
                    if (i.type) {
                      return renderDropdownMenuNavlinkHasChild(i);
                    } else {
                      return (
                        <li key={i.id} className="px-2">
                          {renderDropdownMenuNavlink(i)}
                        </li>
                      );
                    }
                  })}
                </ul>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
  };

  const renderDropdownMenuNavlink = (item: NavItemType) => {
    if (!item.href)
      return (
        <span
          onClick={() =>
            navigate(`/category?category_id=${item.id}&category=${item.name}`)
          }
          className="cursor-pointer flex items-center py-2 px-4 rounded-md hover:text-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200 font-normal text-neutral-6000 dark:text-neutral-400"
        >
          {item.name}
        </span>
      );

    return (
      <NavLink
        target={item.targetBlank ? "_blank" : undefined}
        rel="noopener noreferrer"
        className={({ isActive }) =>
          `flex items-center py-2 px-4 rounded-md hover:text-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200 ${
            isActive
              ? // ? "font-medium text-neutral-900 dark:text-neutral-100"
                "font-normal text-neutral-6000 dark:text-neutral-400"
              : "font-normal text-neutral-6000 dark:text-neutral-400 "
          }`
        }
        to={{
          pathname: item.href || undefined,
        }}
      >
        {item.name}
        {item.type && (
          <ChevronDownIcon
            className="ml-2 h-4 w-4 text-neutral-500"
            aria-hidden="true"
          />
        )}
      </NavLink>
    );
  };

  // ===================== MENU MAIN MENU =====================
  const renderMainItem = (item: NavItemType) => {
    return (
      <div className="h-20 flex-shrink-0 flex items-center">
        <NavLink
          target={item.targetBlank ? "_blank" : undefined}
          rel="noopener noreferrer"
          // hover:bg-slate-100
          className="inline-flex items-center text-sm lg:text-[15px] font-medium text-slate-700 dark:text-slate-300 py-2.5 px-4 xl:px-5 rounded-full hover:text-primary-900 dark:hover:text-emerald-400"
          to={{
            pathname: item.href || undefined,
          }}
        >
          {item.name}
          {/* {item.type && (
            <ChevronDownIcon
              className="ml-1 -mr-1 h-4 w-4 text-slate-400"
              aria-hidden="true"
            />
          )} */}
        </NavLink>
      </div>
    );
  };

  switch (menuItem.type) {
    case "dropdown":
      return renderDropdownMenu(menuItem);
    case "megaMenu":
      return renderMegaMenu(menuItem);
    case "subMenu":
      return renderSubMenu(menuItem);
    default:
      return (
        <li className="menu-item flex-shrink-0">{renderMainItem(menuItem)}</li>
      );
  }
};

export default NavigationItem;
