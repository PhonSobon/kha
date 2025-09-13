"use client";
import Image from "next/image";
import { useLanguage } from "../LanguageProvider";
import { Input } from "../ui/input";
export default function EducationHeader() {
    const { lang } = useLanguage();
    const content = {
      EN: {
        title: "KHMER HEIRS ASSOCIATION",
        slogan1: "Together We",
        slogan2: "Grow",
        slogan3: ",Together We",
        slogan4: "Learn"
      },
      KH: {
        title: "សមាគមទាយាទខ្មែរ",
        slogan1: "យើង",
        slogan2: "រីកចម្រើន",
        slogan3: "និង",
        slogan4: "រៀនសូត្រ",
        slogan5: "ជាមួយគ្នា"
      },
    };
  return (
    <>
      <div className="bg-amber-700 w-full h-4/5 relative">
        <Image
          className="object-cover"
          fill
          src="/assets/education/educationImage.png"
          alt="educationImage"
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex-col text-center mb-40">
          <h1 className="text-black text-4xl font-bold outline-text">{content[lang].title}</h1>
          <div className="flex flex-wrap justify-center text-center gap-1.5 px-2">
            <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mt-5 whitespace-nowrap">{content[lang].slogan1}</h2>
            <h1 className="text-[#28308F] text-2xl sm:text-3xl md:text-4xl font-bold mt-5 whitespace-nowrap outline-text-blue">{content[lang].slogan2}</h1>
            <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mt-5 whitespace-nowrap">{content[lang].slogan3}</h2>
            <h1 className="text-[#28308F] text-2xl sm:text-3xl md:text-4xl font-bold mt-5 whitespace-nowrap outline-text-blue">{content[lang].slogan4}</h1>
            <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mt-5 whitespace-nowrap">{content[lang].slogan5}</h1>
          </div>
          <Input className="mt-10" />
        </div>
      </div>
    </>
  );
}
