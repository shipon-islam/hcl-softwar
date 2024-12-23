import avatar from "@/assets/png/avatar.png";
import { Textarea } from "@/components/ui/textarea";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { DeleteIcon, PhotoIcon, UnlockIcon } from "@/components/Hcl_Icons";
import { BoxInput, TextInput } from "@/components/Input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { useState } from "react";
export default function Profile() {
  const [openWrongModal, setOpenWrongModal] = useState(false);
  const handlePassword = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setOpenWrongModal(true);
    }, 500);
  };
  return (
    <div className="text-hcl-slate layout-padding my-16 md:mx-10 xl:mx-24 grid md:grid-cols-[2fr_3fr] items-baseline gap-8">
      <Card className="w-[20rem]">
        <CardContent>
          <div className="text-center my-4">
            <img className="mx-auto" src={avatar} alt="avatar" />
            <h1>Michael Adams</h1>
          </div>
          <div className="grid grid-cols-2 mt-4 gap-4">
            <div>
              <h5 className="font-medium">First Name</h5>
              <p className="text-gray-500 font-light">Michael</p>
            </div>
            <div>
              <h5 className="font-medium">Last Name</h5>
              <p className="text-gray-500 font-light">Adams</p>
            </div>
            <div>
              <h5 className="font-medium">Phone</h5>
              <p className="text-gray-500 font-light">Not provided</p>
            </div>
            <div>
              <h5 className="font-medium">Company</h5>
              <p className="text-gray-500 font-light">Not provided</p>
            </div>
            <div>
              <h5 className="font-medium">Position</h5>
              <p className="text-gray-500 font-light">Head of Design</p>
            </div>
            <div>
              <h5 className="font-medium">Linkedin</h5>
              <p className="text-gray-500 font-light">Not provided</p>
            </div>
            <div>
              <h5 className="font-medium">Your Country</h5>
              <p className="text-gray-500 font-light">Argentina</p>
            </div>
            <div>
              <h5 className="font-medium">PhoneNumber</h5>
              <p className="text-gray-500 font-light">1134370312</p>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="font-medium">Restrictions</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna
            </p>
          </div>
        </CardContent>
      </Card>
      <div>
        <div className="flex gap-x-4 items-center">
          <div className="relative">
            <img className="w-20" src={avatar} alt="avatar" />
            <Popover>
              <PopoverTrigger className="absolute -bottom-2 -right-2 ">
                <button className="bg-white shadow-custom rounded-full p-1">
                  <Plus />
                </button>
              </PopoverTrigger>
              <PopoverContent className="flex flex-col py-2 w-fit ">
                <button className="capitalize border-b py-1 hover:text-hcl-purple text-left">
                  new picture
                </button>
                <button className=" capitalize  py-1 hover:text-hcl-purple text-left">
                  Delete picture
                </button>
              </PopoverContent>
            </Popover>
          </div>

          <div>
            <h1 className="font-bold">Michael Adams</h1>
            <button className="text-sm underline text-hcl-blue">
              Edit display name
            </button>
          </div>
        </div>
        <h1 className="font-bold mt-10 mb-4 ml-1 text-lg">About</h1>
        <div className="relative">
          <Textarea
            placeholder="Share something about yourself..."
            className="defalt-rm bg-white resize-none placeholder:text-gray-400 h-28"
          />
          <button className="absolute bottom-2 right-2">
            <PhotoIcon />
          </button>
        </div>
        <form className="mt-8 space-y-8">
          <div className="grid  md:grid-cols-2 gap-x-8">
            <TextInput
              placeholder="Not Provided"
              label="First Name"
              defaultValue="Michael"
            />
            <TextInput
              placeholder="Not Provided"
              label="Last Name"
              defaultValue="Adams"
            />
          </div>

          <div className="grid  md:grid-cols-2 gap-x-8">
            <TextInput
              placeholder="Phone"
              label="Phone"
              defaultValue="+54 11"
            />
            <TextInput placeholder="Not Provided" label="Company" />
          </div>
          <div className="grid  md:grid-cols-2 gap-x-8">
            <TextInput placeholder="Not Provided" label="Position" />
            <TextInput placeholder="Not Provided" label="Linkedin" />
          </div>
          <div className="grid  md:grid-cols-2 gap-x-8">
            <TextInput placeholder="Not Provided" label="Your Country" />
            <TextInput placeholder="Not Provided" label="Phone Number" />
          </div>
          <Textarea
            placeholder="Restrictions"
            className="defalt-rm bg-white resize-none placeholder:text-gray-400 h-28"
          />
          <Button>Save changes</Button>
        </form>
        <h1 className="font-bold my-5">Account</h1>

        <Dialog>
          <DialogTrigger className="block mt-4">
            <Button className="bg-slate-600/50 text-hcl-slate">
              Change password
            </Button>
          </DialogTrigger>
          <DialogContent className="w-[25rem]">
            <DialogHeader>
              <DialogTitle />
              <DialogDescription className="pt-0 pb-8 grid place-item-center">
                <div className=" space-y-6 ">
                  <h2 className="font-bold text-xl text-hcl-slate">
                    Change Password
                  </h2>
                  <form className="space-y-6 " onSubmit={handlePassword}>
                    <BoxInput
                      label="Current Password"
                      className="w-full block"
                    />
                    <BoxInput label="New Password" className="w-full block" />
                    <BoxInput
                      label="Repeat Password"
                      className="w-full block"
                    />
                    <Button className="block w-full">Change password</Button>
                  </form>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger className="block mt-4">
            <button className=" underline text-hcl-blue">Delete Account</button>
          </DialogTrigger>
          <DialogContent className=" w-[25rem]">
            <DialogHeader>
              <DialogTitle />
              <DialogDescription className="pt-0 pb-8 grid place-self-center">
                <div className="text-center space-y-6 px-10">
                  <span className="block w-fit mx-auto">
                    <DeleteIcon />
                  </span>

                  <h2 className="font-bold text-xl text-hcl-slate">
                    Are you sure?
                  </h2>
                  <p className="text-hcl-slate text-[1rem]">
                    Your profile, personal information, events and data will be
                    lost
                  </p>
                  <p className="text-gray-400">This cannot be undone</p>
                  <Button className="w-fit">Delete</Button>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <Dialog open={openWrongModal} onOpenChange={setOpenWrongModal}>
          <DialogTrigger />
          <DialogContent className=" w-[25rem]">
            <DialogHeader>
              <DialogTitle />
              <DialogDescription className="pt-0 pb-8 grid place-self-center">
                <div className="text-center space-y-6 px-10">
                  <span className="block w-fit mx-auto">
                    <UnlockIcon />
                  </span>

                  <h2 className="font-bold text-xl text-hcl-slate">
                    We’re sorry!
                  </h2>
                  <p className="text-hcl-slate text-[1rem]">
                    We could not process your password change
                  </p>
                  <p className="text-gray-400">Please, try again later</p>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
