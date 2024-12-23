import {
  AddPeopleIcon,
  HeartIcon,
  PhotoPlusIcon,
  ShareIcon,
} from "@/components/Hcl_Icons";
import { Card, CardContent } from "@/components/ui/card";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";

import { event_flags_gellery, gallery_posts } from "@/constants";
import { X } from "lucide-react";
import { useState } from "react";

const peoples = [
  { name: "Natalie Johnson" },
  { name: "Natasha Miller" },
  { name: "Nathaniel Brooks" },
  { name: "Nathaniel Storm" },
];
export default function SharedGallery() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);

  return (
    <div className="text-hcl-slate layout-padding my-16 md:mx-10 xl:mx-24">
      <div>
        <h1 className="text-2xl font-bold my-8">Shared Event Gallery</h1>
        <p>Share pictures you have from the event!</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 my-8">
        {event_flags_gellery.map((event) => (
          <Card key={event.id} className="p-3">
            <CardContent className="pb-0 px-0">
              <img
                className="object-cover rounded-md"
                src={event.photo}
                alt="flag"
              />
              <div className="mt-4">
                <h1>{event.name}</h1>
                <small className="italic relative -top-1">{event.date}</small>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div>
        <div className="flex justify-between">
          <div>
            <h1 className="text-2xl font-bold my-8">Shared Event Gallery</h1>
            <p>Share pictures you have from the event!</p>
          </div>
          <div className="flex space-x-4 items-center">
            <Select>
              <SelectTrigger className="w-[180px] bg-hcl-slate text-white">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Most recent</SelectItem>
                <SelectItem value="dark">Most recent</SelectItem>
                <SelectItem value="system">Most viewed</SelectItem>
              </SelectContent>
            </Select>

            <Dialog>
              <DialogTrigger>
                <PhotoPlusIcon />
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle />
                  <DialogDescription>
                    <Command>
                      <CommandInput
                        className="border-none focus:outline-none focus:border-none focus:border-0"
                        placeholder=""
                      />
                      <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup heading="Suggestions">
                          {peoples.map((people, index) => (
                            <CommandItem key={index}>{people.name}</CommandItem>
                          ))}
                        </CommandGroup>
                        <ul className="flex flex-wrap gap-4 mt-4">
                          {peoples.map((people, index) => (
                            <li
                              className="flex items-center bg-slate-200 px-2 py-0.5 rounded-md text-sm"
                              key={index}
                            >
                              {people.name}
                              <X className="h-3 w-3 cursor-pointer {person.name}" />
                            </li>
                          ))}
                        </ul>
                      </CommandList>
                    </Command>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger>
                <ShareIcon />
              </DialogTrigger>
              <DialogContent className="w-[15rem]">
                <DialogHeader>
                  <DialogTitle />
                  <DialogDescription>
                    <h1 className="capitalize font-bold">share</h1>
                    <div className="flex items-center gap-x-9 mb-8 mt-3  text-xl">
                      <a
                        className="hover:text-hcl-blue transition-colors duration-300"
                        href="#"
                      >
                        <FaFacebook />
                      </a>
                      <a
                        className="hover:text-hcl-blue transition-colors duration-300"
                        href="#"
                      >
                        <FaLinkedin />
                      </a>
                      <a
                        className="hover:text-hcl-blue transition-colors duration-300"
                        href="#"
                      >
                        <FaInstagram />
                      </a>

                      <a
                        className="hover:text-hcl-blue transition-colors duration-300"
                        href="#"
                      >
                        <FaWhatsapp />
                      </a>
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">Copy link</h5>
                      <div className="flex gap-x-2 items-center justify-between">
                        <p className="bg-hch-gray w-40 overflow-hidden py-2 px-2 text-gray-300">
                          https://www.hclsoftware.com/25...
                        </p>
                        <button>
                          <MdContentCopy className="text-xl" />
                        </button>
                      </div>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-8 grid-flow-dense">
          {gallery_posts.map((post) => (
            <Card
              key={post.id}
              className={`p-3 h-fit ${
                post.photo.type == "horizontal" ? "row-span-2" : "aspect-[3/4]"
              }`}
            >
              <CardContent className="pb-2 px-0">
                <div className="relative">
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src={post?.photo?.url}
                    alt=""
                  />

                  <div className="flex justify-between w-full text-[0.7rem] absolute bottom-1  px-1">
                    <div className="flex justify-center items-center gap-x-1  bg-white/80 px-1 rounded-md">
                      <button>
                        <HeartIcon className="w-4" />
                      </button>
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex justify-center items-center gap-x-1 text-white bg-black/30 px-1.5 rounded-md ">
                      <span>{post.owner},</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
                <div>
                  {post.tagged_members.length > 0 && (
                    <div className="flex justify-between mt-4">
                      <h1 className="font-bold">Tagged members</h1>
                      <div className="flex justify-center items-center gap-x-1">
                        <button>
                          <HeartIcon />
                        </button>
                        <button>
                          <AddPeopleIcon />
                        </button>
                      </div>
                    </div>
                  )}

                  {post.tagged_members.map((member) => (
                    <span className="text-sm pr-1" key={member}>
                      {member},
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
