import { DollarSign, GraduationCap, Wrench, Radio } from "lucide-react";

const alliances = [
  {
    icon: DollarSign,
    title: "PATROCINADOR FINANCIERO",
    subtitle: "Sponsor",
    objective:
      "Inversión directa en becas, fondos semilla o logística del evento",
    benefit:
      "Máxima visibilidad y RSE. Liderazgo de categoría (Naming Rights) y acceso preferencial a perfiles de talento",
    color: "#4caf2f",
  },
  {
    icon: GraduationCap,
    title: "ALIADO ACADÉMICO",
    subtitle: "Educational Partner",
    objective:
      "Avalar y certificar el programa formativo o proveer contenido especializado",
    benefit:
      "Asociación con la educación del futuro, pipeline de estudiantes de postgrado de alto rendimiento e intercambio de expertise",
    color: "#1e2845",
  },
  {
    icon: Wrench,
    title: "SOCIO DE IMPLEMENTACIÓN",
    subtitle: "Implementation Partner",
    objective:
      "Codiseñar y financiar los laboratorios de innovación o la feria de proyectos",
    benefit:
      "Acceso a soluciones climáticas en fase temprana que pueden ser integradas a su cadena de valor",
    color: "#4caf2f",
  },
  {
    icon: Radio,
    title: "MEDIA PARTNER",
    subtitle: "Comunicaciones",
    objective:
      "Amplificación de la convocatoria y difusión de la declaración final",
    benefit:
      "Posicionamiento como medio aliado del movimiento climático regional e internacional",
    color: "#1e2845",
  },
];

export default function Alianzas() {
  return (
    <section id="alianzas" className="py-16 md:py-20 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-block">
            <div className="bg-[#1e2845] border-4 border-black shadow-[8px_8px_0px_0px_#4caf2f] p-3 md:p-4 transform rotate-1">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                ALIANZAS ESTRATÉGICAS
              </h2>
            </div>
          </div>
          <p className="text-lg md:text-xl text-[#1e2845] font-medium mt-6 max-w-3xl mx-auto">
            Invitamos a instituciones y corporaciones a ir más allá del
            patrocinio tradicional y convertirse en socios activos de la
            transformación
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {alliances.map((alliance, index) => (
            <div key={index}>
              <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_#000] p-5 md:p-6 h-full hover:shadow-[12px_12px_0px_0px_#000] transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center border-2 border-black shadow-brutal shrink-0"
                    style={{ backgroundColor: alliance.color }}
                  >
                    <alliance.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-[#1e2845]">
                      {alliance.title}
                    </h3>
                    <span className="text-sm text-[#4caf2f] font-medium">
                      {alliance.subtitle}
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-bold text-[#1e2845]">
                      OBJETIVO:
                    </span>
                    <p className="text-[#1e2845]/80 text-sm font-medium">
                      {alliance.objective}
                    </p>
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[#4caf2f]">
                      BENEFICIO:
                    </span>
                    <p className="text-[#1e2845]/80 text-sm font-medium">
                      {alliance.benefit}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
