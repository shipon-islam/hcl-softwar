import Button from "@/components/Button";
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
    <div className="text-hcl-slate layout-padding my-16 md:mx-10 xl:mx-48">
      <div>
        <h1 className="text-2xl font-bold my-8">Account settings</h1>
        <p>
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
          <label htmlFor="message">Message:</label>
          <Textarea
            placeholder="Share something about yourself..."
            className="bg-white resize-none placeholder:text-gray-400 h-28 focus-visible:ring-0 text-2xl"
          />
        </div>
        <Button
          type="submit"
          className="w-fit flex items-center gap-x-1 font-medium"
        >
          <TbMailForward className="text-lg" />
          Send
        </Button>
      </form>

      <Dialog open={openSuccessModal} onOpenChange={setOpenSuccessModal}>
        <DialogTrigger />
        <DialogContent className=" w-[20rem]">
          <DialogHeader>
            <DialogTitle />
            <DialogDescription className="pt-0 pb-8 grid place-self-center">
              <div className="text-center space-y-6 px-10">
                <span className="block w-fit mx-auto">
                  <MailRightIcon fill={true} />
                </span>

                <h2 className="font-medium">Message sent successfully!</h2>
                <p>Our team will reach out to you shortly</p>
                <p className="text-gray-400 pt-8">Thank you!</p>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <Dialog open={openFailedModal} onOpenChange={setOpenFailedModal}>
        <DialogTrigger />
        <DialogContent className=" w-[20rem]">
          <DialogHeader>
            <DialogTitle />
            <DialogDescription className="pt-0 pb-8 grid place-self-center">
              <div className="text-center space-y-6 px-16">
                <span className="block w-fit mx-auto">
                  <ErrorIcon fill={true} />
                </span>

                <h2 className="font-medium">We’re sorry!</h2>
                <p>Your message could not be sent</p>
                <p className="text-gray-400 pt-8">Please try again</p>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
