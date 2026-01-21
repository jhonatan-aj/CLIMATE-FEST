import { Instagram, Facebook, Twitter, Mail, MapPin } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "#que-es", label: "¿Qué es?" },
  { href: "#desafio", label: "El Desafío" },
  { href: "#programa", label: "Programa" },
  { href: "#agenda", label: "Agenda" },
  { href: "#alianzas", label: "Alianzas" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1e2845] border-t-4 border-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/logo.png"
                alt="Logo ClimateFest"
                width={40}
                height={40}
                className="object-contain"
              />
              <div className="flex flex-col m-0 p-0 font-extrabold">
                <span className="text-lg font-bold text-[#4caf2f] leading-[0.8]">
                  CLIMATE
                </span>
                <span className="text-lg font-bold text-white leading-[0.8]">
                  FEST
                </span>
              </div>
            </div>
            <p className="text-white/80 font-medium mb-4">
              Plataforma internacional para construir soluciones reales frente a
              la crisis climática.
            </p>
            <div className="flex items-center text-white/80 font-medium mb-2">
              <MapPin className="h-4 w-4 mr-2" />
              <span>Amazonas, Perú</span>
            </div>
            <div className="flex items-center text-white/80 font-medium">
              <Mail className="h-4 w-4 mr-2" />
              <span>contacto@climatefest.pe</span>
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">NAVEGACIÓN</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-[#4caf2f] font-medium transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes sociales y newsletter */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">SÍGUENOS</h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                className="bg-white p-2 border-2 border-black shadow-brutal hover:shadow-brutal-lg transition-all"
              >
                <Instagram className="h-5 w-5 text-[#1e2845]" />
              </a>
              <a
                href="#"
                className="bg-white p-2 border-2 border-black shadow-brutal hover:shadow-brutal-lg transition-all"
              >
                <Facebook className="h-5 w-5 text-[#1e2845]" />
              </a>
              <a
                href="#"
                className="bg-white p-2 border-2 border-black shadow-brutal hover:shadow-brutal-lg transition-all"
              >
                <Twitter className="h-5 w-5 text-[#1e2845]" />
              </a>
            </div>
            <h3 className="text-lg font-bold text-white mb-4">NEWSLETTER</h3>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Tu correo"
                className="flex-1 px-4 py-2 border-2 border-black bg-white text-[#1e2845] font-medium"
              />
              <button className="bg-[#4caf2f] text-white px-6 py-2 border-2 border-black shadow-brutal hover:shadow-brutal-lg transition-all font-bold">
                SUSCRIBIRSE
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 font-medium">
            © 2026 ClimateFest Amazonas. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
