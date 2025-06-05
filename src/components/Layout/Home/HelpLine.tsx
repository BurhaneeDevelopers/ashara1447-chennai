"use client";

import { poppins } from "@/app/layout";
import Container from "@/components/Container";
import { PhoneCall, Clock, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function SupportHelplineCard() {
  return (
    <Container className="w-full mx-auto rounded-xl shadow-md bg-white/70 backdrop-blur border border-gray-200 flex flex-wrap gap-4 items-center justify-between px-6 py-4">
      <div className="flex items-start gap-4">
        <div className="p-2 bg-yellow-600 rounded-full text-white">
          <PhoneCall size={20} />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-slate-700 mt-2">
            Ashara Mubarak Support Helpline
          </h2>
          <div className="flex items-center text-base text-gray-400 mt-1">
            <Clock size={14} className="mr-1" />
            <span className="mt-2">timings to be set</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span
          className={`px-4 text-lg py-1 rounded-md border text-yellow-800 font-semibold border-yellow-400 ${poppins.className}`}
        >
          +91 85000 78653
        </span>
        <div className="flex gap-4">
          <Link href="tel:+918500078653">
            <div className="w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center hover:scale-105 transition">
              <Phone size={18} />
            </div>
          </Link>
          <Link
            href="https://wa.me/+918500078653?text=Hello%2C%20I%20need%20help%20regarding%20Ashara%20Mubarak"
            target="_blank"
          >
            <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center hover:scale-105 transition">
              <MessageCircle size={18} />
            </div>
          </Link>
        </div>
      </div>
    </Container>
  );
}
