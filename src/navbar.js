import React from "react";

function Navbar({ darkMode, toggleMode }) {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        ...styles.navbar,
        background: darkMode ? "#0f2027" : "#0077b6",
        color: darkMode ? "#fff" : "#fff",
      }}
    >
      <h2 style={styles.logo} onClick={() => scrollToSection("hero")}>
        My Portfolio
      </h2>

      {/* Menu items - middle la */}
      <ul style={styles.navMenu}>
        <li style={styles.navItem} onClick={() => scrollToSection("hero")}>
          Home
        </li>
        <li style={styles.navItem} onClick={() => scrollToSection("skills")}>
          Skills
        </li>
        <li style={styles.navItem} onClick={() => scrollToSection("projects")}>
          Projects
        </li>
        <li style={styles.navItem} onClick={() => scrollToSection("about")}>
          About
        </li>
        <li style={styles.navItem} onClick={() => scrollToSection("contact")}>
          Contact
        </li>
      </ul>

      {/* Dark/Light mode button */}
      <button
        onClick={toggleMode}
        style={{
          ...styles.toggleButton,
          background: darkMode ? "#00c6ff" : "#fff",
          color: darkMode ? "#000" : "#0077b6",
        }}
      >
        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>

      <style>{`
        li:hover {
          background: #00e676;
          color: #000;
          cursor: pointer;
        }
      `}</style>
    </nav>
  );
}

const styles = {
  navbar: {
    position: "fixed",
    top: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 50px",
    zIndex: 1000,
    boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
    fontFamily: "'Segoe UI', sans-serif",
  },
  logo: {
    fontSize: "26px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  navMenu: {
    display: "flex",
    gap: "25px",
    listStyle: "none",
    margin: "0 auto", // middle la gheण्यासाठी
    padding: 0,
    alignItems: "center",
  },
  navItem: {
    fontWeight: "bold",
    padding: "5px 12px",
    borderRadius: "5px",
  },
  toggleButton: {
    padding: "8px 15px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.3s",
  },
};

export default Navbar;
