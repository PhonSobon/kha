import React from "react";
import Image from "next/image";
import { useTranslation } from 'react-i18next';

const featureImages = [
  "/images/content/7.jpg",
  "/images/content/4.jpg",
  "/images/content/5.jpg",
  "/images/content/6.jpg",
];

export default function ContentAbout() {
  const { t, i18n } = useTranslation('common');

  const features = [
    {
      key: 'vision',
      image: featureImages[0]
    },
    {
      key: 'mission', 
      image: featureImages[1]
    },
    {
      key: 'goal',
      image: featureImages[2]
    },
    {
      key: 'strategicGoals',
      image: featureImages[3]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      {features.map((feature, index) => (
        <div key={feature.key} className={`bg-blue-100 shadow-md rounded-xl p-6 sm:p-8 flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 mb-8 sm:mb-12 md:mb-16`}>
          <div className="w-full md:w-1/2">
            <Image
              unoptimized
              width={400}
              height={320}
              src={feature.image}
              alt={`Feature Image ${index + 1}`}
              className="w-full h-48 sm:h-64 md:h-80 rounded-lg object-cover"
              style={{ maxWidth: 420 }}
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
              {t(`about.${feature.key}.title`)}
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 text-justify leading-relaxed indent-4 content mb-4">
              {t(`about.${feature.key}.description`)}
            </p>
            {feature.key === 'strategicGoals' && (
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg text-gray-700">
                {t('about.strategicGoals.items', { returnObjects: true }).map((item, idx) => (
                  <li key={idx} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}