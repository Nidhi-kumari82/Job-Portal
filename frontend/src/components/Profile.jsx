import React, { useState } from "react";
import Navbar from "./ui/shared/Navbar";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "@radix-ui/react-label";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  //const [skills, setSkills] = useState(["HTML", "CSS", "JavaScript", "ReactJS"]);

  const skills = user?.profile?.skills || [];
  const [open, setOpen] = useState(false);
  const isResume = Boolean(user?.profile?.resume);

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="w-24 h-24 rounded-full overflow-hidden border">
              <AvatarImage
                src={ user?.avatar ||"https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"}
                alt="User Avatar"
                className="w-full h-full"
              />
            </Avatar>
            <div className="text-start">
              <h1 className="font-medium text-xl">{user?.fullname || "Full Name"}</h1>
              <p>{user?.profile?.bio || "No bio provided"}</p>
            </div>
          </div>
          <Button onClick={() => setOpen(true)} className="text-right cursor-pointer">
            <Pen />
          </Button>
        </div>

        <div>
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>{user?.email || "Email not available"}</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span className="">{user?.phoneNumber || "Phone number not available"}</span>
          </div>
        </div>

        <div className="my-5">
          <h1 className="font-bold text-start">Skills</h1>
          <div className="flex flex-wrap items-center gap-2">
            {user?.profile?.skills.length !== 0 ? (
             user?.profile?.skills.map((item, index) => (
                <Badge className="bg-black text-white px-3 py-1" key={index}>
                  {item}
                </Badge>
              ))
            ) : (
              <span>NA</span>
            )}
          </div>
        </div>

        <div className="grid w-full max-w-sm items-center text-start gap-1.5">
          <Label className="text-md font-bold">Resume</Label>
          {isResume ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/nidhi-kumari-760843256/"
              className="text-blue-500 hover:underline cursor-pointer"
            >
              Resume here
            </a>
          ) : (
            <span>NA</span>
          )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl p-5">
        <h1 className="text-left font-bold text-lg">Applied Jobs</h1>
        <AppliedJobTable />
      </div>

      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;
