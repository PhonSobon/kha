import { Button } from "@/components/ui/button";
import { FaTelegramPlane } from "react-icons/fa";

const ButtonWithIconDemoTelegram = ({ href }: { href: string }) => {
  return (
    <Button
      asChild
      className="relative text-sm font-medium rounded-full h-8 p-1 ps-4 pe-8 group transition-all duration-500 hover:ps-8 hover:pe-4 w-fit overflow-hidden cursor-pointer"
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        <span className="relative z-10 transition-all duration-500">
          Telegram
        </span>
        <div className="absolute right-1 w-6 h-6 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-28px)]">
          <FaTelegramPlane />
        </div>
      </a>
    </Button>
  );
};

export default ButtonWithIconDemoTelegram;
