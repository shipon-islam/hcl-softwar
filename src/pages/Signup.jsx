import hcl_logo from "@/assets/png/hcl-logo.png";
import { MailVerifyIcon } from "@/components/Hcl_Icons";
import { BoxInput } from "@/components/Input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenSuccessModal(true);
  };
  return (
    <section className="grid md:grid-cols-2 min-h-screen">
      <div
        className={`md:bg-[url('/images/login-bg.png')]  w-full bg-cover bg-center md:bg-hcl-primary-2 hidden md:block`}
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
        <form onSubmit={handleSubmit}>
          <img className="mx-auto mb-20 md:hidden" src={hcl_logo} alt="logo" />
          <p className="font-semibold pb-8 md:text-center text-xl w-[55%] mx-auto">
            Please fill in your contact details to continue using the app
          </p>
          <div className="space-y-6">
            <div className="grid  sm:grid-cols-2 space-y-6 sm:space-y-0 gap-x-4">
              <BoxInput name="firstname" placeholder="First Name" type="text" />
              <BoxInput name="lastname" placeholder="Last Name" type="text" />
            </div>
            <div className="grid  sm:grid-cols-2 space-y-6 sm:space-y-0 gap-x-4">
              <BoxInput name="phone" placeholder="Phone" type="text" />
              <BoxInput name="email" placeholder="E-mail" type="email" />
            </div>
            <div className="grid  sm:grid-cols-2 space-y-6 sm:space-y-0 gap-x-4">
              <BoxInput name="position" placeholder="Position" type="text" />
              <BoxInput name="linkedin" placeholder="Linkedin" type="text" />
            </div>
            <div className="grid  sm:grid-cols-2 space-y-6 sm:space-y-0 gap-x-4">
              <BoxInput name="country" placeholder="Country" type="text" />
              <BoxInput name="email" placeholder="E-mail" type="text" />
            </div>
            <div className="grid  sm:grid-cols-2 space-y-6 sm:space-y-0 gap-x-4">
              <BoxInput
                error="8-character min. requiered"
                name="password"
                placeholder="Password"
                type="text"
              />
              <BoxInput
                error="Password fields do not match"
                name="cpassword"
                placeholder="Confirm Password"
                type="text"
              />
            </div>

            <div className="space-y-4 text-[#706C6C] text-sm">
              <div className="grid grid-cols-[20px_1fr]">
                <input
                  id="option1"
                  type="checkbox"
                  value=""
                  className="mt-1 custom-checkbox"
                />
                <label htmlFor="option1" className="ms-2 ">
                  <p>
                    I am not a U.S Federal Government employee or agency, nor am
                    I submitting this form on behalf of one.
                  </p>
                  <span className="text-sm">
                    HCL provides software and services to the US Federal
                    Government through its partner Four, Inc.
                  </span>
                </label>
              </div>
              <div className="grid grid-cols-[20px_1fr]">
                <input
                  id="option2"
                  type="checkbox"
                  value=""
                  className=" mt-1 custom-checkbox"
                />
                <label htmlFor="option2" className="ms-2 ">
                  <p>
                    I agree to HCLSoftware&apos;s{" "}
                    <a href="#" className="text-blue-600 underline">
                      Privacy Statement
                    </a>
                    .
                  </p>
                  <span className="text-sm">
                    HCL is collecting this information for its legitimate
                    interests, and you acknowledge that we may contact you about
                    products or services that could be of interest to you. You
                    can unsubscribe from our emails at any time.
                  </span>
                </label>
              </div>
              <div className="grid grid-cols-[30px_1fr]">
                <input
                  id="option3"
                  type="checkbox"
                  value=""
                  className="mt-1 custom-checkbox"
                />
                <label htmlFor="option3" className="">
                  <p className="">I have a dietary restriction</p>
                </label>
              </div>
            </div>

            <textarea
              placeholder="Peanut allergies and gluten intolerance"
              className={`shadow-custom outline-none focus:border-none focus:outline-none border-none py-2 h-20 w-full rounded-md pl-4 placeholder:text-gray-400`}
            ></textarea>
            <p className="text-sm">** Required fields</p>

            <Button
              type="submit"
              className="md:w-[40%] mx-auto md:block text-lg h-12 bg-hcl-primary hover:bg-hcl-secondary"
            >
              Sign In
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
      <Dialog open={openSuccessModal} onOpenChange={setOpenSuccessModal}>
        <DialogTrigger />
        <DialogContent className=" w-[25rem]">
          <DialogHeader>
            <DialogTitle />
            <DialogDescription className="pt-0 pb-8 grid place-self-center">
              <div className="text-center space-y-6 px-10">
                <span className="block w-fit mx-auto">
                  <MailVerifyIcon fill={true} />
                </span>

                <h2 className="font-bold text-xl text-hcl-slate">
                  Verify your email address
                </h2>
                <p className="text-hcl-slate text-[1rem]">
                  We sent a confirmation email to:
                  <a href="mailto:michaeladams@hclsoftware.com">
                    michaeladams@hclsoftware.com
                  </a>
                </p>
                <p className="text-hcl-slate text-[1rem]">
                  Before we get started, we’ll need to verify you´re the owner
                  of this account
                </p>
                <p className="text-hcl-slate text-[1rem]">
                  If not, please disregard this email
                </p>
                <Button className="w-fit">Verify Email</Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
}
