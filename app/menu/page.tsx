"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { menuItems, categoryLabels } from "@/lib/data";
import { MenuCategory } from "@/lib/types";

const categories: { key: "all" | MenuCategory; label: string }[] = [
  { key: "all", label: "All" },
  { key: "coffee", label: "Coffee" },
  { key: "boba-smoothie", label: "Boba & Smoothies" },
  { key: "bao-burger", label: "Bao & Burgers" },
  { key: "pizza-pasta", label: "Pizza & Pasta" },
  { key: "desserts", label: "Desserts" },
  { key: "specials", label: "Chef's Specials" },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<"all" | MenuCategory>("all");

  const filteredItems = useMemo(() => {
    const available = menuItems.filter((i) => i.isAvailable);
    if (activeCategory === "all") return available;
    return available.filter((i) => i.category === activeCategory);
  }, [activeCategory]);

  const countFor = (key: string) => {
    if (key === "all") return menuItems.filter((i) => i.isAvailable).length;
    return menuItems.filter((i) => i.category === key && i.isAvailable).length;
  };

  return (
    <>
      {/* Hero */}
      <section className="relative flex items-end justify-center overflow-hidden" style={{ height: "50vh", minHeight: "300px" }}>
        <Image
          src="/images/menu.png"
          alt="Our Menu"
          fill
          className="object-cover warm-grade"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-[#1a0a00]" />
        <div className="relative z-10 text-center pb-16 px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="label-accent mb-3"
          >
            GO-SSIP Café & Restro
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-cream font-bold"
            style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(32px, 6vw, 56px)" }}
          >
            Our Menu
          </motion.h1>
          <div className="w-20 h-0.5 mx-auto mt-4" style={{ backgroundColor: "#d47828" }} />
        </div>
      </section>

      {/* Sticky Filter Bar */}
      <div
        className="sticky top-16 z-30 border-b overflow-x-auto"
        style={{ backgroundColor: "rgba(26,10,0,0.95)", borderColor: "rgba(212,120,40,0.2)", backdropFilter: "blur(12px)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-1 py-1" style={{ minWidth: "max-content" }}>
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className="relative flex items-center gap-1.5 px-4 py-3 text-sm font-medium transition-colors whitespace-nowrap"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  color: activeCategory === cat.key ? "#d47828" : "rgba(245,221,176,0.6)",
                }}
              >
                {cat.label}
                <span
                  className="text-xs px-1.5 py-0.5 rounded-full"
                  style={{
                    backgroundColor: activeCategory === cat.key ? "rgba(212,120,40,0.2)" : "rgba(255,255,255,0.05)",
                    color: activeCategory === cat.key ? "#d47828" : "rgba(245,221,176,0.4)",
                  }}
                >
                  {countFor(cat.key)}
                </span>
                {/* Sliding underline indicator */}
                {activeCategory === cat.key && (
                  <motion.div
                    layoutId="menu-tab-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ backgroundColor: "#d47828" }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Items Grid */}
      <section className="py-16" style={{ backgroundColor: "#faf7f2" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredItems.map((item, i) => (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(212,120,40,0.18)" }}
                  className="bg-white rounded-2xl overflow-hidden transition-shadow cursor-pointer"
                  style={{ border: "1px solid rgba(212,120,40,0.1)" }}
                >
                  <div className="relative" style={{ aspectRatio: "1" }}>
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      fill
                      className="object-cover warm-grade"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Veg/Non-Veg dot */}
                    <div
                      className="absolute top-3 right-3 w-6 h-6 rounded-sm border-2 flex items-center justify-center"
                      style={{
                        borderColor: item.isVeg ? "#22c55e" : "#ef4444",
                        backgroundColor: "rgba(255,255,255,0.9)",
                      }}
                    >
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: item.isVeg ? "#22c55e" : "#ef4444" }}
                      />
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="label-accent mb-1" style={{ color: "#d47828" }}>
                      {categoryLabels[item.category]}
                    </div>
                    <h3
                      className="font-bold mb-2"
                      style={{ fontFamily: "var(--font-playfair)", fontSize: "20px", color: "#1a0a00" }}
                    >
                      {item.name}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)", color: "#6b4c30" }}>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-amber text-lg" style={{ fontFamily: "var(--font-playfair)" }}>No items found.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
