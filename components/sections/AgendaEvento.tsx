import { Mic, Lightbulb, PartyPopper, Mountain } from "lucide-react";

const days = [
  {
    day: 1,
    icon: Mic,
    title: "APERTURA TERRITORIAL Y VISIÓN GLOBAL",
    subtitle: "Un día para posicionar, inspirar y conectar",
    color: "#4caf2f",
    activities: [
      "Ceremonia de apertura con identidad amazónica",
      "Conferencias magistrales nacionales e internacionales",
      "Laboratorios de networking climático de alto nivel",
    ],
  },
  {
    day: 2,
    icon: Lightbulb,
    title: "INNOVACIÓN, EMPRENDIMIENTO Y COMUNIDAD",
    subtitle: "Un día para interactuar, co-crear y escalar soluciones",
    color: "#1e2845",
    activities: [
      "Paneles estratégicos y talleres aplicados",
      "Expo ClimateFest: Feria de innovación sostenible",
      "Pitch de los 10 emprendimientos finalistas",
      "Espacio comunitario de integración (fogata)",
    ],
  },
  {
    day: 3,
    icon: PartyPopper,
    title: "RECONOCIMIENTO, CELEBRACIÓN, FEST",
    subtitle: "Un cierre que celebra el impacto y el territorio",
    color: "#4caf2f",
    activities: [
      "Premiación de los 3 emprendimientos ganadores",
      "Reconocimiento a líderes y autoridades climáticas",
      "Festival cultural con música y danza",
    ],
  },
  {
    day: 4,
    icon: Mountain,
    title: "TURISMO TERRITORIAL AMAZÓNICO",
    subtitle: "Conexión con naturaleza y biodiversidad (Opcional)",
    color: "#1e2845",
    activities: [
      "Recorrido por paisajes emblemáticos de la Amazonía",
      "Visita a comunidades y experiencias culturales locales",
      "Espacios de intercambio y cierre vivencial",
    ],
  },
];

export default function AgendaEvento() {
  return (
    <section id="agenda" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-block">
            <div className="bg-[#4caf2f] border-4 border-black shadow-[8px_8px_0px_0px_#1e2845] p-3 md:p-4 transform -rotate-1">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                AGENDA DEL EVENTO
              </h2>
            </div>
          </div>
          <p className="text-lg md:text-xl text-[#1e2845] font-bold mt-6">
            CLIMATEFEST AMAZONAS PERÚ 2026
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {days.map((day) => (
            <div key={day.day}>
              <div
                className="border-4 border-black shadow-[8px_8px_0px_0px_#000] p-5 md:p-6 h-full hover:shadow-[12px_12px_0px_0px_#000] transition-all duration-300"
                style={{ backgroundColor: day.color }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white w-14 h-14 md:w-16 md:h-16 flex items-center justify-center border-2 border-black shadow-brutal shrink-0">
                    <day.icon
                      className="w-7 h-7 md:w-8 md:h-8"
                      style={{ color: day.color }}
                    />
                  </div>
                  <div>
                    <span className="text-white/80 text-sm font-bold">
                      DÍA {day.day}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-white">
                      {day.title}
                    </h3>
                  </div>
                </div>
                <p className="text-white/90 font-medium italic mb-4 text-sm md:text-base">
                  &quot;{day.subtitle}&quot;
                </p>
                <ul className="space-y-2">
                  {day.activities.map((activity, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-white text-sm md:text-base"
                    >
                      <span className="text-white font-bold">•</span>
                      <span className="font-medium">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
