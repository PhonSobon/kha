import Image from "next/image";
import Link from "next/link";

export default function BacIICard({ bacii }) {
  return (
    <div
      key={bacii.id}
      className="w-full rounded-2xl min-h-[340px] shadow cursor-pointer hover:scale-102 transition-transform duration-400 bg-white flex flex-col"
    >
      <Image
        className="w-full p-2 hover:scale-103 transition-transform duration-400 object-cover rounded-t-3xl aspect-[4/3]"
        width={1000}
        height={1000}
        src={bacii.imageSrc}
        alt={`${bacii.title} image`}
      />
      <div className="px-3 pb-4 flex flex-col flex-1">
        <Link href="/">
          <h1 className="text-[#28308F] text-2xl truncate whitespace-nowrap overflow-hidden text-ellipsis">
            {bacii.title}
          </h1>
        </Link>
        <p className="text-[18px] mt-2 line-clamp-4 text-black opacity-70 flex-1">
          {bacii.description}
        </p>
      </div>
    </div>
  );
}