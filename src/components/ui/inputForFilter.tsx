import * as React from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "../LanguageProvider";

function InputForFilter({
  className,
  type = "text",
  ...props
}: React.ComponentProps<"input">) {
  const { lang } = useLanguage();

  const content = {
    EN: {
      placeholder: "Search Your Subject Here",
    },
    KH: {
      placeholder: "ស្វែងរកមុខវិទ្យារបស់អ្នកនៅទីនេះ",
    },
  };

  return (
    <div className="relative w-full max-w-[320px]">
      <input
        type={type}
        placeholder={content[lang].placeholder}
        className={cn(
          "h-12 w-80 rounded-4xl border border-input bg-white px-5 pr-12 text-base placeholder:text-gray-500 placeholder:text-lg focus:placeholder-transparent shadow-sm outline-none transition-colors",
          "focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:border-ring",
          "dark:bg-input/30 dark:placeholder:text-gray-400",
          "disabled:pointer-events-none disabled:opacity-50",
          className
        )}
        {...props}
      />
      <Search className="absolute right-4 top-6 -translate-y-1/2 text-gray-500 w-6 h-6 cursor-pointer hover:scale-110 transition-transform duration-300" />
    </div>
  );
}

export { InputForFilter };
