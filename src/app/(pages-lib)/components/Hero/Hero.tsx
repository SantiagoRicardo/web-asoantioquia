import { type FC } from "react";
import Image from "next/image";

const Hero: FC = () => (
  <section className="relative">
    <div className="absolute inset-0 z-0">
      <Image
        src="/images/sembrado-de-yuca.png"
        fill
        priority
        alt="Hero"
        className="object-cover contrast-50"
      />
    </div>

    <div className="relative z-10 flex h-screen flex-col items-center justify-center">
      <h1 className="max-w-5xl text-center font-sans text-6xl font-medium text-white">
        Descubre el sabor auténtico de la yuca con Almidones El Mana
      </h1>
    </div>
  </section>
);
export default Hero;
