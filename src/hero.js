import React, { useState, useEffect } from "react";

function Hero({ darkMode }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 300);
  }, []);

  // Background gradient based on theme
  const backgroundStyle = darkMode
    ? { background: "linear-gradient(270deg, #0f2027, #203a43, #2c5364)" } // Dark gradient
    : { background: "linear-gradient(135deg, #ffecb3, #fff8e1, #ffe0b2)" }; // Light gradient

  return (
    <section style={{ ...styles.hero, ...backgroundStyle }}>
      {/* Text Box */}
      <div
        style={{
          ...styles.textBox,
          opacity: animate ? 1 : 0,
          transform: animate ? "translateX(0)" : "translateX(-50px)",
          transition: "all 1s ease",
        }}
      >
        <h1 style={{ ...styles.heading, color: darkMode ? "#19b1f2" : "#000" }}>
          Hi, I'm <span style={styles.name}>Prerana Desai</span>
        </h1>
        <h2
          style={{
            ...styles.subHeading,
            color: darkMode ? "#00c6ff" : "#0077b6",
          }}
        >
          React & Full Stack Developer 👩‍💻
        </h2>
        <p style={{ ...styles.text, color: darkMode ? "#ddd" : "#222" }}>
          I love building modern, responsive web applications using{" "}
          <strong>React, Node.js, and JavaScript</strong>. I enjoy creating
          scalable solutions, writing clean code, and learning new technologies
          that enhance user experiences.
        </p>

        {/* Download Resume */}
        <a href="/prerana-desai.pdf" download style={styles.button}>
          📄 Download Resume
        </a>
      </div>

      {/* Image Box */}
      <div
        style={{
          ...styles.imageBox,
          opacity: animate ? 1 : 0,
          transform: animate ? "translateX(0)" : "translateX(50px)",
          transition: "all 1s ease",
        }}
      >
        <img src="/peru.jpeg" alt="Profile" style={styles.image} />
      </div>
    </section>
  );
}

const styles = {
  hero: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    padding: "80px 10%",
    minHeight: "100vh",
    transition: "all 0.5s",
  },
  textBox: { flex: 1, minWidth: "250px" },
  heading: {
    fontSize: "46px",
    marginBottom: "15px",
  },
  name: {
    background: "linear-gradient(90deg, #00c6ff, #0072ff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: "bold",
  },
  subHeading: {
    fontSize: "24px",
    marginBottom: "20px",
    fontWeight: "600",
  },
  text: {
    fontSize: "18px",
    marginBottom: "30px",
    lineHeight: "1.8",
    maxWidth: "600px",
  },
  button: {
    background: "#0077b6",
    color: "#fff",
    padding: "12px 30px",
    border: "none",
    borderRadius: "30px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    textDecoration: "none",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    transition: "all 0.3s ease",
    display: "inline-block",
  },
  imageBox: { flex: 1, textAlign: "center", marginTop: "50px" },
  image: {
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "6px solid #00c6ff",
    boxShadow: "0 0 25px rgba(0,198,255,0.6)",
    transition: "all 0.4s ease",
  },
};

export default Hero;
