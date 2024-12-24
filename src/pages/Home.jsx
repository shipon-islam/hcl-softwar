import hcl_composite from "@/assets/png/hcl_composite.png";
import hcl_ferrari from "@/assets/png/hcl_ferrari.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { events_home } from "@/constants";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="layout-padding mt-32">
      <div className=" grid lg:grid-cols-[2fr_3fr] gap-6">
        <Card className="max-w-[31rem] bg-white ">
          <CardContent className="p-8">
            <div>
              <h3 className="font-bold text-2xl text-hcl-black">
                Dear Micheal Adams
              </h3>
              <p className="mt-2 text-lg text-hcl-secondary py-5 w-[90%]">
                As guests of HCLSoftware, Team Partner of Scuderia Ferrari HP,
                we hope you enjoy this fantastic event we have planned for you
                and further understand why HCLSoftware is in the driver’s seat
                when it comes to fueling the Digital+ economy.
              </p>
              <div className="text-hcl-secondary">
                <h5 className="text-lg font-medium ">Dario Debarbieri </h5>
                <p className="italic">Chief Marketing Officer, HCLSoftware</p>
              </div>
              <div className="flex gap-x-14 items-center mt-8">
                <img className="" src={hcl_ferrari} alt="hcl_ferrari" />
                <img className="" src={hcl_composite} alt="hcl_composite" />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="">
          <h1 className="font-bold text-xl">My Events</h1>
          <div className="flex gap-x-5 mt-4">
            <Button className=" py-1.5 px-6 bg-white text-hcl-primary text-lg rounded-md hover:bg-hcl-primary hover:text-white shadow-custom capitalize ">
              Previous
            </Button>
            <Button className="py-1.5 px-6 text-lg bg-hcl-primary text-white rounded-md hover:bg-hcl-primary/80 shadow-custom capitalize   ">
              Coming
            </Button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {events_home.map(({ id, photo, title, date }) => (
              <Link key={id} to={`events/${id}`}>
                <Card>
                  <CardContent className="p-2">
                    <img
                      className="object-cover h-48 w-full rounded-md "
                      src={photo}
                      alt="dubai_white_noise"
                    />
                    <div className="px-1 xl:px-2 py-5">
                      <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                        {title}
                      </h5>
                      <p className="font-normal text-gray-500 ">{date}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="my-16">
        <h3 className="heading pb-4 pl-2">Next Event</h3>
        <Card>
          <CardContent className="grid md:grid-cols-[2fr_3fr]  gap-8 p-10 bg-hcl-primary text-white rounded-md ">
            <div className="w-fit">
              <h5 className="font-bold text-2xl pb-4 ">Abu Dhabi Grand Prix</h5>
              <p className="text-lg font-light">
                Yas Marina Circuit - Yas Island - Abu Dhabi{" "}
              </p>
              <p className="text-lg font-light">United Arab Emirates</p>
            </div>
            <div className="grid md:grid-cols-3 gap-4 items-center justify-between w-full">
              <div>
                <p className="mt-6 text-lg font-light">
                  Dec 5, 2024 at 3:00 PM{" "}
                </p>
              </div>
              <div>
                <h5 className="font-semibold">To</h5>
                <p className="text-lg font-light">Dec 8, 2024 at 10:00 PM</p>
              </div>
              <div>
                <h5 className="font-semibold">Starts in</h5>
                <p className="text-lg font-light">2d 19hs 40min 17seg</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
