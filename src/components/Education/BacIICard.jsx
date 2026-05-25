import Image from "next/image";

export default function BacIICard({ bacii, onClick }) {
  return (
    <div
      key={bacii.id}
      onClick={onClick}
      className="w-full rounded-2xl min-h-[340px] shadow cursor-pointer hover:scale-102 transition-transform duration-400 bg-white flex flex-col"
    >
      <Image
        className="w-full p-2 hover:scale-103 transition-transform duration-400 object-cover rounded-t-3xl aspect-[4/3]"
        width={1000}
        height={1000}
        src={bacii.imageSrc}
        alt={`${bacii.customTitle} image`}
      />
      <div className="px-3 pb-4 flex flex-col flex-1">
        <h1 className="text-[#28308F] text-2xl truncate whitespace-nowrap overflow-hidden text-ellipsis">
          {bacii.customTitle}
        </h1>
        <p className="text-[18px] mt-2 line-clamp-2 text-black opacity-70 flex-1">
          {bacii.description}
        </p>
      </div>
    </div>
  );
}