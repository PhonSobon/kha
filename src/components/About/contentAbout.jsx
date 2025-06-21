import React from "react";
import Image from "next/image";
import { useLanguage } from "../../components/LanguageProvider";
import { title } from "process";

const featureImages = [
  "/images/3.jpg",
  "/images/content/4.jpg",
  "/images/content/5.jpg",
];
const content = {
  EN: {
    features: [
      {
        title: "Vision",
        desc: "Our vision is to see every Cambodian become a valuable human resource in a society full of energy and potential. We aim to achieve this by providing opportunities, encouragement, and capacity building to help them grow and reach their full potential.",
      },
      {
        title: "Mission",
        desc: "Our mission is to collaborate with the Royal Government to promote development in the areas of education, health, democracy, human rights, gender equality, and vocational training for all Cambodians across the country. The Khmer Heirs Association is committed to creating positive change, focusing on improving human resources through education and training as a top priority.",
      },
      {
        title: "Goal",
        desc: "The purpose of the Khmer Heirs Association is to prepare the future destiny of Cambodian children to be bright, noble, and enduringly prosperous.",
      },
    ],
  },
  KH: {
    features: [
      {
        title: "ចក្ខុវិស័យ",
        desc: "ចក្ខវិស័យរបស់យើង គឺចង់ឃើញកូនខ្មែរគ្រប់រូប ក្លាយជាធនធានមនុស្ស ក្នុងសង្គមប្រកប ដោយថាមពល និងសក្តានុពលភាព តាមរយៈការផ្តល់លទ្ធភាព និងឱកាស ការបំប៉នស្មារតី និង ពង្រីងនូវសមត្ថភាពដល់ពួកគេ ។ ",
      },
      {
        title: "បេសកកម្ម",
        desc: "បេសកកម្មរបស់យើង គឺរួមចំណែកជាមួយរាជរដ្ឋាភិបាល ដើម្បីជំរុញឱ្យមានការអភិវឌ្ឍ ក្នុងវិស័យអប់រំ សុខភាព ប្រជាធិបតេយ្យ សិទ្ធិមនុស្ស សមភាពយេនខឌ័រ និងការបណ្តះបណ្តាលវិជ្ជាជីវៈ ដល់កូនខ្មែរគ្រប់មជ្ឍដ្ឋាន ក្នុងព្រះរាជាណាចកម្ពជា ។ សមាគមទាយាទខ្មែរ ខិតខំពុះពារធ្វើការផ្លាស់ ប្តូរជាវិជ្ជមាន ឆ្ពោះទៅរកការលើកកម្ពស់ធនធានមនុស្ស កាន់តែប្រសើរ ដោយផ្អែកលើមូលដ្ឋាននៃ ការអប់រំ និងការបណ្តះបណ្តាលជាអាទិភាព ។ ",
      },
      {
        title: "គោលបំណង",
        desc: "គោលបំណងរបស់សមាគមទាយាទខ្មែរ គឺ “រៀបចំវាសនាអនាគតកូនខ្មែរ ឱ្យបានឧត្តងឧត្តមថ្ដុំថ្កើងរុងរឿង” ។",
      },
    ],
  },
};

export default function ContentAbout() {
  const { lang } = useLanguage();
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto py-8 flex flex-col gap-16">
        {/* Vision */}
        <div className=" bg-blue-100 shadow-md rounded-xl p-8 flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
          <Image
            unoptimized
            width={100}
            height={100}
            src={featureImages[0]}
            alt="Feature Image"
            className="w-full md:w-[400px] h-64 md:h-80 rounded-lg object-cover"
            style={{ maxWidth: 420 }}
          />
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-4">
              {content[lang].features[0].title}
            </h3>
            <p className="text-gray-700 text-justify leading-relaxed indent-4 content">
              {content[lang].features[0].desc}
            </p>
          </div>
        </div>
        {/* Mission */}
        <div className="bg-blue-100 shadow-md rounded-xl p-8 flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <Image
            unoptimized
            width={100}
            height={100}
            src={featureImages[1]}
            alt="Feature Image 1"
            className="w-full md:w-[400px] h-64 md:h-80 rounded-lg object-cover"
            style={{ maxWidth: 420 }}
          />
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-4">
              {content[lang].features[1].title}
            </h3>
            <p className="text-gray-700 text-justify leading-relaxed indent-4 content">
              {content[lang].features[1].desc}
            </p>
          </div>
        </div>
        {/* Goal */}
        <div className="bg-blue-100 shadow-md rounded-xl p-8 flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
          <Image
            unoptimized
            width={100}
            height={100}
            src={featureImages[2]}
            alt="Feature Image"
            className="w-full md:w-[400px] h-64 md:h-80 rounded-lg object-cover"
            style={{ maxWidth: 420 }}
          />
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-4">
              {content[lang].features[2].title}
            </h3>
            <p className="text-gray-700 text-justify leading-relaxed indent-4 content">
              {content[lang].features[2].desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}