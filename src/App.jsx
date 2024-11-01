import { useState } from "react";
import JSONPretty from "react-json-pretty";
import { CopyToClipboard } from "react-copy-to-clipboard";

function App() {
  const [clientType, setClientType] = useState("");
  const [schemaData, setSchemaData] = useState({});
  const [isCopied, setIsCopied] = useState(false);

  const handleClientTypeChange = (e) => {
    setClientType(e.target.value);
    setSchemaData({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSchemaData({ ...schemaData, [name]: value });
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    ...schemaData,
  };

  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">
        Generador de Schema.org para Diferentes Profesionales
      </h2>

      {/* Select para tipo de cliente */}
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">
          Seleccione el tipo de cliente:
        </label>
        <select
          value={clientType}
          onChange={handleClientTypeChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="" disabled selected>
            Seleccione una opción
          </option>
          <option value="medicos">Médicos</option>
          <option value="dentistas">Dentistas</option>
          <option value="contadores">Contadores</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Columna de formulario */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          {clientType === "medicos" && (
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Formulario para Médicos
              </h3>
              <form className="space-y-4">
                <label className="block">
                  <span className="text-gray-700">Nombre del Consultorio:</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Ej: Consultorio Médico Vital"
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Especialidad:</span>
                  <input
                    type="text"
                    name="specialty"
                    placeholder="Ej: Cardiología"
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Teléfono:</span>
                  <input
                    type="tel"
                    name="telephone"
                    placeholder="Ej: +1-800-555-5555"
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Dirección:</span>
                  <input
                    type="text"
                    name="streetAddress"
                    placeholder="Ej: Calle Falsa 123"
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Ciudad:</span>
                  <input
                    type="text"
                    name="addressLocality"
                    placeholder="Ej: Ciudad Ejemplo"
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Región:</span>
                  <input
                    type="text"
                    name="addressRegion"
                    placeholder="Ej: Estado Ejemplo"
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Código Postal:</span>
                  <input
                    type="text"
                    name="postalCode"
                    placeholder="Ej: 12345"
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">País:</span>
                  <input
                    type="text"
                    name="addressCountry"
                    placeholder="Ej: MX"
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Horario de Apertura:</span>
                  <input
                    type="text"
                    name="openingHours"
                    placeholder="Ej: Mo-Fr 09:00-18:00"
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Descripción:</span>
                  <textarea
                    name="description"
                    placeholder="Breve descripción del consultorio."
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Método de Pago:</span>
                  <input
                    type="text"
                    name="paymentAccepted"
                    placeholder="Ej: Efectivo, Tarjeta"
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Imagen del Consultorio:</span>
                  <input
                    type="url"
                    name="image"
                    placeholder="URL de la imagen: https://example.com/image.jpg"
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </label>
              </form>
            </div>
          )}

          {clientType === "dentistas" && (
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Formulario para Dentistas
              </h3>
              <form className="space-y-4">
                <label className="block">
                  <span className="text-gray-700">Nombre del Consultorio:</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Ej: Clínica Dental Sonrisa"
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Servicios Ofrecidos:</span>
                  <input
                    type="text"
                    name="services"
                    placeholder="Ej: Ortodoncia, Implantología"
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Teléfono:</span>
                  <input
                    type="tel"
                    name="telephone"
                    placeholder="Ej: +1-800-555-5555"
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Dirección:</span>
                  <input
                    type="text"
                    name="streetAddress"
                    placeholder="Ej: Calle Falsa 123"
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Ciudad:</span>
                  <input
                    type="text"
                    name="addressLocality"
                    placeholder="Ej: Ciudad Ejemplo"
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Región:</span>
                  <input
                    type="text"
                    name="addressRegion"
                    placeholder="Ej: Estado Ejemplo"
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Código Postal:</span>
                  <input
                    type="text"
                    name="postalCode"
                    placeholder="Ej: 12345"
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">País:</span>
                  <input
                    type="text"
                    name="addressCountry"
                    placeholder="Ej: MX"
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Horario de Apertura:</span>
                  <input
                    type="text"
                    name="openingHours"
                    placeholder="Ej: Mo-Fr 09:00-18:00"
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Descripción:</span>
                  <textarea
                    name="description"
                    placeholder="Breve descripción del consultorio."
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Método de Pago:</span>
                  <input
                    type="text"
                    name="paymentAccepted"
                    placeholder="Ej: Efectivo, Tarjeta"
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Imagen del Consultorio:</span>
                  <input
                    type="url"
                    name="image"
                    placeholder="URL de la imagen: https://example.com/image.jpg"
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </label>
              </form>
            </div>
          )}

          {clientType === "contadores" && (
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Formulario para Contadores
              </h3>
              <form className="space-y-4">
                <label className="block">
                  <span className="text-gray-700">Nombre de la Firma:</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Ej: Contadores Asociados"
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Servicios Ofrecidos:</span>
                  <input
                    type="text"
                    name="services"
                    placeholder="Ej: Auditoría, Consultoría Fiscal"
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Teléfono:</span>
                  <input
                    type="tel"
                    name="telephone"
                    placeholder="Ej: +1-800-555-5555"
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Dirección:</span>
                  <input
                    type="text"
                    name="streetAddress"
                    placeholder="Ej: Calle Falsa 123"
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Ciudad:</span>
                  <input
                    type="text"
                    name="addressLocality"
                    placeholder="Ej: Ciudad Ejemplo"
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Región:</span>
                  <input
                    type="text"
                    name="addressRegion"
                    placeholder="Ej: Estado Ejemplo"
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Código Postal:</span>
                  <input
                    type="text"
                    name="postalCode"
                    placeholder="Ej: 12345"
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">País:</span>
                  <input
                    type="text"
                    name="addressCountry"
                    placeholder="Ej: MX"
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Horario de Apertura:</span>
                  <input
                    type="text"
                    name="openingHours"
                    placeholder="Ej: Mo-Fr 09:00-18:00"
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Descripción:</span>
                  <textarea
                    name="description"
                    placeholder="Breve descripción de la firma."
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Método de Pago:</span>
                  <input
                    type="text"
                    name="paymentAccepted"
                    placeholder="Ej: Efectivo, Tarjeta"
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700">Imagen de la Firma:</span>
                  <input
                    type="url"
                    name="image"
                    placeholder="URL de la imagen: https://example.com/image.jpg"
                    onChange={handleChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </label>
              </form>
            </div>
          )}
        </div>

        {/* Columna de previsualización */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">
            Código Schema.org Generado
          </h3>
          <JSONPretty data={jsonLd} />
          <CopyToClipboard
            text={JSON.stringify(jsonLd)}
            onCopy={() => setIsCopied(true)}
          >
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">
              Copiar Código
            </button>
          </CopyToClipboard>
          {isCopied && (
            <div className="text-green-500 mt-2">¡Código copiado!</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
