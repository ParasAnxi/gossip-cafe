"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryItems } from "@/lib/data";
import { GalleryCategory } from "@/lib/types";

const filterTabs: { key: "all" | GalleryCategory; label: string }[] = [
  { key: "all", label: "All" },
  { key: "food", label: "Food" },
  { key: "ambience", label: "Ambience" },
  { key: "events", label: "Events" },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<"all" | GalleryCategory>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeFilter === "all" ? galleryItems : galleryItems.filter((i) => i.category === activeFilter);

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const prevItem = () => setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + filteredItems.length) % filteredItems.length));
  const nextItem = () => setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % filteredItems.length));

  return (
    <>
      {/* Hero */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{ height: "45vh", minHeight: "280px" }}
      >
        <Image
          src="/images/Create_a_premium_202603281541.png"
          alt="Gallery"
          fill
          className="object-cover warm-grade"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-background" />
        <div className="relative z-10 text-center px-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="label-accent mb-3">
            Visual Stories
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-foreground font-bold"
            style={{ fontSize: "clamp(32px, 6vw, 56px)" }}
          >
            Our Gallery
          </motion.h1>
        </div>
      </section>

      {/* Filter Tabs */}
      <div
        className="sticky top-16 z-30 border-b"
        style={{ backgroundColor: "var(--background)", borderColor: "var(--border)", backdropFilter: "blur(12px)", opacity: 0.95 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-1 py-1">
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key)}
                className="relative px-5 py-3 text-sm font-medium transition-colors"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  color: activeFilter === tab.key ? "var(--primary)" : "var(--foreground)",
                  opacity: activeFilter === tab.key ? 1 : 0.6,
                }}
              >
                {tab.label}
                {activeFilter === tab.key && (
                  <motion.div
                    layoutId="gallery-tab-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ backgroundColor: "var(--primary)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Masonry Grid */}
      <section className="py-12" style={{ backgroundColor: "var(--background)" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
            >
              {filteredItems.map((item, i) => (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="relative break-inside-avoid rounded-xl overflow-hidden cursor-pointer group"
                  onClick={() => openLightbox(i)}
                >
                  <div className="relative" style={{ aspectRatio: `${item.width}/${item.height}` }}>
                    <Image
                      src={item.imageUrl}
                      alt={item.title || "Gallery image"}
                      fill
                      className="object-cover warm-grade transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                    {item.title && (
                      <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/70 to-transparent">
                        <p className="text-white text-sm font-medium" style={{ fontFamily: "var(--font-dm-sans)" }}>
                          {item.title}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && filteredItems[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center"
            style={{ backgroundColor: "rgba(0,0,0,0.92)" }}
            onClick={closeLightbox}
          >
            {/* Image */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative"
              style={{ maxWidth: "90vw", maxHeight: "90vh" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative rounded-xl overflow-hidden" style={{ maxWidth: "90vw", maxHeight: "85vh" }}>
                <Image
                  src={filteredItems[lightboxIndex].imageUrl}
                  alt={filteredItems[lightboxIndex].title || "Gallery image"}
                  width={filteredItems[lightboxIndex].width}
                  height={filteredItems[lightboxIndex].height}
                  className="object-contain warm-grade"
                  style={{ maxWidth: "90vw", maxHeight: "85vh", width: "auto", height: "auto" }}
                />
              </div>
              {filteredItems[lightboxIndex].title && (
                <p className="text-center text-white/60 mt-3 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  {filteredItems[lightboxIndex].title}
                </p>
              )}
            </motion.div>

            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-cream/60 hover:text-cream transition-colors"
            >
              <X size={32} />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => { e.stopPropagation(); prevItem(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-primary transition-colors"
            >
              <ChevronLeft size={48} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextItem(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-primary transition-colors"
            >
              <ChevronRight size={48} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
