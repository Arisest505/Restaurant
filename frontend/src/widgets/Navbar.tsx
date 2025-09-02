import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/LogoAmarillo_SOLOLOGO_ADFont.png"; // Cambia por tu ruta real
import clsx from "clsx";

const links = [
  { name: "Home", path: "/" },
  { name: "Nosotros", path: "/nosotros" },
  { name: "Servicios", path: "/servicios" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Detectar scroll
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md",
        isScrolled ? "bg-black/90 shadow-md" : "bg-black/20"
      )}
    >
      <div className="flex items-center justify-between max-w-6xl px-6 py-4 mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-12 h-auto " />
        </Link>

        {/* Links */}
        <ul className="flex gap-8">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.name} className="relative group">
                <Link
                  to={link.path}
                  className={clsx(
                    "transition-colors duration-300",
                    isActive ? "text-mustard font-semibold" : "text-white hover:text-mustard"
                  )}
                >
                  {link.name}
                </Link>
                {/* Línea animada bajo link activo */}
                <span
                  className={clsx(
                    "absolute left-0 -bottom-1 h-[2px] bg-mustard transition-all duration-300",
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
