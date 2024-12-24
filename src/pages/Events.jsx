import EventLeftSide from "@/components/EventLeftSide";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import EventAccommodation from "./sections/EventAccommodation";
import EventActivities from "./sections/EventActivities";
import EventItinerary from "./sections/EventItinerary";
import OneToOneMeeting from "./sections/OneToOneMeeting";

export default function Events() {
  const [eventName, setEventName] = useState("event-itinerary");
  useEffect(() => {
    console.log(eventName);
  }, [eventName]);
  return (
    <div className="padding my-8 grid xl:grid-cols-[2fr_3fr] gap-8 mx-4 sm:mx-8 2xl:mx-20">
      <EventLeftSide />
      <div>
        <Select onValueChange={(e) => setEventName(e)} className="text-xl">
          <SelectTrigger className="w-fit bg-transparent border-none shadow-none focus:ring-0  text-2xl cursor-pointer">
            <SelectValue placeholder="Event Itinerary" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem className="text-xl" value="event-itinerary">
              Event Itinerary
            </SelectItem>
            <SelectItem className="text-xl" value="event-activities">
              Event Activities
            </SelectItem>
            <SelectItem className="text-xl" value="event-accommodation">
              Event Accommodation
            </SelectItem>
            <SelectItem className="text-xl" value="one-meeting">
              One to one Meeting
            </SelectItem>
            <SelectItem className="text-xl" value="one-meeting">
              One to one Meeting
            </SelectItem>
          </SelectContent>
        </Select>
        {eventName == "event-itinerary" && <EventItinerary />}
        {eventName == "event-activities" && <EventActivities />}
        {eventName == "event-accommodation" && <EventAccommodation />}
        {eventName == "one-meeting" && <OneToOneMeeting />}
      </div>
    </div>
  );
}
