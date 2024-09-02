import React, { FC, useState } from "react";
import facebookSvg from "../../images/Facebook.svg";
import twitterSvg from "../../images/Twitter.svg";
import googleSvg from "../../images/Google.svg";
import { Helmet } from "react-helmet-async";
import Input from "../../shared/Input/Input";
import { Link, useNavigate } from "react-router-dom";
import ButtonPrimary from "../../shared/Button/ButtonPrimary";
import loginService from "../../services/login-service";
import { Alert } from "../../shared/Alert/Alert";
import { useAppDispatch } from "../../hooks/hooks";
import { login } from "../../features/auth/authSlice";
import { AuthState } from "../../models/authState";

export interface Props {
  className?: string;
}

const loginSocials = [
  {
    name: "Continue with Facebook",
    href: "#",
    icon: facebookSvg,
  },
  {
    name: "Continue with Twitter",
    href: "#",
    icon: twitterSvg,
  },
  {
    name: "Continue with Google",
    href: "#",
    icon: googleSvg,
  },
];

const Login: FC<Props> = ({ className = "" }) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const dispatch = useAppDispatch();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const mobilePattern = /^\d{10}$/;

    let usernameKey = "";

    if (emailPattern.test(customer.username)) {
      usernameKey = "email";
    } else if (mobilePattern.test(customer.username)) {
      usernameKey = "mobile";
    }

    const { request, cancel } = loginService.get<
      AuthState,
      { [key: string]: string; password: string }
    >({ [usernameKey]: customer.username, password: customer.password });

    request
      .then((res) => {
        if (+res.data.status) {
          dispatch(login(res.data));
          navigate("/");
        } else {
          setError(res.data.status);
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const [customer, setCustomer] = useState({
    username: "",
    password: "",
  });

  return (
    <div className={`nc-PageLogin ${className}`} data-nc-id="PageLogin">
      <Helmet>
        <title>Login || Ciseco React Template</title>
      </Helmet>
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Login
        </h2>
        <div className="max-w-md mx-auto space-y-6">
          {/* <div className="grid gap-3">
            {loginSocials.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex w-full rounded-lg bg-primary-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
              >
                <img
                  className="flex-shrink-0"
                  src={item.icon}
                  alt={item.name}
                />
                <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
                  {item.name}
                </h3>
              </a>
            ))}
          </div> */}
          {/* OR */}
          {/* <div className="relative text-center">
            <span className="relative z-10 inline-block px-4 font-medium text-sm bg-white dark:text-neutral-400 dark:bg-neutral-900">
              OR
            </span>
            <div className="absolute left-0 w-full top-1/2 transform -translate-y-1/2 border border-neutral-100 dark:border-neutral-800"></div>
          </div> */}
          {/* FORM */}
          {error && (
            <Alert onClose={() => setError("")} type="error">
              {error}
            </Alert>
          )}
          <form onSubmit={handleLogin} className="grid grid-cols-1 gap-6">
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Email / Mobile No
              </span>
              <Input
                type="text"
                placeholder="Email or Mobile No"
                className="mt-1"
                value={customer.username}
                onChange={(e) =>
                  setCustomer({ ...customer, username: e.target.value })
                }
              />
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Password
                <Link to="/forgot-pass" className="text-sm text-green-600">
                  Forgot password?
                </Link>
              </span>
              <Input
                type="password"
                placeholder="Password"
                value={customer.password}
                onChange={(e) =>
                  setCustomer({ ...customer, password: e.target.value })
                }
                className="mt-1"
              />
            </label>
            <ButtonPrimary type="submit">Continue</ButtonPrimary>
          </form>

          {/* ==== */}
          <span className="block text-center text-neutral-700 dark:text-neutral-300">
            New user? {` `}
            <Link className="text-green-600" to="/signup">
              Create an account
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
