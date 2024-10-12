import React, { FC, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../shared/Input/Input";
import ButtonPrimary from "../../shared/Button/ButtonPrimary";
import { useAppDispatch } from "../../hooks/hooks";
import InputErrorMessage from "../../components/InputErrorMessage/InputErrorMessage";
import MandatoryIcon from "../../components/MandatoryIcon/MandatoryIcon";
import { Customer } from "../../models/customer";
import { hideLoader, showLoader } from "../../features/loader/loaderSlice";
import { showModal } from "../../features/modal/modalSlice";
import passwordService from "../../services/password-service";
import { useNavigate } from "react-router-dom";

const mobilePattern = /^\d{10}$/;

const mobileSchema = z.object({
  mobilenumber: z
    .string()
    .nonempty("Mobile number is required")
    .regex(mobilePattern, "Please enter a valid 10-digit mobile number"),
});

const passwordSchema = z
  .object({
    otp: z.string().nonempty("OTP is required"),
    password: z.string().nonempty("Password is required"),
    confirmPassword: z.string().nonempty("Confirm Password is required"),
  })
  .refine((val) => val.password === val.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type MobileFormInputs = z.infer<typeof mobileSchema>;
type PasswordFormInputs = z.infer<typeof passwordSchema>;

const ForgotPassword: FC = () => {
  const dispatch = useAppDispatch();
  const [step, setStep] = useState(1);
  const [customerId, setCustomerId] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // Form for mobile number
  const {
    register: registerMobile,
    handleSubmit: handleSubmitMobile,
    formState: { errors: mobileErrors },
    reset: resetMobile,
  } = useForm<MobileFormInputs>({
    resolver: zodResolver(mobileSchema),
  });

  // Form for password reset (OTP, new password, confirm password)
  const {
    register: registerPassword,
    handleSubmit: handleSubmitPassword,
    formState: { errors: passwordErrors },
    reset,
  } = useForm<PasswordFormInputs>({
    resolver: zodResolver(passwordSchema),
  });

  // Handle mobile number submission
  const submitMobileNumber = (data: MobileFormInputs) => {
    const { request } = passwordService.get<
      Customer,
      { gofor: string; mobilenumber: string }
    >({ gofor: "forgot_otp", mobilenumber: data.mobilenumber });

    dispatch(showLoader());

    request
      .then((res) => {
        dispatch(hideLoader());

        if (res.data["message"] && !res?.data?.customer_id) {
          dispatch(showModal({ type: "error", message: res.data["message"] }));
          return;
        }

        setCustomerId(res.data.customer_id);
        resetMobile();
        setStep(2);
      })
      .catch((err) => {
        dispatch(hideLoader());
        dispatch(
          showModal({
            type: "error",
            message: "Error sending OTP. Please try again.",
          })
        );
      });
  };

  const submitPasswordReset = (data: PasswordFormInputs) => {
    if (!customerId) return;

    const { request } = passwordService.get<
      Customer,
      { gofor: string; customer_id: string; password: string; otp: string }
    >({
      gofor: "updatepassword",
      customer_id: customerId,
      password: data.confirmPassword,
      otp: data.otp,
    });

    dispatch(showLoader());

    request
      .then((res) => {
        dispatch(hideLoader());

        if (res.data["message"] && !res?.data?.customer_id) {
          dispatch(showModal({ type: "error", message: res.data["message"] }));
          return;
        }

        dispatch(
          showModal({ type: "success", message: "Password reset successfully" })
        );

        reset();
        navigate("/login");
      })
      .catch((err) => {
        dispatch(hideLoader());

        dispatch(
          showModal({
            type: "error",
            message: "Error updating password. Please try again.",
          })
        );
      });
  };

  // Toggle password visibility
  const renderEyeIcon = (showEyeIcon: boolean) => {
    return showEyeIcon ? (
      <span role="img" aria-label="Hide">
        {/* Hide Icon */}
      </span>
    ) : (
      <span role="img" aria-label="Show">
        {/* Show Icon */}
      </span>
    );
  };

  return (
    <div className="nc-PageLogin">
      <Helmet>
        <title>Almaa - Forgot Password</title>
      </Helmet>
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 text-center text-3xl font-semibold text-neutral-900 dark:text-neutral-100">
          Forgot Password
        </h2>
        <div className="max-w-md mx-auto space-y-6">
          {step === 1 ? (
            <form
              onSubmit={handleSubmitMobile(submitMobileNumber)}
              className="grid gap-6"
            >
              <label className="block">
                <span className="text-neutral-800 dark:text-neutral-200">
                  Mobile Number <MandatoryIcon />
                </span>
                <Input
                  placeholder="Enter your 10-digit mobile number"
                  className="mt-1.5"
                  {...registerMobile("mobilenumber")}
                />
                {mobileErrors.mobilenumber && (
                  <InputErrorMessage>
                    {mobileErrors.mobilenumber.message}
                  </InputErrorMessage>
                )}
              </label>
              <ButtonPrimary type="submit">Send OTP</ButtonPrimary>
              {error && <InputErrorMessage>{error}</InputErrorMessage>}
            </form>
          ) : (
            <form
              onSubmit={handleSubmitPassword(submitPasswordReset)}
              className="grid gap-6"
            >
              <label className="block">
                <span className="text-neutral-800 dark:text-neutral-200">
                  OTP <MandatoryIcon />
                </span>
                <Input
                  placeholder="Enter the OTP sent to your mobile"
                  className="mt-1.5"
                  {...registerPassword("otp")}
                />
                {passwordErrors.otp && (
                  <InputErrorMessage>
                    {passwordErrors.otp.message}
                  </InputErrorMessage>
                )}
              </label>

              <label className="block">
                <span className="text-neutral-800 dark:text-neutral-200">
                  New Password <MandatoryIcon />
                </span>
                <div className="relative">
                  <Input
                    placeholder="New Password"
                    type={showPassword ? "text" : "password"}
                    className="mt-1.5"
                    {...registerPassword("password")}
                  />
                  <button
                    type="button"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {renderEyeIcon(showPassword)}
                  </button>
                </div>
                {passwordErrors.password && (
                  <InputErrorMessage>
                    {passwordErrors.password.message}
                  </InputErrorMessage>
                )}
              </label>

              <label className="block">
                <span className="text-neutral-800 dark:text-neutral-200">
                  Confirm Password <MandatoryIcon />
                </span>
                <Input
                  placeholder="Confirm your new password"
                  type="password"
                  className="mt-1.5"
                  {...registerPassword("confirmPassword")}
                />
                {passwordErrors.confirmPassword && (
                  <InputErrorMessage>
                    {passwordErrors.confirmPassword.message}
                  </InputErrorMessage>
                )}
              </label>

              <ButtonPrimary type="submit">Reset Password</ButtonPrimary>
              {error && <InputErrorMessage>{error}</InputErrorMessage>}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
