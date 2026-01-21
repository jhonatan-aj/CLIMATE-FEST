import { AlertTriangle, Globe, Leaf } from "lucide-react";

const challenges = [
  {
    icon: AlertTriangle,
    title: "IMPACTO DIRECTO",
    description:
      "El cambio climático dejó de ser un problema futuro. Hoy impacta territorios, economías y comunidades de manera directa.",
  },
  {
    icon: Globe,
    title: "ARTICULAR RESPUESTAS",
    description:
      "El verdadero desafío ya no es solo entender la crisis climática, sino cómo articulamos liderazgo, innovación y decisiones concretas.",
  },
  {
    icon: Leaf,
    title: "LA AMAZONÍA",
    description:
      "Es uno de los espacios donde esta urgencia se siente con mayor claridad. Desde aquí, responderemos a la crisis.",
  },
];

export default function ElDesafio() {
  return (
    <section id="desafio" className="py-16 md:py-20 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-block">
            <div className="bg-[#1e2845] border-4 border-black shadow-[8px_8px_0px_0px_#4caf2f] p-3 md:p-4 transform rotate-1">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                EL DESAFÍO
              </h2>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {challenges.map((challenge, index) => (
            <div key={index}>
              <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_#000] p-6 h-full hover:shadow-[12px_12px_0px_0px_#000] transition-all duration-300">
                <div className="bg-[#4caf2f] w-16 h-16 flex items-center justify-center border-2 border-black shadow-brutal mb-4">
                  <challenge.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#1e2845] mb-3">
                  {challenge.title}
                </h3>
                <p className="text-[#1e2845] font-medium">
                  {challenge.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
