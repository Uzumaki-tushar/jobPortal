import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User2, LogOut } from "lucide-react";

const Navbar = () => {
  const user = true;

  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-[#F83003]">Portal</span>
          </h1>
        </div>
        <div className="flex items-center gap-6">
          <ul className="flex font-mid items-center gap-6">
            <li>Home</li>
            <li>Browse</li>
            <li>Jobs</li>
          </ul>
          {!user ? (
            <div className="flex gap-2">
              <Button variant="outline" className=" hover:bg-black hover:text-white">Login</Button>
              <Button variant="primary" className=" hover:bg-black hover:text-white">Register</Button>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex items-center gap-4 space-y-2">
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-md">Tushar Sourav</h3>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eum, asperiores?
                    </p>
                  </div>
                </div>
                <div className="flex text-gray-600 gap-10 cursor-pointer">
                  <div className="flex items-center">
                    <User2 />
                    <Button variant="link">Profile</Button>
                  </div>
                  <div className="flex items-center">
                    <LogOut></LogOut>
                    <Button variant="link">Logout</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
