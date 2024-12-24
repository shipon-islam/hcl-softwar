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
import { MdContentCopy, MdFileDownloadDone } from "react-icons/md";

import { event_flags_gellery, gallery_posts } from "@/constants";
import { X } from "lucide-react";

const peoples = [
  { name: "Natalie Johnson" },
  { name: "Natasha Miller" },
  { name: "Nathaniel Brooks" },
  { name: "Nathaniel Storm" },
];
export default function SharedGallery() {
  // const [search, setSearch] = useState("");
  // const [selected, setSelected] = useState([]);
  const url = "https://www.hclsoftware.com/25...";

  const handleCopy = ({ currentTarget }) => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        currentTarget.children[0].classList.add("hidden");
        currentTarget.children[1].classList.remove("hidden");
        setInterval(() => {
          currentTarget.children[0].classList.remove("hidden");
          currentTarget.children[1].classList.add("hidden");
        }, 500);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <div className="layout-padding my-16">
      <div>
        <h1 className="heading my-8">Shared Event Gallery</h1>
        <p className="text-hcl-black">
          Share pictures you have from the event!
        </p>
      </div>
      <div className="grid  sm:grid-cols-2  lg:grid-cols-4 xl:grid-cols-5 gap-4 my-8">
        {event_flags_gellery.map((event) => (
          <Card key={event.id} className="p-3">
            <CardContent className="pb-0 px-0">
              <img
                className="object-cover rounded-md"
                src={event.photo}
                alt="flag"
              />
              <div className="mt-6 mb-2">
                <h1 className="font-bold text-lg">{event.name}</h1>
                <small className="italic relative -top-1 text-[1rem] text-[#5A6378]">
                  {event.date}
                </small>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div>
        <div className="flex flex-col lg:flex-row justify-between">
          <div>
            <h1 className="heading my-8">Shared Event Gallery</h1>
            <p className="text-hcl-black">
              Share pictures you have from the event!
            </p>
          </div>
          <div className="flex space-x-4 items-center mt-8 lg:mt-0">
            <Select>
              <SelectTrigger className="w-[180px] bg-hcl-primary text-white">
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
              <DialogContent className="sm:min-w-[42rem] lg:min-w-[60rem]  lg:min-h-[30rem] bg-transparent border-none p-0 ">
                <DialogHeader>
                  <DialogTitle />
                  <DialogDescription className="grid sm:grid-cols-2 gap-x-4 h-[40] lg:h-[25rem] p-0 ">
                    <div className="">
                      <img
                        className="rounded-md h-auto object-cover"
                        src="/images/verticle-1.jpg"
                        alt=""
                      />
                    </div>
                    <Command className="p-8 border-b-none input-search ">
                      <CommandInput
                        className="focus:outline-none focus:border-none focus:border-0 "
                        placeholder=""
                      />
                      <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup heading="Suggestions">
                          {peoples.map((people, index) => (
                            <CommandItem key={index}>{people.name}</CommandItem>
                          ))}
                        </CommandGroup>
                        <ul className="flex flex-wrap gap-4 mt-4 ">
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
              <DialogContent className="w-[19rem] py-8">
                <DialogHeader>
                  <DialogTitle />
                  <DialogDescription className="grid place-content-center ">
                    <h1 className="capitalize font-bold">share</h1>
                    <div className="flex items-center gap-x-12 mb-8 mt-3  text-2xl">
                      <a
                        className="hover:text-hcl-blue transition-colors duration-300"
                        target="blank"
                        href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
                      >
                        <FaFacebook />
                      </a>
                      <a
                        className="hover:text-hcl-blue transition-colors duration-300"
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
                        target="blank"
                      >
                        <FaLinkedin />
                      </a>
                      <a
                        className="hover:text-hcl-blue transition-colors duration-300"
                        href="https://www.instagram.com/"
                        target="blank"
                      >
                        <FaInstagram />
                      </a>

                      <a
                        className="hover:text-hcl-blue transition-colors duration-300"
                        href={`https://wa.me/?text=${encodeURIComponent(
                          "hi" + " " + url
                        )}`}
                        target="blank"
                      >
                        <FaWhatsapp />
                      </a>
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">Copy link</h5>
                      <div className="flex gap-x-2 items-center justify-between">
                        <p className="bg-hch-gray w-48 overflow-hidden py-2  text-gray-300">
                          {url}
                        </p>
                        <button onClick={handleCopy}>
                          <MdContentCopy className="text-xl hover:text-hcl-secondary" />
                          <MdFileDownloadDone className="text-xl text-hcl-blue hidden" />
                        </button>
                      </div>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-8  sm:auto-rows-[170px] lg:auto-cols-[200px] 2xl:auto-rows-[200px]">
          {gallery_posts.map((post) => (
            <Card
              key={post.id}
              className={`overflow-hidden ${
                post.photo.type === "horizontal" && "row-span-2"
              }`}
            >
              <CardContent className="p-2 ">
                <div className="relative">
                  <img
                    className={`w-full rounded-lg object-cover  ${
                      post.photo.type == "horizontal"
                        ? "h-full sm:max-h-[340px] lg:max-h-[400px]"
                        : "sm:h-[150px] lg:h-[150px] 2xl:h-[180px]"
                    }`}
                    src={post?.photo?.url}
                    alt="photo"
                  />

                  {/* Overlay for likes and info */}
                  <div className="flex justify-between w-full text-[0.7rem] absolute bottom-1 px-1">
                    <div className="flex justify-center items-center gap-x-1 bg-white/80 px-1 rounded-md">
                      <button>
                        <HeartIcon className="w-4" />
                      </button>
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex justify-center items-center gap-x-1 text-white bg-black/30 px-1.5 rounded-md">
                      <span>{post.owner}</span>, <span>{post.date}</span>
                    </div>
                  </div>
                </div>

                {/* Tagged members */}
                {post.tagged_members.length > 0 && (
                  <div className="mt-4">
                    <div className="flex justify-between">
                      <h1 className="font-bold text-hcl-secondary">
                        Tagged members
                      </h1>
                      <div className="flex justify-center items-center gap-x-1">
                        <button>
                          <HeartIcon className="w-4" />
                        </button>
                        <button>
                          <AddPeopleIcon className="w-4" />
                        </button>
                      </div>
                    </div>
                    <div className="mt-1">
                      {post.tagged_members.map((member) => (
                        <span
                          key={member}
                          className="text-sm pr-1 text-hcl-secondary"
                        >
                          {member},
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
