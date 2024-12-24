import EventDateTopBar from "@/components/EventDateTopBar";
import { dateLinks, eventSchedules } from "@/constants";

import { FaWhatsapp } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

export default function EventItinerary() {
  return (
    <div>
      <EventDateTopBar dateLinks={dateLinks} />
      <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-x-8 py-6">
        <button className="flex  items-center gap-x-2 text-xl mt-4 border-2 border-hcl-primary px-4 py-2 rounded-md">
          <FaWhatsapp className="text-2xl" />
          <span className="text-[1rem] md:text-lg">
            Join Friday’s WhatsApp Group
          </span>
        </button>
        <button className="flex items-center gap-x-2 text-xl mt-4 border-2 border-hcl-blue px-4 py-2 rounded-md text-hcl-blue">
          <span className="text-[1rem] md:text-lg">Confirm attendance</span>
        </button>
      </div>
      <div className="sm:pl-20">
        <ol className="border-s border-gray-200  mt-8">
          {eventSchedules.map((schedule) => (
            <li
              key={schedule.id}
              className={`pb-10 ps-4  relative ${
                schedule.isEnd && "border-s border-hcl-blue"
              }`}
            >
              <div
                className={`absolute w-3 h-3  rounded-full mt- -start-1.5 border border-white ${
                  schedule.isEnd ? "bg-hcl-blue border-blue-500" : "bg-gray-200"
                }`}
              ></div>
              <time className="font-semibold leading-none space-y-1 absolute -left-20 top-0 flex flex-col">
                <span>{schedule.start_time}</span>
                <span>{schedule.end_time}</span>
              </time>
              <div className="flex items-start gap-x-1 relative -top-1">
                <div className="relative top-1">
                  <schedule.icon />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-hcl-slate ">
                    {schedule.title}
                  </h3>
                  <p className="mb-4 text-base font-normal text-[#A39A9A] ">
                    {schedule.desc}
                  </p>
                  <div className="flex gap-x-16 text-[#A39A9A] text-sm">
                    {schedule?.location && (
                      <div className="flex items-center gap-x-1.5">
                        <IoLocationOutline />
                        <span>{schedule.location}</span>
                      </div>
                    )}
                    {schedule?.date_time && (
                      <div className="flex items-center gap-x-1.5">
                        <FiClock />
                        <span>{schedule.date_time}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
