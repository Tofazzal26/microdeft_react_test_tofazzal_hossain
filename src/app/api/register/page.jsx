"use client";
import { Eye, EyeOff, Fan } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Image from "next/image";
import { useForm } from "react-hook-form";
import axios from "axios";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const name = data.name;
      const email = data.email;
      const password = data.password;
      setLoading(true);
      const resp = await axios.post(
        `https://react-interview.crd4lc.easypanel.host/api/register`,
        { name, email, password }
      );

      const token = resp?.data?.data?.token;
      const user = resp?.data?.data?.user;

      if (token) {
        JSON.stringify(localStorage.setItem("token", token));
      }
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
      }
      toast.success("Login Success");
      router.push("/");
      // window.location.reload();
      setLoading(false);
    } catch (error) {
      toast.error("Write the current email and password");
      setLoading(false);
      // console.log(error);
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center my-[20px] md:my-[100px]">
        <div className="border-2 rounded-md">
          <div className="md:px-[60px] px-[20px] pb-[20px] md:pb-14">
            <h1 className="text-center  text-lg md:text-xl my-4 md:my-10">
              REGISTER
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className="text-gray-500">Username *</label>
                <br />
                <input
                  type="text"
                  {...register("name", { required: true })}
                  className="md:py-[10px] py-2 mt-2 mb-4 px-3 w-full md:w-[400px] md:px-5 bg-[#f3f4f7] border-[1px]  outline-none rounded-none"
                />
                <br />
                {errors.email && (
                  <span className="text-red-500">
                    This Name field is required...
                  </span>
                )}
              </div>
              <div>
                <label className="text-gray-500">Email address *</label>
                <br />
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="md:py-[10px] py-2 mt-2 mb-4 px-3 w-full md:w-[400px] md:px-5 bg-[#f3f4f7] border-[1px]  outline-none rounded-none"
                />
                <br />
                {errors.email && (
                  <span className="text-red-500">
                    This Email field is required...
                  </span>
                )}
              </div>
              <div className="relative">
                <label className="text-gray-500">Password *</label>
                <br />
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", { required: true })}
                  className="md:py-[10px] py-2 mt-2 px-3 w-full md:w-[400px] md:px-5 bg-[#f3f4f7] border-[1px]  outline-none rounded-none"
                />
                <br />
                {errors.email && (
                  <span className="text-red-500">
                    This Password field is required...
                  </span>
                )}
                {showPassword ? (
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-[45px] right-[10px] cursor-pointer"
                  >
                    <Eye size={20} className="text-gray-500" />
                  </span>
                ) : (
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-[45px] right-[10px] cursor-pointer"
                  >
                    <EyeOff size={20} className="text-gray-500" />
                  </span>
                )}
              </div>
              <button
                disabled={loading}
                className="bg-[#fee100] text-black text-lg w-full py-[10px] mt-4"
              >
                {loading ? (
                  <>
                    <div className="flex justify-center items-center">
                      <Fan size={25} className="animate-spin text-center" />
                    </div>
                  </>
                ) : (
                  "Register"
                )}
              </button>
            </form>
            <div>
              <h2 className="mt-4 text-gray-500">
                You Have An Account ?{" "}
                <Link href="/api/login" className="text-blue-500">
                  Login
                </Link>
              </h2>
            </div>
            <div className="mt-4 flex justify-center items-center gap-1 lg:gap-2">
              <button className="flex lg:px-4 px-2 py-1 lg:py-2 lg:text-base text-sm justify-center items-center lg:gap-2 border-2">
                <Image src="/google.png" alt="google" width={30} height={30} />
                Continue to Google
              </button>
              <button className="flex lg:px-4 px-2 py-1 lg:py-2 lg:text-base text-sm justify-center items-center lg:gap-2  border-2">
                <Image src="/github.png" alt="google" width={30} height={30} />
                Continue to Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
