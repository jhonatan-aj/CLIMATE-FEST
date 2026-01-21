import Image from "next/image";

export default function SobreNosotros() {
  return (
    <section id="que-es" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <div className="inline-block mb-6 md:mb-8">
              <div className="bg-[#4caf2f] border-4 border-black shadow-[8px_8px_0px_0px_#000] p-3 md:p-4 transform -rotate-1">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  ¿QUÉ ES CLIMATEFEST?
                </h2>
              </div>
            </div>
            <div className="space-y-4 md:space-y-6">
              <p className="text-lg md:text-xl font-medium text-[#1e2845]">
                <strong className="text-[#4caf2f]">ClimateFest</strong> es una
                plataforma internacional que reúne a líderes, innovadores,
                emprendedores, autoridades y organizaciones.
              </p>
              <p className="text-base md:text-lg font-medium text-[#1e2845]">
                Nuestro objetivo: <strong>construir soluciones reales</strong>{" "}
                frente a la crisis climática desde los territorios más
                importantes del planeta.
              </p>
              <div className="bg-[#1e2845] border-4 border-black shadow-brutal-xl p-4 md:p-6">
                <p className="text-white font-bold text-base md:text-lg">
                  🌿 La Amazonía es el epicentro de esta transformación global
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-[#4caf2f] border-4 border-black shadow-[16px_16px_0px_0px_#000] p-4 md:p-6 transform rotate-2 hover:shadow-[20px_20px_0px_0px_#000] transition-all duration-300">
              <Image
                src="/imagen.JPG"
                alt="Comunidad ClimateFest"
                width={500}
                height={400}
                className="border-2 border-black w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
