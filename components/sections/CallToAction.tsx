export default function CallToAction() {
  return (
    <section id="inscribete" className="py-16 md:py-20 bg-[#4caf2f]">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div>
          <div className="bg-[#1e2845] border-4 border-black shadow-[16px_16px_0px_0px_#000] p-6 md:p-8 transform rotate-1">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
              ¿LISTO PARA SER PARTE DEL CAMBIO?
            </h2>
            <p className="text-lg md:text-xl text-white font-medium mb-6 md:mb-8">
              Únete a ClimateFest Amazonas 2026 y sé protagonista de la
              transformación climática desde el corazón de la Amazonía.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="bg-[#4caf2f] text-white px-8 md:px-12 py-4 md:py-6 border-4 border-black shadow-[8px_8px_0px_0px_#000] hover:shadow-[12px_12px_0px_0px_#000] transition-all font-bold text-lg md:text-xl"
              >
                INSCRÍBETE AHORA
              </a>
              <a
                href="#alianzas"
                className="bg-white text-[#1e2845] px-8 md:px-12 py-4 md:py-6 border-4 border-black shadow-[8px_8px_0px_0px_#000] hover:shadow-[12px_12px_0px_0px_#000] transition-all font-bold text-lg md:text-xl"
              >
                SER ALIADO
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
