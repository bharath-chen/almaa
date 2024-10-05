import Label from "../../components/Label/Label";
import { FC, useEffect, useState } from "react";
import ButtonPrimary from "../../shared/Button/ButtonPrimary";
import ButtonSecondary from "../../shared/Button/ButtonSecondary";
import Input from "../../shared/Input/Input";
import Select from "../../shared/Select/Select";
import { Address } from "../../models/address";
import { useAppSelector } from "../../hooks/hooks";
import { RootState } from "../../state/store";
import { countries } from "../../data/countries";
import { states } from "../../data/states";
import Radio from "../../shared/Radio/Radio";

interface Props {
  selectedAddress?: Address | null;
  onSelectedAddressChange?: (address: Address) => void;
  index?: number;
  address?: Address;
  isActive: boolean;
  onAddressChange: (address: Address, index: number) => void;
  onCloseActive: () => void;
  onOpenActive: () => void;
  onDeleteAddress: (address: Address, index: number) => void;
  onAddAddress: (address: Address, index: number) => void;
}

const ShippingAddress: FC<Props> = ({
  index,
  address,
  isActive,
  selectedAddress,
  onSelectedAddressChange,
  onAddressChange,
  onCloseActive,
  onOpenActive,
  onAddAddress,
  onDeleteAddress,
}) => {
  const customer = useAppSelector((state: RootState) => state.auth);
  const [addressForm, setAddressForm] = useState<Address>({
    address_id: address.address_id || "",
    customer_id: customer.customer_id,
    doorno: address.doorno || "",
    street: address.street || "",
    location: address.location || "",
    pincode: address.pincode || "",
    city: address.city || "",
    state: address.state || "TamilNadu",
    primary_use: "1",
    recently_use: "0",
  });

  useEffect(() => {
    setAddressForm({
      address_id: address.address_id || "",
      customer_id: customer.customer_id,
      doorno: address.doorno || "",
      street: address.street || "",
      location: address.location || "",
      pincode: address.pincode || "",
      city: address.city || "",
      state: address.state || "TamilNadu",
      primary_use: "1",
      recently_use: "0",
    });
  }, [address]);

  const handleFormValueChanges = (name: string, value: string) => {
    setAddressForm((prevAddress) => ({ ...prevAddress, [name]: value }));
  };

  const saveBtnText = address?.address_id
    ? "Continue to payment"
    : "Save and next to Payment";

  const handleSubmit = () => {
    if (!address.address_id) {
      const updatedAddress = { ...addressForm };
      onAddAddress(updatedAddress, index);
    }
    setAddressForm({
      address_id: "",
      customer_id: customer.customer_id,
      doorno: "",
      street: "",
      location: "",
      pincode: "",
      city: "",
      state: "",
      primary_use: "1",
      recently_use: "0",
    });
    onCloseActive();
  };

  const handleDelete = () => {
    onDeleteAddress(address, index);
    onCloseActive();
  };

  const renderShippingAddress = () => {
    return (
      <div className="border border-slate-200 dark:border-slate-700 rounded-xl mb-4">
        <div className="p-6 flex flex-col sm:flex-row items-start">
          {addressForm.address_id && (
            <Radio
              name="selectedAddress"
              id="selected-address"
              defaultChecked={
                selectedAddress?.address_id === address.address_id
              }
              onChange={() => onSelectedAddressChange(address)}
              className="mr-5"
            />
          )}
          <span className="hidden sm:block">
            <svg
              className="w-6 h-6 text-slate-700 dark:text-slate-400 mt-0.5"
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

          <div className="sm:ml-8">
            <h3 className=" text-slate-700 dark:text-slate-300 flex ">
              <span className="uppercase">SHIPPING ADDRESS</span>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="w-5 h-5 ml-3 text-slate-900 dark:text-slate-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </h3>
            {address.address_id && (
              <div className="font-semibold mt-1 text-sm">
                <span className="">
                  {`${address?.doorno || ""}, ${address.street || ""}, ${
                    address.location
                  }, ${address.city || ""}, ${address?.state || ""}, ${
                    "India" || ""
                  } - ${address.pincode || ""}`}
                </span>
              </div>
            )}
          </div>
          <ButtonSecondary
            sizeClass="py-2 px-4 "
            fontSize="text-sm font-medium"
            className="bg-slate-50 dark:bg-slate-800 mt-5 sm:mt-0 sm:ml-auto !rounded-lg"
            onClick={onOpenActive}
          >
            Change
          </ButtonSecondary>
          {address?.address_id && (
            <ButtonPrimary
              sizeClass="ms-2 py-2 px-4 "
              fontSize="text-sm font-medium"
              className="bg-slate-50 dark:bg-slate-800 mt-5 sm:mt-0 sm:ml-auto !rounded-lg"
              onClick={handleDelete}
            >
              Delete
            </ButtonPrimary>
          )}
          {/* <ButtonPrimary
            sizeClass="py-2 px-4 "
            fontSize="text-sm font-medium"
            className="bg-slate-50 dark:bg-slate-800 mt-5 sm:mt-0 sm:ml-auto !rounded-lg"
            onClick={onOpenActive}
          >
            Delete
          </ButtonPrimary> */}
        </div>
        <div
          className={`border-t border-slate-200 dark:border-slate-700 px-6 py-7 space-y-4 sm:space-y-6 ${
            isActive ? "block" : "hidden"
          }`}
        >
          {/* ============ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-3">
            {/* defaultValue="Cole" */}
            <div>
              <Label className="text-sm">First name</Label>
              <Input className="mt-1.5" value={customer.first_name} disabled />
            </div>
            <div>
              <Label className="text-sm">Last name</Label>
              <Input className="mt-1.5" value={customer.lastName} disabled />
            </div>
          </div>

          {/* ============ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-3">
            <div className="flex-1">
              <Label className="text-sm">Door no</Label>
              <Input
                className="mt-1.5"
                value={addressForm.doorno}
                type={"text"}
                name="doorno"
                onChange={(e) =>
                  handleFormValueChanges("doorno", e.target.value)
                }
              />
            </div>
            <div className="flex-1">
              <Label className="text-sm">Street</Label>
              <Input
                className="mt-1.5"
                value={addressForm.street}
                name="street"
                onChange={(e) =>
                  handleFormValueChanges("street", e.target.value)
                }
              />
            </div>
          </div>

          {/* ============ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-3">
            <div>
              <Label className="text-sm">Location</Label>
              <Input
                className="mt-1.5"
                value={addressForm.location}
                type={"text"}
                name="doorno"
                onChange={(e) =>
                  handleFormValueChanges("location", e.target.value)
                }
              />
            </div>

            <div>
              <Label className="text-sm">City</Label>
              <Input
                className="mt-1.5"
                value={addressForm.city}
                name="city"
                onChange={(e) => handleFormValueChanges("city", e.target.value)}
              />
              {/* defaultValue="Norris" */}
            </div>
          </div>

          {/* ============ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-3">
            <div>
              <Label className="text-sm">Country</Label>
              <Select className="mt-1.5" defaultValue={"India"} disabled>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </Select>
            </div>

            <div>
              <Label className="text-sm">State/Province</Label>
              {/* <Input className="mt-1.5" value={address.state} /> */}
              <Select
                className="mt-1.5"
                value={addressForm.state || "TamilNadu"}
                disabled
              >
                {states.map((state) => (
                  <option key={state.label} value={state.value}>
                    {state.label}
                  </option>
                ))}
              </Select>
              {/* defaultValue="Texas" */}
            </div>
          </div>

          {/* ============ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-3">
            <div>
              <Label className="text-sm">Postal code</Label>
              <Input
                className="mt-1.5"
                name="pincode"
                value={addressForm.pincode}
                onChange={(e) =>
                  handleFormValueChanges("pincode", e.target.value)
                }
              />
              {/* defaultValue="Texas" */}
            </div>
          </div>

          {/* ============ */}
          {/* <div>
            <Label className="text-sm">Address type</Label>
            <div className="mt-1.5 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              <Radio
                label={`<span class="text-sm font-medium">Home <span class="font-light">(All Day Delivery)</span></span>`}
                id="Address-type-home"
                name="Address-type"
                // value="Address-type-home"
                // checked={addressForm?.addressType === "Address-type-home"}
                // onChange={(val) =>
                //   setAddressForm({ ...addressForm, addressType: val })
                // }
                defaultChecked
              />
              <Radio
                label={`<span class="text-sm font-medium">Office <span class="font-light">(Delivery <span class="font-medium">9 AM - 5 PM</span>)</span> </span>`}
                id="Address-type-office"
                name="Address-type"
                // value="Address-type-office"
                // checked={addressForm?.addressType === "Address-type-office"}
                // onChange={(val) =>
                //   setAddressForm({ ...addressForm, addressType: val })
                // }
              />
            </div>
          </div> */}

          {/* ============ */}
          <div className="flex flex-col sm:flex-row pt-6">
            <ButtonPrimary
              className="sm:!px-7 shadow-none"
              onClick={handleSubmit}
            >
              {saveBtnText}
            </ButtonPrimary>
            <ButtonSecondary
              className="mt-3 sm:mt-0 sm:ml-3"
              onClick={onCloseActive}
            >
              Cancel
            </ButtonSecondary>
          </div>
        </div>
      </div>
    );
  };
  return renderShippingAddress();
};

export default ShippingAddress;
