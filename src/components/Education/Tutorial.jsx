import { useState } from "react";
import Filter from "./Filter";
import CardTutorial from "./TutorialCard";
import Badge from "./badge";
import { useTranslation } from "react-i18next";

export default function Tutorial() {
  const mockTutorials = [
    {
      id: 1,
      title: "https://youtu.be/DVRy3l9ojq4?si=P29vz2qEu1J3PGdi",
      customTitle: "Chinese Class with Gu Laoshi | HSK 1",
      subject: "Chinese",
      description: "Are you ready to start learning one of the most important and widely spoken languages",
      imageSrc: "/assets/education/tutorialImage.png",
    },
    {
      id: 2,
      title: "https://youtu.be/GUymRdqBglo?si=ntu_vhpwMQS6ez07",
      customTitle: "Japanese Class with Sensei | JLPT N5",
      subject: "Japanese",
      description: "Begin your journey into Japanese with our JLPT N5 Tutorial!",
      imageSrc: "/assets/education/japanesTutorial1.webp",
    },
    {
      id: 3,
      title: "https://youtu.be/0ZhOeA0RD9o?si=UNxLkU3DZrPEzjzR",
      customTitle: "Korean Class with Seonsaengnim | TOPIK I",
      subject: "Korean",
      description: "Dive into Korean with our TOPIK I Tutorial!",
      imageSrc: "/assets/education/koreanClass.jpg",
    },
  ];

  const [filteredTutorials, setFilteredTutorials] = useState(mockTutorials);
  const { t } = useTranslation("common");

  return (
    <>
      <div className="bg-white w-full max-w-6xl mb-10 h-fit rounded-2xl p-6 sm:p-8 md:p-10 shadow-md">
        <div className="flex justify-between items-center gap-4">
          <div className="text-xl font-semibold text-[#28308F]">{t('education.videoTutorials')}</div>
          <Filter items={mockTutorials} onFilter={setFilteredTutorials} />
        </div>

        <div>
          <Badge />
        </div>

        <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 mt-5">
          {filteredTutorials.map((tutorial) => (
            <CardTutorial key={tutorial.id} tutorial={tutorial} />
          ))}
        </div>
      </div>
    </>
  );
}
