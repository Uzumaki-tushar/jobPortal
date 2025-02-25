import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_ENDPOINT } from "@/utils/data";
import { toast } from "sonner";
import { setUser } from "@/redux/authSlice";

const EditProfileModal = ({ open, setOpen }) => {
  const [loading, setLoading] = useState(false);
  const {user}=useSelector((store)=>store.auth);

  const [input,setInput]=useState({
    fullname: user?.fullname,
    email: user?.email,
    phoneNumber: user?.phoneNumber,
    bio: user?.profile?.bio,
    skills: user?.profile?.skills?.map((skills)=>skills),
    file: user?.profile.resume,
  })

  const dispatch= useDispatch();

  const changeEventHandler=(e)=>{
    setInput({...input, [e.target.name]:e.target.value})
  }

  const handleFileChange=async(e)=>{
    e.preventDefault();
    const formData=new FormData();
    formData.append("fullname",input.fullname);
    formData.append("email",input.email);
    formData.append("phoneNumber",input.phoneNumber);
    formData.append("bio",input.bio);
    formData.append("skills",input.skills);
    if(input.file){
      formData.append("file",input.file);
    }
    try{
      const res=await axios.post(`${USER_API_ENDPOINT}/profile/update`,formData,{
        headers:{"Content-Type":"multipart/form-data"},
        withCredentials:true,
      })
      if(res.data.success){
        dispatch(setUser(res.data.user));
        toast.success(res.data.message);
      }
    }
    catch(err){
      console.log(err);
      toast.error("Failed to update profile");
    }
    setOpen(false);
    // console.log(input);
  }

  const FileChangeHandler=(e)=>{
    const file=e.target.files?.[0];
    setInput({...input,file});
  }

  return (
    <div>
      <Dialog open={open}>
        {/* <DialogTrigger>open</DialogTrigger> */}
        <DialogContent
          className="sm:max-w-[500px]"
          onInteractOutside={() => setOpen(false)}
        >
          <DialogHeader>
            <DialogTitle>Edit your Profile</DialogTitle>
          </DialogHeader>
          {/* form for editing profile */}

          <form onSubmit={handleFileChange}>
            <div className=" grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <input
                  type="text"
                  id="fullname"
                  value={input.fullname}
                  onChange={changeEventHandler}
                  name="fullname"
                  className="col-span-3 border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <input
                  type="text"
                  id="email"
                  value={input.email}
                  onChange={changeEventHandler}
                  name="email"
                  className="col-span-3 border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="phone" className="text-right">
                  Phone Number
                </Label>
                <input
                  type="tel"
                  id="phoneNumber"
                  value={input.phoneNumber}
                  onChange={changeEventHandler}
                  name="phoneNumber"
                  className="col-span-3 border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="bio" className="text-right">
                  Bio
                </Label>
                <input
                  type="text"
                  value={input.bio}
                  onChange={changeEventHandler}
                  id="bio"
                  name="bio"
                  className="col-span-3 border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="skills" className="text-right">
                  Skills
                </Label>
                <input
                  type="text"
                  value={input.skills}
                  onChange={changeEventHandler}
                  id="skills"
                  name="skills"
                  className="col-span-3 border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="file" className="text-right">
                  Resume
                </Label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  accept="application/pdf"
                  onChange={FileChangeHandler}
                  className="col-span-3 border-gray-300 rounded-md p-2"
                />
              </div>
            </div>
            <DialogFooter>
              {loading ? (
                <Button variant="primary" disabled>
                  loading...
                </Button>
              ) : (
                <Button
                  className="w-full py-3 my-3 text-white items-center justify-center max-w-7xl mx-auto bg-black hover:bg-gray-900 rounded-md"
                  variant="primary"
                >
                  Save
                </Button>
              )}
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditProfileModal;
