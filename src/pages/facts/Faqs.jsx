import { RiArrowDownSLine } from "react-icons/ri";
import { faqs } from "../../constants";

export default function Faqs() {
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
        <h1 className="heading my-8">FAQs</h1>
        <ul className="space-y-14">
          {faqs.map((policy) => (
            <li key={policy.id}>
              <h1
                className="flex items-center justify-between w-fit cursor-pointer font-bold text-lg mb-2"
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
    </div>
  );
}
