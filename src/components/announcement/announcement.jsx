

"use client";
import Image from "next/image";
import React from "react";

export default function Announcement() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-10">
      <header className="space-y-2">
        <div className="flex items-center justify-center gap-4 text-blue-900">
          <span className="h-1 w-16 sm:w-24 bg-blue-900/40" aria-hidden="true"></span>
          <span className="text-xl sm:text-2xl font-bold whitespace-nowrap">
            2025 KHA Recruitment
          </span>
          <span className="h-1 w-16 sm:w-24 bg-blue-900/40" aria-hidden="true"></span>
        </div>
        <br />
        <h1 className="text-center text-xl font-semibold text-blue-900">
          សេចក្តីជូនដំណឹង ស្តីពីការជ្រើសរើសនិស្សិតប្រុស ដើម្បីផ្តល់កន្លែងស្នាក់នៅក្នុងសមាគមទាយាទខ្មែរ(KHA)
        </h1>
        <p className="text-gray-800 leading-relaxed text-justify">
          សមាគមទាយាទខ្មែរ នឹងរៀបចំជ្រើសរើសនិស្សិតប្រុសដែលមានជីវភាពខ្វះខាត
          និងកំពុងសិក្សានៅតាមមហាវិទ្យាល័យនានាក្នុងរាជធានីភ្នំពេញ
          ដើម្បីផ្តល់កន្លែងស្នាក់នៅកំឡុងពេលនៃការសិក្សាថ្នាក់បរិញ្ញាបត្រ។ ចាប់ផ្តើមទទួលពាក្យចាប់ពីថ្ងៃជូនដំណឹងនេះ
          រហូតដល់ថ្ងៃទី ១០ ខែ វិច្ឆិកា ឆ្នាំ ២០២៥ វេលាម៉ោង ១៧:០០ នាទីល្ងាច។
        </p>
      </header>

      <div className="w-full overflow-hidden rounded-xl shadow-sm flex justify-center py-4">
        <Image
          src="/images/member/recruitment2025.jpeg"
          alt="KHA recruitment announcement"
          className="w-full max-w-3xl h-auto object-cover"
        />
      </div>

      <section className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold text-blue-800 mb-2">លក្ខខណ្ឌនៃការជ្រើសរើស</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800 leading-relaxed">
            <li>
              ជានិស្សិតកំពុងសិក្សាថ្នាក់បរិញ្ញាបត្រ (ទាំងបង់ថ្លៃ និងអាហារូបករណ៍) ឆ្នាំទី ១ និង ឆ្នាំទី ២
            </li>
            <li>
              បេក្ខជនជានិស្សិតដែលមានជីវភាពខ្វះខាត លំបាក មកពីតាមបណ្តាខេត្តនានា
              (ជាពិសេសនិស្សិតមកពីខេត្ត ឧត្តរមានជ័យ ព្រះវិហារ និងបន្ទាយមានជ័យ)
            </li>
            <li>
              មានភាពស្មោះត្រង់ រួសរាយរាក់ទាក់ ចេះរស់នៅជាក្រុម មានក្រមសីលធម៌ ឧស្សាហ៍ព្យាយាម
              និងខិតខំប្រឹងប្រែងសិក្សារៀនសូត្រ
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-blue-800 mb-2">លក្ខខណ្ឌនៃការជ្រើសរើស</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800 leading-relaxed">
            <li>ពាក្យស្នើរសុំកន្លែងស្នាក់នៅ (ចំនួន ០១ ច្បាប់)</li>
            <li>ជីវប្រវត្តិសង្ខេប (ចំនួន ០១ ច្បាប់)</li>
            <li>សៀវភៅគ្រួសារ ឬ សៀវភៅស្នាក់នៅ (ចំនួន ០១ ច្បាប់)</li>
            <li>លិខិតបញ្ជាក់ការសិក្សា ឬ វិក័យប័ត្របង់ថ្លៃការសិក្សា (ប្រសិនបើមាន) (ចំនួន ០១ ច្បាប់)</li>
            <li>សញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ</li>
            <li>រូបថត (ថតថ្មី គ្មានពាក់វ៉ែនតា ផ្ទៃខាងក្រោយពណ៌ខៀវ) ទំហំ ៤x៦ (ចំនួន ០១ ច្បាប់)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-blue-800 mb-2">មធ្យោបាយក្នុងការដាក់ពាក្យ</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800 leading-relaxed">
            <li>បេក្ខជនទាំងអស់តម្រូវឲ្យបំពេញតាមប្រព័ន្ធអនឡាញ (Google Form)</li>
            <li>បេក្ខជនតម្រូវឲ្យបង់ថ្លៃរដ្ឋបាលចំនួន ៤០០០ រៀល តាមមធ្យោបាយដែលបង្ហាញក្នុងទម្រង់បំពេញពាក្យ។</li>
          </ul>
        </div>
      </section>
    </div>
  );
}