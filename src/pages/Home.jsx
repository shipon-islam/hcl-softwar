import hcl_composite from "@/assets/png/hcl_composite.png";
import hcl_ferrari from "@/assets/png/hcl_ferrari.png";
import { Card, CardContent } from "@/components/ui/card";
import { events_home } from "@/constants";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="layout-padding">
      <div className=" grid md:grid-cols-[2fr_3fr] gap-x-6  items-center px-4">
        <Card>
          <CardContent className="p-5">
            <div>
              <h3 className="font-bold text-xl">Dear Micheal Adams</h3>
              <p className="mt-2">
                As guests of HCLSoftware, Team Partner of Scuderia Ferrari HP,
                we hope you enjoy this fantastic event we have planned for you
                and further understand why HCLSoftware is in the driver’s seat
                when it comes to fueling the Digital+ economy.
              </p>
              <div>
                <h5>Dario Debarbieri </h5>
                <address>Chief Marketing Officer, HCLSoftware</address>
              </div>
              <div className="flex items-center gap-x-8">
                <img src={hcl_ferrari} alt="hcl_ferrari" />
                <img src={hcl_composite} alt="hcl_composite" />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-4">
          <h1 className="font-bold text-xl">My Events</h1>
          <div className="flex gap-x-5 mt-4">
            <button className=" py-1.5 px-6 bg-white text-gray-500 rounded-md hover:bg-slate-600 shadow-custom capitalize  font-normal text-md">
              Previous
            </button>
            <button className="py-1.5 px-6 bg-hcl-slate text-white rounded-md hover:bg-slate-600 shadow-custom capitalize  font-normal text-md">
              Coming
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {events_home.map(({ id, photo, title, date }) => (
              <Link key={id} to={`events/${id}`}>
                <Card>
                  <CardContent className="p-2">
                    <img
                      className="object-cover h-48 w-full rounded-md "
                      src={photo}
                      alt="dubai_white_noise"
                    />
                    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {title}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      {date}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div>
        <h3 className="my-4 font-bold">Next Event</h3>
        <Card>
          <CardContent className="grid items-center md:grid-cols-2 lg:grid-cols-4 gap-4 p-10 bg-hcl-slate text-white rounded-md ">
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
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
