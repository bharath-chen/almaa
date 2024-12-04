import freeShipping from "../../assets/PRODUCT DETAIL/9-commitment-1.png";
import fasterDelivery from "../../assets/PRODUCT DETAIL/9-commitment-2.png";
import safePackaging from "../../assets/PRODUCT DETAIL/9-commitment-3.png";
import doctorConsultation from "../../assets/PRODUCT DETAIL/9-commitment-4.png";
import ingredientsIndex from "../../assets/PRODUCT DETAIL/10-ingredient-index-bg.jpg";

const Policy = () => {
  const A_FEATURES = [
    {
      color: "bg-slate-100",
      name: "Free shipping",
      desc: "On order above Rs.2000",
      svg: freeShipping,
    },
    {
      color: "bg-slate-100",
      name: "Faster Delivery",
      desc: "through postal & courier",
      svg: fasterDelivery,
    },
    {
      color: "bg-slate-100",
      name: "Safe Packaging",
      desc: "Perfect and strong packaging",
      svg: safePackaging,
    },
    {
      color: "bg-slate-100",
      name: "Doctor Consultation",
      desc: "talk to doctor for clarifications",
      svg: doctorConsultation,
    },
  ];

  return (
    <>
      <h4 className="text-3xl font-semibold mb-10">Almaa Commitment</h4>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:gap-x-10 gap-y-10">
        <div className="grid grid-cols-1 col-span-2 sm:grid-cols-2 gap-x-3 gap-y-7">
          {A_FEATURES.map((item, index) => {
            return (
              <div
                key={index}
                className={`grid px-2 pb-2 rounded-3xl ${item.color} dark:bg-opacity-90`}
              >
                <div>
                  <img className="w-16" src={item.svg} alt={item.name} />
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-md text-primary-900">
                    {item.name}
                  </p>
                  <p className="text-slate-500 mt-0.5 text-sm">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="relative">
          <img
            className="rounded-2xl w-full h-full"
            src={ingredientsIndex}
            alt="Ingredients index"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-white md:text-xs lg:text-lg font-bold">
              Get to know about Herbal Ingredients!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Policy;
