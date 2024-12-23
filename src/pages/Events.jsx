import EventLeftSide from "@/components/EventLeftSide";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import EventAccommodation from "./sections/EventAccommodation";
import EventActivities from "./sections/EventActivities";
import EventItinerary from "./sections/EventItinerary";
import OneToOneMeeting from "./sections/OneToOneMeeting";

export default function Events() {
  return (
    <div className="mx-10 my-8 text-hcl-slate grid md:grid-cols-[2fr_3fr] gap-x-8">
      <EventLeftSide />
      <div>
        <Select onValueChange={(e) => console.log(e)} className="text-xl">
          <SelectTrigger className="w-[180px] bg-transparent border-none shadow-none focus:ring-0  text-xl cursor-pointer">
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
        <EventItinerary />
        <EventActivities />
        <OneToOneMeeting />
        <EventAccommodation />
      </div>
    </div>
  );
}
