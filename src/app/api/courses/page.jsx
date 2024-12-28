"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import CourseStyle from "./coursestyle.module.css";
import { User } from "lucide-react";
import axios from "axios";

const Courses = () => {
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const token = localStorage.getItem("token");
    const courseAccess = async () => {
      if (token) {
        const resp = await axios.get(
          `https://react-interview.crd4lc.easypanel.host/api/course`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setLoading(false);
        setCourse(resp.data?.data?.data);
      } else {
        setLoading(false);
      }
    };
    courseAccess();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="my-10">
        {loading ? (
          ""
        ) : (
          <>
            {course.length === 0 ? (
              <h2 className="text-3xl text-center lg:h-[31vh]">
                Please Add The Course...
              </h2>
            ) : (
              ""
            )}
          </>
        )}
        {loading ? (
          <div className="flex justify-center items-start ">
            <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin dark:border-red-600"></div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-4 gap-8 grid-cols-1">
            {course?.map((item) => (
              <div className={`${CourseStyle.CardParent}`} key={item?.id}>
                <Image
                  src={item?.image}
                  alt="courses"
                  width={400}
                  height={300}
                />
                <div className={`${CourseStyle.contentParent}`}>
                  <h2 className={`${CourseStyle.author}`}>
                    <User size={18} /> {item?.instructor_name}
                  </h2>

                  <div className={`${CourseStyle.rating}`}>
                    <div className={`${CourseStyle.ratingParent}`}>
                      <Image
                        src="/star.png"
                        alt="courses"
                        width={16}
                        height={16}
                      />
                      <Image
                        src="/star.png"
                        alt="courses"
                        width={16}
                        height={16}
                      />
                      <Image
                        src="/star.png"
                        alt="courses"
                        width={16}
                        height={16}
                      />
                      <Image
                        src="/star.png"
                        alt="courses"
                        width={16}
                        height={16}
                      />
                      <Image
                        src="/star.png"
                        alt="courses"
                        width={16}
                        height={16}
                      />
                    </div>
                    <div>
                      <h2 className={`${CourseStyle.ratingNumber}`}>
                        {" "}
                        ( {item?.id} ){" "}
                      </h2>
                    </div>
                  </div>

                  <h2 className={`${CourseStyle.courseTitle}`}>
                    {item?.title}
                  </h2>
                  <p className={`${CourseStyle.courseParagraph}`}>
                    {item?.description}
                  </p>
                </div>
                <div className={`${CourseStyle.buttonParent}`}>
                  <button className={`${CourseStyle.cardButton}`}>
                    VIEW DETAILS
                  </button>
                </div>
                <div className={`${CourseStyle.failedContent}`}>
                  <div className={`${CourseStyle.failedBg}`}>
                    <div
                      className={`${CourseStyle.failedCard} ${
                        item?.badge_color === "red"
                          ? "bg-red-500"
                          : "bg-blue-500"
                      }`}
                    >
                      <h2>
                        {" "}
                        {item?.badge_color === "red" ? "FAILED" : "PASSED"}{" "}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
