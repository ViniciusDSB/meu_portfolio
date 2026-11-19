
import { Link, useLocation } from "react-router";

export default function NavBar() {
  const location = useLocation();

  const navItems = [
    { to: "/", label: "HOME" },
    { to: "/tools", label: "TOOLS" },
    { to: "/resume", label: "RESUME" },
  ];

  return (
  <nav className="w-full min-h-12 bg-black border-b border-neutral-800 flex items-center">
    <div className="flex items-center gap-2 pl-[100px]">
      {navItems.map((item) => {
        const isActive = location.pathname === item.to;

        return (
          <Link
            key={item.to}
            to={item.to}
            className={`
              px-5 py-2 text-sm font-semibold tracking-wider
              transition-all duration-200
              ${
                isActive
                  ? "bg-neutral-200 text-black"
                  : "text-neutral-300 hover:text-white hover:bg-neutral-800"
              }
            `}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  </nav>
);
}