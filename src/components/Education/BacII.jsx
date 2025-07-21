import { useState } from "react";
import BacIICard from "./BacIICard";
import Filter from "./Filter";
import Badge from "./badge";

export default function BacII() {
  const mockBacII = [
    {
      id: 1,
      title: "2025 | Chinese Bac II Exam Prep with Gu Laoshi",
      description:
        "Prepare for the Bac II Chinese exam with our comprehensive course! Designed for high school students, this program focuses on advanced Mandarin skills, including reading comprehension, essay writing, and oral presentation. Strengthen your foundation for success!",
      imageSrc: "/assets/education/bacIIImage.png",
    },
    {
      id: 2,
      title: "2025 | Japanese Bac II Exam Prep with Sensei",
      description:
        "Master Japanese for the Bac II exam with our tailored course! This program covers advanced grammar, kanji, and listening skills, perfect for students aiming to excel in Japanese language assessments.",
      imageSrc: "/assets/education/bacIIImage.png",
    },
    {
      id: 3,
      title: "2025 | Korean Bac II Exam Prep with Seonsaengnim",
      description:
        "Get ready for the Bac II Korean exam with our intensive course! Focus on advanced vocabulary, writing, and cultural context to achieve top scores in your Korean language test.",
      imageSrc: "/assets/education/bacIIImage.png",
    },
    {
      id: 4,
      title: "2025 | French Bac II Exam Prep with Professeur",
      description:
        "Enhance your French skills for the Bac II exam! This course offers advanced reading, writing, and speaking practice, ideal for students targeting excellence in French.",
      imageSrc: "/assets/education/bacIIImage.png",
    },
    {
      id: 5,
      title: "2025 | Spanish Bac II Exam Prep with Profesor",
      description:
        "Prepare for the Bac II Spanish exam with our detailed course! Covering advanced grammar and conversation, this program helps you succeed in Spanish language assessments.",
      imageSrc: "/assets/education/bacIIImage.png",
    },
    {
      id: 6,
      title: "2025 | German Bac II Exam Prep with Lehrer",
      description:
        "Excel in the Bac II German exam with our specialized course! Focus on advanced syntax, reading, and oral skills to boost your German proficiency.",
      imageSrc: "/assets/education/bacIIImage.png",
    },
  ];

  const [filteredBacII, setFilteredBacII] = useState(mockBacII);

  return (
    <>
      <div className="bg-white w-[89%] mb-10 h-fit rounded-2xl p-14">
        <div className="flex justify-end">
          <Filter items={mockBacII} onFilter={setFilteredBacII} />
        </div>

        <div>
          <Badge />
        </div>

        <div className="flex gap-13 flex-wrap mt-5">
          {filteredBacII.map((bacii) => (
            <BacIICard key={bacii.id} bacii={bacii} />
          ))}
        </div>

        <div>
          <Badge />
        </div>

        <div className="flex gap-13 flex-wrap mt-5">
          {filteredBacII.map((bacii) => (
            <BacIICard key={bacii.id} bacii={bacii} />
          ))}
        </div>
      </div>
    </>
  );
}
