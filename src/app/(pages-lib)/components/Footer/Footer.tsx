import Image from "next/image";

const Header = () => {
  return (
    <footer className="h-186 items-between relative flex justify-center overflow-hidden bg-[#9FC52E]">
      <div className="bg-custom-radial h-240 w-240 20 -bottom-85 absolute z-10 rounded-full"></div>

      <div className="p-17.5 z-30 flex w-full justify-between">
        <section className="flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-semibold text-white">Sedes</h3>
            <ul className="mt-2 space-y-1 text-lg text-gray-50">
              <li>Turbo</li>
              <li>Córdoba</li>
            </ul>
          </div>
          <div className="shadow-dark overflow-hidden rounded-2xl">
            <Image
              src={"/superservicios.png"}
              alt="superservicios"
              width={247}
              height={131}
            />
          </div>
        </section>
        <section className="space-y-6 text-end">
          <div>
            <h3 className="text-3xl font-semibold text-white">Contacto</h3>
            <ul className="mt-2 space-y-1 text-lg text-gray-50">
              <li>asoredcifuturodeantioquia@gmail.com</li>
            </ul>
          </div>
          <div>
            <h3 className="text-3xl font-semibold text-white">Servicios</h3>
            <ul className="mt-2 space-y-1 text-lg text-gray-50">
              <li>Gestión Ambiental </li>
              <li>Gestión Social</li>
              <li>Gestión Operativa</li>
            </ul>
          </div>
        </section>
      </div>

      <div className="absolute z-20 flex h-full w-full items-end justify-center">
        <Image
          src={"/tree.png"}
          alt="Tree"
          width={230}
          height={230}
          className="relative top-6"
        />
      </div>
    </footer>
  );
};

export default Header;
