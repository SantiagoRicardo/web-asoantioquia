import { type FC } from "react";
import Image from "next/image";

const AlliesSection: FC = () => (
  <section className="mb-28">
    <article>
      <h1 className="text-center text-6xl font-bold tracking-tight text-[#274863]">
        Unete a Nuestros Aliados
      </h1>
      <p className="mt-3 text-center text-2xl font-light tracking-tight">
        Construimos alianzas estratégicas fundamentales para el desarrollo
        sostenible.
      </p>
    </article>
    <div className="mb-8 mt-8 items-center justify-center gap-10 md:flex">
      <Image src={"/bavaria-logo.svg"} width={75} height={85} alt={""} />
      <Image src={"/san-jeronimo-logo.png"} width={205} height={225} alt={""} />
      <Image
        src={"/registraduria-logo.png"}
        width={120}
        height={135}
        alt={""}
      />
    </div>
    <div className="flex justify-center">
      <button
        type="button"
        className="mt-3 cursor-pointer items-center rounded bg-[#B3C62E] px-4 py-2 text-center font-medium text-white"
      >
        Quiero ser un Aliado
      </button>
    </div>
  </section>
);

export default AlliesSection;
