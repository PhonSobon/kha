import { useState } from "react";
import Filter from "./Filter";
import CardTutorial from "./TutorialCard";
import Badge from "./badge";

export default function Tutorial() {
  const mockTutorials = [
    {
      id: 1,
      title: "2025 | Chinese Class with Gu Laoshi | HSK 1",
      description:
        "Are you ready to start learning one of the most important and widely spoken languages in the world? Our HSK 1 Tutorial is designed especially for beginners who want to build a strong foundation in Mandarin Chinese — the official language of China and one of the most useful languages for the future. Whether you're a high school student, university learner, or someone who simply loves languages, this tutorial offers you a supportive, step-by-step learning experience to help you understand, speak, read, and write basic Chinese.",
      imageSrc: "/assets/education/tutorialImage.png",
    },
    {
      id: 2,
      title: "2025 | Japanese Class with Sensei | JLPT N5",
      description:
        "Begin your journey into Japanese with our JLPT N5 Tutorial! Perfect for beginners, this course introduces you to the basics of Japanese language and culture, including hiragana, katakana, and simple grammar. Ideal for students or travelers looking to connect with Japan.",
      imageSrc: "/assets/education/japanesTutorial1.webp",
    },
    {
      id: 3,
      title: "2025 | Korean Class with Seonsaengnim | TOPIK I",
      description:
        "Dive into Korean with our TOPIK I Tutorial! Designed for beginners, this course covers essential vocabulary, grammar, and pronunciation to help you build a solid foundation in Korean. Great for K-pop fans and learners alike!",
      imageSrc: "/assets/education/koreanClass.jpg",
    },
  ];

  const [filteredTutorials, setFilteredTutorials] = useState(mockTutorials);

  return (
    <>
      <div className="bg-white w-[89%] mb-10 h-fit rounded-2xl p-14">
        <div className="flex justify-end ">
          <Filter items={mockTutorials} onFilter={setFilteredTutorials} />
        </div>

        <div>
          <Badge />
        </div>

        <div className="flex gap-13 flex-wrap mt-5">
          {filteredTutorials.map((tutorial) => (
            <CardTutorial key={tutorial.id} tutorial={tutorial} />
          ))}
        </div>
        <div>
          <Badge />
        </div>

        <div className="flex gap-13 flex-wrap mt-5">
          {filteredTutorials.map((tutorial) => (
            <CardTutorial key={tutorial.id} tutorial={tutorial} />
          ))}
        </div>
      </div>
    </>
  );
}
