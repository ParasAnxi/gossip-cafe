"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}
import { operatingHours, formatTime, isOpenNow } from "@/lib/data";
import { useEffect, useState } from "react";

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const dayOrder = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"] as const;
const dayLabels: Record<string, string> = {
  monday: "Monday", tuesday: "Tuesday", wednesday: "Wednesday",
  thursday: "Thursday", friday: "Friday", saturday: "Saturday", sunday: "Sunday",
};

export default function ContactPage() {
  const [openStatus, setOpenStatus] = useState<boolean | null>(null);

  useEffect(() => {
    setOpenStatus(isOpenNow(operatingHours));
  }, []);

  const todayDay = new Intl.DateTimeFormat("en-US", { weekday: "long", timeZone: "Asia/Kolkata" }).format(new Date()).toLowerCase();

  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center justify-center overflow-hidden" style={{ height: "40vh", minHeight: "260px" }}>
        <Image
          src="/images/visit_us.png"
          alt="Contact GO-SSIP Café"
          fill
          className="object-cover warm-grade"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-background" />
        <div className="relative z-10 text-center px-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="label-accent mb-3">
            Come Visit
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-foreground font-bold"
            style={{ fontSize: "clamp(32px, 6vw, 56px)" }}
          >
            Find Us
          </motion.h1>
        </div>
      </section>

      {/* Three Columns */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "var(--background)" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Column 1 — Location */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-6"
            >
              <div>
                <div className="label-accent mb-3">Location</div>
                <h2 className="text-foreground font-bold text-2xl mb-4">
                  Find Your Way
                </h2>
                <div className="flex items-start gap-3 mb-4">
                   <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                   <p className="text-foreground/70 text-sm leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    Central Empire, MM Valley C1 Road,<br />
                    Mumbra, Thane,<br />
                    Maharashtra 400612
                  </p>
                </div>
              </div>

              {/* Map Embed */}
              <div className="rounded-xl overflow-hidden" style={{ border: "1px solid var(--border)", height: "200px" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.0!2d73.0!3d19.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEwJzQ4LjAiTiA3M8KwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <a
                href="https://maps.google.com/?q=GO-SSIP+Cafe+Mumbra+Thane+Maharashtra"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-6 rounded-md font-semibold text-sm transition-all hover:scale-105"
                style={{ backgroundColor: "var(--primary)", color: "var(--primary-foreground)", fontFamily: "var(--font-dm-sans)" }}
              >
                <MapPin size={16} />
                Get Directions
              </a>
            </motion.div>

            {/* Column 2 — Hours */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col gap-6"
            >
              <div>
                <div className="label-accent mb-3">Opening Hours</div>
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-foreground font-bold text-2xl">
                    When to Visit
                  </h2>
                  {openStatus !== null && (
                    <span
                      className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{
                        fontFamily: "var(--font-dm-sans)",
                        backgroundColor: openStatus ? "rgba(34,197,94,0.15)" : "rgba(239,68,68,0.15)",
                        color: openStatus ? "#22c55e" : "#ef4444",
                        border: `1px solid ${openStatus ? "rgba(34,197,94,0.3)" : "rgba(239,68,68,0.3)"}`,
                      }}
                    >
                      {openStatus ? "Open Now" : "Closed"}
                    </span>
                  )}
                </div>
              </div>

              <div
                className="rounded-xl overflow-hidden"
                style={{ border: "1px solid var(--border)", backgroundColor: "var(--secondary)" }}
              >
                {dayOrder.map((day) => {
                  const isToday = day === todayDay;
                  const dayHours = operatingHours[day];
                  return (
                    <div
                      key={day}
                      className="flex items-center justify-between px-4 py-3 border-b last:border-b-0"
                      style={{
                        borderColor: "var(--border)",
                        backgroundColor: isToday ? "var(--primary-alpha)" : "transparent",
                      }}
                    >
                      <span
                        className="text-sm font-medium"
                        style={{
                          fontFamily: "var(--font-dm-sans)",
                          color: isToday ? "var(--primary)" : "var(--foreground)",
                          opacity: isToday ? 1 : 0.65,
                          fontWeight: isToday ? 600 : 400,
                        }}
                      >
                        {dayLabels[day]}
                      </span>
                      <span
                        className="text-sm"
                        style={{
                          fontFamily: "var(--font-dm-sans)",
                          color: isToday ? "var(--foreground)" : "var(--foreground)",
                          opacity: isToday ? 1 : 0.5,
                        }}
                      >
                        {formatTime(dayHours.open)} – {formatTime(dayHours.close)}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center gap-2 text-foreground/40 text-xs" style={{ fontFamily: "var(--font-dm-sans)" }}>
                <Clock size={14} className="text-primary/50" />
                Hours shown in IST (Indian Standard Time)
              </div>
            </motion.div>

            {/* Column 3 — Get In Touch */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              <div>
                <div className="label-accent mb-3">Contact</div>
                <h2 className="text-foreground font-bold text-2xl">
                  Get In Touch
                </h2>
              </div>

              <div className="flex flex-col gap-4">
                {/* Call */}
                <a
                  href="tel:+919920564615"
                  className="flex items-center gap-4 p-4 rounded-xl transition-all hover:scale-[1.02] group"
                  style={{ backgroundColor: "var(--secondary)", border: "1px solid var(--border)" }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors"
                    style={{ backgroundColor: "var(--primary-alpha)" }}>
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="label-accent mb-0.5">Call Us</div>
                    <div className="text-foreground font-medium text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      +91 992-056-4615
                    </div>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/919920564615"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl transition-all hover:scale-[1.02] group"
                  style={{ backgroundColor: "var(--secondary)", border: "1px solid var(--border)" }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 group-hover:bg-green-500/20 transition-colors"
                    style={{ backgroundColor: "rgba(37,211,102,0.1)" }}>
                    <span style={{ color: "#25D366" }}><WhatsAppIcon size={22} /></span>
                  </div>
                  <div>
                    <div className="label-accent mb-0.5">WhatsApp</div>
                    <div className="text-foreground font-medium text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      Message Us Directly
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:gossipcafe2024@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl transition-all hover:scale-[1.02] group"
                  style={{ backgroundColor: "var(--secondary)", border: "1px solid var(--border)" }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors"
                    style={{ backgroundColor: "var(--primary-alpha)" }}>
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="label-accent mb-0.5">Email</div>
                    <div className="text-foreground font-medium text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      gossipcafe2024@gmail.com
                    </div>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/gossip_cafeandrestro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl transition-all hover:scale-[1.02] group"
                  style={{ backgroundColor: "var(--secondary)", border: "1px solid var(--border)" }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 group-hover:bg-pink-500/20 transition-colors"
                    style={{ backgroundColor: "rgba(236,72,153,0.1)" }}>
                    <InstagramIcon size={20} />
                  </div>
                  <div>
                    <div className="label-accent mb-0.5">Instagram</div>
                    <div className="text-foreground font-medium text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      @gossip_cafeandrestro
                    </div>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
