import { useEffect, useState } from "react";

import Radio from "../shared/Radio/Radio";
import MySwitch from "../components/MySwitch";
import AppFilterTabs, {
  TabFilterItem,
} from "../components/AppFilterTabs/AppFilterTabs";
import { SortOrder } from "../models/sort-order";
import useCategory from "../hooks/useCategory";
import useNatProducts from "../hooks/useNatProducts";

const DATA_sortOrderRadios = [
  { name: "Most Popular", id: "most-popular", value: "popular" },
  { name: "Best Rating", id: "best-rating", value: "rating" },
  { name: "Newest", id: "newest", value: "newest" },
  { name: "Price Low - Hight", id: "price-low-high", value: "price_low_high" },
  { name: "Price High - Low", id: "price-high-low", value: "price_high_low" },
];

export interface Filters {
  is_nutraceutical: boolean;
  pres_req: boolean;
  herb_type: boolean;
  nat_of_prod: string[];
}

interface Props {
  selectedSortOrder: SortOrder;
  onSort: (selectedSortOrder: SortOrder) => void;
  selectedFilter: Filters;
  onFilterChange: (filter: Filters, productForms: TabFilterItem[]) => void;
  productForms: TabFilterItem[];
}

const SidebarFilters = ({
  selectedSortOrder,
  onSort,
  selectedFilter,
  onFilterChange,
  productForms,
}: Props) => {
  const { natProducts } = useNatProducts();
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [sortOrderStates, setSortOrderStates] = useState<string>("");

  const handleProductFormChange = (
    productForm: TabFilterItem,
    checked: boolean
  ) => {
    const items = [...productForms].map((item) => {
      if (item.id === productForm.id) item.checked = checked;
      return item;
    });
    const checkedItems = items.filter((item) => item.checked).map((c) => c.id);
    onFilterChange({ ...selectedFilter, nat_of_prod: checkedItems }, items);
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

  return (
    <div className="divide-y divide-slate-200 dark:divide-slate-700">
      <div className="py-8 pr-2">
        {productForms.length > 0 && (
          <AppFilterTabs
            heading="Product Form"
            items={productForms}
            onItemCheck={handleProductFormChange}
          />
        )}
      </div>
      <div className="py-8 pr-2">
        <MySwitch
          className="pt-5"
          desc=""
          label="Nutraceutical Product"
          enabled={selectedFilter.is_nutraceutical}
          onChange={(enabled) =>
            onFilterChange(
              { ...selectedFilter, is_nutraceutical: enabled },
              productForms
            )
          }
        />
        <MySwitch
          className="pt-5"
          label="Prescription Required"
          desc=""
          enabled={selectedFilter.pres_req}
          onChange={(enabled) =>
            onFilterChange(
              { ...selectedFilter, pres_req: enabled },
              productForms
            )
          }
        />

        <MySwitch
          desc=""
          className="pt-5"
          label="Single herb"
          enabled={selectedFilter.herb_type}
          onChange={(enabled) =>
            onFilterChange(
              { ...selectedFilter, herb_type: enabled },
              productForms
            )
          }
        />
      </div>
      {renderTabsSortOrder()}
    </div>
  );
};

export default SidebarFilters;
