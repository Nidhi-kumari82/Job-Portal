import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import React from "react";
import { Button } from "../button";
import { Popover } from "../popover";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { LogOut, User, User2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {

  const {user}=useSelector(store=>store.auth);
  return (



    <div className="bg-white">
      <div className="flex item-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-red-800">Portal</span>
          </h1>
        </div>
        <div className="flex item-center gap-12">
          <ul className="flex font-medium item-center gap-5 ">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/jobs">Jobs</Link></li>
            <li><Link to="/browse">Broswer</Link></li>
          </ul>
          {!user ?(
              <div className=" flex items-center gap-2" >
                <Link to="/Login"><Button variant='outline'>Login</Button></Link>
                <Link to="/signup"><Button className='bg-blue-400 hover:bg-blue-700'>Signup</Button>
                </Link>
                </div>
            ):(
              <Popover>
            <PopoverTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage
                  src=
             "https://github.com/shadcn.png"
                  alt="@shadcn"
                  className="w-16 h-16 rounded-full mx-auto shadow-lg"
                />
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-80 shadow-2xl">
              <div>
                <div className="flex gap-4 space-y-2">
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src="
              https://openclipart.org/image/400px/350148"
                      alt="@shadcn"
                      className="w-16 h-16 rounded-full mx-auto shadow-lg"
                    />
                  </Avatar>
                 
                    <div>
                      <h4 className="font-medium">Nidhi Kumari</h4>
                      <p className="text-sm text-muted-foreground">
                        Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col my-2 text-gray-600">
                    <div className="flex w-fit items-center gap-4  cursor-pointer ">
                   <User2/>
                      <Button variant="link"><Link to="/profile">view profile</Link></Button>
                    </div>

                    <div className="flex w-fit items-center gap-4  cursor-pointer">
                      <LogOut/>
                      <Button variant="Link">Logout</Button>
                    </div>
                  </div>
                </div>
             
            </PopoverContent>
          </Popover>
           
          )
         }
          
        </div>
      </div>
    </div>
    );
        
};

export default Navbar;
