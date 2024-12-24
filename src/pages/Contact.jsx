import { ErrorIcon, MailRightIcon } from "@/components/Hcl_Icons";
import { BoxInput } from "@/components/Input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";

export default function Contact() {
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [openFailedModal, setOpenFailedModal] = useState(false);
  const handleSend = (e) => {
    e.preventDefault();
    setOpenSuccessModal(true);
    setTimeout(() => {
      setOpenSuccessModal(false);
      setOpenFailedModal(true);
    }, 1000);
  };
  return (
    <div className="layout-padding mt-32 mb-16 md:mx-10 xl:mx-24 max-w-[65rem] mx-auto">
      <div>
        <h1 className="heading my-8">Account settings</h1>
        <p className="text-lg">
          If you have any urgent questions or concerns regarding your event
          calendar, please get in touch with
          <a
            href="mailto:contact@hclsoftware-events.com"
            className="text-hcl-blue px-1"
          >
            contact@hclsoftware-events.com
          </a>
          for 24/7 support.
        </p>
      </div>
      <form onSubmit={handleSend} className="mt-8 space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <BoxInput label="First Name*" type="text" name="firstname" />

          <BoxInput label="Last Name*" type="text" name="lastname" />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <BoxInput label="Email*" type="text" name="email" />

          <BoxInput label="Subject*" type="text" name="subject" />
        </div>
        <div className="space-y-2">
          <label className="text-xl text-hcl-secondary" htmlFor="message">
            Message:
          </label>
          <Textarea className="bg-white resize-none placeholder:text-gray-400 h-28 focus-visible:ring-0 text-2xl" />
        </div>
        <button
          type="submit"
          className="bg-hcl-primary flex items-center gap-x-1 font-medium text-white text-xl px-6 py-2 rounded-md hover:bg-hcl-secondary"
        >
          <TbMailForward className="text-xl" />
          Send
        </button>
      </form>

      <Dialog open={openSuccessModal} onOpenChange={setOpenSuccessModal}>
        <DialogTrigger />
        <DialogContent className=" w-[29rem]">
          <DialogHeader>
            <DialogTitle />
            <DialogDescription className="p-4 grid place-items-center">
              <div className="text-center space-y-6 px-10">
                <span className="block w-fit mx-auto">
                  <MailRightIcon fill={true} />
                </span>

                <h2 className="font-bold text-2xl">
                  Message sent successfully!
                </h2>
                <p className="text-hcl-black  text-xl">
                  Our team will reach out to you shortly
                </p>
                <p className="text-hcl-lite pt-8 text-xl">Thank you!</p>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <Dialog open={openFailedModal} onOpenChange={setOpenFailedModal}>
        <DialogTrigger />
        <DialogContent className=" w-[29rem]">
          <DialogHeader>
            <DialogTitle />
            <DialogDescription className="p-4 grid place-items-center">
              <div className="text-center space-y-6 px-16">
                <span className="block w-fit mx-auto">
                  <ErrorIcon fill={true} />
                </span>

                <h2 className="font-bold text-2xl">We’re sorry!</h2>
                <p className="text-hcl-black  text-xl">
                  Your message could not be sent
                </p>
                <p className="text-hcl-lite pt-8 text-xl">Please try again</p>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
