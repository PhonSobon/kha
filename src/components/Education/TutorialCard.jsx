import Image from "next/image";
import Link from "next/link";

export default function CardTutorial({ tutorial }) {
  return (
    <div
      key={tutorial.id}
      className="w-[31%] rounded-2xl h-[370px] shadow cursor-pointer hover:scale-102 transition-transform duration-400"
    >
      <Image
        className="h-[55%] w-full p-2 hover:scale-103 transition-transform duration-400 rounded-t-3xl object-cover"
        width={1000}
        height={1000}
        src={tutorial.imageSrc}
        alt={`${tutorial.title} image`}
      />
      <div className="px-3">
        <Link href="/">
          <h1 className="text-[#28308F] text-2xl truncate whitespace-nowrap overflow-hidden text-ellipsis">
            {tutorial.title}
          </h1>
        </Link>
        <p className="text-[18px] mt-2 line-clamp-4 text-black opacity-70">
          {tutorial.description}
        </p>
      </div>
    </div>
  );
}