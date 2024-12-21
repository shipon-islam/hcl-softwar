import { Card } from "flowbite-react";
import React from "react";
import hcl_composite from "../assets/hcl_composite.png";
import hcl_ferrari from "../assets/hcl_ferrari.png";
import austin from "../assets/images/austin.jpg";
import dubai_white_noise from "../assets/images/dubai_white_noise.png";
import jonathon from "../assets/images/jonathan.jpg";
const events = [
  {
    id: 1,
    title: "Abu Dhabi Grand Prix",
    photo: dubai_white_noise,
    date: "December 5th, 2024",
  },
  {
    id: 2,
    title: "Austin Grand Prix",
    photo: austin,
    date: "October 20th, 2024",
  },
  {
    id: 3,
    title: "Monza Grand Prix",
    photo: jonathon,
    date: "October 22th, 2024",
  },
];
export default function Home() {
  return (
    <div className="layout-padding">
      <div className=" grid grid-cols-[2fr_3fr] gap-x-6  items-center px-4">
        <Card>
          <div>
            <h3>Dear Micheal Adams</h3>
            <p>
              As guests of HCLSoftware, Team Partner of Scuderia Ferrari HP, we
              hope you enjoy this fantastic event we have planned for you and
              further understand why HCLSoftware is in the driver’s seat when it
              comes to fueling the Digital+ economy.
            </p>
            <div>
              <h5>Dario Debarbieri </h5>
              <address>Chief Marketing Officer, HCLSoftware</address>
            </div>
            <div className="flex items-center">
              <img src={hcl_ferrari} alt="hcl_ferrari" />
              <img src={hcl_composite} alt="hcl_composite" />
            </div>
          </div>
        </Card>
        <div className="mt-4">
          <h1>My Events</h1>
          <div className="flex gap-x-5 mt-4">
            <button className=" py-1.5 px-6 bg-white text-gray-500 rounded-md hover:bg-slate-600 shadow-custom capitalize  font-normal text-md">
              Previous
            </button>
            <button className="py-1.5 px-6 bg-hcl-slate text-white rounded-md hover:bg-slate-600 shadow-custom capitalize  font-normal text-md">
              Coming
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {events.map(({ id, photo, title, date }) => (
              <Card key={id} className="flowbite-card p-2">
                <img
                  className="object-cover h-48 w-full rounded-md "
                  src={photo}
                  alt="dubai_white_noise"
                />
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {date}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <div>
        <h3>Next Event</h3>
        <div className="grid grid-cols-4 gap-x-4 p-10 bg-hcl-slate text-white rounded-md ">
          <div>
            <h5>Abu Dhabi Grand Prix</h5>
            <p>Yas Marina Circuit - Yas Island - Abu Dhabi </p>
            <p>United Arab Emirates</p>
          </div>
          <div>
            <p>Dec 5, 2024 at 3:00 PM </p>
          </div>
          <div>
            <h5>To</h5>
            <p>Dec 8, 2024 at 10:00 PM</p>
          </div>
          <div>
            <h5>Starts in</h5>
            <p>2d 19hs 40min 17seg</p>
          </div>
        </div>
      </div>
    </div>
  );
}
