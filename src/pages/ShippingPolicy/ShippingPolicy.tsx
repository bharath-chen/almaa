import useShippingPolicy from "../../hooks/useShippingPolicy";

const ShippingPolicy = () => {
  const { htmlContent } = useShippingPolicy();

  return (
    <div className="container mx-auto px-4 my-20">
      <div className="row">
        <div className="col-xs-12">
          <div
            className="row grid-offer-row"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;
