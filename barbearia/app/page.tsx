"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Scissors,
  Clock,
  MapPin,
  Phone,
  Share2,
  Star,
  CheckCircle2,
  Calendar,
  ChevronDown,
} from "lucide-react";

// ─── Data ───────────────────────────────────────────────────────────────────

const services = [
  {
    icon: <Scissors className="w-7 h-7" />,
    name: "Corte Clássico",
    desc: "Corte preciso e elegante adaptado ao teu estilo.",
    price: "€15",
    duration: "30 min",
  },
  {
    icon: <Scissors className="w-7 h-7 rotate-90" />,
    name: "Corte + Barba",
    desc: "O combo completo para um visual impecável.",
    price: "€25",
    duration: "50 min",
  },
  {
    icon: <Star className="w-7 h-7" />,
    name: "Fade Premium",
    desc: "Degradê perfeito do 0 ao topo. Assinado.",
    price: "€18",
    duration: "40 min",
  },
  {
    icon: <CheckCircle2 className="w-7 h-7" />,
    name: "Tratamento Capilar",
    desc: "Hidratação e cuidado profissional para o teu cabelo.",
    price: "€20",
    duration: "45 min",
  },
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80",
    alt: "Corte moderno",
  },
  {
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80",
    alt: "Barba tratada",
  },
  {
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80",
    alt: "Fade perfeito",
  },
  {
    src: "https://images.unsplash.com/photo-1534297635766-a262cdcb8ee4?w=600&q=80",
    alt: "Estilo clássico",
  },
  {
    src: "https://images.unsplash.com/photo-1612870832613-13c7f17b0e00?w=600&q=80",
    alt: "Interior da barbearia",
  },
  {
    src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&q=80",
    alt: "Navalha e cuidado",
  },
];

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
];

// ─── Booking Form ────────────────────────────────────────────────────────────

interface BookingData {
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  notes: string;
}

const emptyBooking: BookingData = {
  name: "",
  phone: "",
  service: "",
  date: "",
  time: "",
  notes: "",
};

