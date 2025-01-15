const Services = () => (
  <section className="flex flex-col gap-10 px-4 py-36 md:gap-20 md:px-9">
    <header className="services-animated">
      <h2 className="font-poppins text-4xl font-semibold md:text-5xl">
        Lo Que Hacemos
      </h2>
    </header>

    <section className="services-animated md:bg-success-50 flex w-full flex-col gap-8 rounded-xl md:px-10 md:py-7 lg:flex-row lg:justify-center lg:px-14 lg:py-14 xl:px-20">
      <div className="flex flex-col gap-5 xl:flex-grow xl:basis-0">
        <header>
          <h3 className="font-poppins text-2xl font-semibold text-black md:text-4xl">
            Transformamos desafíos ambientales en soluciones creativas
          </h3>
        </header>
        {/* <div className="flex flex-col gap-3">
          <p className="text-cold-4 text-lg">
            Transformamos desafíos ambientales en soluciones personalizadas:
          </p>
          <div className="bg-cold-4 w-full px-4 py-2 text-center md:w-fit">
            <span className="text-lg font-semibold text-white md:text-2xl">
              Su Proyecto, Nuestra Expertise
            </span>
          </div>
        </div> */}
        <footer className="hidden w-full flex-grow basis-0 flex-col justify-end gap-2 lg:flex xl:flex-row xl:items-end">
          <a
            href="#"
            className="font-poppins bg-cold-2 w-full rounded-md py-3 text-center text-lg text-white transition-transform hover:-translate-y-1 hover:transform"
          >
            Pedir Servicios
          </a>
          <a
            href="#"
            className="text-cold-4 font-poppins w-full rounded-md bg-neutral-300 py-3 text-center text-lg transition-transform hover:-translate-y-1 hover:transform"
          >
            Ver más
          </a>
        </footer>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 xl:grid-rows-3">
        <article className="border-cold-3 relative h-fit w-full rounded-lg border-2 p-2 md:flex md:h-full md:flex-col md:justify-center xl:w-80">
          <div className="text-cold-4 absolute right-1 top-1 h-7 w-7">
            <svg viewBox="0 0 30 30" fill="none">
              <path
                d="M15 7.5H7.5C6.83696 7.5 6.20107 7.76339 5.73223 8.23223C5.26339 8.70107 5 9.33696 5 10V22.5C5 23.163 5.26339 23.7989 5.73223 24.2678C6.20107 24.7366 6.83696 25 7.5 25H20C20.663 25 21.2989 24.7366 21.7678 24.2678C22.2366 23.7989 22.5 23.163 22.5 22.5V15"
                stroke="#163651"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.75 16.25L25 5"
                stroke="#163651"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.75 5H25V11.25"
                stroke="#163651"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <header className="mb-1">
            <p className="mr-7 text-pretty text-sm leading-tight">
              Recolección Inteligente de Residuos
            </p>
          </header>
          <div>
            <p className="text-cold-4 text-sm font-light">
              Recogemos reciclaje en tu puerta, fácil y rápido.
            </p>
          </div>
        </article>
        <article className="border-cold-3 relative h-fit w-full rounded-lg border-2 p-2 md:flex md:h-full md:flex-col md:justify-center xl:w-80">
          <div className="text-cold-4 absolute right-1 top-1 h-7 w-7">
            <svg viewBox="0 0 30 30" fill="none">
              <path
                d="M15 7.5H7.5C6.83696 7.5 6.20107 7.76339 5.73223 8.23223C5.26339 8.70107 5 9.33696 5 10V22.5C5 23.163 5.26339 23.7989 5.73223 24.2678C6.20107 24.7366 6.83696 25 7.5 25H20C20.663 25 21.2989 24.7366 21.7678 24.2678C22.2366 23.7989 22.5 23.163 22.5 22.5V15"
                stroke="#163651"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.75 16.25L25 5"
                stroke="#163651"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.75 5H25V11.25"
                stroke="#163651"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <header className="mb-1">
            <p className="mr-7 text-pretty text-sm leading-tight">
              Transformación de Plásticos en Productos
            </p>
          </header>
          <div>
            <p className="text-cold-4 text-sm font-light">
              Convertimos plásticos reciclados en soluciones útiles.
            </p>
          </div>
        </article>
        <article className="border-cold-3 relative h-fit w-full rounded-lg border-2 p-2 md:flex md:h-full md:flex-col md:justify-center xl:w-80">
          <div className="text-cold-4 absolute right-1 top-1 h-7 w-7">
            <svg viewBox="0 0 30 30" fill="none">
              <path
                d="M15 7.5H7.5C6.83696 7.5 6.20107 7.76339 5.73223 8.23223C5.26339 8.70107 5 9.33696 5 10V22.5C5 23.163 5.26339 23.7989 5.73223 24.2678C6.20107 24.7366 6.83696 25 7.5 25H20C20.663 25 21.2989 24.7366 21.7678 24.2678C22.2366 23.7989 22.5 23.163 22.5 22.5V15"
                stroke="#163651"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.75 16.25L25 5"
                stroke="#163651"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.75 5H25V11.25"
                stroke="#163651"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <header className="mb-1">
            <p className="mr-7 text-pretty text-sm leading-tight">
              Educación Ambiental para Comunidades
            </p>
          </header>
          <div>
            <p className="text-cold-4 text-sm font-light">
              Capacitamos sobre reciclaje y sostenibilidad local.
            </p>
          </div>
        </article>
        <article className="border-cold-3 relative h-fit w-full rounded-lg border-2 p-2 md:flex md:h-full md:flex-col md:justify-center xl:w-80">
          <div className="text-cold-4 absolute right-1 top-1 h-7 w-7">
            <svg viewBox="0 0 30 30" fill="none">
              <path
                d="M15 7.5H7.5C6.83696 7.5 6.20107 7.76339 5.73223 8.23223C5.26339 8.70107 5 9.33696 5 10V22.5C5 23.163 5.26339 23.7989 5.73223 24.2678C6.20107 24.7366 6.83696 25 7.5 25H20C20.663 25 21.2989 24.7366 21.7678 24.2678C22.2366 23.7989 22.5 23.163 22.5 22.5V15"
                stroke="#163651"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.75 16.25L25 5"
                stroke="#163651"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.75 5H25V11.25"
                stroke="#163651"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <header className="mb-1">
            <p className="mr-7 text-pretty text-sm leading-tight">
              Consultoría de Gestión de Residuos
            </p>
          </header>
          <div>
            <p className="text-cold-4 text-sm font-light">
              Optimiza el manejo de desechos en tu empresa.
            </p>
          </div>
        </article>
        <article className="border-cold-3 relative h-fit w-full rounded-lg border-2 p-2 md:flex md:h-full md:flex-col md:justify-center xl:w-80">
          <div className="text-cold-4 absolute right-1 top-1 h-7 w-7">
            <svg viewBox="0 0 30 30" fill="none">
              <path
                d="M15 7.5H7.5C6.83696 7.5 6.20107 7.76339 5.73223 8.23223C5.26339 8.70107 5 9.33696 5 10V22.5C5 23.163 5.26339 23.7989 5.73223 24.2678C6.20107 24.7366 6.83696 25 7.5 25H20C20.663 25 21.2989 24.7366 21.7678 24.2678C22.2366 23.7989 22.5 23.163 22.5 22.5V15"
                stroke="#163651"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.75 16.25L25 5"
                stroke="#163651"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.75 5H25V11.25"
                stroke="#163651"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <header className="mb-1">
            <p className="mr-7 text-pretty text-sm leading-tight">
              Reciclaje Electrónico Responsable
            </p>
          </header>
          <div>
            <p className="text-cold-4 text-sm font-light">
              Recuperamos y reutilizamos tus dispositivos electrónicos.
            </p>
          </div>
        </article>
        <article className="border-cold-3 relative h-fit w-full rounded-lg border-2 p-2 md:flex md:h-full md:flex-col md:justify-center xl:w-80">
          <div className="text-cold-4 absolute right-1 top-1 h-7 w-7">
            <svg viewBox="0 0 30 30" fill="none">
              <path
                d="M15 7.5H7.5C6.83696 7.5 6.20107 7.76339 5.73223 8.23223C5.26339 8.70107 5 9.33696 5 10V22.5C5 23.163 5.26339 23.7989 5.73223 24.2678C6.20107 24.7366 6.83696 25 7.5 25H20C20.663 25 21.2989 24.7366 21.7678 24.2678C22.2366 23.7989 22.5 23.163 22.5 22.5V15"
                stroke="#163651"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.75 16.25L25 5"
                stroke="#163651"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.75 5H25V11.25"
                stroke="#163651"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <header className="mb-1">
            <p className="mr-7 text-pretty text-sm leading-tight">
              Energía Verde a Partir de Residuos
            </p>
          </header>
          <div>
            <p className="text-cold-4 text-sm font-light">
              Transformamos desechos orgánicos en energía renovable.
            </p>
          </div>
        </article>
      </div>

      <div className="lg:hidden">
        <footer className="flex w-full items-end gap-2">
          <a
            href="#"
            className="text-md font-poppins bg-cold-2 w-full rounded-md py-3 text-center text-white transition-transform hover:-translate-y-1 hover:transform md:text-lg"
          >
            Pedir consultoría
          </a>
          <a
            href="#"
            className="text-md text-cold-4 font-poppins w-full rounded-md bg-neutral-300 py-3 text-center transition-transform hover:-translate-y-1 hover:transform md:text-lg"
          >
            Ver más
          </a>
        </footer>
      </div>
    </section>
  </section>
);
export default Services;
