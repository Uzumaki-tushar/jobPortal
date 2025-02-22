import React from "react";
import Navbar from "./Navbar";
import Filter from "./Filter";
import Job from "./Job";
import { SpaceIcon } from "lucide-react";

const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,1,2,13,14,16,17,18,19,20,21];

const Jobs = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-5">
          <div className="w-20%">
            <Filter />
          </div>

          {jobsArray.length <= 0 ? (
            <span className="">Job not found</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">

              <div className="grid grid-cols-3 gap-4">
              {jobsArray.map((job, index) => (
                <Job key={index} />
              ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
