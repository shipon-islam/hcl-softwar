import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { cookies, policies } from "../../constants";

export default function PrivacyPolicy() {
  const [cookieState, setCookieState] = useState(
    cookies.map((cookie) => {
      if (cookie.id === 1) {
        return {
          id: cookie.id,
          isChecked: true,
        };
      }
      return {
        id: cookie.id,
        isChecked: false,
      };
    })
  );

  const handleToggleChange = (id, checked) => {
    setCookieState((prevState) =>
      prevState.map((cookie) =>
        cookie.id === id ? { ...cookie, isChecked: checked } : cookie
      )
    );
  };
  const collapseHandler = (e) => {
    const target = e.currentTarget;
    const collapseContent = target.nextElementSibling;
    target.children[1].classList.toggle("-rotate-90");
    console.log(target.children[1]);
    collapseContent.classList.toggle("hidden");
  };

  return (
    <div className=" layout-padding mt-32 mb-16 md:mx-10 xl:mx-24 max-w-[65rem] mx-auto">
      <div>
        <h1 className="heading my-8">Privacy Policy</h1>
        <ul className="space-y-6">
          {policies.map((policy) => (
            <li key={policy.id}>
              <h1
                className="flex items-center justify-between w-fit cursor-pointer font-bold text-lg pb-1"
                onClick={(e) => collapseHandler(e)}
              >
                <span className="text-xl">{policy.ques}</span>
                <RiArrowDownSLine className={`icon`} />
              </h1>
              <p className={`${policy.isOpen ? "block" : "hidden"} text-lg`}>
                {policy.answer}{" "}
                {policy.isSeemore && (
                  <button className="text-hcl-blue block mt-4">See More</button>
                )}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-16">
        <h1 className="text-2xl font-bold my-8">Advanced Cookie Settings</h1>
        <ul className="space-y-6">
          {cookies.map((cookie) => (
            <li key={cookie.id} className="relative">
              <h1
                className="flex items-center justify-between w-fit cursor-pointer font-bold text-lg "
                onClick={(e) => collapseHandler(e)}
              >
                <span>{cookie.ques}</span>
                <RiArrowDownSLine className={`icon`} />
              </h1>

              <p className={cookie.isOpen ? "block" : "hidden"}>
                {cookie.answer}
              </p>

              <Switch
                className="absolute left-96 top-0 z-50"
                checked={cookieState.find((c) => c.id === cookie.id).isChecked}
                onCheckedChange={(checked) =>
                  handleToggleChange(cookie.id, checked)
                }
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
