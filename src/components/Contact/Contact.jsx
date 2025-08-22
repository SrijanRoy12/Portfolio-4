import React from "react";
import Contact_card from "../Contact_card/Contact_card";
import backgroundVideo from "../../Images/4954759_Coll_halloween_Dusty_6144x3456.mp4";

export default function ContactWrapper() {
  return (
    <div
      id="contact"
      className="relative bg-black sm:min-w-[600px] w-full min-h-[90vh] sm:min-h-[80vh] md:min-h-[70vh] flex flex-col px-4 py-10 sm:px-6 md:px-10"
    >
      <h2 className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl text-center sm:text-left sm:pl-[3rem]">
        Contact me
      </h2>

      <div className="mt-16 flex justify-center items-center w-full">
        <Contact_card />
      </div>
    </div>
  );
}