function BookingSection() {
  const [form, setForm] = useState<BookingData>(emptyBooking);
  const [errors, setErrors] = useState<Partial<BookingData>>({});
  const [confirmed, setConfirmed] = useState(false);

  const validate = () => {
    const e: Partial<BookingData> = {};
    if (!form.name.trim()) e.name = "Nome obrigatório";
    if (!form.phone.trim()) e.phone = "Telefone obrigatório";
    if (!form.service) e.service = "Escolhe um serviço";
    if (!form.date) e.date = "Escolhe uma data";
    if (!form.time) e.time = "Escolhe um horário";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setConfirmed(true);
  };

  const field = (key: keyof BookingData, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const inputClass =
    "w-full bg-[#0a0a0a] border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-[#D4AF37] transition-colors";
  const errorClass = "text-red-400 text-xs mt-1";
  const labelClass = "block text-zinc-300 text-sm mb-1 font-medium";

  return (
    <section id="marcacoes" className="py-24 px-4 bg-[#0f0f0f]">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#D4AF37] text-sm font-semibold tracking-widest uppercase">
            Reserva Online
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">
            Faz a tua marcação
          </h2>
          <p className="text-zinc-400 mt-3">
            Garante o teu lugar. Sem esperas, sem complicações.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-[#141414] border border-zinc-800 rounded-2xl p-8 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={labelClass}>Nome</label>
              <input
                type="text"
                placeholder="O teu nome"
                className={inputClass}
                value={form.name}
                onChange={(e) => field("name", e.target.value)}
              />
              {errors.name && <p className={errorClass}>{errors.name}</p>}
            </div>
            <div>
              <label className={labelClass}>Telefone</label>
              <input
                type="tel"
                placeholder="+351 9xx xxx xxx"
                className={inputClass}
                value={form.phone}
                onChange={(e) => field("phone", e.target.value)}
              />
              {errors.phone && <p className={errorClass}>{errors.phone}</p>}
            </div>
          </div>

          <div>
            <label className={labelClass}>Serviço</label>
            <div className="relative">
              <select
                className={`${inputClass} appearance-none pr-10 cursor-pointer`}
                value={form.service}
                onChange={(e) => field("service", e.target.value)}
              >
                <option value="" disabled>
                  Escolhe um serviço
                </option>
                {services.map((s) => (
                  <option key={s.name} value={s.name}>
                    {s.name} — {s.price}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
            </div>
            {errors.service && <p className={errorClass}>{errors.service}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={labelClass}>Data</label>
              <input
                type="date"
                className={`${inputClass} [color-scheme:dark]`}
                min={new Date().toISOString().split("T")[0]}
                value={form.date}
                onChange={(e) => field("date", e.target.value)}
              />
              {errors.date && <p className={errorClass}>{errors.date}</p>}
            </div>
            <div>
              <label className={labelClass}>Horário</label>
              <div className="relative">
                <select
                  className={`${inputClass} appearance-none pr-10 cursor-pointer`}
                  value={form.time}
                  onChange={(e) => field("time", e.target.value)}
                >
                  <option value="" disabled>
                    Escolhe um horário
                  </option>
                  {timeSlots.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
              </div>
              {errors.time && <p className={errorClass}>{errors.time}</p>}
            </div>
          </div>

          <div>
            <label className={labelClass}>
              Notas <span className="text-zinc-500">(opcional)</span>
            </label>
            <textarea
              rows={3}
              placeholder="Algum pedido especial ou referência de corte..."
              className={`${inputClass} resize-none`}
              value={form.notes}
              onChange={(e) => field("notes", e.target.value)}
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full text-base font-bold tracking-wide"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Confirmar Marcação
          </Button>
        </form>
      </div>

      <Dialog open={confirmed} onOpenChange={setConfirmed}>
        <DialogContent className="max-w-md">
          <div className="flex flex-col items-center text-center gap-4 pt-4">
            <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-[#D4AF37]" />
            </div>
            <DialogHeader>
              <DialogTitle className="text-xl text-white text-center">
                Marcação confirmada!
              </DialogTitle>
              <DialogDescription className="text-zinc-400 text-center">
                Até já, {form.name}! Vemo-nos em breve.
              </DialogDescription>
            </DialogHeader>

            <div className="w-full bg-[#0a0a0a] rounded-xl p-5 space-y-3 text-left border border-zinc-800">
              <BookingRow label="Serviço" value={form.service} />
              <BookingRow label="Data" value={formatDate(form.date)} />
              <BookingRow label="Hora" value={form.time} />
              <BookingRow label="Telefone" value={form.phone} />
              {form.notes && <BookingRow label="Notas" value={form.notes} />}
            </div>

            <p className="text-zinc-500 text-sm">
              Vamos enviar um lembrete para o teu telemóvel.
            </p>

            <Button
              onClick={() => {
                setConfirmed(false);
                setForm(emptyBooking);
              }}
              className="w-full"
            >
              Fechar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}

function BookingRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-zinc-500">{label}</span>
      <span className="text-white font-medium">{value}</span>
    </div>
  );
}

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  const [y, m, d] = dateStr.split("-");
  return `${d}/${m}/${y}`;
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-zinc-800/60">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-[#D4AF37] font-black text-xl tracking-widest uppercase">
            BarberKing
          </span>
          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            <a href="#servicos" className="hover:text-[#D4AF37] transition-colors">
              Serviços
            </a>
            <a href="#galeria" className="hover:text-[#D4AF37] transition-colors">
              Galeria
            </a>
            <a href="#marcacoes" className="hover:text-[#D4AF37] transition-colors">
              Marcações
            </a>
          </div>
          <a href="#marcacoes">
            <Button size="sm" className="font-semibold">
              Marcar Agora
            </Button>
          </a>
        </div>
      </nav>

      {/* Hero com scroll animation */}
      <div className="pt-16">
        <ContainerScroll
          titleComponent={
            <div className="space-y-4">
              <p className="text-[#D4AF37] text-sm md:text-base font-semibold tracking-[0.3em] uppercase">
                Barbearia Premium · Desde 2010
              </p>
              <h1 className="text-5xl md:text-8xl font-black text-white leading-none tracking-tight">
                BARBER
                <span className="text-[#D4AF37]">KING</span>
              </h1>
              <p className="text-zinc-400 text-base md:text-xl max-w-xl mx-auto">
                Onde cada corte é uma obra de arte. Vive a experiência premium.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                <a href="#marcacoes">
                  <Button size="lg" className="font-bold tracking-wide px-10">
                    <Calendar className="w-5 h-5 mr-2" />
                    Marcar Agora
                  </Button>
                </a>
                <a href="#servicos">
                  <Button
                    size="lg"
                    variant="outline"
                    className="font-bold tracking-wide px-10"
                  >
                    Ver Serviços
                  </Button>
                </a>
              </div>
            </div>
          }
        >
          <Image
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1400&q=80"
            alt="Barbearia BarberKing"
            fill
            className="object-cover object-center rounded-2xl"
            priority
          />
        </ContainerScroll>
      </div>

      {/* Stats */}
      <section className="py-16 px-4 border-y border-zinc-800/60 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "14+", label: "Anos de Experiência" },
            { num: "5000+", label: "Clientes Satisfeitos" },
            { num: "4", label: "Barbeiros Especializados" },
            { num: "4.9★", label: "Avaliação Média" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl md:text-4xl font-black text-[#D4AF37]">
                {s.num}
              </p>
              <p className="text-zinc-400 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="servicos" className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#D4AF37] text-sm font-semibold tracking-widest uppercase">
              O que oferecemos
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-2">
              Os nossos serviços
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div
                key={s.name}
                className="group bg-[#141414] border border-zinc-800 rounded-2xl p-7 hover:border-[#D4AF37]/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37]/20 transition-colors">
                    {s.icon}
                  </div>
                  <span className="text-2xl font-black text-[#D4AF37]">
                    {s.price}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mt-4">{s.name}</h3>
                <p className="text-zinc-400 mt-1 text-sm">{s.desc}</p>
                <div className="flex items-center gap-1 text-zinc-500 text-xs mt-4">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{s.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="galeria" className="py-24 px-4 bg-[#0f0f0f]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#D4AF37] text-sm font-semibold tracking-widest uppercase">
              O nosso trabalho
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-2">
              Galeria
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((img, i) => (
              <div
                key={i}
                className="relative aspect-square rounded-2xl overflow-hidden group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-medium">
                    {img.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <BookingSection />

      {/* Footer */}
      <footer className="bg-[#080808] border-t border-zinc-800/60 py-14 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <p className="text-[#D4AF37] font-black text-2xl tracking-widest uppercase mb-3">
              BarberKing
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed">
              A experiência premium que mereces. Cortes que falam por si.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-[#D4AF37] hover:bg-zinc-700 transition-colors"
              >
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#D4AF37]" />
              Horário
            </h4>
            <div className="space-y-2 text-sm text-zinc-400">
              <div className="flex justify-between">
                <span>Seg – Sex</span>
                <span className="text-white">09:00 – 19:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sábado</span>
                <span className="text-white">09:00 – 17:00</span>
              </div>
              <div className="flex justify-between">
                <span>Domingo</span>
                <span className="text-red-400">Fechado</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contacto</h4>
            <div className="space-y-3 text-sm text-zinc-400">
              <a
                href="tel:+351912345678"
                className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                +351 912 345 678
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
                <span>
                  Rua do Ouro, 42
                  <br />
                  1200-000 Lisboa
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-10 pt-6 border-t border-zinc-800/60 text-center text-zinc-600 text-xs">
          © {new Date().getFullYear()} BarberKing. Todos os direitos reservados.
        </div>
      </footer>
    </main>
  );
}
