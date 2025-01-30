import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const Services = () => (
  <section className="flex flex-col gap-10 px-4 py-36 md:gap-20 md:px-9">
    <header className="services-animated">
      <h2 className="font-poppins text-4xl font-semibold md:text-5xl">
        Lo Que Hacemos
      </h2>
    </header>

    <section className="services-animated relative flex w-full flex-col gap-8 overflow-hidden rounded-xl bg-gradient-to-b from-[#E0F7FA] to-[#B2F6FF] md:px-10 md:py-7 lg:flex-row lg:items-start lg:px-14 lg:py-14 xl:px-20">
      <div className="flex flex-col gap-5 lg:max-w-2xl">
        <header>
          <h3 className="font-poppins text-2xl font-semibold text-black md:text-4xl">
            Transformamos desafíos ambientales en soluciones creativas
          </h3>
        </header>

        <div className="mt-25">
          <div className="-mb-15">
            <Image
              className="h-auto w-[150px] object-contain"
              src="/camion-de-basura.png"
              width={250}
              height={250}
              alt="Camión de basura"
              priority
            />
          </div>
        </div>

        <footer className="hidden w-full flex-grow basis-0 flex-col justify-end gap-2 lg:flex xl:flex-row xl:items-end">
          <a
            href="#"
            className="font-poppins bg-cold-2 w-full rounded-md py-3 text-center text-lg text-white transition-transform hover:-translate-y-1 hover:transform"
          >
            Pedir Servicios
          </a>

          <a
            href="#"
            className="font-poppins w-full rounded-md bg-[#E6E6E6] py-3 text-center text-lg transition-transform hover:-translate-y-1 hover:transform"
          >
            Ver más
          </a>
        </footer>
      </div>

      <div className="lg:mr-65 z-10 flex flex-col gap-4 lg:ml-auto">
        <article className="max-w-lg rounded-xl border border-[#CBCDC3] bg-[#9FC52E1A] p-4 transition-shadow hover:shadow-lg">
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-1">
              <h4 className="text-base font-medium">
                Recolección Inteligente de Residuos
              </h4>
              <p className="text-sm text-[#666666]">
                Recogemos reciclaje en tu puerta, fácil y rápido.
              </p>
            </div>
            <FontAwesomeIcon
              icon={faUpRightFromSquare}
              className="h-4 w-4 text-[#666666]"
            />
          </div>
        </article>

        <article className="max-w-lg rounded-xl border border-[#CBCDC3] bg-[#9FC52E1A] p-4 transition-shadow hover:shadow-lg">
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-1">
              <h4 className="text-base font-medium">
                Educación Ambiental para Comunidades
              </h4>
              <p className="text-sm text-[#666666]">
                Capacitamos sobre reciclaje y sostenibilidad local.
              </p>
            </div>
            <FontAwesomeIcon
              icon={faUpRightFromSquare}
              className="h-4 w-4 text-[#666666]"
            />
          </div>
        </article>

        <article className="max-w-lg rounded-xl border border-[#CBCDC3] bg-[#9FC52E1A] p-4 transition-shadow hover:shadow-lg">
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-1">
              <h4 className="text-base font-medium">
                Reciclaje Electrónico Responsable
              </h4>
              <p className="text-sm text-[#666666]">
                Recuperamos y reutilizamos tus dispositivos electrónicos.
              </p>
            </div>
            <FontAwesomeIcon
              icon={faUpRightFromSquare}
              className="h-4 w-4 text-[#666666]"
            />
          </div>
        </article>
      </div>

      <div className="pointer-events-none absolute right-0 top-0 -mr-12 -mt-4 hidden h-[350px] w-[350px] lg:block">
        <Image
          className="h-full w-full object-contain"
          src="/planeta-tierra-origami.png"
          width={450}
          height={450}
          alt="Planeta tierra en estilo origami"
          priority
        />
      </div>
    </section>
  </section>
);

export default Services;
