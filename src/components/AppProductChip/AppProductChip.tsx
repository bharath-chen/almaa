interface Props {
  label: string;
  items: { id: number; label: string }[];
  selectedItem: { id: number; label: string };
  onItemChange: (item: { id: number; label: string }) => void;
}

const AppProductChip = ({
  label,
  items,
  selectedItem,
  onItemChange,
}: Props) => {
  return (
    <div>
      <h4 className="text-sm font-semibold">{label}</h4>
      <ul className="flex gap-3 my-3">
        {items.map((item) => (
          <li key={item.id} onClick={() => onItemChange(item)}>
            <span
              className={
                "cursor-pointer border-2 border-primary-900 text-md font-medium me-2 px-3.5 py-1 rounded-full dark:bg-green-900 dark:text-green-300 " +
                (item.id === selectedItem.id
                  ? "bg-primary-900 text-white"
                  : "bg-white-100 text-primary-800")
              }
            >
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppProductChip;
