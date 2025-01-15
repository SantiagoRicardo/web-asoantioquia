import {
  faEarthAmericas,
  faIndustry,
  faLightbulb,
  faSeedling,
  faSolarPanel,
  faStore,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
<FontAwesomeIcon icon={faIndustry} />;
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
          <div className="h-25 w-25 shadow-dark grid place-content-center rounded-3xl bg-gradient-to-b from-[#274863] to-[#4686BA]">
            <FontAwesomeIcon
              icon={faEarthAmericas}
              className="h-13 w-13"
              style={{ color: "#A8CC3B" }}
            />
          </div>
          <p className="w-38 text-center">Ahorro de recursos naturales</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="h-25 w-25 shadow-dark grid place-content-center rounded-3xl bg-gradient-to-b from-[#274863] to-[#4686BA]">
            <FontAwesomeIcon
              icon={faIndustry}
              className="h-13 w-13"
              style={{ color: "#A8CC3B" }}
            />
          </div>
          <p className="w-40 text-center">Menos contaminación ambiental</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="h-25 w-25 shadow-dark grid place-content-center rounded-3xl bg-gradient-to-b from-[#274863] to-[#4686BA]">
            <FontAwesomeIcon
              icon={faTrash}
              className="h-13 w-13"
              style={{ color: "#A8CC3B" }}
            />
          </div>
          <p className="w-38 text-center">Reducción de desechos</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="h-25 w-25 shadow-dark grid place-content-center rounded-3xl bg-gradient-to-b from-[#274863] to-[#4686BA]">
            <FontAwesomeIcon
              icon={faLightbulb}
              className="h-13 w-13"
              style={{ color: "#A8CC3B" }}
            />
          </div>
          <p className="w-38 text-center">Energía más eficiente</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="h-25 w-25 shadow-dark grid place-content-center rounded-3xl bg-gradient-to-b from-[#274863] to-[#4686BA]">
            <FontAwesomeIcon
              icon={faSolarPanel}
              className="h-13 w-13"
              style={{ color: "#A8CC3B" }}
            />
          </div>
          <p className="w-38 text-center">Creación de empleos verdes</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="h-25 w-25 shadow-dark grid place-content-center rounded-3xl bg-gradient-to-b from-[#274863] to-[#4686BA]">
            <FontAwesomeIcon
              icon={faStore}
              className="h-13 w-13"
              style={{ color: "#A8CC3B" }}
            />
          </div>
          <p className="w-38 text-center">Apoyo a la economía circular</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="h-25 w-25 shadow-dark grid place-content-center rounded-3xl bg-gradient-to-b from-[#274863] to-[#4686BA]">
            <FontAwesomeIcon
              icon={faSeedling}
              className="h-13 w-13"
              style={{ color: "#A8CC3B" }}
            />
          </div>
          <p className="w-38 text-center">Futuro más sostenible</p>
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
