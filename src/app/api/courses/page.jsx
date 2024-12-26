"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import CourseStyle from "./coursestyle.module.css";
import { User } from "lucide-react";
import axios from "axios";

const Courses = () => {
  const [course, setCourse] = useState();

  useEffect(() => {
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
        setCourse(resp.data?.data?.data);
      }
    };
    courseAccess();
  }, []);

  console.log(course);

  return (
    <div className="container mx-auto">
      <div className="my-10">
        <div>
          <div className={`${CourseStyle.CardParent}`}>
            <Image src="/images.jpg" alt="courses" width={300} height={300} />
            <div className={`${CourseStyle.contentParent}`}>
              <h2 className={`${CourseStyle.author}`}>
                <User size={18} /> Logan Faerber
              </h2>
              <h2 className={`${CourseStyle.courseTitle}`}>
                Creational Design Patterns in Java/J2EE
              </h2>
              <p className={`${CourseStyle.courseParagraph}`}>
                Lorem Ipsum is simply dummy test of the printing and typesetting
                industry
              </p>
            </div>
            <div className={`${CourseStyle.buttonParent}`}>
              <button className={`${CourseStyle.cardButton}`}>
                VIEW DETAILS
              </button>
            </div>
            <div className={`${CourseStyle.failedContent}`}>
              <div className={`${CourseStyle.failedBg}`}>
                <div className={`${CourseStyle.failedCard}`}>
                  <h2>FAILED</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
