import { type FC } from "react";
import Image from "next/image";

const Hero: FC = () => (
  <section className="relative">
    {/* Imagen de fondo */}
    <div className="absolute inset-0">
      <Image
        src="/recicladora.jpg"
        fill
        priority
        alt="Hero"
        className="object-cover"
      />
    </div>

    {/* Contenedor principal */}
    <div className="relative z-10 flex h-screen flex-col items-center justify-center">
      {/* Contenedor de textos con blur */}
      <div className="p-15 mt-8 flex w-full max-w-4xl flex-col items-center justify-center rounded-2xl bg-black/30 backdrop-blur-sm">
        {/* Logo centrado */}
        <div className="mb-6 flex items-center justify-center">
          <Image
            src="/logo-asoantioquia.jpg"
            width={125}
            height={125}
            priority
            alt="Hero"
            className="h-[125px] w-[125px] rounded-full"
            quality={100}
          />
        </div>
        {/* Título */}
        <h1 className="text-center font-sans text-6xl font-medium text-white">
          Reciclar es transformar
        </h1>
        {/* Descripción */}
        <p className="mt-6 max-w-2xl text-center font-sans text-2xl font-light text-white">
          Convertimos tus residuos en soluciones sostenibles, cuidando el
          planeta y creando un impacto positivo en tu entorno.
        </p>
      </div>
    </div>
  </section>
);

export default Hero;
