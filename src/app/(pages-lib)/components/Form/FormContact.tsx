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
    <form
      onSubmit={handleSubmit}
      className="m-25 mx-auto space-y-4 rounded-lg bg-white p-6 shadow-lg"
    >
      <h1 className="text-center text-5xl font-medium">Contácto</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="flex flex-col">
          <label className="mb-2 flex items-center gap-2 text-gray-700">
            <FontAwesomeIcon
              className="rounded-2xl bg-[#CAF7FC] p-2"
              icon={faUser}
            />{" "}
            Nombre
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-2xl bg-gradient-to-b from-[#E0F7FA] to-[#B2F6FF] p-3"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 flex items-center gap-2 text-gray-700">
            <FontAwesomeIcon
              className="rounded-2xl bg-[#CAF7FC] p-2 text-[#9FC52E]"
              icon={faEnvelope}
            />{" "}
            Correo
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-2xl bg-gradient-to-b from-[#E0F7FA] to-[#B2F6FF] p-3"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 flex items-center gap-2 text-gray-700">
            <FontAwesomeIcon
              className="rounded-2xl bg-[#CAF7FC] p-2 text-[#F03394]"
              icon={faPhone}
            />{" "}
            Teléfono
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-2xl bg-gradient-to-b from-[#E0F7FA] to-[#B2F6FF] p-3"
            required
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label className="mb-2 flex items-center gap-2 text-gray-700">
          <FontAwesomeIcon
            className="rounded-2xl bg-[#CAF7FC] p-2 text-[#9FC52E]"
            icon={faCommentDots}
          />{" "}
          Descripción
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="h-24 w-full resize-none rounded-2xl bg-gradient-to-b from-[#E0F7FA] to-[#B2F6FF] p-3"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="mx-auto flex max-w-lg cursor-pointer items-center justify-center gap-2 rounded-md bg-[#9FC52E] px-7 py-4 text-white"
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
  );
};

export default FormContact;
