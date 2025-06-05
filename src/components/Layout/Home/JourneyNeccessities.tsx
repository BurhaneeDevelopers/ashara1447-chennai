"use client";

import { useState } from "react";
import { kanz, poppins } from "@/app/layout";
import Container from "@/components/Container";
import { ShieldCheck, Sun, FileText, PlaneTakeoff } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const tabs = [
  { label: "Technology", icon: PlaneTakeoff },
  { label: "Clothing", icon: Sun },
  { label: "Health", icon: ShieldCheck },
  { label: "Documents", icon: FileText },
];

const tabContent: Record<
  string,
  { title: string; description: string; image: string }[]
> = {
  Documents: [
    {
      title: "Ashara Mubaraka Raza Letter and ITS Card",
      description:
        "Your Ashara Mubaraka Raza Letter and identification documents.",
      image: "/neccessaries/documents.jpeg",
    },
    {
      title: "Passport",
      description:
        "Valid passport with at least 6 months validity and Electronic travel Authorization (ETA).",
      image: "/neccessaries/passport.png",
    },
    {
      title: "Vaccination",
      description: "Yellow fever vaccination certificate.",
      image: "/neccessaries/vaccine.png",
    },
    {
      title: "Accommodation Booking",
      description:
        "Confirmed hotel or accommodation booking details and payment receipts.",
      image: "/neccessaries/accommodation.png",
    },
  ],
  Health: [
    {
      title: "Medications",
      description:
        "Personal medications with prescriptions and a basic first aid kit.",
      image: "/medications.png",
    },
    {
      title: "Influenza Vaccinations",
      description: "Influenza vaccination is recommended.",
      image: "/influenza.png",
    },
    {
      title: "Insect Repellent",
      description:
        "Effective mosquito repellent with DEET for malaria prevention.",
      image: "/repellent.png",
    },
    {
      title: "Hand Sanitizer",
      description:
        "Travel-sized hand sanitizer and disinfectant wipes for hygiene.",
      image: "/sanitizer.png",
    },
  ],
  Clothing: [
    {
      title: "Light Layers and Warm Clothing",
      description:
        "Lightweight, breathable clothing suitable for Nairobi's warm days and cooler evenings.",
      image: "/warmclothing.png",
    },
    {
      title: "Rain Protection",
      description: "Light raincoat or umbrella for unexpected showers.",
      image: "/umbrella.png",
    },
  ],
  Technology: [
    {
      title: "Power Adapters",
      description:
        "Kenya uses Type G plugs (UK style) with 240V. Bring appropriate adapters.",
      image: "/adapter.webp",
    },
    {
      title: "ITS App",
      description: "Download the official ITS app for schedules and updates.",
      image: "/its.png",
    },
  ],
};

const JourneyNecessities = () => {
  const [activeTab, setActiveTab] = useState("Technology");

  return (
    <Container>
      <div className="flex flex-col items-center">
        <h3 className={`${kanz.className} text-5xl font-bold text-center`}>
          سفر ني ضروريات
        </h3>
        <div className="w-24 h-1.5 rounded bg-gradient-to-r from-gray-400 to-zinc-700 my-4" />
      </div>

      <div className="bg-gradient-to-r from-gray-400 to-zinc-700 p-4 mt-4 rounded-xl">
        <p
          className={`${kanz.className} text-xl text-white font-bold text-right`}
        >
          العشرة المباركة 1447هـ واسطسس سفر ما اْ سككلي ححيزو ني تياري راكهوو
          ضروري ؛ ،اْ مثل تياري هسسس تو اْثث نو سفر ككهنو بظظتر انسس اْسان رهسسس
          انشاء الله تعالى
        </p>
      </div>

      <div className="flex gap-2 justify-center mt-6 flex-wrap">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <Button
              key={tab.label}
              variant={activeTab === tab.label ? "default" : "outline"}
              size={"lg"}
              onClick={() => setActiveTab(tab.label)}
              className="flex items-center gap-2"
            >
              <span>
                <Icon className="!w-5 !h-5" />
              </span>
              <span className="text-lg mt-2.5">{tab.label}</span>
              {/* <span>{tab?.arabicLabel}</span> */}
            </Button>
          );
        })}
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {tabContent[activeTab]?.length ? (
          tabContent[activeTab].map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl border shadow-md overflow-hidden flex-grow"
            >
              <div className="relative h-52 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain p-6"
                />
              </div>
              <div className="p-4">
                <h4 className={`font-semibold text-2xl text-gray-800 ${poppins.className}`}>
                  {item.title}
                </h4>
                <p className={`text-gray-600 mt-1 text-lg ${poppins.className}`}>{item.description}</p>
                <span className="inline-block mt-2 bg-gray-100 text-gray-800 px-2 py-1 rounded">
                  Essential
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-2 text-center text-gray-400 text-sm mt-10">
            Content coming soon...
          </div>
        )}
      </div>

      <div className="flex justify-center mt-10">
        <Button
          size="lg"
          className="bg-amber-600 text-white font-semibold py-4 px-6 shadow hover:bg-amber-700 transition text-lg"
        >
          Download Complete PDF Checklist
        </Button>
      </div>
    </Container>
  );
};

export default JourneyNecessities;
