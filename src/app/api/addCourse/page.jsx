"use client";
import { Eye, EyeOff, Fan } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Image from "next/image";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddCourse = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const token = localStorage.getItem("token");
      const title = data.title;
      const description = data.description;
      const badge_text = data.badgeText;
      const badge_color = data.badgeColor;
      const instructor_name = data.instructorName;

      if (token) {
        setLoading(true);
        const resp = await axios.post(
          `https://react-interview.crd4lc.easypanel.host/api/course`,
          {
            title,
            description,
            badge_text,
            badge_color,
            instructor_name,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (resp.data?.status_code === 200) {
          toast.success("Course Add Success");
          router.push("/api/courses");
          setLoading(false);
        }

        console.log(resp.data);
      } else {
        toast.error("Please Login First");
        router.push("/api/register");
        setLoading(false);
      }
    } catch (error) {
      toast.error("Server Error Try Again");
      setLoading(false);
      // console.log(error);
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center my-[20px] md:my-[50px]">
        <div className="border-2 rounded-md">
          <div className="md:px-[60px] px-[20px] pb-[20px] md:pb-14">
            <h1 className="text-center  text-lg md:text-xl my-4 md:my-10">
              Add Course
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className="text-gray-500">Title *</label>
                <br />
                <input
                  type="text"
                  {...register("title", { required: true })}
                  className="md:py-[10px] py-2 mt-2 mb-4 px-3 w-full md:w-[400px] md:px-5 bg-[#f3f4f7] border-[1px]  outline-none rounded-none"
                />
                <br />
                {errors.title && (
                  <span className="text-red-500">
                    This Title field is required...
                  </span>
                )}
              </div>
              <div>
                <label className="text-gray-500">Description *</label>
                <br />
                <input
                  type="text"
                  {...register("description", { required: true })}
                  className="md:py-[10px] py-2 mt-2 mb-4 px-3 w-full md:w-[400px] md:px-5 bg-[#f3f4f7] border-[1px]  outline-none rounded-none"
                />
                <br />
                {errors.description && (
                  <span className="text-red-500">
                    This Description field is required...
                  </span>
                )}
              </div>
              <div>
                <label className="text-gray-500">Badge Text *</label>
                <br />
                <input
                  type="text"
                  {...register("badgeText", { required: true })}
                  className="md:py-[10px] py-2 mt-2 mb-4 px-3 w-full md:w-[400px] md:px-5 bg-[#f3f4f7] border-[1px]  outline-none rounded-none"
                />
                <br />
                {errors.badgeText && (
                  <span className="text-red-500">
                    This Badge Text field is required...
                  </span>
                )}
              </div>

              <div>
                <label className="text-gray-500">Badge Color *</label>
                <br />
                <input
                  type="text"
                  {...register("badgeColor", { required: true })}
                  className="md:py-[10px] py-2 mt-2 mb-4 px-3 w-full md:w-[400px] md:px-5 bg-[#f3f4f7] border-[1px]  outline-none rounded-none"
                />
                <br />
                {errors.badgeColor && (
                  <span className="text-red-500">
                    This Badge Color field is required...
                  </span>
                )}
              </div>

              <div>
                <label className="text-gray-500">Instructor Name *</label>
                <br />
                <input
                  type="text"
                  {...register("instructorName", { required: true })}
                  className="md:py-[10px] py-2 mt-2 mb-4 px-3 w-full md:w-[400px] md:px-5 bg-[#f3f4f7] border-[1px]  outline-none rounded-none"
                />
                <br />
                {errors.instructorName && (
                  <span className="text-red-500">
                    This Instructor Name field is required...
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
                  "Add Course"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
