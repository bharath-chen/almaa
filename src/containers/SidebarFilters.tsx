import { useState } from "react";

import Radio from "../shared/Radio/Radio";
import MySwitch from "../components/MySwitch";
import AppFilterTabs, {
  TabFilterItem,
} from "../components/AppFilterTabs/AppFilterTabs";

const DATA_sortOrderRadios = [
  { name: "Most Popular", id: "Most-Popular" },
  { name: "Best Rating", id: "Best-Rating" },
  { name: "Newest", id: "Newest" },
  { name: "Price Low - Hight", id: "Price-low-hight" },
  { name: "Price Hight - Low", id: "Price-hight-low" },
];

const SidebarFilters = () => {
  const [isPrescripitonRequired, setIsPrescriptionRequired] = useState(true);
  const [isNutraceuticalProduct, setIsNutraceuticalProduct] = useState(true);
  const [isHerbEnabled, setHerbEnabled] = useState(true);
  const [isCombosEnabled, setCombosEnabled] = useState(true);
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
  const [healthConditions, setHealthConditions] = useState<TabFilterItem[]>([
    {
      name: "Respiratory Wellbeing",
      checked: false,
    },
    {
      name: "Digestive Wellbeing",
      checked: false,
    },
    {
      name: "Reproductive Wellbeing",
      checked: false,
    },
    {
      name: "Blood Pressure Wellbeing",
      checked: false,
    },
  ]);
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

  const handleHealthCategoriesChange = (
    healthCondition: TabFilterItem,
    checked: boolean
  ) => {
    const items = [...healthConditions].map((item) => {
      if (item.name === healthCondition.name) item.checked = checked;
      return item;
    });

    setHealthConditions(items);
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
            defaultChecked={sortOrderStates === item.id}
            sizeClassName="w-5 h-5"
            onChange={setSortOrderStates}
            className="!text-sm"
          />
        ))}
      </div>
    );
  };

  return (
    <div className="divide-y divide-slate-200 dark:divide-slate-700">
      <AppFilterTabs
        heading="Product Form"
        items={productForms}
        onItemCheck={handleProductFormChange}
      />
      <div className="py-8 pr-2">
        <AppFilterTabs
          heading="Health Condition"
          items={healthConditions}
          onItemCheck={handleHealthCategoriesChange}
        />
      </div>
      <div className="py-8 pr-2">
        <MySwitch
          desc=""
          label="Combos"
          enabled={isCombosEnabled}
          onChange={setCombosEnabled}
        />
        <MySwitch
          className="pt-5"
          desc=""
          label="Nutraceutical Product"
          enabled={isNutraceuticalProduct}
          onChange={setIsNutraceuticalProduct}
        />
        <MySwitch
          className="pt-5"
          label="Prescription Required"
          desc=""
          enabled={isPrescripitonRequired}
          onChange={setIsPrescriptionRequired}
        />

        <MySwitch
          desc=""
          className="pt-5"
          label="Single herb/ Poly herb"
          enabled={isHerbEnabled}
          onChange={setHerbEnabled}
        />
      </div>
      {renderTabsSortOrder()}
    </div>
  );
};

export default SidebarFilters;
