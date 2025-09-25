import React from "react";

function Contact({ darkMode }) {
  return (
    <section
      id="contact"
      className="contact"
      style={{
        background: darkMode
          ? "linear-gradient(270deg, #0f2027, #203a43, #2c5364, #1c1c1c)"
          : "linear-gradient(135deg, #ffecb3, #fff8e1, #ffe0b2)",
        color: darkMode ? "#fff" : "#000",
        transition: "all 0.5s ease",
        padding: "80px 20px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "36px",
          marginBottom: "40px",
          background: "linear-gradient(90deg, #00c6ff, #0072ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: darkMode
            ? "0 0 10px rgba(0,198,255,0.6)"
            : "0 0 10px rgba(0,0,0,0.3)",
        }}
      >
        Contact Me
      </h2>

      <form style={{ maxWidth: "500px", margin: "auto", display: "flex", flexDirection: "column", gap: "15px" }}>
        <input
          type="email"
          placeholder="desaiprerana323@gmail.com"
          required
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "none",
            fontSize: "16px",
            outline: "none",
            background: darkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
            color: darkMode ? "#fff" : "#000",
            transition: "background 0.3s",
          }}
        />
        <input
          type="tel"
          placeholder="8080051021"
          required
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "none",
            fontSize: "16px",
            outline: "none",
            background: darkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
            color: darkMode ? "#fff" : "#000",
            transition: "background 0.3s",
          }}
        />
        <textarea
          placeholder="Your Message"
          required
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "none",
            fontSize: "16px",
            outline: "none",
            background: darkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
            color: darkMode ? "#fff" : "#000",
            minHeight: "120px",
            resize: "none",
            transition: "background 0.3s",
          }}
        ></textarea>
        <button
          type="submit"
          style={{
            padding: "16px",
            borderRadius: "30px",
            border: "none",
            background: darkMode ? "#0077b6" : "#42a5f5",
            fontWeight: "bold",
            cursor: "pointer",
            color: "#fff",
            fontSize: "16px",
            transition: "all 0.3s ease",
          }}
        >
          Send
        </button>
      </form>
    </section>
  );
}

export default Contact;
