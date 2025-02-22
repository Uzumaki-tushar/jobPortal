import React from "react";
import { Badge } from "../ui/badge";

const JobCards = () => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-200 cursor-pointer hover:shadow-2xl hover:shadow-blue-200 hover:p-3 box-border">
      <div>
        <h1 className="text-lg font-medium">Company Name</h1>
        <p className="text-sm text-gray-600">India</p>
      </div>
      <div>
        <h2 className="font-bold text-lg my-2">Job Title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          excepturi ut quaerat eveniet mollitia autem!
        </p>
      </div>
      <div className="flex gap-2 items-center mt-4">
        <Badge className={"text-blue-500 font-bold "} variant={"ghost"}>
          10 Position
        </Badge>
        <Badge className={"text-blue-500 font-bold "} variant={"ghost"}>
          20 LPA
        </Badge>
        <Badge className={"text-blue-500 font-bold "} variant={"ghost"}>
          Remote
        </Badge>
        <Badge className={"text-blue-500 font-bold "} variant={"ghost"}>
          Full Time
        </Badge>
      </div>
    </div>
  );
};

export default JobCards;
