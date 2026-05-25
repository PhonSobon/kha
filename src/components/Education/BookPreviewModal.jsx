"use client";

import { useTranslation } from "react-i18next";
export default function BookPreviewModal({ book, onClose }) {
  const { t, i18n } = useTranslation("common");
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-[#28308F] font-semibold text-lg truncate">
            {book.customTitle}
          </h2>

          <div className="flex items-center gap-3">
            <a
              href={book.bookSrc}
              download
              className="flex items-center gap-2 bg-[#28308F] text-white text-sm px-4 py-2 rounded-xl hover:bg-[#1e2470] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                />
              </svg>
              {t("education.download")}
            </a>

            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-red-500 hover:bg-red-700 text-white text-xl leading-none transition-colors"
            >
              &times;
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-hidden">
          <iframe
            src={book.bookSrc}
            className="w-full h-full"
            title={book.customTitle}
          />
        </div>
      </div>
    </div>
  );
}
