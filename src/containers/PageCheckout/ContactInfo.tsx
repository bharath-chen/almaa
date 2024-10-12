import React, { FC, useEffect, useState } from "react";
import ButtonPrimary from "../../shared/Button/ButtonPrimary";
import ButtonSecondary from "../../shared/Button/ButtonSecondary";
import Input from "../../shared/Input/Input";
import Label from "../../components/Label/Label";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { RootState } from "../../state/store";
import customerService from "../../services/customer-service";
import { CanceledError } from "axios";
import { showLoader, hideLoader } from "../../features/loader/loaderSlice";
import { Customer } from "../../models/customer";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputErrorMessage from "../../components/InputErrorMessage/InputErrorMessage";
import { showModal } from "../../features/modal/modalSlice";
import MandatoryIcon from "../../components/MandatoryIcon/MandatoryIcon";

// Zod validation schema
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const mobilePattern = /^\d{10}$/;

const schema = z.object({
  email: z
    .string()
    .nonempty("Email is required")
    .refine(
      (value) => emailPattern.test(value),
      "Please enter a valid email address"
    ),
  phoneNumber: z
    .string()
    .nonempty("Mobile number is required")
    .refine(
      (value) => mobilePattern.test(value),
      "Please enter a valid 10-digit mobile number"
    ),
});

type ContactInfoFormData = z.infer<typeof schema>;

interface Props {
  isActive: boolean;
  onOpenActive: () => void;
  onCloseActive: () => void;
}

const ContactInfo: FC<Props> = ({ isActive, onCloseActive, onOpenActive }) => {
  const user = useAppSelector((state: RootState) => state.auth);
  const [customer, setCustomer] = useState<Customer>(user);
  const dispatch = useAppDispatch();

  // React Hook Form setup with Zod resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ContactInfoFormData>({ resolver: zodResolver(schema) });

  // Fetch customer details to prefill the form
  const fetchCustomerDetails = () => {
    const { request, cancel } = customerService.get<
      Customer,
      { gofor: string; customer_id: string }
    >({
      gofor: "customersget",
      customer_id: user.customer_id,
    });

    dispatch(showLoader());

    request
      .then((res) => {
        dispatch(hideLoader());
        const data = res.data;
        setCustomer(data);
        setValue("email", data.email);
        setValue("phoneNumber", data.mobilenumber);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        dispatch(hideLoader());
      });

    return () => cancel();
  };

  useEffect(() => {
    const cancelRequest = fetchCustomerDetails();
    return () => cancelRequest();
  }, []);

  // Form submission handler
  const onSubmit = (data: ContactInfoFormData) => {
    const payload = {
      gofor: "updatecontact",
      customer_id: customer.customer_id,
      email: data.email,
      mobilenumber: data.phoneNumber,
    };

    dispatch(showLoader());

    customerService
      .create<Customer>(payload)
      .then((res) => {
        dispatch(hideLoader());
        dispatch(
          showModal({
            type: "success",
            message: "Contact Info has been updated successfully!",
          })
        );
        fetchCustomerDetails();
      })
      .catch((err) => {
        dispatch(hideLoader());
        dispatch(
          showModal({
            type: "error",
            message: "Something went wrong. Try again later!",
          })
        );
      });
    onCloseActive();
  };

  const renderAccount = () => {
    return (
      <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden z-0">
        <div className="flex flex-col sm:flex-row items-start p-6">
          <span className="hidden sm:block">
            <svg
              className="w-6 h-6 text-slate-700 dark:text-slate-400 mt-0.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.50998C8.71997 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <div className="sm:ml-8">
            <h3 className="text-slate-700 dark:text-slate-300 flex">
              <span className="uppercase tracking-tight">CONTACT INFO</span>
            </h3>
            <div className="font-semibold mt-1 text-sm">
              <span>
                {customer.first_name} {customer.last_name}
              </span>
              <span className="ml-3 tracking-tighter">
                +91 {customer.mobilenumber}
              </span>
            </div>
          </div>
          <ButtonSecondary
            sizeClass="py-2 px-4"
            fontSize="text-sm font-medium"
            className="bg-slate-50 dark:bg-slate-800 mt-5 sm:mt-0 sm:ml-auto !rounded-lg"
            onClick={() => onOpenActive()}
          >
            Change
          </ButtonSecondary>
        </div>

        <div
          className={`border-t border-slate-200 dark:border-slate-700 px-6 py-7 space-y-4 sm:space-y-6 ${
            isActive ? "block" : "hidden"
          }`}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="max-w-lg mb-2">
              <Label className="text-sm">
                Your phone number <MandatoryIcon />
              </Label>
              <Input
                className="mt-1.5"
                type="tel"
                {...register("phoneNumber")}
              />
              {errors.phoneNumber && (
                <InputErrorMessage>
                  {errors.phoneNumber.message}
                </InputErrorMessage>
              )}
            </div>

            <div className="max-w-lg">
              <Label className="text-sm">
                Email address <MandatoryIcon />
              </Label>
              <Input className="mt-1.5" type="email" {...register("email")} />
              {errors.email && (
                <InputErrorMessage>{errors.email.message}</InputErrorMessage>
              )}
            </div>

            <div className="flex flex-col sm:flex-row pt-6">
              <ButtonPrimary type="submit" className="sm:!px-7 shadow-none">
                Save
              </ButtonPrimary>
              <ButtonSecondary
                type="button"
                className="mt-3 sm:mt-0 sm:ml-3"
                onClick={() => onCloseActive()}
              >
                Cancel
              </ButtonSecondary>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return renderAccount();
};

export default ContactInfo;
