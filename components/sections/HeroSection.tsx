import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-[65vh] md:h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/hero.JPG"
          alt="Amazonía peruana"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <div className="bg-white/90 border-4 border-black shadow-[12px_12px_0px_0px_#000] p-6 md:p-10 transform -rotate-1">
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-extrabold text-[#4caf2f] leading-tight">
              CLIMATE
            </h1>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-extrabold text-[#1e2845] leading-tight">
              FEST
            </h1>
          </div>
        </div>
        <div>
          <div className="bg-white/95 border-4 border-black shadow-[8px_8px_0px_0px_#000] p-4 md:p-6 transform rotate-1 inline-block">
            <p className="text-lg md:text-xl text-[#1e2845] font-bold mb-4">
              JULIO 2026 • AMAZONAS, PERÚ
            </p>
            <a
              href="#inscribete"
              className="inline-block bg-[#4caf2f] text-white px-8 py-4 border-4 border-black shadow-brutal hover:shadow-brutal-lg transition-all font-bold text-lg"
            >
              INSCRÍBETE AHORA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
