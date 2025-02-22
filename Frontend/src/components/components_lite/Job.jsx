import React from "react";
import { Button } from "../ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import avatarImage from "../../assets/images/JobPortal.jpg";
import { Badge } from "../ui/badge";

const Job = () => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-200 cursor-pointer hover:shadow-2xl hover:shadow-blue-200 hover:p-3 box-border">
        <div className="flex itmes-center justify-between">
        <p className="text-sm text-gray-600">3 days ago</p>
      <Button variant="outline" className="rounded-full " size="icon">
        <Bookmark />
      </Button>
        </div>

      <div className="flex items-center gap-2 my-2">

        <div>
          <div >
            <div className="flex items-center gap-2">
            <Button className="p-2" variant="outline">
          <Avatar className="w-8 h-8 overflow-hidden rounded-full">
            <AvatarImage
              className="object-cover w-full h-full"
              src={avatarImage}
            ></AvatarImage>
          </Avatar>
        </Button>
            <h1 className="text-lg font-medium">Company Name</h1>
            </div>
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
      </div>
      <div className="flex items-center gap-4">
        <Button variant="outline" className="rounded-md">Details</Button>
        <Button variant="outline" className="rounded-md">Save For Later</Button>
      </div>
    </div>
  );
};

export default Job;
