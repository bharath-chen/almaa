import NavigationItem from "./NavigationItem";
import { NAVIGATION_DEMO_2 } from "../../data/navigation";
import useCategory from "../../hooks/useCategory";
import { useEffect } from "react";

function Navigation() {
  const { categories, error } = useCategory();

  useEffect(() => {
    const modifiedCategories =
      categories && categories.length > 0
        ? categories?.map((c) => ({
            id: c.category_id,
            code: c.cat_code,
            name: c.cat_name,
            href: undefined,
            url_name: c.url_name,
          }))
        : [];
    NAVIGATION_DEMO_2[1].children = modifiedCategories;
  }, [categories]);

  return (
    <ul className="nc-Navigation flex items-center">
      {NAVIGATION_DEMO_2.map((item) => (
        <NavigationItem key={item.id} menuItem={item} />
      ))}
    </ul>
  );
}

export default Navigation;
