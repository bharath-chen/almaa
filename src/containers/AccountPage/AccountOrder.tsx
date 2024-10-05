import { Fragment, useEffect, useState } from "react";
import Prices from "../../components/Prices";
import { Product } from "../../models/product";
import ButtonSecondary from "../../shared/Button/ButtonSecondary";
import CommonLayout from "./CommonLayout";
import orderService from "../../services/order-service";
import { CanceledError } from "axios";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { RootState } from "../../state/store";
import { clearCart } from "../../features/cart/cartSlice";
import ButtonPrimary from "../../shared/Button/ButtonPrimary";

export interface ViewOrder {
  order_detail_id: string;
  order_id: string;
  product_id: string;
  quantity: string;
  amount: string;
  order_detail_status: string;
  order_detail_created: string;
  order_detail_updated: string;
}

export interface OrdersPayload {
  viewOrders: ViewOrder[];
  productDetail: Product[];
}

const AccountOrder = () => {
  const [orders, setOrders] = useState<ViewOrder[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const customer = useAppSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const { request, cancel } = orderService.get<
      OrdersPayload,
      { gofor: string; customer_id: string }
    >({ gofor: "vieworders", customer_id: customer?.customer_id });

    request
      .then((res) => {
        console.log(res.data);
        setOrders(res.data.viewOrders);
        setProducts(res.data.productDetail);
        dispatch(clearCart());
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;

        console.log(err.message);
      });

    return () => cancel();
  }, []);

  const renderProductItem = (product: Product, index: number) => {
    const { product_image1, product_name, selling_price, product_id } = product;
    return (
      <div key={product_id} className="flex py-4 sm:py-7 last:pb-0 first:pt-0">
        <div className="h-24 w-16 sm:w-20 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100">
          <img
            src={product_image1}
            alt={product_name}
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="ml-4 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between ">
              <div>
                <h3 className="text-base font-medium line-clamp-1">
                  {product_name}
                </h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  <span>{"Natural"}</span>
                  <span className="mx-2 border-l border-slate-200 dark:border-slate-700 h-4"></span>
                  {/* <span>{"XL"}</span> */}
                </p>
              </div>
              <Prices price={+selling_price} className="mt-0.5 ml-2" />
            </div>
          </div>
          <div className="flex flex-1 items-end justify-between text-sm">
            <p className="text-gray-500 dark:text-slate-400 flex items-center">
              <span className="hidden sm:inline-block">Qty</span>
              <span className="inline-block sm:hidden">x</span>
              <span className="ml-2">{+orders[index].quantity}</span>
            </p>

            <div className="flex">
              <button
                type="button"
                className="font-medium text-indigo-600 dark:text-primary-500 "
              >
                Leave review
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const handleCancelOrder = (orderId: string) => {
    const { request } = orderService.get<
      null,
      { gofor: string; order_id: string }
    >({
      gofor: "cancelorder",
      order_id: orderId,
    });

    request.then((res) => {
      console.log(res.data);
    });
  };

  const renderOrder = (order: ViewOrder, index: number) => {
    return (
      <div className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden z-0">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 sm:p-8 bg-slate-50 dark:bg-slate-500/5">
          <div>
            {/* <p className="text-lg font-semibold">#WU3746HGG12</p> */}
            <p className="text-lg font-semibold">{order.order_detail_id}</p>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1.5 sm:mt-2">
              {/* <span>Aug 8, 2023</span> */}
              <span>{order.order_detail_updated}</span>
              <span className="mx-2">·</span>
              <span className="text-primary-500">Order Placed</span>
            </p>
          </div>
          <div className="mt-3 sm:mt-0">
            {/* <ButtonSecondary
              sizeClass="py-2.5 px-4 sm:px-6 me-3"
              fontSize="text-sm font-medium"
            >
              View Order
            </ButtonSecondary> */}
            <ButtonPrimary
              onClick={() => handleCancelOrder(order.order_detail_id)}
              sizeClass="py-2.5 px-4 sm:px-6"
              fontSize="text-sm font-medium"
            >
              Cancel Order
            </ButtonPrimary>
          </div>
        </div>
        <div className="border-t border-slate-200 dark:border-slate-700 p-2 sm:p-8 divide-y divide-y-slate-200 dark:divide-slate-700">
          {renderProductItem(products[index], index)}
        </div>
      </div>
    );
  };

  return (
    <div>
      <CommonLayout>
        <div className="space-y-10 sm:space-y-12">
          {/* HEADING */}
          <h2 className="text-2xl sm:text-3xl font-semibold">Order History</h2>
          {orders &&
            orders.length > 0 &&
            orders.map((order, index) => (
              <Fragment key={order.order_detail_id}>
                {renderOrder(order, index)}
              </Fragment>
            ))}
          {/* {renderOrder()} */}
        </div>
      </CommonLayout>
    </div>
  );
};

export default AccountOrder;
