import { Bell } from "lucide-react";
import React from "react";

const Announcement = () => {
  return (
    <section className="bg-[url('/home/background-pattern.jpg')] bg-cover bg-center min-h-screen flex items-center justify-center px-4 py-10">
      <div className="text-center max-w-2xl">
        <div className="flex flex-col items-center justify-center space-y-4 mb-6">
          <div className="relative">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center shadow">
              <Bell className="text-yellow-600 w-6 h-6" />
            </div>
            <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs rounded-full px-1.5 py-0.5">
              1
            </span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 font-myFont">الإعلانات</h2>
          <hr className="w-1/3 border-yellow-500" />
          <p className="text-lg text-gray-700 font-medium">
            العشرة المباركة، نشاركك بمعلومات ضرورية
          </p>
          <button className="text-sm font-semibold text-yellow-600 hover:underline transition-all">
            Refresh Updates
          </button>
        </div>

        <div className="flex flex-col items-center justify-center space-y-2">
          <Bell className="w-10 h-10 text-gray-400 opacity-60" />
          <p className="text-lg font-semibold text-gray-700">
            No announcements available
          </p>
          <p className="text-sm text-gray-500">
            Check back later for updates and announcements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Announcement;
