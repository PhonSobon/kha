"use client";
import EducationHeader from "@/components/Education/Header";
import KHANavbar from "@/components/KHANavbar";
import { useLanguage } from "@/components/LanguageProvider";
import { Button } from "@/components/ui/button";

export default function page() {
  const { lang } = useLanguage();

  const content = {
    EN: {
      tutorials: "Tutorials",
      LessonsBac: "Lessons Bac II",
    },
    KH: {
      tutorials: "មេរៀនណែនាំ",
      LessonsBac: "វិញ្ញាសារ​បាក់ឌុប",
    },
  };

  return (
    <div className="bg-[#FFE0E0] w-full h-screen">
      <KHANavbar />
      <EducationHeader />
      <div className="flex p-10 justify-evenly">
        <Button
          variant="default"
          size="lg"
          className="rounded-2xl text-2xl py-7 w-[45%] font-bold cursor-pointer hover:bg-[#FFFFFF] hover:text-[#28308F] z-10"
        >
          <h2 className="cursor-pointer">{content[lang].tutorials}</h2>
        </Button>
        <Button
          variant="destructive"
          size="lg"
          className="rounded-2xl text-2xl py-7 w-[45%] font-bold cursor-pointer hover:bg-[#28308F] hover:text-[#FFFFFF] z-10"
        >
          {content[lang].LessonsBac}
        </Button>
      </div>
    </div>
  );
}
