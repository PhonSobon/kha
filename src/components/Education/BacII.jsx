import { useState } from "react";
import BacIICard from "./BacIICard";
import Filter from "./Filter";
import Badge from "./badge";
import BookPreviewModal from "./BookPreviewModal";

export default function BacII() {
  const mockBacII = [
    {
      id: 1,
      customTitle: "Book for Teaching Stategy",
      subject: "Khmer",
      description: "Prepare for the Bac II Chinese exam with our comprehensive course!",
      imageSrc: "/assets/education/bacIIImage.png",
      bookSrc: "/assets/books/teaching_strategy.pdf",
    },
    {
      id: 2,
      customTitle: "Japanese Bac II Exam Prep with Sensei",
      subject: "Japanese",
      description: "Master Japanese for the Bac II exam with our tailored course!",
      imageSrc: "/assets/education/bacIIImage.png",
      bookSrc: "/assets/books/japanese-bacii.pdf",
    },
    {
      id: 3,
      customTitle: "Korean Bac II Exam Prep with Seonsaengnim",
      subject: "Korean",
      description: "Get ready for the Bac II Korean exam with our intensive course!",
      imageSrc: "/assets/education/bacIIImage.png",
      bookSrc: "/assets/books/korean-bacii.pdf",
    },
  ];

  const [filteredBacII, setFilteredBacII] = useState(mockBacII);
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <>
      <div className="bg-white w-full max-w-6xl mb-10 h-fit rounded-2xl p-6 sm:p-8 md:p-10 shadow-md">
        <div className="flex justify-between items-center gap-4">
          <div className="text-xl font-semibold text-[#28308F]">Bac II Lessons</div>
          <Filter items={mockBacII} onFilter={setFilteredBacII} />
        </div>

        <div>
          <Badge />
        </div>

        <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 mt-5">
          {filteredBacII.map((bacii) => (
            <BacIICard key={bacii.id} bacii={bacii} onClick={() => setSelectedBook(bacii)} />
          ))}
        </div>
      </div>

      {selectedBook && (
        <BookPreviewModal book={selectedBook} onClose={() => setSelectedBook(null)} />
      )}
    </>
  );
}