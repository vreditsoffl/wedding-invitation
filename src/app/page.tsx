import { Preloader } from "@/components/sections/Preloader";
import { Hero } from "@/components/sections/Hero";
import { CoupleIntro } from "@/components/sections/CoupleIntro";
import { Events } from "@/components/sections/Events";

import { Countdown } from "@/components/sections/Countdown";
import { Venue } from "@/components/sections/Venue";
import { LanguageToggle } from "@/components/LanguageToggle";


export default function Home() {
  return (
    <main className="relative bg-transparent w-full">
      <Preloader />
      
      <LanguageToggle />
      <Hero />
      <CoupleIntro />
      <Events />

      <Venue />
      <Countdown />

    </main>
  );
}
