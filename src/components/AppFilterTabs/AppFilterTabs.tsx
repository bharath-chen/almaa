import Checkbox from "../../shared/Checkbox/Checkbox";

interface TabFilterItem {
  name: string;
  checked?: boolean;
}

interface Props {
  heading: string;
  items: TabFilterItem[];
  onItemCheck: (item: TabFilterItem) => void;
}

const AppFilterTabs = ({ heading, items, onItemCheck }: Props) => {
  return (
    <div className="relative flex flex-col pb-8 space-y-4">
      <h3 className="font-semibold mb-2.5">{heading}</h3>
      {items.map((item) => (
        <div key={item.name} className="">
          <Checkbox
            name={item.name}
            label={item.name}
            defaultChecked={item.checked}
            sizeClassName="w-5 h-5"
            labelClassName="text-sm font-normal"
            onChange={() => onItemCheck(item)}
          />
        </div>
      ))}
    </div>
  );
};

export default AppFilterTabs;
