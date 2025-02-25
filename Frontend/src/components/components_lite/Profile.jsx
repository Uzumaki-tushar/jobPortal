import React, { useState } from "react";
import Navbar from "./Navbar";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Button } from "../ui/button";
import { Pen, Mail, Contact } from "lucide-react";
import { Badge } from "../ui/badge";
import AppliedJob from "./AppliedJob";
import EditProfileModal from "./EditProfileModal";
import { useSelector } from "react-redux";

const skills = [
  "React",
  "Tailwind",
  "HTML",
  "CSS",
  "NODE.JS",
  "EXPRESS.JS",
  "REDUX",
];
const isHaveResume = true;

const Profile = () => {
  const [open, setOpen] = useState(false);
  const {user}=useSelector((store)=>store.auth);

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8 shadow shadow-gray-400 hover:shadow-yellow-400 ">
        <div className="flex justify-between">
          <div className="flex items-center gap-5">
            <Avatar className="cursor-pointer h-24 w-24 ">
              <AvatarImage
                className="h-24 w-24 rounded-full"
                src="https://github.com/shadcn.png"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="font-md text-xl">{user?.fullname}</h1>
              <p>
                {user?.profile?.bio}
              </p>
            </div>
          </div>
          <Button
            onClick={() => setOpen(true)}
            className="text-right"
            variant="outline"
          >
            <Pen />
          </Button>
        </div>
        <div className="my-5 ">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span className="">
            <a href={`mailto:${user?.email}`}>{user?.email}</a>  
            </span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span className="">
            <a href={`tel:${user?.phoneNumber}`}>{user?.phoneNumber}</a>  
              </span>
          </div>
        </div>

        <div>
          <div className="my-5">
            <h1>Skills</h1>
            <div className="flex items-center gap-1">
              {user?.profile?.skills.length !== 0 ? (
                user?.profile?.skills.map((skill, index) => <Badge key={index}>{skill}</Badge>)
              ) : (
                <span>NA</span>
              )}
            </div>
          </div>
        </div>

        <div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <label className="text-md font-blod">Resume</label>
            <div>
              {isHaveResume ? (
                <a
                  href="#"
                  target="_blank"
                  download="resume.pdf"
                  className="text-blue-400 cursor-pointer hover:underline"
                >
                  Download
                </a>
              ) : (
                <span>No Resume Found</span>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
        <h1 className="text-md my-5 font-blod">Applied Jobs</h1>
        {/* Add Application Table  */}
        <AppliedJob />
      </div>

      {/* Edit Profile Modal */}
      <EditProfileModal open={open} setOpen={setOpen}/> 

    </div>
  );
};

export default Profile;
