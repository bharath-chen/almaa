import Label from "../../components/Label/Label";
import { useState } from "react";
import ButtonPrimary from "../../shared/Button/ButtonPrimary";
import Input from "../../shared/Input/Input";
import CommonLayout from "./CommonLayout";
import updatePasswordService from "../../services/update-password-service";
import { ILoginCustomerPayload } from "../../services/login-service";

const AccountPass = () => {
  const [accountPasswordDetails, setAccountPasswordDetails] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleUpdatePassword = () => {
    const customerDetails: ILoginCustomerPayload = JSON.parse(
      localStorage.getItem("customerDetails")
    );
    // customer_id=1&password=123456
    const { request } = updatePasswordService.get<
      any,
      { customer_id: number; password: string }
    >({
      customer_id: +customerDetails.customer_id,
      password: accountPasswordDetails.newPassword,
    });

    request.then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      <CommonLayout>
        <div className="space-y-10 sm:space-y-12">
          {/* HEADING */}
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Update your password
          </h2>
          <div className=" max-w-xl space-y-6">
            <div>
              <Label>Current password</Label>
              <Input
                type="password"
                className="mt-1.5"
                value={accountPasswordDetails.currentPassword}
                onChange={(e) =>
                  setAccountPasswordDetails({
                    ...accountPasswordDetails,
                    currentPassword: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <Label>New password</Label>
              <Input
                type="password"
                className="mt-1.5"
                value={accountPasswordDetails.newPassword}
                onChange={(e) =>
                  setAccountPasswordDetails({
                    ...accountPasswordDetails,
                    newPassword: accountPasswordDetails.newPassword,
                  })
                }
              />
            </div>
            <div>
              <Label>Confirm password</Label>
              <Input
                type="password"
                className="mt-1.5"
                value={accountPasswordDetails.confirmPassword}
                onChange={(e) =>
                  setAccountPasswordDetails({
                    ...accountPasswordDetails,
                    confirmPassword: e.target.value,
                  })
                }
              />
            </div>
            <div className="pt-2">
              <ButtonPrimary onClick={handleUpdatePassword}>
                Update password
              </ButtonPrimary>
            </div>
          </div>
        </div>
      </CommonLayout>
    </div>
  );
};

export default AccountPass;
