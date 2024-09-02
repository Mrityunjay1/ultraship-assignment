import React, { useState } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const menuItems = [
    { name: "Home", link: "#" },
    { name: "Students", link: "#", submenu: ["Add Student", "Student List"] },
    { name: "Courses", link: "#", submenu: ["Add Course", "Course List"] },
    { name: "About", link: "#" },
    { name: "Contact", link: "#" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSubmenu = (index) =>
    setOpenSubmenu(openSubmenu === index ? null : index);

  return (
    <header className="bg-gradient-to-r from-blue-300 to-yellow-300 text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Student Management</h1>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Horizontal menu for desktop */}
        <nav className="hidden md:flex space-x-4">
          {menuItems.map((item, index) => (
            <div key={index} className="relative group">
              <a href={item.link} className="hover:text-blue-200">
                {item.name}
                {item.submenu && <FaChevronDown className="inline ml-1" />}
              </a>
              {item.submenu && (
                <div className="absolute hidden group-hover:block bg-blue-500 p-2 rounded shadow-lg">
                  {item.submenu.map((subItem, subIndex) => (
                    <a
                      key={subIndex}
                      href="#"
                      className="block py-1 hover:text-blue-200"
                    >
                      {subItem}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4">
          {menuItems.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between items-center py-2">
                <a href={item.link} className="hover:text-blue-200">
                  {item.name}
                </a>
                {item.submenu && (
                  <button
                    onClick={() => toggleSubmenu(index)}
                    className="text-xl"
                  >
                    <FaChevronDown
                      className={`transform ${
                        openSubmenu === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}
              </div>
              {item.submenu && openSubmenu === index && (
                <div className="pl-4">
                  {item.submenu.map((subItem, subIndex) => (
                    <a
                      key={subIndex}
                      href="#"
                      className="block py-1 hover:text-blue-200"
                    >
                      {subItem}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
