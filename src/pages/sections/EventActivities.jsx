import EventDateTopBar from "@/components/EventDateTopBar";
import { LocationUnderLineIcon } from "@/components/Hcl_Icons";
import { Card, CardContent } from "@/components/ui/card";
import { dateLinks, eventsAreas } from "@/constants";
import { FaWhatsapp } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

export default function EventActivities() {
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
      <div className="space-y-5 mt-8">
        {eventsAreas.map((eventsArea) => (
          <Card key={eventsArea.id}>
            <CardContent className="flex gap-x-3 p-2">
              <img
                className="rounded-md max-w-[206px]"
                src={eventsArea.photo}
                alt="photo"
              />
              <div>
                <div>
                  <h5 className="font-bold text-lg">{eventsArea.title}</h5>
                  <p className="mt-1 text-[#5A6378]">{eventsArea.desc}</p>
                </div>

                <div className="flex gap-x-8">
                  <a className="flex items-center gap-x-1" href="#">
                    <TbWorld />
                    Website
                  </a>
                  <a className="flex items-center gap-x-1" href="#">
                    <LocationUnderLineIcon className="w-6" /> Map
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
