import React, { useState } from 'react';
import rcp1 from './img/RCP1.jpg';
import rcp2 from './img/RCP2.jpeg';
import rcp3 from './img/RCP3.jpg';

const DiaMundialRCP = () => {
  const [mensajeActivo, setMensajeActivo] = useState<number | null>(null);

  const imagenes = [rcp1, rcp2, rcp3];
  const mensajes = [
    '¡Actuar rápido puede salvar una vida!',
    'El RCP es clave en los primeros minutos.',
    'Todos podemos aprender a ayudar.',
  ];

  return (
    <div className="bg-white min-h-screen p-6">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">
          Día Mundial del RCP
        </h1>

        <div className="bg-red-100 border-l-4 border-red-500 p-6 rounded shadow mb-8 text-center">
          <h2 className="text-xl font-semibold text-red-700 mb-2">¿Por qué es importante aprender RCP?</h2>
          <p className="text-red-900">
            La reanimación cardiopulmonar (RCP) es una técnica esencial que puede salvar vidas en situaciones de emergencia. 
            Saber cómo actuar ante un paro cardíaco permite mantener la circulación sanguínea y oxigenar el cerebro hasta que llegue ayuda profesional. 
            Aprender RCP no solo empodera a las personas, sino que también aumenta significativamente las probabilidades de supervivencia de quienes sufren un paro cardíaco fuera del hospital.
          </p>
        </div>

        {/*tarjetas informativas */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
          {imagenes.map((img, index) => (
            <div
              key={index}
              onClick={() => setMensajeActivo(index)}
              className="relative w-full md:w-1/3 h-80 overflow-hidden rounded shadow-md border-2 border-blue-200 cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <img
                src={img}
                alt={`RCP imagen ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {mensajeActivo === index && (
                <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center p-4">
                  <p className="text-blue-800 font-semibold text-center">{mensajes[index]}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Video */}
        <div className="bg-blue-100 border-l-4 border-blue-500 p-4 mb-8 rounded shadow text-center">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">¿Cómo realizar RCP?</h2>
          <p className="text-blue-900 mb-4">
            Aprende paso a paso con este video explicativo:
          </p>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-64 md:h-96 rounded shadow"
              src="https://www.youtube.com/embed/wbp_AdGkWPM"
              title="Video de RCP"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiaMundialRCP;