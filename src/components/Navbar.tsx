import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Calendar, Phone, Sparkles } from 'lucide-react';
import { AGENCY_DETAILS } from '../data/agencyData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const mainNavLinks = [
    { name: "Home", path: "/" },
    { name: "Digital Marketing", path: "/digital-marketing" },
    { name: "Performance Marketing", path: "/performance-marketing" },
    { name: "Web Development", path: "/web-development" },
    { name: "App Development", path: "/app-development" },
    { name: "SEO Services", path: "/seo-services" },
    { name: "About Us", path: "/about" },
  ];

  const secondaryLinks = [
    { name: "Founder", path: "/founder" },
    { name: "Team", path: "/team" },
    { name: "Clients", path: "/clients" },
    { name: "Book Appointment", path: "/book-appointment" },
    { name: "Contact", path: "/contact" },
  ];

  const allNavLinks = [
    ...mainNavLinks,
    ...secondaryLinks
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] py-3 shadow-[0_1px_3px_rgba(0,0,0,0.05)]'
            : 'bg-white/80 backdrop-blur-sm border-b border-[#F3F4F6] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Left */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 bg-white border border-[#E5E7EB] overflow-hidden flex items-center justify-center rounded-sm transition-transform duration-300 group-hover:scale-105 group-hover:border-black shadow-xs">
                <img
                  src="/src/assets/images/hyvex_brand_logo_1785432291999.jpg"
                  alt="HYVEX Logo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl tracking-wider font-bold text-[#0A0A0A] leading-none group-hover:text-black transition-colors">
                  {AGENCY_DETAILS.name}
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#71717A] font-mono mt-0.5">
                  AGENCY
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links Center/Right */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {mainNavLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-1.5 text-xs uppercase tracking-wider font-mono transition-all duration-200 rounded-sm relative ${
                      isActive
                        ? 'text-[#0A0A0A] font-semibold bg-[#F4F4F5] border border-[#E4E4E7]'
                        : 'text-[#52525B] hover:text-[#0A0A0A] hover:bg-[#F4F4F5]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              {/* Secondary nav links */}
              <NavLink
                to="/founder"
                className={({ isActive }) =>
                  `px-3 py-1.5 text-xs uppercase tracking-wider font-mono transition-all duration-200 rounded-sm ${
                    isActive
                      ? 'text-[#0A0A0A] font-semibold bg-[#F4F4F5] border border-[#E4E4E7]'
                      : 'text-[#52525B] hover:text-[#0A0A0A] hover:bg-[#F4F4F5]'
                  }`
                }
              >
                Founder
              </NavLink>

              <NavLink
                to="/team"
                className={({ isActive }) =>
                  `px-3 py-1.5 text-xs uppercase tracking-wider font-mono transition-all duration-200 rounded-sm ${
                    isActive
                      ? 'text-[#0A0A0A] font-semibold bg-[#F4F4F5] border border-[#E4E4E7]'
                      : 'text-[#52525B] hover:text-[#0A0A0A] hover:bg-[#F4F4F5]'
                  }`
                }
              >
                Team
              </NavLink>

              <NavLink
                to="/clients"
                className={({ isActive }) =>
                  `px-3 py-1.5 text-xs uppercase tracking-wider font-mono transition-all duration-200 rounded-sm ${
                    isActive
                      ? 'text-[#0A0A0A] font-semibold bg-[#F4F4F5] border border-[#E4E4E7]'
                      : 'text-[#52525B] hover:text-[#0A0A0A] hover:bg-[#F4F4F5]'
                  }`
                }
              >
                Clients
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `px-3 py-1.5 text-xs uppercase tracking-wider font-mono transition-all duration-200 rounded-sm ${
                    isActive
                      ? 'text-[#0A0A0A] font-semibold bg-[#F4F4F5] border border-[#E4E4E7]'
                      : 'text-[#52525B] hover:text-[#0A0A0A] hover:bg-[#F4F4F5]'
                  }`
                }
              >
                Contact
              </NavLink>
            </nav>

            {/* Right Quick Action CTA Button */}
            <div className="hidden sm:flex items-center gap-3">
              <Link
                to="/book-appointment"
                className="group relative inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-widest bg-[#0A0A0A] text-white font-medium rounded-sm hover:bg-[#27272A] transition-all duration-200 active:scale-95 shadow-sm"
              >
                <Calendar className="w-3.5 h-3.5 text-white" />
                <span>Book Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#0A0A0A] bg-[#F4F4F5] border border-[#E4E4E7] rounded-sm hover:bg-[#E4E4E7] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Animated Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-2xl flex flex-col justify-between p-6 pt-24 overflow-y-auto text-[#0A0A0A] border-b border-[#E5E7EB]"
          >
            <div className="max-w-md mx-auto w-full flex flex-col gap-6">
              <div className="border-b border-[#E5E7EB] pb-3 mb-2 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.25em] font-mono text-[#71717A]">
                  NAVIGATION DIRECTORY
                </span>
                <span className="text-xs font-mono text-[#0A0A0A]">01 — 09</span>
              </div>

              <div className="flex flex-col gap-2">
                {allNavLinks.map((link, idx) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.04 }}
                    >
                      <Link
                        to={link.path}
                        className={`flex items-center justify-between p-3 rounded-sm border transition-all ${
                          isActive
                            ? 'bg-[#0A0A0A] text-white border-[#0A0A0A] font-medium'
                            : 'bg-[#F9FAFB] text-[#27272A] border-[#E5E7EB] hover:text-[#0A0A0A] hover:border-[#A1A1AA]'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono text-[#71717A]">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                          <span className="text-base font-serif tracking-wide">{link.name}</span>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-[#71717A]" />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-4 pt-6 border-t border-[#E5E7EB] flex flex-col gap-3">
                <Link
                  to="/book-appointment"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-[#0A0A0A] text-white font-mono text-xs uppercase tracking-widest font-bold rounded-sm shadow-sm hover:bg-[#27272A] text-center"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Book Consultation Appointment</span>
                </Link>

                <div className="grid grid-cols-2 gap-2 text-xs font-mono text-[#71717A] pt-2">
                  <a href={`tel:${AGENCY_DETAILS.phoneRaw}`} className="flex items-center gap-1.5 hover:text-[#0A0A0A]">
                    <Phone className="w-3.5 h-3.5" />
                    <span>{AGENCY_DETAILS.phone}</span>
                  </a>
                  <span className="text-right">{AGENCY_DETAILS.location.split(',')[0]}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
