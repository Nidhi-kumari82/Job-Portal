import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const JobsDescription = () => {
  const isApplied = true;
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-xl ">Frontend</h1>
          <div className="flex items-center gap-2 mt-4">
            <Badge className="text-blue-500 font-bold" variant="ghost">
           
              12 Positions
            </Badge>
            <Badge className="text-[#F83002] font-bold" variant="ghost">
           
              Part Time
            </Badge>
            <Badge className="text-[#7209b7] font-bold" variant="ghost">
           
              24LPA
            </Badge>
          </div>
        </div>
        <Button
          disabled={isApplied}
          className={`rounded-lg ${
            isApplied
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-text-[#7209b7] hover:bg-purple-900 "
          }`}
        >
          {isApplied ? "Already Applied" : "Apply Now"}
        </Button>
      </div>
      <h1 className="text-left border-b-gray-300 font-medium py-4">Job Description</h1>
      <div className=" items-center grid grid-y text-start ">
      <h1 className="font-bold my-1 ">Role:<span className="pl-4 font-normal text-gray-800">Frontend Developer</span></h1>
      <h1 className="font-bold my-1">Location:<span className="pl-4 font-normal text-gray-800">Patna</span></h1>
      <h1 className="font-bold my-1">Description:<span className="pl-4 font-normal text-gray-800">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, error!</span></h1>
      <h1 className="font-bold my-1">Experians:<span className="pl-4 font-normal text-gray-800">2 year</span></h1>
      <h1 className="font-bold my-1">Salary:<span className="pl-4 font-normal text-gray-800">12 LPA</span></h1>
      <h1 className="font-bold my-1">Total Application:<span className="pl-4 font-normal text-gray-800">4</span></h1>
      <h1 className="font-bold my-1">Posted Data:<span className="pl-4 font-normal text-gray-800">2-4-25</span></h1>
      </div>    
     

    </div>
  );
};

export default JobsDescription;
