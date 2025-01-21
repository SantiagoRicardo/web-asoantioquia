import { type FC } from "react";
import Image from "next/image";

const ImageSection: FC = () => (
  <section className="relative">
    <div className="h-auto w-full">
      <Image
        src="/llantas.png"
        fill
        priority
        alt="Section"
        className="object-cover"
      />
    </div>
  </section>
);
export default ImageSection;
