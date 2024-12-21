import { Modal } from "flowbite-react";
import React, { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import Button from "../components/Button";
import { ErrorIcon, MailRightIcon } from "../components/Hcl_Icons";
import TextInput from "../components/TextInput";
export default function Contact() {
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [openFailedModal, setOpenFailedModal] = useState(false);
  const handleSend = (e) => {
    e.preventDefault();
    setOpenSuccessModal(true);
    setOpenFailedModal(true);
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
          <div className="space-y-2">
            <label htmlFor="firstname">First Name*</label>
            <TextInput type="text" name="firstname" />
          </div>
          <div className="space-y-2">
            <label htmlFor="lastname">Last Name*</label>
            <TextInput type="text" name="lastname" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label htmlFor="email">Email*</label>
            <TextInput type="text" name="email" />
          </div>
          <div className="space-y-2">
            <label htmlFor="email">Subject*</label>
            <TextInput type="text" name="email" />
          </div>
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            className="shadow-custom outline-none focus:border-none focus:outline-none border-none py-2 w-full rounded-md pl-4 placeholder:text-gray-400 h-32"
            name="message"
          ></textarea>
        </div>
        <Button
          type="submit"
          className="w-fit flex items-center gap-x-1 font-medium"
        >
          <TbMailForward className="text-lg" />
          Send
        </Button>
      </form>
      <Modal
        show={openSuccessModal}
        onClose={() => setOpenSuccessModal(false)}
        size="sm"
      >
        <Modal.Header className="border-none py-3" />
        <Modal.Body className="pt-0 pb-8 grid place-self-center">
          <div className="text-center space-y-6 px-10">
            <span className="block w-fit mx-auto">
              <MailRightIcon fill={true} />
            </span>

            <h2 className="font-medium">Message sent successfully!</h2>
            <p>Our team will reach out to you shortly</p>
            <p className="text-gray-400 pt-8">Thank you!</p>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        show={openFailedModal}
        onClose={() => setOpenFailedModal(false)}
        size="sm"
      >
        <Modal.Header className="border-none py-3" />
        <Modal.Body className="pt-0 pb-8 grid place-self-center">
          <div className="text-center space-y-6 px-16">
            <span className="block w-fit mx-auto">
              <ErrorIcon fill={true} />
            </span>

            <h2 className="font-medium">We’re sorry!</h2>
            <p>Your message could not be sent</p>
            <p className="text-gray-400 pt-8">Please try again</p>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
