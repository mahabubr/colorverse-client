/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import image from "../../../assets/regester/login.svg";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import loginValidationSchema from "../../../Validations/Regester/LoginSchema";
import { useLoginUserMutation } from "../../../Redux/Features/Auth/AuthApi";
import Cookies from "js-cookie";
import { IoGlassesOutline } from "react-icons/io5";

const Login = () => {
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      try {
        const payload = {
          email: values.email,
          password: values.password,
        };

        loginUser({ payload }).then((res: any) => {
          if (res?.data?.status === 200) {
            toast.success(res?.data?.message);
            const token = res?.data?.data;
            Cookies.set("token", token, { expires: 30, secure: true });
            navigate("/");
            window.location.reload();
          } else {
            toast.info(res?.data?.data);
            formik.setFieldError("email", res?.error?.data?.message[0]);
          }
        });
      } catch (error) {
        toast.error("Something went wrong");
        window.location.reload();
      }
    },
  });

  return (
    <section className="container mx-auto w-11/12 my-12 flex justify-center items-center">
      <div className="flex w-screen flex-wrap text-slate-800">
        <div className="relative hidden  select-none flex-col justify-center md:flex md:w-1/2">
          <img className="p-16 h-full w-full object-cover" src={image} alt="" />
        </div>
        <div className="flex w-full flex-col md:w-1/2">
          <div className="flex justify-center pt-12 md:justify-start md:pl-12">
            <Link to="/" className="text-2xl font-bold text-orange-700">
              Color Verse .
            </Link>
          </div>
          <div className="my-auto mx-auto flex flex-col justify-center px-6 md:justify-start lg:w-[28rem] mt-10">
            <p className="text-center text-3xl font-bold md:text-left md:leading-tight">
              Welcome to verse
            </p>
            <p className="mt-6 text-center  md:text-left text-sm">
              Don't have an account?
              <Link
                to="/signup"
                className="whitespace-nowrap font-semibold text-orange-700"
              >
                {" "}
                Sign Up
              </Link>
            </p>

            <Button
              variant="outlined"
              className="flex items-center gap-3 mt-8 justify-center"
              size="sm"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onClick={() =>
                formik.setValues({
                  email: "mr@creator.com",
                  password: "12345678",
                })
              }
            >
              <IoGlassesOutline />
              Login as a Mr Creator
            </Button>
            <div className="relative mt-8 flex h-px place-items-center bg-gray-200">
              <div className="absolute left-1/2 h-6 -translate-x-1/2 bg-white px-4 text-center text-sm text-gray-500">
                Or use email instead
              </div>
            </div>
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col items-stretch pt-3 md:pt-6"
            >
              <div className="flex flex-col pt-4">
                <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-orange-700">
                  <input
                    type="email"
                    id="login-email"
                    className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
                    {...formik.getFieldProps("email")}
                    placeholder="Email"
                  />
                </div>
                {formik.touched.email && formik.errors.email ? (
                  <small className="text-red-400 text-xs mt-2">
                    {formik.errors.email}
                  </small>
                ) : null}
              </div>
              <div className="mb-4 flex flex-col pt-4">
                <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-orange-700">
                  <input
                    type="password"
                    id="login-password"
                    className="w-full flex-shrink appearance-none border-none bg-white py-2 px-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none border-b border-gray-300"
                    {...formik.getFieldProps("password")}
                    placeholder="Password (minimum 8 characters)"
                  />
                </div>
                {formik.touched.password && formik.errors.password ? (
                  <small className="text-red-400 text-xs mt-2">
                    {formik.errors.password}
                  </small>
                ) : null}
              </div>
              <div className="flex items-center">
                <input
                  className="mr-2 h-3 w-3 appearance-none rounded border border-gray-300 bg-contain bg-no-repeat align-top text-black shadow checked:bg-orange-700 focus:border-orange-700 focus:shadow"
                  type="checkbox"
                  id="remember-me"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 10l3 3l6-6'/%3e%3c/svg%3e\")",
                  }}
                  checked
                />
                <label className="inline-block text-sm" htmlFor="remember-me">
                  I agree to the{" "}
                  <Link className="underline text-sm" to="/privacy-policy">
                    Terms and Conditions
                  </Link>
                </label>
              </div>
              <Button
                type="submit"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                color="deep-orange"
                className="mt-10 flex justify-center"
                variant="gradient"
                loading={isLoading}
              >
                Login
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
