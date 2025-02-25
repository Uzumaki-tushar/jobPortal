import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const Description = () => {
  const isApplied = false;
  return (
    <div>
      <div className="max-w-7xl mx-auto my-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-bold text-xl ">Title</h1>
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

          <div>
            <Button
              disabled={isApplied}
              className={`rounded-lg ${
                isApplied
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-400"
              }`}
            >
              {isApplied ? "Already Applied" : "Apply"}
            </Button>
          </div>
        </div>
      </div>

      <h1 className="border-b-2 border-b-gray-400 font-medium py-4">
        Job Description
      </h1>
      <div className="font-bold my-1 ">
        <h1>
          Role:
          <span className="pl-4 font-normal text-gray-800">
            Software Engineer
          </span>
        </h1>
      </div>
      <div className="font-bold my-1 ">
        <h1>
          Salary:
          <span className="pl-4 font-normal text-gray-800">30k</span>
        </h1>
      </div>
      <div className="font-bold my-1 ">
        <h1>
          Location:
          <span className="pl-4 font-normal text-gray-800">Remote</span>
        </h1>
      </div>
      <div className="font-bold my-1 ">
        <h1>
          Experience:
          <span className="pl-4 font-normal text-gray-800">2years</span>
        </h1>
      </div>
      <div className="font-bold my-1 ">
        <h1>
          Job Type:
          <span className="pl-4 font-normal text-gray-800">Full time</span>
        </h1>
      </div>
      <div className="font-bold my-1 ">
        <h1>
          Total Applicant:
          <span className="pl-4 font-normal text-gray-800">
            10
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Description;
