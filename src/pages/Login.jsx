import hcl_logo from "../assets/hcl-logo.png";
import Button from "../components/Button";

import { Link } from "react-router-dom";
import Card from "../components/Card";
import TextInput from "./Textinput";

export default function Login() {
  return (
    <div
      className={`bg-[#F9F9F9] md:bg-[url('login-bg.png')] min-h-screen w-full bg-cover bg-center md:bg-hch-slate-2 grid place-items-center`}
    >
      <Card className="bg-[#F9F9F9] w-full md:w-[25rem]  h-fit md:rounded-md ">
        <form>
          <img
            className="mx-auto mb-20 md:mb-14 md:w-40"
            src={hcl_logo}
            alt="logo"
          />
          <p className="text-hcl-slate font-semibold pb-8">
            Log in with your account
          </p>
          <div className="space-y-6">
            <div>
              <TextInput name="email" placeholder="Email" type="text" />
              <p className="text-hcl-purple text-sm mt-2 ml-1">
                E-mail not found. Please try again
              </p>
            </div>
            <div>
              <TextInput
                name="password"
                placeholder="Password"
                type="password"
              />
              <p className="text-hcl-purple text-sm mt-2 ml-1">
                Wrong password. Please try again
              </p>
            </div>

            <Button type="submit">sign in</Button>
          </div>
          <div className="flex text-md justify-center mt-16 font-medium text-gray-500 dark:text-hcl-slate">
            Don’t have an account?&nbsp;
            <Link
              to="/signup"
              className="text-hcl-blue hover:underline dark:text-cyan-500"
            >
              Sign up
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
}
