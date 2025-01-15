export default function Recycle() {
  return (
    <section className="flex flex-col items-center gap-10 bg-white px-4 py-36 md:gap-20 md:px-9">
      <header className="flex flex-col gap-10">
        <h2 className="font-poppins join-us-animated text-center text-4xl font-semibold md:text-5xl">
          El Valor del Reciclaje
        </h2>
        <p className="text-cold-4 join-us-animated text-pretty text-center text-lg lg:px-40">
          Descubre las ventajas de reciclar y cómo contribuyes al cuidado del
          planeta mientras generas un impacto positivo en tu comunidad y
          economía.
        </p>
      </header>

      <section className="lg:px-50 grid grid-cols-2 flex-wrap justify-center gap-x-20 gap-y-10 md:flex">
        <div className="flex flex-col items-center gap-2">
          <div className="h-25 w-25 rounded-3xl bg-[#4686BA]"></div>
          <p className="w-38 text-center text-sm">
            Ahorro de recursos naturales
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="h-25 w-25 rounded-3xl bg-[#4686BA]"></div>
          <p className="w-38 text-center text-sm">
            Menos contaminación ambiental
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="h-25 w-25 rounded-3xl bg-[#4686BA]"></div>
          <p className="w-38 text-center text-sm">Reducción de desechos</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="h-25 w-25 rounded-3xl bg-[#4686BA]"></div>
          <p className="w-38 text-center text-sm">Energía más eficiente</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="h-25 w-25 rounded-3xl bg-[#4686BA]"></div>
          <p className="w-38 text-center text-sm">Creación de empleos verdes</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="h-25 w-25 rounded-3xl bg-[#4686BA]"></div>
          <p className="w-38 text-center text-sm">
            Apoyo a la economía circular
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="h-25 w-25 rounded-3xl bg-[#4686BA]"></div>
          <p className="w-38 text-center text-sm">Futuro más sostenible</p>
        </div>
      </section>

      <div className="flex justify-center">
        <a
          href="#"
          className="text-md font-poppins bg-cold-2 w-full rounded-md px-12 py-3 text-center text-white transition-transform hover:-translate-y-1 hover:transform md:text-lg"
        >
          Solicitar Servicio de Educación
        </a>
      </div>
    </section>
  );
}
