"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, MapPin, Phone, Clock, Coffee, Utensils, Users } from "lucide-react";

function InstagramIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}
import { menuItems, operatingHours, formatTime, instagramPhotos, categoryLabels } from "@/lib/data";

// ─── Hero Section ────────────────────────────────────────────────────────────
function HeroSection() {
  const [showScrollChevron, setShowScrollChevron] = useState(true);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setShowScrollChevron(v < 100));
    return unsub;
  }, [scrollY]);

  const heroItems = [
    { delay: 0.3, content: "Sip. Savour. Connect." },
  ];

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/images/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/visit_us.png"
      />

      {/* Dark gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70 z-10" />
      <div className="absolute inset-0 z-10" style={{ background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.5) 100%)" }} />

      {/* Amber light leak top-left */}
      <div className="absolute top-0 left-0 w-80 h-80 z-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(212,120,40,0.15) 0%, transparent 70%)" }} />

      {/* Hero Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="label-accent mb-6"
          style={{ color: "#d47828" }}
        >
          GO-SSIP Café & Restro · Mumbra, Thane
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
          animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
          transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
          className="text-white leading-none mb-4"
          style={{
            fontSize: "clamp(38px, 8vw, 72px)",
            textShadow: "0 2px 20px rgba(0,0,0,0.3)",
          }}
        >
          {heroItems[0].content}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-white/80 mb-10 max-w-xl mx-auto"
          style={{ fontFamily: "var(--font-sans)", fontSize: "clamp(16px, 2vw, 19px)" }}
        >
          International cuisine, specialty coffees & warm community vibes in the heart of Mumbra.
        </motion.p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.4 }}
          >
            <Link
              href="/menu"
              className="inline-block px-8 py-3 rounded-md font-semibold text-primary-foreground transition-all duration-200 hover:scale-105 hover:brightness-110"
              style={{ backgroundColor: "var(--primary)", fontFamily: "var(--font-sans)" }}
            >
              Explore Menu
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.4 }}
          >
            <Link
              href="/contact"
              className="inline-block px-8 py-3 rounded-md font-semibold text-white border border-white/40 transition-all duration-200 hover:border-white hover:bg-white/10"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Find Us
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll chevron */}
      <motion.div
        animate={{ opacity: showScrollChevron ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown size={32} className="text-white/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── About Snippet ────────────────────────────────────────────────────────────
function AboutSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Image side (60%) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative lg:col-span-3 rounded-2xl overflow-hidden"
            style={{ aspectRatio: "4/3" }}
          >
            <Image
              src="/images/Create_a_premium_202603281541.png"
              alt="GO-SSIP Café Interior"
              fill
              className="object-cover warm-grade"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            {/* Grain + amber overlay */}
            <div className="absolute inset-0 grain-overlay" />
            <div className="absolute top-0 left-0 w-64 h-64"
              style={{ background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)", opacity: 0.15 }} />
          </motion.div>

          {/* Text side (40%) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="label-accent">Our Story</div>
            <h2
              className="text-foreground leading-tight"
              style={{ fontSize: "clamp(28px, 4vw, 42px)" }}
            >
              Where Every<br />Cup Has a Story
            </h2>
            <p className="text-foreground/65 leading-relaxed" style={{ fontFamily: "var(--font-sans)", fontSize: "17px" }}>
              Nestled in Mumbra, GO-SSIP Café & Restro is a sanctuary where premium coffee meets international cuisine. We blend warmth, craft, and community into every experience — from your morning espresso to a late-night boba.
            </p>

            {/* Three pillars */}
            <div className="grid grid-cols-3 gap-4 py-4">
              {[
                { icon: <Coffee size={32} strokeWidth={1.5} />, label: "Coffee" },
                { icon: <Utensils size={32} strokeWidth={1.5} />, label: "Cuisine" },
                { icon: <Users size={32} strokeWidth={1.5} />, label: "Community" },
              ].map((pillar) => (
                <div key={pillar.label} className="flex flex-col items-center gap-3 text-center">
                  <span className="text-primary">{pillar.icon}</span>
                  <span className="label-accent">{pillar.label}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-amber font-semibold hover:text-honey transition-colors text-sm"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Our Story →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Featured Menu ────────────────────────────────────────────────────────────
function FeaturedMenuSection() {
  const featured = menuItems.filter((item) => item.isFeatured).slice(0, 4);

  return (
    <section className="relative py-20 lg:py-28 z-10" style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-14"
         >
           <div className="label-accent mb-3">Fan Favourites</div>
           <h2
             className="text-foreground"
             style={{ fontSize: "clamp(28px, 5vw, 44px)" }}
           >
             What We&apos;re Famous For
           </h2>
         </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((item, i) => (
            <motion.div
               key={item._id}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: i * 0.1 }}
               whileHover={{ y: -4, boxShadow: "0 12px 40px var(--primary-alpha, rgba(255,102,0,0.15))" }}
               className="rounded-2xl overflow-hidden cursor-pointer transition-shadow glass-panel"
             >
              <div className="relative" style={{ aspectRatio: "1" }}>
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  fill
                  className="object-cover warm-grade"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Veg/Non-Veg indicator */}
                <div className="absolute top-3 right-3 w-5 h-5 rounded-sm border-2 flex items-center justify-center"
                  style={{ borderColor: item.isVeg ? "#22c55e" : "#ef4444", backgroundColor: "rgba(26,10,0,0.8)" }}>
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.isVeg ? "#22c55e" : "#ef4444" }} />
                </div>
              </div>
              <div className="p-4">
                <div className="label-accent mb-2">{categoryLabels[item.category]}</div>
                <h3 className="text-foreground font-bold mb-2" style={{ fontSize: "18px" }}>
                  {item.name}
                </h3>
                <p className="text-foreground/50 text-sm leading-snug" style={{ fontFamily: "var(--font-sans)" }}>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
             href="/menu"
             className="inline-block px-8 py-3 rounded-md font-semibold text-primary-foreground transition-all hover:scale-105 hover:brightness-110"
             style={{ backgroundColor: "var(--primary)", fontFamily: "var(--font-sans)" }}
           >
             Explore Full Menu →
           </Link>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Ambience Video Strip ─────────────────────────────────────────────────────
function AmbienceVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current) {
            videoRef.current.play().catch(() => {});
          } else if (videoRef.current) {
            videoRef.current.pause();
          }
        });
      },
      { threshold: 0.5 }
    );
    if (videoRef.current) observer.observe(videoRef.current.parentElement!);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden" style={{ aspectRatio: "21/9" }}>
      <video
        ref={videoRef}
        src="/images/menu.mp4"
        muted
        loop
        playsInline
        preload="none"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Amber letterbox top/bottom */}
      <div className="absolute inset-x-0 top-0 h-1/4" style={{ background: "linear-gradient(to bottom, var(--primary), transparent)", opacity: 0.2 }} />
      <div className="absolute inset-x-0 bottom-0 h-1/4" style={{ background: "linear-gradient(to top, var(--primary), transparent)", opacity: 0.2 }} />
      {/* Dark vignette */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.55) 100%)" }} />
      {/* Quote overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10 px-6">
        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-white text-center italic"
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(22px, 4vw, 42px)", textShadow: "0 2px 20px rgba(0,0,0,0.8)" }}
        >
          &ldquo;The best conversations happen over great food.&rdquo;
        </motion.p>
      </div>
    </section>
  );
}

// ─── Instagram Teaser ────────────────────────────────────────────────────────
function InstagramSection() {
  return (
    <section className="py-20 lg:py-28 z-10 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="label-accent mb-3">Instagram</div>
          <h2 className="text-foreground" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 5vw, 44px)" }}>
            Follow the Vibe
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
          {instagramPhotos.map((src, i) => (
            <motion.a
              key={i}
              href="https://instagram.com/gossip_cafeandrestro"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="relative group overflow-hidden rounded-xl"
              style={{ aspectRatio: "1" }}
            >
              <Image
                src={src}
                alt={`Instagram post ${i + 1}`}
                fill
                className="object-cover warm-grade transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <InstagramIcon size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.a>
          ))}
        </div>

        <div className="text-center">
          <a
             href="https://instagram.com/gossip_cafeandrestro"
             target="_blank"
             rel="noopener noreferrer"
             className="inline-flex items-center gap-2 px-8 py-3 rounded-md font-semibold text-foreground border border-primary/40 hover:border-primary hover:bg-primary/10 transition-all"
             style={{ fontFamily: "var(--font-sans)" }}
           >
             <InstagramIcon size={18} className="text-primary" />
             Follow @gossip_cafeandrestro →
           </a>
        </div>
      </div>
    </section>
  );
}

// ─── Visit Us Strip ───────────────────────────────────────────────────────────
function VisitUsSection() {
  return (
    <section className="py-16 relative z-10" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: "url('/images/visit_us.png')", backgroundSize: "cover", backgroundPosition: "center" }} />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Hours */}
          <div className="flex flex-col gap-3 p-6 rounded-xl glass-panel">
            <Clock size={22} className="text-primary" />
            <h3 className="text-foreground font-bold" style={{ fontSize: "20px" }}>Hours</h3>
            <div className="flex flex-col gap-1">
              <p className="text-foreground/60 text-sm" style={{ fontFamily: "var(--font-sans)" }}>Mon–Fri: {formatTime(operatingHours.monday.open)} – {formatTime(operatingHours.monday.close)}</p>
              <p className="text-foreground/60 text-sm" style={{ fontFamily: "var(--font-sans)" }}>Sat–Sun: {formatTime(operatingHours.saturday.open)} – {formatTime(operatingHours.saturday.close)}</p>
            </div>
          </div>

          {/* Address */}
          <a
            href="https://maps.google.com/?q=GO-SSIP+Cafe+Mumbra+Thane"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-3 p-6 rounded-xl transition-colors hover:border-primary/40 glass-panel"
          >
            <MapPin size={22} className="text-primary" />
            <h3 className="text-foreground font-bold" style={{ fontSize: "20px" }}>Address</h3>
            <p className="text-foreground/60 text-sm" style={{ fontFamily: "var(--font-sans)" }}>
              Central Empire, MM Valley C1 Road,<br />Mumbra, Thane, MH 400612
            </p>
            <span className="text-primary text-sm font-medium" style={{ fontFamily: "var(--font-sans)" }}>Get Directions →</span>
          </a>

          {/* Contact */}
          <div className="flex flex-col gap-3 p-6 rounded-xl glass-panel">
            <Phone size={22} className="text-primary" />
            <h3 className="text-foreground font-bold" style={{ fontSize: "20px" }}>Contact</h3>
            <div className="flex flex-col gap-2">
              <a href="tel:+919920564615" className="text-foreground/60 hover:text-primary text-sm transition-colors" style={{ fontFamily: "var(--font-sans)" }}>
                +91 992-056-4615
              </a>
              <a href="https://wa.me/919920564615" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary text-sm transition-colors" style={{ fontFamily: "var(--font-sans)" }}>
                WhatsApp Us →
              </a>
              <a href="mailto:gossipcafe2024@gmail.com" className="text-foreground/60 hover:text-primary text-sm transition-colors" style={{ fontFamily: "var(--font-sans)" }}>
                gossipcafe2024@gmail.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturedMenuSection />
      <AmbienceVideoSection />
      <InstagramSection />
      <VisitUsSection />
    </>
  );
}
