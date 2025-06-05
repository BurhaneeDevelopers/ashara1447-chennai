import { kanz } from "@/app/layout";
import { Bell } from "lucide-react";
import React from "react";

const Announcement = () => {
  return (
    <section className="bg-[url('/banner/background-pattern.svg')] bg-cover h-full flex items-center justify-center px-4 py-10 relative">
      <div className="bg-white/20 absolute inset-0 w-full h-full -z-10" />
      <div className="text-center max-w-2xl">
        <div className="flex flex-col items-center justify-center space-y-4 mb-6">
          <div className="relative">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center shadow">
              <Bell className="text-yellow-600 w-6 h-6" />
            </div>
            <span className="absolute -top-1 -right-1 bg-yellow-500 text-white rounded-full w-4 h-4 text-base text-center animate-ping">
              {/* 1 */}
            </span>
          </div>
          <h2 className={`text-4xl font-bold text-gray-800 ${kanz.className}`}>
            الإعلانات
          </h2>
          <hr className="w-1/3 border-yellow-500" />
          <p
            className={`text-4xl text-gray-700 mt-4 font-medium !${kanz.className}`}
          >
            العشرة المباركة، نشاركك بمعلومات ضرورية
          </p>
          {/* <button className="text-sm font-semibold text-yellow-600 hover:underline transition-all">
            Refresh Updates
          </button> */}
        </div>

        <div className="flex flex-col items-center justify-center space-y-2">
          <Bell className="w-10 h-10 text-gray-700 opacity-60" />
          <p className="text-xl font-semibold text-gray-700">
            No announcements available
          </p>
          <p className="text-xl text-gray-500">
            Check back later for updates and announcements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Announcement;
