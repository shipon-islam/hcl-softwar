import EventDateTopBar from "@/components/EventDateTopBar";
import { FailedEventIcon, SuccessEventIcon } from "@/components/Hcl_Icons";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { RiCalendar2Line } from "react-icons/ri";
const time_fixers = [
  {
    id: 1,
    time: "08:00",
    disable: false,
    selected: false,
  },
  {
    id: 2,
    time: "08:00",
    disable: false,
    selected: false,
  },
  {
    id: 3,
    time: "08:00",
    disable: false,
    selected: false,
  },
  {
    id: 4,
    time: "08:00",
    disable: false,
    selected: false,
  },
  {
    id: 5,
    time: "08:00",
    disable: false,
    selected: false,
  },
  {
    id: 6,
    time: "08:00",
    disable: false,
    selected: false,
  },
  {
    id: 7,
    time: "08:00",
    disable: false,
    selected: false,
  },
  {
    id: 8,
    time: "08:00",
    disable: false,
    selected: false,
  },
  {
    id: 9,
    time: "08:00",
    disable: false,
    selected: false,
  },

  {
    id: 10,
    time: "08:00",
    disable: false,
    selected: false,
  },
  {
    id: 11,
    time: "08:00",
    disable: false,
    selected: false,
  },
  {
    id: 12,
    time: "08:00",
    disable: false,
    selected: false,
  },
  {
    id: 13,
    time: "08:00",
    disable: false,
    selected: false,
  },
  {
    id: 14,
    time: "08:00",
    disable: false,
    selected: false,
  },
  {
    id: 15,
    time: "08:00",
    disable: false,
    selected: false,
  },
  {
    id: 16,
    time: "08:00",
    disable: false,
    selected: false,
  },
  {
    id: 17,
    time: "08:00",
    disable: false,
    selected: false,
  },
  {
    id: 18,
    time: "08:00",
    disable: false,
    selected: false,
  },
  {
    id: 19,
    time: "08:00",
    disable: false,
    selected: false,
  },
  {
    id: 20,
    time: "08:00",
    disable: false,
    selected: false,
  },
  {
    id: 21,
    time: "08:00",
    disable: false,
    selected: true,
  },
  {
    id: 22,
    time: "08:00",
    disable: false,
    selected: false,
  },
  {
    id: 23,
    time: "08:00",
    disable: false,
    selected: false,
  },
  {
    id: 24,
    time: "08:00",
    disable: false,
    selected: false,
  },
  {
    id: 25,
    time: "08:00",
    disable: false,
    selected: false,
  },
  {
    id: 26,
    time: "08:00",
    disable: false,
    selected: false,
  },
  {
    id: 27,
    time: "08:00",
    disable: false,
    selected: false,
  },
];
export default function OneToOneMeeting() {
  const [openPermitionModal, setOpenPermitionModal] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [openWrongModal, setOpenWrongModal] = useState(false);
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
      <Button className="bg-hcl-slate">Send</Button>
      <ul className="flex flex-wrap gap-5 mt-8">
        {time_fixers.map((time_fixer) => (
          <li
            key={time_fixer.id}
            className={`  transition-colors duration-300  shadow-custom px-6 py-1 rounded-md hover:text-white hover:bg-hcl-blue ${
              time_fixer.selected
                ? "text-white bg-hcl-blue"
                : "text-gray-500 bg-white"
            } ${time_fixer.disable && "text-gray-200"}`}
          >
            {time_fixer.time}
          </li>
        ))}
      </ul>
      <p className="my-8">*All meetings are 20min max.</p>
      <button
        onClick={() => setOpenPermitionModal(true)}
        className="flex items-center gap-x-1 bg-hcl-slate text-white px-4 py-1.5 rounded-md mx-auto mt-8"
      >
        <RiCalendar2Line />
        Schedule meeting
      </button>
      <Dialog open={openPermitionModal} onOpenChange={setOpenPermitionModal}>
        <DialogTrigger />
        <DialogContent className=" w-[20rem]">
          <DialogHeader>
            <DialogTitle />
            <DialogDescription className="p-4 text-center grid place-items-center">
              <p className="font-medium">
                Are you sure you want to schedule this meeting?
              </p>
              <di className="flex justify-between gap-x-4 mt-6 text-white">
                <button
                  onClick={() => setOpenWrongModal(true)}
                  className="bg-hcl-slate px-4 py-1 rounded-md"
                >
                  Go back
                </button>
                <button
                  onClick={() => setOpenSuccessModal(true)}
                  className="bg-hcl-slate px-4 py-1 rounded-md"
                >
                  Confirm
                </button>
              </di>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <Dialog open={openSuccessModal} onOpenChange={setOpenSuccessModal}>
        <DialogTrigger />
        <DialogContent className=" w-[20rem]">
          <DialogHeader>
            <DialogTitle />
            <DialogDescription className="pt-8 grid place-items-center text-center">
              <span className="block w-fit mx-auto">
                <SuccessEventIcon />
              </span>
              <h2 className="font-medium">Success!</h2>
              <p>Your meeting has been booked</p>
              <p className="text-gray-400 pt-8">Thank you!</p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <Dialog open={openWrongModal} onOpenChange={setOpenWrongModal}>
        <DialogTrigger />
        <DialogContent className=" w-[20rem]">
          <DialogHeader>
            <DialogTitle />
            <DialogDescription className="p-8 grid place-items-center text-center">
              <span className="block w-fit mx-auto">
                <FailedEventIcon />
              </span>
              <h2 className="font-medium">We’re sorry!</h2>
              <p>Your message could not be sent</p>
              <p className="text-gray-400 pt-8">Please try again</p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
