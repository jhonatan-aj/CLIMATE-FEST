"use client";

import { Award, Scale, MessageCircle, Recycle, Rocket } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const cohorts = [
  {
    icon: Award,
    letter: "A",
    title: "LIDERAZGO CLIMÁTICO Y GOBERNANZA LOCAL",
    description: "Formación de líderes con capacidad de incidencia territorial",
  },
  {
    icon: Scale,
    letter: "B",
    title: "CAMBIO CLIMÁTICO Y JUSTICIA AMBIENTAL",
    description: "Equidad y derechos en la acción climática",
  },
  {
    icon: MessageCircle,
    letter: "C",
    title: "COMUNICACIÓN CLIMÁTICA Y NARRATIVA",
    description: "Estrategias de comunicación para el cambio",
  },
  {
    icon: Recycle,
    letter: "D",
    title: "ECONOMÍA CIRCULAR Y SOLUCIONES NATURALES",
    description: "Modelos sostenibles basados en la naturaleza",
  },
  {
    icon: Rocket,
    letter: "E",
    title: "INNOVACIÓN Y EMPRENDIMIENTO DE IMPACTO",
    description: "Startups y proyectos climáticos escalables",
  },
];

export default function ProgramaInternacional() {
  return (
    <section id="programa" className="py-16 md:py-20 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection
          animation="fade-in-down"
          className="text-center mb-10 md:mb-12"
        >
          <div className="inline-block">
            <div className="bg-[#1e2845] border-4 border-black shadow-[8px_8px_0px_0px_#4caf2f] p-3 md:p-4 transform rotate-1">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                PROGRAMA INTERNACIONAL
              </h2>
            </div>
          </div>
          <p className="text-lg md:text-xl text-[#1e2845] font-medium mt-6 max-w-3xl mx-auto">
            A través de 5 cohorts virtuales, acompañamos la creación de perfiles
            únicos de liderazgo climático
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {cohorts.map((cohort, index) => (
            <AnimatedSection
              key={index}
              animation="fade-in-up"
              delay={index * 100}
            >
              <div className="bg-white border-4 border-black shadow-[6px_6px_0px_0px_#000] p-5 md:p-6 h-full hover:shadow-[10px_10px_0px_0px_#000] hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-[#4caf2f] w-12 h-12 flex items-center justify-center border-2 border-black shadow-brutal shrink-0">
                    <span className="text-white text-xl font-bold">
                      {cohort.letter}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-[#1e2845] mb-2">
                      {cohort.title}
                    </h3>
                    <p className="text-[#1e2845]/80 text-sm font-medium">
                      {cohort.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
