import { X, Menu } from "lucide-react";
import { useState } from "react";

const NavBar = () => {
  const navLinks = [
    {
      name: "ACCUEIL",
      link: "#",
    },
    {
      name: "CONCEPT",
      link: "#",
    },
    {
      name: "BLOG",
      link: "#",
    },
    {
      name: "CONTACT",
      link: "#",
    },
  ];
  const [navBarMenu, setNavBarMenu] = useState(false);
  const toggleNavBar = () => {
    setNavBarMenu((prevState) => !prevState);
  };

  return (
    <nav className={`flex ${navBarMenu ? "justify-start" : "justify-end"} p-6`}>
      <ul
        className={`${navBarMenu ? "flex flex-col gap-y-3" : "hidden md:flex"}`}
      >
        {navLinks.map((navLink) => (
          <li key={navLink.name}>
            <a href={navLink.link}>{navLink.name}</a>
          </li>
        ))}
      </ul>

      <button onClick={toggleNavBar}>
        {navBarMenu ? (
          <X className="w-8 h-8 absolute top-6 right-6 md:hidden" />
        ) : (
          <Menu className="w-8 h-8 md:hidden" />
        )}
      </button>
    </nav>
  );
};

export default NavBar;
