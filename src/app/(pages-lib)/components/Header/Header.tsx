import Link from "next/link";

const Header = () => {
  return (
    <header className="landing-header fixed top-0 z-50 flex w-screen items-center justify-between border-b bg-white px-4 py-4 font-sans text-sm font-medium text-black md:px-9 md:tracking-wider">
      <div className="flex flex-grow basis-0 items-center justify-between">
        <Link
          href="/"
          className="font-rajdhani flex w-full items-center gap-2 text-2xl font-bold"
        >
          <h1 className="font-rajdhani">
            Asociación de Recicladores de Oficio para el Bajo Cauca y Córdoba
          </h1>
        </Link>
        <div className="block md:hidden">
          <button id="astronav-menu" aria-label="Toggle Menu">
            <span className="astronav-open-icon astronav-toggle">
              <svg
                viewBox="0 0 24 24"
                width={30}
                height={30}
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 6l16 0" />
                <path d="M4 12l16 0" />
                <path d="M4 18l16 0" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      <nav className="hidden items-center md:flex">
        <ul className="flex gap-5 text-sm font-semibold [&>li]:flex [&>li]:items-center">
          <li>Servicios</li>
          <li>Nosotros</li>
          <li className="rounded-md border-2 p-2">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
              <path
                d="M4.3335 5.41669H11.9168"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.75016 3.25V5.41667C9.75016 10.2028 7.32458 14.0833 4.3335 14.0833"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.4165 9.75C5.4165 12.0727 8.6145 13.9837 12.6748 14.0833"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13 21.6667L17.3333 11.9167L21.6667 21.6667"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20.6918 19.5H13.9751"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </li>
          <li className="bg-cold-2 rounded-md px-5 text-white">Contacto</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
