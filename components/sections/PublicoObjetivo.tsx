import {
  Users,
  Building2,
  Megaphone,
  Lightbulb,
  Handshake,
} from "lucide-react";

const audiences = [
  {
    icon: Users,
    title: "JÓVENES LÍDERES CLIMÁTICOS",
    description: "Nuevas generaciones comprometidas con el cambio",
    color: "#4caf2f",
  },
  {
    icon: Building2,
    title: "FUNCIONARIOS Y TOMADORES DE DECISIÓN",
    description: "Autoridades que impulsan políticas climáticas",
    color: "#1e2845",
  },
  {
    icon: Megaphone,
    title: "ACTIVISTAS Y ORGANIZADORES",
    description: "Voces socioambientales que movilizan comunidades",
    color: "#4caf2f",
  },
  {
    icon: Lightbulb,
    title: "EMPRENDEDORES E INNOVADORES",
    description: "Creadores de soluciones sostenibles",
    color: "#1e2845",
  },
  {
    icon: Handshake,
    title: "EMPRESAS E INSTITUCIONES ALIADAS",
    description: "Organizaciones comprometidas con el impacto",
    color: "#4caf2f",
  },
];

export default function PublicoObjetivo() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-block">
            <div className="bg-[#4caf2f] border-4 border-black shadow-[8px_8px_0px_0px_#1e2845] p-3 md:p-4 transform -rotate-1">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                ¿PARA QUIÉN ES?
              </h2>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
          {audiences.map((audience, index) => (
            <div key={index}>
              <div
                className="border-4 border-black shadow-[6px_6px_0px_0px_#000] p-4 md:p-6 h-full hover:shadow-[10px_10px_0px_0px_#000] transition-all duration-300 text-center"
                style={{ backgroundColor: audience.color }}
              >
                <div className="bg-white w-14 h-14 md:w-16 md:h-16 flex items-center justify-center border-2 border-black shadow-brutal mb-4 mx-auto">
                  <audience.icon
                    className="w-7 h-7 md:w-8 md:h-8"
                    style={{ color: audience.color }}
                  />
                </div>
                <h3 className="text-sm md:text-base font-bold text-white mb-2">
                  {audience.title}
                </h3>
                <p className="text-white/90 text-sm font-medium">
                  {audience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
