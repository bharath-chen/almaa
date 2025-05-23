import { useNavigate } from "react-router-dom";

interface Item {
  id: string;
  code: string;
  name: string;
  desc: string;
  featuredImage: string;
  color: string;
  search: any;
  urlName?: string;
}

interface Props {
  item: Item;
}

const ProductCategroyCard = ({ item }: Props) => {
  const navigate = useNavigate();

  const routeToUrl = () => {
    navigate(`/category/${item.urlName}`, {
      state: {
        natId: item.id,
        natProductName: item.desc,
      },
    });
  };

  return (
    <div className="cursor-pointer" onClick={routeToUrl}>
      <article className="relative m-5 border rounded-2xl">
        <img src={item.featuredImage} alt={item.name} />
        <div className="absolute inset-0 flex items-center justify-center">
          <h3 className="bg-zinc-900/75 text-sm md:text-md lg:text-lg font-semibold border-zinc-900 py-2 px-5 text-white">
            {item.name}
          </h3>
        </div>
      </article>
    </div>
  );
};

export default ProductCategroyCard;
