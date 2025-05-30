"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faCommentDots,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

const FormContact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Formulario enviado correctamente");
    }, 2000);
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex w-full max-w-xl flex-col space-y-4 rounded-lg bg-white p-8"
      >
        <h1 className="text-center text-3xl font-medium">Contácto</h1>

        {/* Nombre */}
        <div className="flex flex-col">
          <label className="mb-2 text-gray-700">Nombre</label>
          <div className="relative">
            <FontAwesomeIcon
              icon={faUser}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-2xl border border-gray-300 p-3 pl-10"
              placeholder="Nombre"
              required
            />
          </div>
        </div>

        {/* Correo */}
        <div className="flex flex-col">
          <label className="mb-2 text-gray-700">Correo</label>
          <div className="relative">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-2xl border border-gray-300 p-3 pl-10"
              placeholder="Correo electrónico"
              required
            />
          </div>
        </div>

        {/* Teléfono */}
        <div className="flex flex-col">
          <label className="mb-2 text-gray-700">Teléfono</label>
          <div className="relative">
            <FontAwesomeIcon
              icon={faPhone}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-2xl border border-gray-300 p-3 pl-10"
              placeholder="Teléfono"
              required
            />
          </div>
        </div>

        {/* Descripción */}
        <div className="flex flex-col">
          <label className="mb-2 text-gray-700">Descripción</label>
          <div className="relative">
            <FontAwesomeIcon
              icon={faCommentDots}
              className="pointer-events-none absolute left-3 top-4 text-gray-400"
            />
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="h-24 w-full resize-none rounded-2xl border border-gray-300 p-3 pl-10"
              placeholder="Escribe tu mensaje..."
              required
            ></textarea>
          </div>
        </div>

        {/* Botón de enviar */}
        <button
          type="submit"
          className="mx-auto flex w-full max-w-sm items-center justify-center gap-2 rounded-md bg-[#9FC52E] px-7 py-4 text-white"
          disabled={loading}
        >
          {loading ? (
            <>
              <FontAwesomeIcon icon={faSpinner} spin /> Cargando...
            </>
          ) : (
            "Enviar"
          )}
        </button>
      </form>
    </div>
  );
};

export default FormContact;
