import { useEffect, useState } from "react";

import Radio from "../shared/Radio/Radio";
import MySwitch from "../components/MySwitch";
import AppFilterTabs, {
  TabFilterItem,
} from "../components/AppFilterTabs/AppFilterTabs";
import sidebarFilterService, {
  ISidebarFilter,
} from "../services/sidebar-filter-service";
import { CanceledError } from "axios";
import { SortOrder } from "../models/sort-order";

const DATA_sortOrderRadios = [
  { name: "Most Popular", id: "most-popular", value: "popular" },
  { name: "Best Rating", id: "best-rating", value: "rating" },
  { name: "Newest", id: "newest", value: "newest" },
  { name: "Price Low - Hight", id: "price-low-high", value: "price_low_high" },
  { name: "Price Hight - Low", id: "price-high-low", value: "price_high_low" },
];

interface Props {
  selectedSortOrder: SortOrder;
  onSort: (selectedSortOrder: SortOrder) => void;
}

//https://almaherbal.top/App/api.php?gofor=filterproducts&herb_type=Single&is_combo=1&recomm_gender=2

const SidebarFilters = ({ selectedSortOrder, onSort }: Props) => {
  const [filterSwitch, setFilterSwitch] = useState({
    isPrescripitonRequired: false,
    isNutraceuticalProduct: false,
    isHerbEnabled: false,
  });
  const [productForms, setProductForms] = useState<TabFilterItem[]>([
    {
      name: "Powders",
      checked: false,
    },
    {
      name: "Capsules",
      checked: false,
    },
    {
      name: "Juices",
      checked: false,
    },
    {
      name: "Cosmetics",
      checked: false,
    },
    {
      name: "Food",
      checked: false,
    },
    {
      name: "Special Products",
      checked: false,
    },
    {
      name: "Chooranam",
      checked: false,
    },
    {
      name: "Books & CDs",
      checked: false,
    },
    {
      name: "Child Care",
      checked: false,
    },
    {
      name: "Combo Packs",
      checked: false,
    },
    {
      name: "Spiritual",
      checked: false,
    },
    {
      name: "Organic",
      checked: false,
    },
    {
      name: "Country Drugs",
      checked: false,
    },
  ]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [sortOrderStates, setSortOrderStates] = useState<string>("");

  const handleProductFormChange = (
    productForm: TabFilterItem,
    checked: boolean
  ) => {
    const items = [...productForms].map((item) => {
      if (item.name === productForm.name) item.checked = checked;
      return item;
    });

    setProductForms(items);
  };

  const renderTabsSortOrder = () => {
    return (
      <div className="relative flex flex-col py-8 space-y-4">
        <h3 className="font-semibold mb-2.5">Sort By</h3>
        {DATA_sortOrderRadios.map((item) => (
          <Radio
            id={item.id}
            key={item.id}
            name="radioNameSort"
            label={item.name}
            defaultChecked={selectedSortOrder?.id === item.id}
            sizeClassName="w-5 h-5"
            onChange={() => onSort(item)}
            className="!text-sm"
          />
        ))}
      </div>
    );
  };

  const handleFilterChange = (enabled: boolean) => {};

  return (
    <div className="divide-y divide-slate-200 dark:divide-slate-700">
      <div className="py-8 pr-2">
        <AppFilterTabs
          heading="Product Form"
          items={productForms}
          onItemCheck={handleProductFormChange}
        />
      </div>
      <div className="py-8 pr-2">
        <MySwitch
          className="pt-5"
          desc=""
          label="Nutraceutical Product"
          enabled={filterSwitch.isNutraceuticalProduct}
          onChange={(enabled) =>
            setFilterSwitch({
              ...filterSwitch,
              isNutraceuticalProduct: enabled,
            })
          }
        />
        <MySwitch
          className="pt-5"
          label="Prescription Required"
          desc=""
          enabled={filterSwitch.isPrescripitonRequired}
          onChange={(enabled) =>
            setFilterSwitch({
              ...filterSwitch,
              isPrescripitonRequired: enabled,
            })
          }
        />

        <MySwitch
          desc=""
          className="pt-5"
          label="Single herb"
          enabled={filterSwitch.isHerbEnabled}
          onChange={(enabled) =>
            setFilterSwitch({ ...filterSwitch, isHerbEnabled: enabled })
          }
        />
      </div>
      {renderTabsSortOrder()}
    </div>
  );
};

export default SidebarFilters;
