import { network_peoples } from "@/constants";

import { Card, CardContent } from "@/components/ui/card";
import { SlEarphonesAlt } from "react-icons/sl";

export default function Networking() {
  return (
    <div className="relative">
      <div className="layout-padding my-16 ">
        <div>
          <h1 className="heading my-8">Account settings</h1>
          <p className="text-lg">
            Explore these contacts to grow your professional network and
            opportunities.
          </p>
        </div>
        {network_peoples.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 xl:gap-x-6 2xl:gap-x-12 gap-y-24 mt-24">
            {network_peoples.map((people) => (
              <Card key={people.id}>
                <CardContent className="text-center relative p-2">
                  <img
                    className="w-20 h-20 rounded-full object-cover mx-auto absolute -top-12 left-0 right-0"
                    src={people.photo}
                    alt="user"
                  />
                  <div className="mt-6">
                    <h1 className="font-bold text-lg">{people.name}</h1>
                    <span className="text-[#5A6378]">{people.company}</span>
                  </div>

                  <span className="pb-2 font-italic text-sm text-[#5A6378] mt-3 inline-block">
                    {people.title}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center h-[calc(100vh-25rem)] flex flex-col items-center justify-center">
            <div className="max-w-[25rem]">
              <h1 className="text-2xl font-bold my-8">No members yet</h1>
              <p>The network is waiting for you to make the first connection</p>
            </div>
          </div>
        )}
      </div>
      <button className="flex gap-x-2 items-center justify-center px-8 py-2  my-20 sm:my-8 mr-4 text-white bg-hcl-blue rounded-full ml-auto">
        <SlEarphonesAlt /> Support chat
      </button>
    </div>
  );
}
