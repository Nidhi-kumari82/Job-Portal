import React, { useState } from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = () => {
  const navigate=useNavigate();
  const JobId="ghfhgjhhhbdsdfg";
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100 ">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">2 day ago</p>
        <Button
          variant="outline"
          className="rounded-full image-start"
          size="icon"
        >
          <Bookmark />
        </Button>
      </div>
      <div className="flex items-center gap-2 my-2">
        <Button>
          <Avatar>
            <AvatarImage
              src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"
              className="w-8 h-8 "
            ></AvatarImage>
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">Company name</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2 text-start">Tittle</h1>
        <p className="text-sm text-gray-600 text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, vero! Lorem ipsum dolor sit Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Badge className={"text-blue-700 font-bold"} variant="ghost"> 12 Position</Badge>
        <Badge className={"text-orange-500 font-bold"} variant="ghost"> Part Time</Badge>
        <Badge className={"text-[#7209b7] font-bold"} variant="ghost"> 24LPA</Badge>
      </div>
      <div className="flex items-center gap-4 mt 4 p-2 border-x-black ">    
        <Button  onClick={()=>navigate(`/description/${JobId}`)} variant="outline">Details</Button>
        <Button className=" bg-[#7209b7]">Save For Later</Button>
      </div>
    </div>
  );
};

export default Job;
