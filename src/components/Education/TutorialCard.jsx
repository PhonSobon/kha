import Image from "next/image";
import Link from "next/link";

export default function CardTutorial({ tutorial }) {
  return (
    <div
      key={tutorial.id}
      className="w-full rounded-2xl min-h-[340px] shadow cursor-pointer hover:scale-102 transition-transform duration-400 bg-white flex flex-col"
    >
      <Image
        className="w-full p-2 hover:scale-103 transition-transform duration-400 rounded-t-3xl object-cover aspect-[4/3]"
        width={1000}
        height={1000}
        src={tutorial.imageSrc}
        alt={`${tutorial.customTitle} image`}
      />
      <div className="px-3 pb-4 flex flex-col flex-1">
        <Link href={tutorial.title} target="_blank" rel="noopener noreferrer">
          <h1 className="text-[#28308F] text-2xl truncate whitespace-nowrap overflow-hidden text-ellipsis hover:underline">
            {tutorial.customTitle}
          </h1>
        </Link>
        <p className="text-[18px] mt-2 line-clamp-2 text-black opacity-70 flex-1">
          {tutorial.description}
        </p>
      </div>
    </div>
  );
}
