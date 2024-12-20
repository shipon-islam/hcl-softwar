import { Link } from "react-router-dom";
import hcl_logo from "../assets/hcl-logo.png";
import Button from "../components/Button";
import TextInput from "./TextInput";

export default function Signup() {
  return (
    <section className="grid md:grid-cols-2 min-h-screen">
      <div
        className={`md:bg-[url('login-bg.png')]  w-full bg-cover bg-center md:bg-hch-slate-2 hidden md:block`}
      >
        <img
          className="invert brightness-0 contrast-200 mt-10 ml-8"
          src={hcl_logo}
          alt="logo"
        />
        <h5 className="text-center text-white font-bold text-5xl mt-16">
          Let’s get started
        </h5>
      </div>
      <div className="bg-[#F9F9F9] w-full p-8 grid place-items-center">
        <form>
          <img className="mx-auto mb-20 md:hidden" src={hcl_logo} alt="logo" />
          <p className="text-hcl-slate font-semibold pb-8 md:text-center text-lg">
            Please fill in your contact details to continue using the app
          </p>
          <div className="space-y-6">
            <div className="grid  sm:grid-cols-2 space-y-6 sm:space-y-0 gap-x-4">
              <TextInput
                name="firstname"
                placeholder="First Name"
                type="text"
              />
              <TextInput name="lastname" placeholder="Last Name" type="text" />
            </div>
            <div className="grid  sm:grid-cols-2 space-y-6 sm:space-y-0 gap-x-4">
              <TextInput name="email" placeholder="E-mail" type="email" />
              <TextInput name="phone" placeholder="Phone" type="text" />
            </div>
            <div className="grid  sm:grid-cols-2 space-y-6 sm:space-y-0 gap-x-4">
              <TextInput name="company" placeholder="Compnay" type="text" />
              <TextInput name="position" placeholder="Position" type="text" />
            </div>
            <div className="grid  sm:grid-cols-2 space-y-6 sm:space-y-0 gap-x-4">
              <TextInput name="linkedin" placeholder="Linkedin" type="text" />
              <TextInput name="country" placeholder="Country" type="text" />
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <input
                  type="radio"
                  name="agreement"
                  id="option1"
                  className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-md "
                />
                <label htmlFor="option1" className="text-gray-700">
                  <p className="font-medium">
                    I am not a U.S Federal Government employee or agency, nor am
                    I submitting this form on behalf of one.
                  </p>
                  <span className="text-sm text-gray-500">
                    HCL provides software and services to the US Federal
                    Government through its partner Four, Inc.
                  </span>
                </label>
              </div>

              <div className="flex items-start space-x-2">
                <input
                  type="radio"
                  name="agreement"
                  id="option2"
                  className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-md "
                />
                <label htmlFor="option2" className="text-gray-700">
                  <p className="font-medium">
                    I agree to HCLSoftware&apos;s{" "}
                    <a href="#" className="text-blue-600 underline">
                      Privacy Statement
                    </a>
                    .
                  </p>
                  <span className="text-sm text-gray-500">
                    HCL is collecting this information for its legitimate
                    interests, and you acknowledge that we may contact you about
                    products or services that could be of interest to you. You
                    can unsubscribe from our emails at any time.
                  </span>
                </label>
              </div>
              <div className="flex items-start space-x-2">
                <input
                  type="radio"
                  name="agreement"
                  id="option2"
                  className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-md "
                />
                <label htmlFor="option2" className="text-gray-700">
                  <p className="font-medium">I have a dietary restriction</p>
                </label>
              </div>
            </div>

            <textarea
              placeholder="Peanut allergies and gluten intolerance"
              className={`shadow-custom outline-none focus:border-none focus:outline-none border-none py-2 h-20 w-full rounded-md pl-4 placeholder:text-gray-400`}
            ></textarea>
            <p className="text-sm">** Required fields</p>

            <Button type="submit" className="md:w-[40%] mx-auto md:block">
              sign in
            </Button>
          </div>
          <div className="flex text-md justify-center mt-6 font-medium text-gray-500 dark:text-hcl-slate">
            Have an account?&nbsp;
            <Link
              to="/login"
              className="text-hcl-blue hover:underline dark:text-cyan-500"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
