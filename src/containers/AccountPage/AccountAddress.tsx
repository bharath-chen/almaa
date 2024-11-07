import { Address } from "models/address";
import ShippingAddress from "../../containers/PageCheckout/ShippingAddress";
import useViewAddressess from "../../hooks/useViewAddress";
import CommonLayout from "./CommonLayout";
import { useState } from "react";
import ButtonPrimary from "../../shared/Button/ButtonPrimary";
import ButtonSecondary from "../../shared/Button/ButtonSecondary";
import AddressFormModal from "../../containers/PageCheckout/AddressFormModal";
import { useAppDispatch } from "../../hooks/hooks";
import { showLoader, hideLoader } from "../../features/loader/loaderSlice";
import addressService from "../../services/address-service";
import { showModal } from "../../features/modal/modalSlice";
import apiClient, { CanceledError } from "../../services/api-client";

const AccountAddress = () => {
  const { addressList, setAddressList, customer } = useViewAddressess();
  const dispatch = useAppDispatch();

  const [showAddressModal, setShowAddressModal] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<Address>(
    {} as Address
  );

  const handleAddressChange = (address: Address) => {
    setShowAddressModal(true);
    setSelectedAddress(address);
  };

  const getAddressList = () => {
    const controller = new AbortController();

    dispatch(showLoader());

    apiClient
      .get<Address[]>(
        `?gofor=addresslist&customer_id=${customer.customer_id}`,
        { signal: controller.signal }
      )
      .then((res) => {
        dispatch(hideLoader());
        setAddressList(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;

        dispatch(hideLoader());
        console.log(err.message);
      });
  };

  const updateAddress = (address: {
    doorno: string;
    street: string;
    location: string;
    city: string;
    state: string;
    pincode: string;
  }) => {
    setShowAddressModal(false);
    const payload = {
      gofor: "editaddress",
      customer_id: customer.customer_id,
      doorno: address.doorno,
      street: address.street,
      location: address.location,
      pincode: address.pincode,
      city: address.city,
      state: address.state,
      primary_use: "1",
      recently_use: "0",
    };

    dispatch(showLoader());

    addressService
      .create<{
        gofor: string;
        customer_id: string;
        doorno: string;
        street: string;
        location: string;
        pincode: string;
        city: string;
        state: string;
        primary_use: string;
        recently_use: string;
      }>(payload)
      .then((res) => {
        dispatch(hideLoader());
        if (res.data) {
          dispatch(
            showModal({
              type: "success",
              message: "Address updated successfully!",
            })
          );
        }
        getAddressList();
      })
      .catch((err) => {
        dispatch(hideLoader());
      });
  };

  // const deleteAddress = () => {};

  const handleClose = () => {
    setSelectedAddress({} as Address);
    setShowAddressModal(false);
  };

  return (
    <div>
      <CommonLayout>
        <div className="space-y-10 sm:space-y-12">
          {/* HEADING */}
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            Address List
          </h2>
          <div className="max-w-2xl prose prose-slate dark:prose-invert">
            {addressList.map((address, index) => (
              <div
                key={address.address_id}
                className="border border-slate-200 dark:border-slate-700 rounded-xl mb-4 p-4 sm:p-6 space-y-4"
              >
                <div className="flex items-start flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0">
                  {/* Icon */}
                  <span className="hidden sm:block mr-3">
                    <svg
                      className="w-6 h-6 text-slate-700 dark:text-slate-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.1401 15.0701V13.11C12.1401 10.59 14.1801 8.54004 16.7101 8.54004H18.6701"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.62012 8.55005H7.58014C10.1001 8.55005 12.1501 10.59 12.1501 13.12V13.7701V17.25"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.14008 6.75L5.34009 8.55L7.14008 10.35"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.8601 6.75L18.6601 8.55L16.8601 10.35"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  {/* Address Info */}
                  <div className="flex-1">
                    <h3 className="text-slate-700 dark:text-slate-300 flex items-center">
                      <span className="uppercase">Shipping Address</span>
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                        stroke="currentColor"
                        className="w-5 h-5 ml-2 text-slate-900 dark:text-slate-100"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </h3>
                    {address.address_id && (
                      <p className="font-semibold mt-1 text-sm">
                        {`${address?.doorno || ""}, ${address.street || ""}, ${
                          address.location
                        }, ${address.city || ""}, ${
                          address?.state || ""
                        }, India - ${address.pincode || ""}`}
                      </p>
                    )}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2 mt-4 sm:mt-0 sm:ml-auto">
                    <ButtonSecondary
                      sizeClass="py-2 px-4"
                      fontSize="text-sm font-medium"
                      className="bg-slate-50 dark:bg-slate-800 !rounded-lg"
                      onClick={() => handleAddressChange(address)}
                    >
                      Change
                    </ButtonSecondary>
                    {/* {address?.address_id && (
                      <ButtonPrimary
                        sizeClass="py-2 px-4"
                        fontSize="text-sm font-medium"
                        className="bg-red-500 text-white !rounded-lg"
                      >
                        Delete
                      </ButtonPrimary>
                    )} */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {showAddressModal && (
          <AddressFormModal
            customer={customer}
            saveBtnText="Update"
            address={selectedAddress}
            onSubmit={updateAddress}
            onClose={handleClose}
          />
        )}
      </CommonLayout>
    </div>
  );
};

export default AccountAddress;
