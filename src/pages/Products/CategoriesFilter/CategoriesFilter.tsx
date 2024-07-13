import { Popover } from "@headlessui/react";

interface Props {
  name: string;
  count: number;
  removeFilter: () => void;
}

const CategoriesFilter = ({ name, count, removeFilter }: Props) => {
  return (
    <Popover>
      <Popover.Button className="flex py-2.5 px-5 me-2 mb-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
        <span className="mr-2">
          {name} ({count})
        </span>

        <span
          className="flex-shrink-0 w-4 h-4 rounded-full bg-gray-500 text-white flex items-center justify-center ml-1 cursor-pointer"
          onClick={removeFilter}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </Popover.Button>
    </Popover>
    // <Popover>
    //   <Popover.Button
    //     className={`flex items-center justify-between px-4 py-2 text-sm rounded-full border border-primary-500 bg-primary-50 text-primary-900 focus:outline-none `}
    //   >
    //     {/* <svg
    //       className="w-4 h-4"
    //       viewBox="0 0 24 24"
    //       fill="none"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <path
    //         d="M8.67188 14.3298C8.67188 15.6198 9.66188 16.6598 10.8919 16.6598H13.4019C14.4719 16.6598 15.3419 15.7498 15.3419 14.6298C15.3419 13.4098 14.8119 12.9798 14.0219 12.6998L9.99187 11.2998C9.20187 11.0198 8.67188 10.5898 8.67188 9.36984C8.67188 8.24984 9.54187 7.33984 10.6119 7.33984H13.1219C14.3519 7.33984 15.3419 8.37984 15.3419 9.66984"
    //         stroke="currentColor"
    //         strokeWidth="1.5"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //       />
    //       <path
    //         d="M12 6V18"
    //         stroke="currentColor"
    //         strokeWidth="1.5"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //       />
    //       <path
    //         d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
    //         stroke="currentColor"
    //         strokeWidth="1.5"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //       />
    //     </svg> */}

    //     <span className="ml-1 min-w-[90px]">
    //       <span>Powders</span>
    //     </span>

    // <span
    //   className="flex-shrink-0 w-4 h-4 rounded-full bg-primary-500 text-white flex items-center justify-center ml-1 cursor-pointer"
    //   onClick={removeFilter}
    // >
    //   <svg
    //     xmlns="http://www.w3.org/2000/svg"
    //     className="h-3 w-3"
    //     viewBox="0 0 20 20"
    //     fill="currentColor"
    //   >
    //     <path
    //       fillRule="evenodd"
    //       d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
    //       clipRule="evenodd"
    //     />
    //   </svg>
    // </span>
    //   </Popover.Button>
    // </Popover>
  );
};

export default CategoriesFilter;
