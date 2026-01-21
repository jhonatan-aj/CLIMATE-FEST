"use client";

import { useState, useEffect } from "react";

interface TimeLeft {
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
}

// Fecha del evento: Julio 2026 (usamos 1 de julio como referencia)
const EVENT_DATE = new Date("2026-07-01T00:00:00");

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = EVENT_DATE.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
          horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutos: Math.floor((difference / (1000 * 60)) % 60),
          segundos: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return null;
  }

  const timeUnits = [
    { value: timeLeft.dias, label: "DÍAS" },
    { value: timeLeft.horas, label: "HORAS" },
    { value: timeLeft.minutos, label: "MINUTOS" },
    { value: timeLeft.segundos, label: "SEGUNDOS" },
  ];

  return (
    <section className="py-12 md:py-16 bg-[#1e2845]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-white text-2xl md:text-3xl font-bold mb-8">
          FALTAN
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {timeUnits.map((unit) => (
            <div
              key={unit.label}
              className="bg-white border-4 border-black shadow-brutal p-4 md:p-6 text-center"
            >
              <div className="text-4xl md:text-6xl font-bold text-[#4caf2f]">
                {unit.value.toString().padStart(2, "0")}
              </div>
              <div className="text-sm md:text-base font-bold text-[#1e2845] mt-2">
                {unit.label}
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-white text-lg md:text-xl font-medium mt-8">
          JULIO 2026 • AMAZONAS, PERÚ
        </p>
      </div>
    </section>
  );
}
