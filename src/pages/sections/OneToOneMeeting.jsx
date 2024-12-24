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
import { nameLinks, time_fixers } from "@/constants";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { RiCalendar2Line } from "react-icons/ri";

export default function OneToOneMeeting() {
  const [openPermitionModal, setOpenPermitionModal] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [openWrongModal, setOpenWrongModal] = useState(false);
  return (
    <div>
      <EventDateTopBar dateLinks={nameLinks} />
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

      <ul className="flex flex-wrap justify-center sm:justify-start gap-5 mt-8">
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
      <p className="my-8 text-center sm:text-left">
        *All meetings are 20min max.
      </p>
      <button
        onClick={() => setOpenPermitionModal(true)}
        className="flex items-center gap-x-1 bg-hcl-primary text-white px-4 py-1.5 rounded-md mx-auto my-8"
      >
        <RiCalendar2Line />
        Schedule meeting
      </button>
      <Dialog open={openPermitionModal} onOpenChange={setOpenPermitionModal}>
        <DialogTrigger />
        <DialogContent className=" w-[23rem] rounded-md">
          <DialogHeader>
            <DialogTitle />
            <DialogDescription className="p-4 text-center grid place-items-center">
              <p className="font-medium text-lg">
                Are you sure you want to schedule this meeting?
              </p>
              <di className="flex justify-between gap-x-4 mt-8 text-white">
                <Button
                  onClick={() => setOpenWrongModal(true)}
                  className="bg-hcl-primary hover:bg-hcl-secondary px-4 py-1 rounded-md"
                >
                  Go back
                </Button>
                <Button
                  onClick={() => setOpenSuccessModal(true)}
                  className="bg-hcl-primary hover:bg-hcl-secondary px-4 py-1 rounded-md"
                >
                  Confirm
                </Button>
              </di>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <Dialog open={openSuccessModal} onOpenChange={setOpenSuccessModal}>
        <DialogTrigger />
        <DialogContent className=" w-[29rem] rounded-md">
          <DialogHeader>
            <DialogTitle />
            <DialogDescription className="p-4 grid place-items-center text-center">
              <span className="block w-fit mx-auto">
                <SuccessEventIcon />
              </span>
              <h2 className="font-bold text-2xl text-hcl-primary py-4">
                Success!
              </h2>
              <p className="text-lg">Your meeting has been booked</p>
              <p className="text-hcl-lite pt-8">Thank you!</p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <Dialog open={openWrongModal} onOpenChange={setOpenWrongModal}>
        <DialogTrigger />
        <DialogContent className=" w-[29rem]">
          <DialogHeader>
            <DialogTitle />
            <DialogDescription className="p-8 grid place-items-center text-center">
              <span className="block w-fit mx-auto">
                <FailedEventIcon />
              </span>
              <h2 className="font-bold text-2xl text-hcl-primary py-4">
                We’re sorry!
              </h2>
              <p className="text-lg">Your message could not be sent</p>
              <p className="text-hcl-lite pt-8">Please try again</p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
