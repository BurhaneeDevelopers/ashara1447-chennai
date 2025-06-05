"use client";

import { useState, useEffect } from "react";
import { MapPin, Phone, Lock, FileText } from "lucide-react";
import Container from "./Container";
import { poppins } from "@/app/layout";
import Image from "next/image";
import Link from "next/link";

interface CountdownProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const targetDate = new Date("2025-06-27T00:00:00");

export default function Footer() {
  const [countdown, setCountdown] = useState<CountdownProps>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    };

    updateCountdown(); // initialize immediately
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-gradient-to-b from-[#d4dce1] to-[#d4dce1] py-8 text-black">
      <Container className="">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <Link href="/">
                <Image
                  src="/ashara-tagline.png"
                  alt="Ashara Logo"
                  width={70}
                  height={40}
                  priority
                />
              </Link>

              <h2 className={`${poppins.className} text-black text-xl`}>
                Ashara Mubaraka 1447
              </h2>
            </div>

            <p className={`${poppins.className} text-gray-700 font-semibold`}>
              The official website for Ashara Mubaraka 1447H in Tamil Nadu,
              Chennai. Providing resources, information, and services for
              attendees from around the world during this significant event.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-black">Quick Links</h3>
            <div className="w-14 h-1 bg-black mb-4" />
            <ul className="flex flex-col gap-4 text-xl text-gray-700">
              <li>Home</li>
              <li>Your Journey</li>
              <li>Transport</li>
              <li>Zones</li>
              <li>General Guidelines</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold text-black">
              Contact Information
            </h3>
            <div className="w-14 h-1 bg-black mb-4" />
            <div className="space-y-2">
              <div className="flex flex-col gap-2 text-gray-700">
                <div className="flex gap-4 text-gray-800 font-bold">Main Event Venue</div>
                <div className="flex gap-2 items-center">
                  <MapPin size={16} />
                  <p>Saifee Masjid, Moore Street</p>
                </div>
              </div>
              <p
                className={`flex items-center gap-2 text-gray-700 ${poppins.className}`}
              >
                <Phone size={16} />
                +91 85000 78553 (International)
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black">Stay Updated</h3>
            <div className="w-14 h-1 bg-black mb-4" />
            <div className="space-y-2">
              <p className={`${poppins.className} text-gray-700 font-semibold`}>
                Stay connected with the latest updates and announcements for
                Ashara Mubaraka 1447H through official channels.
              </p>
            </div>
          </div>

          {/* Countdown */}
          <div>
            <h3
              className={`text-xl font-mono font-semibold mb-4 text-black ${poppins.className}`}
            >
              Countdown to Ashara Mubaraka
            </h3>
            <div className="grid grid-cols-4 gap-4 text-center">
              <div className="bg-zinc-700 text-white w-16 h-16 p-3 rounded">
                <div className="text-2xl font-bold">{countdown.days}</div>
                <div className="text-sm">Days</div>
              </div>
              <div className="bg-zinc-700 text-white w-16 h-16 p-3 rounded">
                <div className="text-2xl font-bold">{countdown.hours}</div>
                <div className="text-sm">Hours</div>
              </div>
              <div className="bg-zinc-700 text-white w-16 h-16 p-3 rounded">
                <div className="text-2xl font-bold">{countdown.minutes}</div>
                <div className="text-sm">Minutes</div>
              </div>
              <div className="bg-zinc-700 text-white w-16 h-16 p-3 rounded">
                <div className="text-2xl font-bold">{countdown.seconds}</div>
                <div className="text-sm">Seconds</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-teal-800">
          <div
            className={`flex flex-col md:flex-row justify-between items-center gap-4 text-black ${poppins.className}`}
          >
            <p>
              © 2025 Ashara Mubaraka Organizing Committee. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="/privacy-policy" className="flex items-center gap-1">
                <Lock size={16} /> Privacy Policy
              </a>
              <a href="/terms" className="flex items-center gap-1">
                <FileText size={16} /> Terms and Conditions
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
