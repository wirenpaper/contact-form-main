"use client";
import { useEffect, useState, useRef } from "react";
export default function Home() {
  const [isScrollbarVisible, setIsScrollbarVisible] = useState(false);
  // Explicitly type the ref to be an HTMLDivElement
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const container = containerRef.current;
      if (container) {
        // Ensure container is not null
        if (container.scrollHeight > window.innerHeight) {
          setIsScrollbarVisible(true);
        } else {
          setIsScrollbarVisible(false);
        }
      }
    };

    handleResize(); // Initial check

    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize); // Check when the page loads

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`flex justify-center items-center ${
        isScrollbarVisible ? "h-full" : "h-screen"
      }`}
    >
      <form className="bg-white w-7/12 rounded-3xl">
        <div className="m-12">
          <h1 className="pb-4">Contact Us</h1>
          <div className="xl:flex xl:justify-between xl:gap-4">
            <div className="bg-cyan-100 flex-1">
              <div className="pb-2">
                <label htmlFor="first-name">First Name *</label>
              </div>
              <input className="w-full" type="text" id="first-name" />
            </div>

            <div className="bg-red-100 flex-1">
              <div className="pb-2">
                <label htmlFor="last-name">Last Name *</label>
              </div>
              <input className="w-full" type="text" id="last-name" />
            </div>
          </div>
          <div className="bg-orange-300 pb-6">
            <div className="pb-2 pt-4">
              <label htmlFor="email">Email Address *</label>
            </div>
            <input className="w-full" type="text" id="email" />
          </div>
          <p className="pb-2">Query Type *</p>
          <div className="xl:flex xl:items-center xl:gap-4 pb-4">
            <label
              className="flex items-center gap-4 flex-1 border-2 border-green-700 rounded-2xl pl-7 mb-4 
                              xl:mb-0"
            >
              <input
                className="w-5"
                type="radio"
                name="option"
                value="General Inquiry"
              />
              General Enquiry
            </label>
            <label className="flex items-center gap-4 flex-1 border-2 border-green-700 rounded-2xl pl-7">
              <input
                className="w-5"
                type="radio"
                name="option"
                value="Support Request"
              />
              Support Request
            </label>
          </div>

          <label className="flex flex-col">
            <p className="pb-2">Message *</p>
            <textarea className="border-2 border-green-700 rounded-xl xl:h-44 h-96" />
          </label>

          <label className="flex items-center bg-gray-100 mt-4">
            <input type="checkbox" name="option1" value="1" />
            <span style={{ paddingLeft: "1em" }}>
              I consent being contacted by the team *
            </span>
          </label>

          <div className="flex pt-12">
            <input
              className="flex-1 bg-green-700 text-white text-lg"
              type="submit"
              value="Submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
