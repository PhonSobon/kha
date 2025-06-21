import React from "react";
import Image from "next/image";
import { useLanguage } from "../../components/LanguageProvider"; 

const featureImages = ["/images/3.jpg", "/images/Hero/5.jpg"];
const content = {
  EN: {
    features: [
      {
        desc: "The Khmer Heirs Association is a non-governmental organization that is independent, sovereign, apolitical, non-partisan, and not for private profit.",
      },
      {
        desc: "Khmer Heirs work to build a bright, honorable, and prosperous future for the Cambodian people. Democracy and respect for human rights are the strong foundations of the leadership and development of the Khmer Heirs Association.",
      },
    ],
  },
  KH: {
    features: [
      {
        desc: "សមាគមទាយាទខ្មែរ ជាអង្គការមិនមែនរដ្ឋាភិបាល ឯករាជ្យភាព អធិបតេយ្យភាព មិនធ្វើនយោបាយ មិនបម្រើគណបក្សនយោបាយ និងមិនរកកម្រៃជាឯកជន។",
      },
      {
        desc: "ទាយាទខ្មែរ ធ្វើអ្វីៗដើម្បីកសាងវាសនាឧត្តុង្គឧត្តម ថ្កុំថ្កើង និងភាពសំបូររុងរឿងសម្រាប់កូនខ្មែរ។ លទ្ធិប្រជាធិបតេយ្យ និងការគោរពសិទ្ធិមនុស្ស គឺជាមូលដ្ឋានគ្រឹះ ដ៏រឹងមាំក្នងការដឹកនាំ និងអភិវឌ្ឍសមាគទាយាទខ្មែរ ។",
      },
    ],
  },
};

export default function ContentAbout() {
  const { lang } = useLanguage();
  return (
    <div>
      <div className="max-w-7xl mx-auto py-8 flex flex-col gap-16">
       
        <div className="flex flex-col md:flex-row-reverse items-center gap-20 py-20​​ pb-20 pt-20">
          <Image
            unoptimized
            width={100}
            height={100}
            src={featureImages[1]}
            alt="Feature Image"
            className="w-1/2 h-80 rounded-lg shadow-md"
          />

          <p className="text-gray-700 text-justify leading-relaxed indent-4 content">
            {content[lang].features[1].desc}
          </p>
        </div>
         <div className="flex flex-col md:flex-row items-center gap-20 py-4">
          <Image
            unoptimized
            width={100}
            height={100}
            src={featureImages[0]}
            alt="Feature Image 1"
            className="w-3/4 h-96 rounded-lg shadow-md"
          />

          <p className="text-gray-700 text-justify leading-relaxed indent-4 content">
            {content[lang].features[0].desc}
          </p>
        </div>
      </div>
    </div>
  );
}