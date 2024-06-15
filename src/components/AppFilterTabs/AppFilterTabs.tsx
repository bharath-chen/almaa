import Checkbox from "../../shared/Checkbox/Checkbox";

export interface TabFilterItem {
  name: string;
  checked?: boolean;
}

interface Props {
  heading: string;
  items: TabFilterItem[];
  onItemCheck: (item: TabFilterItem, checked: boolean) => void;
}

const AppFilterTabs = ({ heading, items, onItemCheck }: Props) => {
  return (
    <div className="relative flex flex-col pb-8 space-y-4">
      <h3 className="font-semibold mb-2.5">{heading}</h3>
      {items.map((item) => (
        <div key={item.name}>
          <Checkbox
            name={item.name}
            label={item.name}
            defaultChecked={item.checked}
            sizeClassName="w-5 h-5"
            labelClassName="text-sm font-normal"
            onChange={(checked: boolean) => onItemCheck(item, checked)}
          />
        </div>
      ))}
    </div>
  );
};

export default AppFilterTabs;
