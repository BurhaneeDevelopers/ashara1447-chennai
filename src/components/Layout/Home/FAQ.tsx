"use client";
import { JSX, useState } from "react";
import { Plane, Home } from "lucide-react";
import clsx from "clsx";
import Container from "@/components/Container";
import { kanz, poppins } from "@/app/layout";

// Define the structure of faqData
type FaqCategory = {
  icon: JSX.Element;
  questions: { question: string; answer: string }[];
};

// Define the faqData type with explicit keys
const faqData: Record<"Travel & Visa" | "Accommodation", FaqCategory> = {
  "Travel & Visa": {
    icon: <Plane className="w-4 h-4" />,
    questions: [
      {
        question: "Do I need a visa to enter Chennai for Ashara Mubarak?",
        answer:
          "Yes, most travelers need a visa. Please check Chennai immigration website for more.",
      },
      {
        question: "What vaccinations are required for travel to Chennai?",
        answer:
          "Yellow fever vaccine is mandatory. Others like Typhoid and Hepatitis A are recommended.",
      },
    ],
  },
  Accommodation: {
    icon: <Home className="w-4 h-4" />,
    questions: [
      {
        question: "Are there any hotels recommended for Mo’mineen?",
        answer:
          "Yes, a list of recommended hotels is provided in the Mo’mineen portal.",
      },
    ],
  },
};

const FaqSection = () => {
  const [activeCategory, setActiveCategory] = useState<
    "Travel & Visa" | "Accommodation"
  >("Travel & Visa");
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const handleToggle = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const currentData = faqData[activeCategory];

  return (
    <section className="bg-[url('/banner/background-pattern.svg')] bg-cover bg-center w-full mb-0 relative">
      <div className="bg-black/20 absolute inset-0 w-full h-full -z-10" />
      <Container className="py-20">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            <span className={`text-right text-5xl ${kanz.className}`}>
              خصوص سوالو
            </span>
          </h2>
          <div className="w-24 h-1.5 rounded bg-gradient-to-r from-gray-400 to-zinc-700 mt-2 mx-auto" />
          <p className={`text-gray-700 text-xl mt-4 ${poppins.className}`}>
            Find answers to common questions about Ashara Mubaraka 1447H in
            Tamil Nadu, Chennai
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full md:w-1/3">
            <div className="rounded-lg overflow-hidden shadow">
              <div
                className={`bg-gradient-to-r from-gray-400 to-zinc-700 text-white font-semibold p-4 ${poppins.className}`}
              >
                FAQ Categories
              </div>
              <div className="bg-white">
                {(Object.keys(faqData) as (keyof typeof faqData)[]).map(
                  (category) => {
                    const isActive = activeCategory === category;
                    return (
                      <button
                        key={category}
                        className={clsx(
                          "flex items-center w-full px-4 py-3 gap-2 border-b",
                          isActive
                            ? "bg-amber-50 from-gray-400 to-zinc-700 font-semibold"
                            : "text-gray-700",
                          poppins.className
                        )}
                        onClick={() => {
                          setActiveCategory(
                            category as "Travel & Visa" | "Accommodation"
                          );
                          setOpenIndexes([]);
                        }}
                      >
                        {faqData[category].icon}
                        {category}
                        <span className="ml-auto text-xs bg-gray-100 px-2 py-0.5 rounded-full">
                          {faqData[category].questions.length}
                        </span>
                      </button>
                    );
                  }
                )}
              </div>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="w-full md:w-2/3">
            <div className="rounded-lg shadow overflow-hidden">
              <div
                className={`bg-gradient-to-r from-gray-400 to-zinc-700 text-white font-semibold p-4 flex items-center gap-2 ${poppins.className}`}
              >
                {faqData[activeCategory].icon}
                {activeCategory} Questions (
                {faqData[activeCategory].questions.length} questions)
              </div>
              <div className="bg-white divide-y">
                {currentData.questions.map((q, index) => (
                  <div key={index} className="p-4">
                    <button
                      className={`w-full text-left text-blue-800 font-medium flex justify-between items-center ${poppins.className}`}
                      onClick={() => handleToggle(index)}
                    >
                      {q.question}
                      <span className="ml-4">
                        {openIndexes.includes(index) ? "▾" : "▸"}
                      </span>
                    </button>
                    {openIndexes.includes(index) && (
                      <p className="mt-2 text-gray-600 text-xl">{q.answer}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FaqSection;
