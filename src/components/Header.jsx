import hcl_logo from "@/assets/png/hcl-logo.png";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { notificationApi } from "@/constants";
import { X } from "lucide-react";
import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

import {
  LogoutIcon,
  MenubtnIcon,
  NotificationIcon,
  PeopleIcon,
} from "./Hcl_Icons";
import NotificationList from "./NotificationList";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const hiddenPath = ["/login", "/signup", "/join"];
  return (
    <header className="sticky z-50 top-0 text-hcl-slate">
      <nav className={`${hiddenPath.includes(pathname) && "hidden"}`}>
        <div className="flex md:flex-row-reverse justify-between items-center w-full h-16 border-b  bg-white layout-wrapper layout-padding shadow-custom">
          <div className="flex items-center gap-x-8">
            <Popover open={isOpen} onOpenChange={setIsOpen}>
              <PopoverTrigger>
                <button className="rounded-full p-1 shadow-md hidden md:block ">
                  <NotificationIcon className="text-hcl-slate" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="relative w-[28rem] ">
                <button
                  onClick={() => setIsOpen(false)} // Close popover
                  className="absolute top-2 right-2 text-sm text-gray-600"
                >
                  <X />
                </button>
                <h1 className="font-bold text-xl py-2">Notifications</h1>
                <div className=" text-hcl-slate max-h-[calc(100vh-10rem)] overflow-y-auto scrollbar-thin pb-8 px-2">
                  <NotificationList notificationApi={notificationApi} />
                </div>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger>
                <button className="flex items-center">
                  <MenubtnIcon className="md:hidden" />
                  <div className="hidden md:flex gap-x-2 items-center ">
                    <span className="bg-gray-500 block px-1.5 py-1 rounded-full">
                      <PeopleIcon className="w-3 text-white" />
                    </span>
                    <p>Michael Adams</p>
                    <RiArrowDownSLine className="relative right-1.5 top-0.5" />
                  </div>
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-[10rem]">
                <ul>
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
                  <Dialog>
                    <DialogTrigger className="flex items-center gap-x-1.5 cursor-pointer text-hcl-purple pt-6">
                      <LogoutIcon className="w-4" />
                      Log Out
                    </DialogTrigger>
                    <DialogContent className="w-[20rem]">
                      <DialogHeader>
                        <DialogTitle />
                        <DialogDescription>
                          <div className="text-center space-y-6">
                            <span className="block w-fit mx-auto">
                              <LogoutIcon fill={true} />
                            </span>

                            <h2 className="font-medium text-xl">
                              Are you sure?
                            </h2>
                            <p>This will end your session</p>
                            <p>You can login again later</p>
                            <Button className="w-fit">Log Out</Button>
                          </div>
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </ul>
              </PopoverContent>
            </Popover>
          </div>
          <Link to="/">
            <img src={hcl_logo} alt="logo" className="w-fit h-fit" />
          </Link>

          <Link
            to="/notification"
            className="rounded-full p-1 shadow-md md:hidden"
          >
            <NotificationIcon className="text-hcl-slate" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
