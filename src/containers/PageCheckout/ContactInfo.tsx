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
            <div className="max-w-lg">
              <Label className="text-sm">Your phone number</Label>
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
              <Label className="text-sm">Email address</Label>
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
