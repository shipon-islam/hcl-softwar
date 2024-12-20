import { Modal, Popover } from "flowbite-react";
import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import hcl_logo from "../assets/hcl-logo.png";
import Button from "../components/Button";
import {
  LogoutIcon,
  MenubtnIcon,
  NotificationIcon,
  PeopleIcon,
} from "./Hcl_Icons";

export default function Header() {
  const [openModal, setOpenModal] = useState(false);
  const [openNotifyModal, setOpenNotifyModal] = useState(false);
  const { pathname } = useLocation();
  const hiddenPath = ["/login", "/signup", "/join"];
  return (
    <header className="sticky z-50 top-0">
      <nav className={`${hiddenPath.includes(pathname) && "hidden"}`}>
        <div className="flex md:flex-row-reverse justify-between items-center w-full h-16 border-b  bg-white layout-wrapper layout-padding shadow-custom">
          <div className="flex gap-x-8">
            <button
              onClick={() => setOpenNotifyModal(true)}
              className=" rounded-full p-1 shadow-md hidden md:block"
            >
              <NotificationIcon className="text-hcl-slate" />
            </button>
            <Popover
              aria-labelledby="profile-popover"
              content={
                <ul className="w-48 p-4 space-y-3">
                  <li>
                    <Link
                      className="flex items-center gap-x-1.5 hover:text-hcl-purple border-b border-gray-100 hover:border-hcl-purple py-2"
                      to="/profile"
                    >
                      <PeopleIcon className="w-3 h-3" />
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-x-1.5 hover:text-hcl-purple border-b border-gray-100 hover:border-hcl-purple py-2"
                      to="/contact"
                    >
                      <span>@</span>Contact
                    </Link>
                  </li>
                  <li
                    className="flex items-center gap-x-1.5 cursor-pointer text-hcl-purple pt-6"
                    onClick={() => setOpenModal(true)}
                  >
                    <LogoutIcon className="w-4" />
                    Log Out
                  </li>
                </ul>
              }
            >
              <button>
                <MenubtnIcon className="md:hidden" />
                <div className="hidden md:flex gap-x-2 items-center ">
                  <span className="bg-gray-500 block px-1.5 py-1 rounded-full">
                    <PeopleIcon className="w-3 text-white" />
                  </span>
                  <p>Michael Adams</p>
                  <RiArrowDownSLine className="relative right-1.5 top-0.5" />
                </div>
              </button>
            </Popover>
          </div>
          <img src={hcl_logo} alt="logo" className="w-fit h-fit" />
          <Link
            to="/notification"
            className="rounded-full p-1 shadow-md md:hidden"
          >
            <NotificationIcon className="text-hcl-slate" />
          </Link>
        </div>
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header className="border-none py-3" />
          <Modal.Body className="pt-0 pb-8 grid place-self-center">
            <div className="text-center space-y-6">
              <span className="block w-fit mx-auto">
                <LogoutIcon fill={true} />
              </span>

              <h2>Are you sure?</h2>
              <p>This will end your session</p>
              <p>You can login again later</p>
              <Button className="w-fit">Log Out</Button>
            </div>
          </Modal.Body>
        </Modal>
        <Modal
          className="top-[20px]"
          position="top-right"
          show={openNotifyModal}
          size="md"
          onClose={() => setOpenNotifyModal(false)}
          popup
        >
          <Modal.Header />
          <Modal.Body>
            <div className="text-center">
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Are you sure you want to delete this product?
              </h3>
              <div className="flex justify-center gap-4">
                <Button
                  color="failure"
                  onClick={() => setOpenNotifyModal(false)}
                >
                  {"Yes, I'm sure"}
                </Button>
                <Button color="gray" onClick={() => setOpenNotifyModal(false)}>
                  No, cancel
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </nav>
    </header>
  );
}
