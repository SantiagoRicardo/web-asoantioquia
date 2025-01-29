import { type FC } from "react";
import Image from "next/image";

const ImageSection: FC = () => (
  <section>
    <div className="h-auto w-full">
      <Image
        src="/llantas.png"
        layout="responsive"
        width={1200} // Ajusta estos valores según el tamaño deseado
        height={800} // Mantén la relación de aspecto adecuada
        priority
        alt="Section"
        className="object-cover"
      />
    </div>
  </section>
);

export default ImageSection;
