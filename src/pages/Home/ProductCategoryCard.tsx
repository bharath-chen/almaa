import { Link } from "react-router-dom";

interface Item {
  name: string;
  desc: string;
  featuredImage: string;
  color: string;
  search: any;
}

interface Props {
  item: Item;
}

const ProductCategroyCard = ({ item }: Props) => {
  return (
    <Link className="cursor-pointer" to={`/products${item.search}`}>
      <article className="relative m-5 border rounded-2xl">
        <img src={item.featuredImage} alt={item.name} />
        <div className="absolute inset-0 flex items-center justify-center">
          <h3 className="bg-zinc-900/75 text-sm md:text-md lg:text-lg font-semibold border-zinc-900 py-2 px-5 text-white">
            {item.name}
          </h3>
        </div>
      </article>
    </Link>
  );
};

export default ProductCategroyCard;
