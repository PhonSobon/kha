"use client";

import { GlowCard } from "@/components/ui/glow-card";
import Image from "next/image";
import ButtonWithIconDemoFacebook from "./facbookButton";
import ButtonWithIconDemoTelegram from "./telegramButton";

export default function AlumniCard({ alumini }) {
  return (
    <GlowCard
      liquidColor="#0057b8"
      className="mx-auto w-fit max-w-full rounded-xl p-2 shadow-lg"
    >
      <Image
        className="mx-auto w-60 h-60 sm:w-56 md:w-63 lg:w-full aspect-[4/3] object-cover rounded-2xl sm:rounded-3xl transition-transform duration-300 hover:scale-[1.03]"
        src={alumini.image}
        width={1000}
        height={750}
        alt={alumini.name}
      />

      <div className="text-center">
        <h3 className="py-1 text-base font-bold sm:py-2 sm:text-xl">
          {alumini.name}
        </h3>
        <h3 className="pb-4 text-base font-bold sm:pb-4 sm:text-xl">
          ( {alumini.nameKh} )
        </h3>
      </div>

      <div className="flex justify-center gap-2">
        <ButtonWithIconDemoFacebook href={alumini.faceBookLink} />
        <ButtonWithIconDemoTelegram href={alumini.contact} />
      </div>
    </GlowCard>
  );
}