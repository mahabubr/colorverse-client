import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import image from "../../../assets/regester/signup.svg";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import generatePassword from "../../../utils/generatePassword";
import { useFormik } from "formik";
import signUpValidationSchema from "../../../Validations/Regester/SingUpSchema";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [generatePass, setGeneratePass] = useState<string>("");

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: signUpValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  useEffect(() => {
    formik.setFieldValue("password", generatePass);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [generatePass]);

  return (
    <section className="container mx-auto w-11/12 my-12 h- flex justify-center items-center">
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
              Create your free account
            </p>
            <p className="mt-6 text-center  md:text-left text-sm">
              Already using color verse?
              <Link
                to="/Login"
                className="whitespace-nowrap font-semibold text-orange-700"
              >
                {" "}
                Login here
              </Link>
            </p>

            <Button
              variant="outlined"
              className="flex items-center gap-3 mt-8 justify-center"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onClick={() =>
                toast.success(
                  "O auth not available. please enjoy custom authentication"
                )
              }
            >
              Get started with Google
              <FaGoogle />
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
                <div className="flex justify-center items-center gap-3">
                  <div>
                    <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-orange-700">
                      <input
                        type="text"
                        className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
                        placeholder="First Name"
                        {...formik.getFieldProps("firstName")}
                      />
                    </div>
                    {formik.touched.firstName && formik.errors.firstName ? (
                      <small className="text-red-400 text-xs">
                        {formik.errors.firstName}
                      </small>
                    ) : null}
                  </div>
                  <div>
                    <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-orange-700">
                      <input
                        type="text"
                        className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
                        placeholder="Last Name"
                        {...formik.getFieldProps("lastName")}
                      />
                    </div>
                    {formik.touched.lastName && formik.errors.lastName ? (
                      <small className="text-red-400 text-xs">
                        {formik.errors.lastName}
                      </small>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="flex flex-col pt-4">
                <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-orange-700">
                  <input
                    type="email"
                    className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
                    placeholder="Email"
                    {...formik.getFieldProps("email")}
                  />
                </div>
                {formik.touched.email && formik.errors.email ? (
                  <small className="text-red-400 text-xs mt-2">
                    {formik.errors.email}
                  </small>
                ) : null}
              </div>
              <div className="mb-4 flex flex-col pt-4">
                <div className="flex justify-between items-center mb-1">
                  <small
                    onClick={() => setGeneratePass(generatePassword())}
                    className="cursor-pointer text-orange-600 no-underline hover:text-orange-700 text-end"
                  >
                    <p className="">Generate Password?</p>
                  </small>
                  <small
                    className=" text-gray-600 focus:outline-none cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <p>{showPassword ? "Hide" : "Show"} Password</p>
                  </small>
                </div>
                <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-orange-700">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full flex-shrink appearance-none border-none bg-white py-2 px-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none border-b border-gray-300"
                    {...formik.getFieldProps("password")}
                    value={generatePass}
                    onChange={(e) =>
                      setGeneratePass((e.target as HTMLInputElement).value)
                    }
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
                  <Link className="underline text-sm" to="/terms">
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
                className="mt-10"
                variant="gradient"
              >
                Sign Up
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
