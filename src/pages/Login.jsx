import hcl_logo from "@/assets/png/hcl-logo.png";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { BoxInput } from "@/components/Input";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div
      className={`bg-[#F9F9F9] md:bg-[url('/images/login-bg.png')] min-h-screen w-full bg-cover bg-center md:bg-hch-slate-2 grid place-items-center`}
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
              <BoxInput
                error="E-mail not found. Please try again"
                name="email"
                placeholder="Email"
                type="text"
              />
            </div>
            <div>
              <BoxInput
                name="password"
                error="Wrong password. Please try again"
                placeholder="Password"
                type="password"
              />
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
