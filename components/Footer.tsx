import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: "#1a0a00", borderTop: "1px solid rgba(212,120,40,0.2)" }}
    >
      {/* Amber light glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(212,120,40,0.1) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-amber/30">
                <Image src="/images/logo.jpg" alt="GO-SSIP Café" width={48} height={48} className="object-cover warm-grade" />
              </div>
              <div>
                <div className="text-cream font-bold text-xl" style={{ fontFamily: "var(--font-playfair)" }}>GO-SSIP</div>
                <div className="label-accent">Café & Restro</div>
              </div>
            </div>
            <p className="text-cream/60 text-sm leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
              A warm corner where every sip tells a story. International cuisine, specialty coffees, and community vibes in Mumbra, Thane.
            </p>
            <a
              href="https://instagram.com/gossip_cafeandrestro"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-amber hover:text-honey transition-colors text-sm"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              <InstagramIcon size={18} />
              @gossip_cafeandrestro
            </a>
          </div>

          {/* Nav Links */}
          <div>
            <h4 className="text-cream font-semibold mb-4 label-accent">Navigation</h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/60 hover:text-amber transition-colors text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-cream font-semibold mb-4 label-accent">Find Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-amber mt-0.5 shrink-0" />
                <span className="text-cream/60 text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  Central Empire, MM Valley C1 Road,<br />Mumbra, Thane, MH 400612
                </span>
              </li>
              <li>
                <a href="tel:+919920564615" className="flex items-center gap-3 text-cream/60 hover:text-amber transition-colors text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  <Phone size={16} className="text-amber" />
                  +91 992-056-4615
                </a>
              </li>
              <li>
                <a href="mailto:gossipcafe2024@gmail.com" className="flex items-center gap-3 text-cream/60 hover:text-amber transition-colors text-sm" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  <Mail size={16} className="text-amber" />
                  gossipcafe2024@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(212,120,40,0.15)" }}
        >
          <p className="text-cream/40 text-xs" style={{ fontFamily: "var(--font-dm-sans)" }}>
            © {new Date().getFullYear()} GO-SSIP Café & Restro. All rights reserved.
          </p>
          <p className="text-cream/30 text-xs" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Made with ❤️ in Mumbra, Thane
          </p>
        </div>
      </div>
    </footer>
  );
}
