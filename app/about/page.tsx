"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Coffee, Globe, Users } from "lucide-react";

const values = [
  {
    icon: Coffee,
    title: "Premium Coffee",
    description: "Sourced from the world's finest estates, brewed to perfection every single time.",
  },
  {
    icon: Globe,
    title: "International Cuisine",
    description: "From Japanese Bao to Italian pasta — we bring the world's best to your table.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "We're not just a café. We're Mumbra's living room — a place to gather, unwind, and belong.",
  },
];

const photos = [
  { src: "/images/Create_a_premium_202603281541.png", alt: "Café Interior", span: "col-span-2 row-span-2" },
  { src: "/images/menu1.png", alt: "Signature Coffee" },
  { src: "/images/menu2.png", alt: "Boba Drinks" },
  { src: "/images/menu3.png", alt: "Delicious Food" },
  { src: "/images/all_item1.png", alt: "Menu Items" },
  { src: "/images/Create_a_premium_202603281541 (4).png", alt: "Warm Ambience", span: "col-span-2" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero with video background */}
      <section className="relative flex items-center justify-center overflow-hidden" style={{ height: "55vh", minHeight: "350px" }}>
        <video
          src="/images/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.35 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background" />
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="label-accent mb-4"
          >
            Our Story
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-foreground font-bold leading-tight"
            style={{ fontSize: "clamp(36px, 7vw, 64px)" }}
          >
            The GO-SSIP Story
          </motion.h1>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "var(--background)" }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="label-accent mb-4">Who We Are</div>
              <p className="text-foreground/70 leading-relaxed mb-6" style={{ fontFamily: "var(--font-sans)", fontSize: "17px" }}>
                Born from a passion for bringing people together, GO-SSIP Café & Restro opened its doors in Mumbra, Thane as a celebration of flavours, warmth, and community. We believed that the best memories are made over shared meals and great drinks.
              </p>
              <p className="text-foreground/70 leading-relaxed" style={{ fontFamily: "var(--font-sans)", fontSize: "17px" }}>
                Our team crafts each cup of coffee and every dish with unwavering attention to detail — from our slow-steeped cold brews to our hand-rolled bao. We source the finest ingredients and pair international techniques with local flavours to create something truly unique.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              {/* Pull quote */}
              <blockquote
                className="relative pl-6 py-2"
                style={{ borderLeft: "3px solid var(--primary)" }}
              >
                <p
                  className="text-foreground italic leading-relaxed"
                  style={{ fontSize: "clamp(18px, 2.5vw, 24px)" }}
                >
                  &ldquo;We didn&apos;t open GO-SSIP to just serve food. We opened it to create a space where Mumbra could breathe, laugh, and belong.&rdquo;
                </p>
                <footer className="mt-4 label-accent">— The GO-SSIP Team</footer>
              </blockquote>

              <div className="mt-10 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl text-center" style={{ backgroundColor: "var(--secondary)", border: "1px solid var(--border)" }}>
                  <div className="text-primary font-bold text-3xl" style={{ fontFamily: "var(--font-display)" }}>2024</div>
                  <div className="label-accent mt-1">Est. Year</div>
                </div>
                <div className="p-4 rounded-xl text-center" style={{ backgroundColor: "var(--secondary)", border: "1px solid var(--border)" }}>
                  <div className="text-primary font-bold text-3xl" style={{ fontFamily: "var(--font-display)" }}>6+</div>
                  <div className="label-accent mt-1">Menu Categories</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
    <section className="py-20 lg:py-24" style={{ backgroundColor: "var(--background)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="label-accent mb-3">What We Stand For</div>
          <h2 className="text-foreground" style={{ fontSize: "clamp(28px, 5vw, 44px)" }}>
            Our Values
          </h2>
        </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex flex-col items-center text-center gap-5 p-8 rounded-2xl"
                style={{ backgroundColor: "var(--secondary)", border: "1px solid var(--border)" }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--primary)", opacity: 0.1, border: "1px solid var(--primary)" }}
                >
                  <value.icon size={28} className="text-primary" />
                </div>
                <h3 className="text-foreground font-bold" style={{ fontSize: "22px" }}>
                  {value.title}
                </h3>
                <p className="text-foreground/60 leading-relaxed text-sm" style={{ fontFamily: "var(--font-sans)" }}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Collage */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "var(--background)" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-12"
         >
           <div className="label-accent mb-3">Inside GO-SSIP</div>
           <h2 className="text-foreground" style={{ fontSize: "clamp(28px, 5vw, 44px)" }}>
             The Experience
           </h2>
         </motion.div>

          {/* Asymmetric grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
            {photos.map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative rounded-xl overflow-hidden ${photo.span || ""}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover warm-grade hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
