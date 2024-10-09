import { Fragment, useEffect, useState } from "react";
import Prices from "../../components/Prices";
import { Product } from "../../models/product";
import CommonLayout from "./CommonLayout";
import orderService from "../../services/order-service";
import { CanceledError } from "axios";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { RootState } from "../../state/store";
import { clearCart } from "../../features/cart/cartSlice";
import ButtonPrimary from "../../shared/Button/ButtonPrimary";
import { getFormattedDate } from "../../utils/date-utils";
import { hideLoader, showLoader } from "../../features/loader/loaderSlice";

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

export interface OrderHistory {
  order_id: string;
  indexes: any[];
  orders: ViewOrder[];
  products: Product[];
}

const AccountOrder = () => {
  const [orders, setOrders] = useState<ViewOrder[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [ordersHistory, setOrdersHistroy] = useState<OrderHistory[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<OrderHistory | null>(null); // For selected order
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility
  const customer = useAppSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const { request, cancel } = orderService.get<
      OrdersPayload,
      { gofor: string; customer_id: string }
    >({
      gofor: "vieworders",
      customer_id: customer?.customer_id,
    });

    dispatch(showLoader());

    request
      .then((res) => {
        dispatch(hideLoader());
        const orderIds = [
          ...new Set(res.data.viewOrders.map((o) => o.order_id)),
        ];
        const formattedOrders = orderIds.map((o) => {
          const indexes = [];

          res.data.viewOrders.forEach((co, i) => {
            if (co.order_id === o) indexes.push(i);
          });

          return {
            order_id: o,
            indexes,
            orders: indexes.map((num) => res.data.viewOrders[num]),
            products: indexes.map((num) => res.data.productDetail[num]),
          };
        });
        setOrdersHistroy(formattedOrders.reverse());
        setOrders(res.data.viewOrders);
        setProducts(res.data.productDetail);
        dispatch(clearCart());
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;

        dispatch(hideLoader());
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
          </div>
        </div>
      </div>
    );
  };

  const renderOrder = (order: OrderHistory) => {
    return (
      <div className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden z-0">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 sm:p-8 bg-slate-50 dark:bg-slate-500/5">
          <div>
            <p className="text-lg font-semibold">{order.order_id}</p>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1.5 sm:mt-2">
              <span>
                {getFormattedDate(order.orders[0].order_detail_updated)}
              </span>
              <span className="mx-2">·</span>
              <span className="text-primary-500">Order Placed</span>
            </p>
          </div>
          <div className="mt-3 sm:mt-0">
            <ButtonPrimary
              sizeClass="py-2.5 px-4 sm:px-6"
              fontSize="text-sm font-medium"
              onClick={() => handleViewOrder(order)} // Handle view order
            >
              View Order
            </ButtonPrimary>
          </div>
        </div>
      </div>
    );
  };

  // Function to handle viewing an order
  const handleViewOrder = (order: OrderHistory) => {
    setSelectedOrder(order); // Set the selected order
    setIsModalOpen(true); // Open modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close modal
  };

  return (
    <div>
      <CommonLayout>
        <div className="space-y-10 sm:space-y-12">
          {/* HEADING */}
          <h2 className="text-2xl sm:text-3xl font-semibold">Order History</h2>
          {ordersHistory &&
            ordersHistory.length > 0 &&
            ordersHistory.map((order) => (
              <Fragment key={order.order_id}>{renderOrder(order)}</Fragment>
            ))}
        </div>
      </CommonLayout>

      {/* Modal for displaying order products */}
      {isModalOpen && selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
          <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full p-6 sm:p-8 overflow-y-auto max-h-[80vh] relative">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">
                Order: {selectedOrder.order_id}
              </h3>
              <button
                className="text-gray-600 hover:text-gray-900"
                onClick={handleCloseModal}
                aria-label="Close Modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {/* Render Products */}
            <div className="space-y-6">
              {selectedOrder.products.map((product, index) => (
                <Fragment key={product.product_id}>
                  {renderProductItem(product, index)}
                </Fragment>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-6"></div>

            {/* Total Section */}
            <div className="flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span>
                ₹
                {selectedOrder.products
                  .reduce((total, product, index) => {
                    return (
                      total + +product.selling_price * +orders[index].quantity
                    );
                  }, 0)
                  .toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountOrder;
