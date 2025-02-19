import React, { useState } from "react";
import Navbar from "../components_lite/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_ENDPOINT } from "@/utils/data";
import { toast } from "sonner";
import { setLoading } from "@/redux/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Register = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    password: "",
    role: "",
    phoneNumber: "",
    file: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading } = useSelector((store) => store.auth);

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.file?.[0] });
  };

  const submitHandler=async(e)=>{
    e.preventDefault();
    const formData= new FormData();
    formData.append("fullname",input.fullname);
    formData.append("email",input.email);
    formData.append("password",input.password);
    formData.append("role",input.role);
    formData.append("phoneNumber",input.phoneNumber);
    if(input.file){
      formData.append("file",input.file);
    }
    // console.log(input);
    try{
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_ENDPOINT}/register`,formData,{
        headers:{
          "Content-Type":"multipart/form-data",
        },
        withCredentials:true,
      })
      if(res.data.success){
        navigate("/login");
        toast.success(res.data.message);
      }
    }
    catch(error){
      console.log(error);
      const errorMessage=error.response? error.response.data.message :"An unexpected error occurred";
      toast.error(errorMessage);
    }finally {
      dispatch(setLoading(false));
    }
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="flex items-center justify-center max-w-7cl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-gray-500 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5 text-center text-blue-600">
            Register
          </h1>
          <div className="my-2">
            <Label>Name</Label>
            <Input
              type="text"
              placeholder="john Doe"
              value={input.fullname}
              name="fullname"
              onChange={changeEventHandler}
            ></Input>
          </div>
          <div className="my-2">
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="johnDoe@gmail.com"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
            ></Input>
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="*****"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
            ></Input>
          </div>
          <div className="my-2">
            <Label>Phone Number</Label>
            <Input
              type="tel"
              placeholder="99887766"
              value={input.phoneNumber}
              name="phoneNumber"
              onChange={changeEventHandler}
            ></Input>
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="Student"
                  checked={input.role === "Student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="Recruiter"
                  checked={input.role === "Recruiter"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="flex items-center gap-2">
            <Label>Profile Photo</Label>
            <Input
              type="file"
              accept="image/*"
              className="cursor-pointer"
              onChange={changeFileHandler}
            />
          </div>
          {loading ? (
            <div className="flex items-center justify-center my-10">
              <div className="spinner-border text-blue-600" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <button type="submit" className="black w-full py-3 my-3 text-white bg-primary hover:bg-primary/90 rounded-md">
            Register
          </button>
          )}


          {/* already account exits then */}
          <p className="text-gray-500 text-sm my-2 text-center">
            Already have and account?{" "}
            <Link to="/login" className="text-blue-500 font-bold">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
