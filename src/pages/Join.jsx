import { Link } from "react-router-dom";
import hcl_logo from "../assets/png/hcl-logo.png";
import { Button } from "../components/ui/button";

export default function Join() {
  return (
    <div
      className={`bg-[url('/images/login-bg.png')] h-screen w-full bg-cover bg-center bg-hcl-primary-2 grid place-items-center`}
    >
      <div>
        <h5 className="text-white text-center mb-4">Let’s get started</h5>
        <img
          className="mx-auto mb-20 invert brightness-0 contrast-20"
          src={hcl_logo}
          alt="logo"
        />
      </div>
      <div>
        <Button
          type="button"
          className="bg-hcl-blue block w-full h-[3rem] text-xl"
        >
          Join us
        </Button>
        <div className="flex text-xl justify-center mt-8  text-white">
          Don’t have an account?&nbsp;
          <Link
            to="/signup"
            className="text-hcl-blue hover:underline dark:text-cyan-500"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
