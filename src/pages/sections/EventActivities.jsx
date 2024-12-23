import EventDateTopBar from "@/components/EventDateTopBar";
import { LocationUnderLineIcon } from "@/components/Hcl_Icons";
import { Card, CardContent } from "@/components/ui/card";
import { FaWhatsapp } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
const eventsAreas = [
  {
    id: 1,
    title: "Les Dangereux",
    desc: "Mamsha Al Saadiyat - Jacques Chirac Street Al Saadiyat Island - Abu Dhabi United Arab Emirates",
    photo: "/images/event_activity-1.png",
  },
  {
    id: 2,
    title: "Oak Room",
    desc: "The Abu Dhabi edition, Marina - Al Bateen Abu Dhabi United Arab Emirates",
    photo: "/images/event_activity-2.png",
  },
  {
    id: 3,
    title: "Les Dangereux",
    desc: "Emirates Palace Mandarin Oriental- West Corniche Road Abu Dhabi United Arab Emirates",
    photo: "/images/event_activity-3.png",
  },
];
export default function EventActivities() {
  return (
    <div>
      <EventDateTopBar />
      <div className="flex justify-center gap-x-8">
        <button className="flex items-center gap-x-2 text-xl mt-4 border-2 border-hcl-slate px-4 py-2 rounded-md">
          <FaWhatsapp className="text-2xl" />
          <span>Join Friday’s WhatsApp Group</span>
        </button>
        <button className="flex items-center gap-x-2 text-xl mt-4 border-2 border-hcl-blue px-4 py-2 rounded-md text-hcl-blue">
          <span>Confirm attendance</span>
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
                  <h5 className="font-bold text-xl">{eventsArea.title}</h5>
                  <p>{eventsArea.desc}</p>
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
