import { Card } from "flowbite-react";
import React from "react";
import { SlEarphonesAlt } from "react-icons/sl";
import avatar from "../assets/avatar.png";
import gaston from "../assets/images/notify-man.webp";

const network_peoples = [
  {
    id: 1,
    name: "Gaston Goyret",
    company: "HCL Software",
    title: "AVP",
    photo: gaston,
  },
  {
    id: 2,
    name: "Rodrigo Plumari G.",
    company: "Bineo",
    title: "CIO",
    photo: avatar,
  },
  {
    id: 3,
    name: "Rommel Flores",
    company: "Grupo Comercial Control",
    title: "VP e-commerce",
    photo: avatar,
  },
  {
    id: 4,
    name: "Nocolas Geronimo",
    company: "Dportenis",
    title: "Director AI",
    photo: avatar,
  },
  {
    id: 5,
    name: "Karlo Mondragon",
    company: "Grupo Salinas",
    title: "CHRO",
    photo: avatar,
  },
  {
    id: 6,
    name: "Antonio Antunez",
    company: "Grupo Comercial Control",
    title: "Director General",
    photo: avatar,
  },
  {
    id: 7,
    name: "Rodrigo Plumari G.",
    company: "Bineo",
    title: "CIO",
    photo: avatar,
  },
  {
    id: 8,
    name: "Rommel Flores",
    company: "Grupo Comercial Control",
    title: "VP e-commerce",
    photo: avatar,
  },
  {
    id: 9,
    name: "Nocolas Geronimo",
    company: "Dportenis",
    title: "Director AI",
    photo: avatar,
  },
  {
    id: 10,
    name: "Karlo Mondragon",
    company: "Grupo Salinas",
    title: "CHRO",
    photo: avatar,
  },

  {
    id: 11,
    name: "Karlo Mondragon",
    company: "Grupo Salinas",
    title: "CHRO",
    photo: avatar,
  },
];

export default function Networking() {
  return (
    <div className="relative">
      <div className="text-hcl-slate layout-padding my-16 md:mx-10 xl:mx-48">
        <div>
          <h1 className="text-2xl font-bold my-8">Account settings</h1>
          <p>
            Explore these contacts to grow your professional network and
            opportunities.
          </p>
        </div>
        {true?<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-24 mt-24">
          {network_peoples.map((people) => (
            <Card
              key={people.id}
              className="w-[10rem] text-center relative p-0 flowbite-card"
            >
              <img
                className="w-20 h-20 rounded-full object-cover mx-auto absolute -top-14 left-0 right-0"
                src={gaston}
                alt="user"
              />
              <div className="mt-6">
                <h1>Gaston Goyret</h1>
                <small>HCL Software</small>
              </div>

              <address className="pb-2">AVP</address>
            </Card>
          ))}
        </div>:""}
        
      </div>
      <button className="flex gap-x-2 items-center justify-center px-8 py-2 mt-8 mr-4 text-white bg-hcl-blue rounded-full ml-auto">
        <SlEarphonesAlt /> Support chat
      </button>
    </div>
  );
}
