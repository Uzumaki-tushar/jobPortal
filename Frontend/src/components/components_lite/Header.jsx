import React from "react";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { ImOffice } from "react-icons/im";

const Header = () => {
  return (
    <div>
      <div className="text-center">
        <div className="flex flex-col gap-5 my-10">
            <h2 className="px-4 flex gap-2 items-center justify-center mx-auto py-2 rounded-full bg-gray-200 text-red-600 font-medium text-center">
          <ImOffice />  <span>No1 Job Hunt Website</span>
          </h2>
          <h2 className="text-5xl font-bold mt-2">
            Search and apply & <br />
            your <span className="text-blue-700"> dream job</span>
          </h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum <br />
            perferendis doloremque porro voluptatem nesciunt dolores quo numquam
            vero sed quae.
          </p>
          <div className="flex w-[40%] shadow-lg border border-gray-300 pl-3 rounded-full items-center gap-4 mx-auto">
            <input type="text"
             placeholder="find your dream job"
             className="outline-none border-none w-full"
            />
            <Button className="rounded-r-full">
                <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
